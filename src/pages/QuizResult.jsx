import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { getQuizResult } from "../api/quizApi";

export default function QuizResult() {
  const { attemptId } = useParams();

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResult();
  }, [attemptId]);

  const loadResult = async () => {
    try {
      setLoading(true);

      const response = await getQuizResult(attemptId);

      setResult(response.data);
    } catch (error) {
      console.error("Quiz result error:", error);

      toast.error(
        error.response?.data?.message || "Unable to load quiz result.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-[80px] text-center">
        <div className="mx-auto h-[35px] w-[35px] animate-spin rounded-full border-[3px] border-[#ddd] border-t-[#727CB6]" />

        <p className="mt-[15px] text-[14px] text-[#888]">
          Loading your quiz result...
        </p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="mx-auto max-w-[900px] px-5 py-[80px] text-center">
        <h2 className="text-2xl font-bold text-[#333]">Result Not Available</h2>

        <p className="mt-3 text-[15px] text-[#777]">
          We could not load your quiz result.
        </p>

        <Link
          to="/quizzes"
          className="mt-6 inline-flex rounded-lg bg-[#727CB6] px-6 py-3 text-sm font-semibold uppercase text-white transition hover:bg-[#505B95]"
        >
          Back to Quizzes
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#f8f8fa] py-[60px]">
      <div className="mx-auto max-w-[900px] px-5">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#727CB6] text-3xl text-white">
            ✓
          </div>

          <h1 className="mt-5 text-3xl font-bold text-[#333]">
            Quiz Completed
          </h1>

          <p className="mt-2 text-[15px] text-[#777]">
            Your quiz has been submitted successfully.
          </p>
        </div>

        {/* Main Result Card */}
        <div className="mt-10 rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-sm sm:p-8">
          {/* Score */}
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#888]">
              Your Score
            </p>

            <p className="mt-2 text-5xl font-bold text-[#727CB6]">
              {result.score}
              <span className="text-2xl text-[#999]">
                {" "}
                / {result.total_marks}
              </span>
            </p>

            <div className="mt-4">
              <span
                className={`inline-flex rounded-full px-5 py-2 text-sm font-bold ${
                  result.passed
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {result.passed ? "PASSED" : "FAILED"}
              </span>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-[#f7faf7] p-5 text-center">
              <p className="text-sm text-[#777]">Correct</p>

              <p className="mt-2 text-2xl font-bold text-green-600">
                {result.correct_answers}
              </p>
            </div>

            <div className="rounded-xl bg-[#fff8f8] p-5 text-center">
              <p className="text-sm text-[#777]">Wrong</p>

              <p className="mt-2 text-2xl font-bold text-red-500">
                {result.wrong_answers}
              </p>
            </div>

            <div className="rounded-xl bg-[#f8f8f8] p-5 text-center">
              <p className="text-sm text-[#777]">Unanswered</p>

              <p className="mt-2 text-2xl font-bold text-[#777]">
                {result.unanswered}
              </p>
            </div>
          </div>

          {/* Passing Information */}
          <div className="mt-8 rounded-xl bg-[#f5f5fa] p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#777]">Passing Marks</span>

              <span className="font-bold text-[#333]">
                {result.passing_marks}
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-[#e5e5e5] pt-3">
              <span className="text-sm text-[#777]">Your Score</span>

              <span className="font-bold text-[#727CB6]">{result.score}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/quizzes"
              className="rounded-lg bg-[#727CB6] px-7 py-3 text-center text-sm font-semibold uppercase text-white transition hover:bg-[#505B95]"
            >
              Back to Quizzes
            </Link>

            <Link
              to="/"
              className="rounded-lg border border-[#ddd] bg-white px-7 py-3 text-center text-sm font-semibold uppercase text-[#555] transition hover:bg-[#f7f7f7]"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
