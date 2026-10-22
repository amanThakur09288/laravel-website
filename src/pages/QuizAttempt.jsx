import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getAttempt, saveAnswer, submitQuiz } from "../api/quizApi";
import QuizTimer from "../components/quiz/QuizTimer";
import QuizProgress from "../components/quiz/QuizProgress";
import QuizQuestion from "../components/quiz/QuizQuestion";

export default function QuizAttempt() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [attempt, setAttempt] = useState(null);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [savingQuestion, setSavingQuestion] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  /*
  |--------------------------------------------------------------------------
  | Load Attempt
  |--------------------------------------------------------------------------
  */

  const loadAttempt = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getAttempt(id);

      const data = response.data;

      /*
      |--------------------------------------------------------------------------
      | Attempt already finished
      |--------------------------------------------------------------------------
      */

      if (data.status === "submitted" || data.status === "expired") {
        navigate(`/quiz-results/${data.id}`, {
          replace: true,
        });

        return;
      }

      setAttempt(data);

      /*
      |--------------------------------------------------------------------------
      | Restore previously saved answers
      |--------------------------------------------------------------------------
      */

      const restoredAnswers = {};

      (data.questions || []).forEach((question) => {
        restoredAnswers[question.id] = question.selected_option_ids || [];
      });

      setAnswers(restoredAnswers);
    } catch (err) {
      const message =
        err.response?.data?.message || "Unable to load quiz attempt.";

      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    loadAttempt();
  }, [loadAttempt]);

  /*
  |--------------------------------------------------------------------------
  | Answer Count
  |--------------------------------------------------------------------------
  */

  const answeredQuestions = useMemo(() => {
    return Object.values(answers).filter(
      (selectedIds) => selectedIds && selectedIds.length > 0,
    ).length;
  }, [answers]);

  /*
  |--------------------------------------------------------------------------
  | Save Answer
  |--------------------------------------------------------------------------
  */

  const handleAnswer = async (questionId, selectedOptionIds) => {
    if (submitting || savingQuestion === questionId) {
      return;
    }

    /*
    |--------------------------------------------------------------------------
    | Update UI immediately
    |--------------------------------------------------------------------------
    */

    setAnswers((current) => ({
      ...current,
      [questionId]: selectedOptionIds,
    }));

    try {
      setSavingQuestion(questionId);

      await saveAnswer(id, {
        quiz_question_id: questionId,
        selected_option_ids: selectedOptionIds,
      });
    } catch (err) {
      const message = err.response?.data?.message || "Unable to save answer.";

      toast.error(message);

      /*
      |--------------------------------------------------------------------------
      | Reload server state if saving failed
      |--------------------------------------------------------------------------
      */

      await loadAttempt();
    } finally {
      setSavingQuestion(null);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Submit Quiz
  |--------------------------------------------------------------------------
  */

  const handleSubmit = useCallback(
    async (automatic = false) => {
      if (submitting) {
        return;
      }

      try {
        setSubmitting(true);

        const response = await submitQuiz(id);

        toast.success(
          automatic
            ? "Time is up. Quiz submitted automatically."
            : "Quiz submitted successfully.",
        );

        navigate(`/quiz-results/${response.data.id}`, {
          replace: true,
        });
      } catch (err) {
        const status = err.response?.status;

        /*
        |--------------------------------------------------------------------------
        | Time expired on server
        |--------------------------------------------------------------------------
        */

        if (status === 409) {
          toast.error(err.response?.data?.message || "Quiz time has expired.");

          navigate(`/quiz-results/${id}`, {
            replace: true,
          });

          return;
        }

        toast.error(err.response?.data?.message || "Unable to submit quiz.");
      } finally {
        setSubmitting(false);
      }
    },
    [id, navigate, submitting],
  );

  /*
  |--------------------------------------------------------------------------
  | Timer Expired
  |--------------------------------------------------------------------------
  */

  const handleTimeUp = useCallback(() => {
    if (!submitting) {
      handleSubmit(true);
    }
  }, [handleSubmit, submitting]);

  /*
  |--------------------------------------------------------------------------
  | Loading
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div className="py-[80px] text-center">
        <div className="mx-auto h-[35px] w-[35px] animate-spin rounded-full border-[3px] border-[#ddd] border-t-[#727CB6]" />

        <p className="mt-[15px] text-[14px] text-[#888]">
          Loading quiz attempt...
        </p>
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Error
  |--------------------------------------------------------------------------
  */

  if (error || !attempt) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-16 text-center">
        <div className="rounded-2xl border border-red-100 bg-red-50 p-8">
          <h2 className="text-xl font-bold text-red-600">
            Unable to load quiz
          </h2>

          <p className="mt-2 text-sm text-red-500">
            {error || "Quiz attempt could not be loaded."}
          </p>

          <button
            type="button"
            onClick={() => navigate("/quizzes")}
            className="mt-6 rounded-lg bg-[#727CB6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#505B95]"
          >
            Back to Quizzes
          </button>
        </div>
      </div>
    );
  }

  const questions = attempt.questions || [];

  return (
    <div className="bg-[#f8f8fa]">
      <div className="mx-auto max-w-7xl px-5 py-8">
        {/* Header */}

        <div className="mb-8">
          <p className="text-sm font-medium text-[#727CB6]">Quiz Attempt</p>

          <h1 className="mt-1 text-2xl font-bold text-[#333] md:text-3xl">
            {attempt.quiz?.title}
          </h1>

          <p className="mt-2 text-sm text-[#888]">
            Answer all questions and submit before the timer expires.
          </p>
        </div>

        {/* Top information */}

        <div className="grid gap-5 md:grid-cols-2">
          <QuizTimer
            remainingSeconds={attempt.remaining_seconds}
            onTimeUp={handleTimeUp}
          />

          <QuizProgress
            totalQuestions={questions.length}
            answeredQuestions={answeredQuestions}
          />
        </div>

        {/* Questions */}

        <div className="mt-8 space-y-6">
          {questions.map((question, index) => (
            <QuizQuestion
              key={question.id}
              question={question}
              questionNumber={index + 1}
              selectedOptionIds={answers[question.id] || []}
              onAnswer={handleAnswer}
              disabled={submitting || savingQuestion === question.id}
            />
          ))}
        </div>

        {/* Bottom submit */}

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#e5e5e5] bg-white p-5 shadow-sm sm:flex-row">
          <div>
            <p className="text-sm font-semibold text-[#333]">
              {answeredQuestions} of {questions.length} questions answered
            </p>

            <p className="mt-1 text-xs text-[#999]">
              You can submit even if some questions are unanswered.
            </p>
          </div>

          <button
            type="button"
            disabled={submitting || savingQuestion !== null}
            onClick={() => handleSubmit(false)}
            className="w-full rounded-lg bg-[#727CB6] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#505B95] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {submitting ? "Submitting..." : "Submit Quiz"}
          </button>
        </div>
      </div>
    </div>
  );
}
