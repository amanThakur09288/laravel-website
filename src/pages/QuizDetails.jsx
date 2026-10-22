import { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";

import { getQuiz, startQuiz } from "../api/quizApi";

import PageHeader from "../components/common/PageHeader";

export default function QuizDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);

  const [loading, setLoading] = useState(true);

  const [starting, setStarting] = useState(false);

  useEffect(() => {
    loadQuiz();
  }, [id]);

  const loadQuiz = async () => {
    try {
      setLoading(true);

      const response = await getQuiz(id);

      setQuiz(response?.data || null);
    } catch (error) {
      console.error("Failed to load quiz:", error);

      toast.error(error.response?.data?.message || "Unable to load quiz.");
    } finally {
      setLoading(false);
    }
  };

  const handleStart = async () => {
    if (starting || !quiz) {
      return;
    }

    try {
      setStarting(true);

      const response = await startQuiz(id);

      toast.success("Quiz started successfully.");

      navigate(`/quiz-attempts/${response.data.id}`);
    } catch (error) {
      console.error("Failed to start quiz:", error);

      toast.error(error.response?.data?.message || "Unable to start quiz.");
    } finally {
      setStarting(false);
    }
  };

  /* ------------------------------------------------------------------ */
  /* Loading */
  /* ------------------------------------------------------------------ */

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <PageHeader title="Quiz Details" />

        <div className="py-[60px] text-center">
          <div className="mx-auto h-[35px] w-[35px] animate-spin rounded-full border-[3px] border-[#ddd] border-t-[#727CB6]" />

          <p className="mt-[15px] text-[14px] text-[#888]">
            Loading quiz details...
          </p>
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------------------ */
  /* Quiz not found */
  /* ------------------------------------------------------------------ */

  if (!quiz) {
    return (
      <div className="min-h-screen bg-white">
        <PageHeader title="Quiz Details" />

        <div className="px-5 py-[60px] sm:px-8">
          <div className="mx-auto max-w-[650px] rounded-[8px] border border-[#eee] bg-[#fafafa] px-6 py-[60px] text-center">
            <div className="mx-auto mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#727CB6]/10 text-[30px]">
              📝
            </div>

            <h2 className="text-[22px] font-bold text-[#333]">
              Quiz Not Found
            </h2>

            <p className="mt-2 text-[14px] leading-6 text-[#888]">
              The quiz you are looking for does not exist or is no longer
              available.
            </p>

            <Link
              to="/quizzes"
              className="mt-6 inline-flex rounded-[5px] bg-[#727CB6] px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#626da8]"
            >
              Back to Quizzes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const duration = Number(quiz.duration_minutes || 0);

  const totalMarks = Number(quiz.total_marks || 0);

  const passingMarks = Number(quiz.passing_marks || 0);

  const questionCount = Number(
    quiz.questions_count ?? quiz.question_count ?? quiz.questions?.length ?? 0,
  );

  const attemptsRemaining = quiz.attempts_remaining;

  const hasAttemptInformation =
    attemptsRemaining !== undefined && attemptsRemaining !== null;

  const noAttempts = hasAttemptInformation && Number(attemptsRemaining) <= 0;

  const status = quiz.status || "published";

  const isPublished = status === "published";

  return (
    <div className="min-h-screen bg-white">
      {/* ================================================================ */}
      {/* PAGE HEADER */}
      {/* ================================================================ */}

      <PageHeader title="Quiz Details" />

      {/* ================================================================ */}
      {/* MAIN */}
      {/* ================================================================ */}

      <section className="px-5 py-[50px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          {/* ============================================================ */}
          {/* BACK */}
          {/* ============================================================ */}

          <div className="mb-6">
            <Link
              to="/quizzes"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#727CB6] transition hover:text-[#5d68a3]"
            >
              <span className="text-[18px]">←</span>
              Back to Quizzes
            </Link>
          </div>

          {/* ============================================================ */}
          {/* HERO CARD */}
          {/* ============================================================ */}

          <div className="overflow-hidden rounded-[8px] border border-[#e8e8e8] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            {/* Accent */}
            <div className="h-[6px] bg-[#727CB6]" />

            <div className="p-6 sm:p-8 lg:p-10">
              {/* Hero Header */}

              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-5">
                  {/* Icon */}

                  <div className="hidden h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#727CB6]/10 text-[32px] sm:flex">
                    📝
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                          isPublished
                            ? "bg-green-50 text-green-600"
                            : status === "closed"
                              ? "bg-red-50 text-red-600"
                              : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {status}
                      </span>

                      {questionCount > 0 && (
                        <span className="text-[12px] text-[#999]">
                          {questionCount}{" "}
                          {questionCount === 1 ? "Question" : "Questions"}
                        </span>
                      )}
                    </div>

                    <h1 className="text-[27px] font-bold leading-tight text-[#333] sm:text-[32px]">
                      {quiz.title}
                    </h1>

                    {quiz.description && (
                      <p className="mt-3 max-w-[700px] text-[14px] leading-7 text-[#777] sm:text-[15px]">
                        {quiz.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Status */}

                <div className="shrink-0 rounded-[6px] bg-[#f7f7f9] px-5 py-4 text-left md:min-w-[150px]">
                  <p className="text-[11px] uppercase tracking-wide text-[#999]">
                    Quiz Status
                  </p>

                  <p className="mt-1 text-[14px] font-bold capitalize text-[#444]">
                    {status}
                  </p>
                </div>
              </div>

              {/* ======================================================== */}
              {/* INFORMATION CARDS */}
              {/* ======================================================== */}

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Duration */}

                <div className="rounded-[7px] border border-[#eeeeee] bg-[#fafafa] p-5 transition hover:border-[#727CB6]/30 hover:bg-[#727CB6]/5">
                  <div className="mb-3 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#727CB6]/10 text-[20px]">
                    ⏱️
                  </div>

                  <p className="text-[12px] text-[#999]">Duration</p>

                  <p className="mt-1 text-[18px] font-bold text-[#333]">
                    {duration}{" "}
                    <span className="text-[13px] font-medium text-[#888]">
                      minutes
                    </span>
                  </p>
                </div>

                {/* Total Marks */}

                <div className="rounded-[7px] border border-[#eeeeee] bg-[#fafafa] p-5 transition hover:border-[#727CB6]/30 hover:bg-[#727CB6]/5">
                  <div className="mb-3 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#727CB6]/10 text-[20px]">
                    ⭐
                  </div>

                  <p className="text-[12px] text-[#999]">Total Marks</p>

                  <p className="mt-1 text-[18px] font-bold text-[#333]">
                    {totalMarks}
                  </p>
                </div>

                {/* Passing Marks */}

                <div className="rounded-[7px] border border-[#eeeeee] bg-[#fafafa] p-5 transition hover:border-[#727CB6]/30 hover:bg-[#727CB6]/5">
                  <div className="mb-3 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#727CB6]/10 text-[20px]">
                    🎯
                  </div>

                  <p className="text-[12px] text-[#999]">Passing Marks</p>

                  <p className="mt-1 text-[18px] font-bold text-[#333]">
                    {passingMarks}
                  </p>
                </div>

                {/* Questions */}

                <div className="rounded-[7px] border border-[#eeeeee] bg-[#fafafa] p-5 transition hover:border-[#727CB6]/30 hover:bg-[#727CB6]/5">
                  <div className="mb-3 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#727CB6]/10 text-[20px]">
                    ❓
                  </div>

                  <p className="text-[12px] text-[#999]">Questions</p>

                  <p className="mt-1 text-[18px] font-bold text-[#333]">
                    {questionCount}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* LOWER SECTION */}
          {/* ============================================================ */}

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
            {/* ========================================================== */}
            {/* QUIZ INFORMATION */}
            {/* ========================================================== */}

            <div className="rounded-[8px] border border-[#e8e8e8] bg-white p-6 shadow-[0_3px_15px_rgba(0,0,0,0.04)] sm:p-7">
              <div className="mb-6">
                <h2 className="text-[20px] font-bold text-[#333]">
                  Quiz Information
                </h2>

                <div className="mt-2 h-[3px] w-[45px] bg-[#727CB6]" />
              </div>

              <div className="space-y-5">
                {/* Time */}

                <div className="flex gap-4">
                  <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#727CB6]/10">
                    ⏱️
                  </div>

                  <div>
                    <h3 className="text-[14px] font-semibold text-[#444]">
                      Time Limit
                    </h3>

                    <p className="mt-1 text-[13px] leading-6 text-[#888]">
                      You will have{" "}
                      <strong className="text-[#555]">
                        {duration} minutes
                      </strong>{" "}
                      to complete this quiz.
                    </p>
                  </div>
                </div>

                {/* Marks */}

                <div className="flex gap-4">
                  <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#727CB6]/10">
                    ⭐
                  </div>

                  <div>
                    <h3 className="text-[14px] font-semibold text-[#444]">
                      Marking
                    </h3>

                    <p className="mt-1 text-[13px] leading-6 text-[#888]">
                      The quiz contains{" "}
                      <strong className="text-[#555]">
                        {totalMarks} total marks
                      </strong>
                      . You need at least{" "}
                      <strong className="text-[#555]">{passingMarks}</strong>{" "}
                      marks to pass.
                    </p>
                  </div>
                </div>

                {/* Questions */}

                <div className="flex gap-4">
                  <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#727CB6]/10">
                    ❓
                  </div>

                  <div>
                    <h3 className="text-[14px] font-semibold text-[#444]">
                      Questions
                    </h3>

                    <p className="mt-1 text-[13px] leading-6 text-[#888]">
                      This quiz contains{" "}
                      <strong className="text-[#555]">
                        {questionCount}{" "}
                        {questionCount === 1 ? "question" : "questions"}
                      </strong>
                      .
                    </p>
                  </div>
                </div>

                {/* Attempts */}

                {hasAttemptInformation && (
                  <div className="flex gap-4">
                    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#727CB6]/10">
                      🔄
                    </div>

                    <div>
                      <h3 className="text-[14px] font-semibold text-[#444]">
                        Attempts
                      </h3>

                      <p className="mt-1 text-[13px] leading-6 text-[#888]">
                        You have{" "}
                        <strong className="text-[#555]">
                          {attemptsRemaining}
                        </strong>{" "}
                        {Number(attemptsRemaining) === 1
                          ? "attempt"
                          : "attempts"}{" "}
                        remaining.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ========================================================== */}
            {/* START QUIZ CARD */}
            {/* ========================================================== */}

            <div className="h-fit overflow-hidden rounded-[8px] border border-[#e8e8e8] bg-white shadow-[0_3px_15px_rgba(0,0,0,0.05)]">
              <div className="bg-[#727CB6] px-6 py-5">
                <h2 className="text-[19px] font-bold text-white">
                  Ready to Start?
                </h2>

                <p className="mt-1 text-[12px] leading-5 text-white/80">
                  Make sure you are ready before starting the quiz.
                </p>
              </div>

              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#eee] pb-3">
                    <span className="text-[13px] text-[#888]">Duration</span>

                    <span className="text-[13px] font-semibold text-[#444]">
                      {duration} min
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#eee] pb-3">
                    <span className="text-[13px] text-[#888]">Total Marks</span>

                    <span className="text-[13px] font-semibold text-[#444]">
                      {totalMarks}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-[#888]">
                      Passing Marks
                    </span>

                    <span className="text-[13px] font-semibold text-[#444]">
                      {passingMarks}
                    </span>
                  </div>
                </div>

                {/* Start button */}

                <button
                  type="button"
                  disabled={starting || !isPublished || noAttempts}
                  onClick={handleStart}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-[5px] bg-[#727CB6] px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#626da8] disabled:cursor-not-allowed disabled:bg-[#ccc]"
                >
                  {starting ? (
                    <>
                      <span className="h-[16px] w-[16px] animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Starting...
                    </>
                  ) : noAttempts ? (
                    "No Attempts Left"
                  ) : !isPublished ? (
                    "Quiz Unavailable"
                  ) : (
                    <>
                      Start Quiz
                      <span className="text-[17px]">→</span>
                    </>
                  )}
                </button>

                <p className="mt-3 text-center text-[11px] leading-5 text-[#999]">
                  Once you start the quiz, the timer will begin.
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* IMPORTANT NOTE */}
          {/* ============================================================ */}

          <div className="mt-6 rounded-[8px] border border-[#e6e8f2] bg-[#727CB6]/5 px-5 py-5 sm:px-6">
            <div className="flex gap-4">
              <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#727CB6]/10 text-[18px]">
                💡
              </div>

              <div>
                <h3 className="text-[14px] font-bold text-[#555]">
                  Before you begin
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-[#777]">
                  Make sure you have a stable internet connection and enough
                  time to complete the quiz. Once started, your quiz timer will
                  run continuously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
