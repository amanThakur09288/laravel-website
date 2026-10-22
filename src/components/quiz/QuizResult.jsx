export default function QuizResult({
  result,
}) {
  if (!result) {
    return null;
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900">
        Quiz Result
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm text-gray-500">
            Score
          </p>

          <p className="mt-1 text-2xl font-bold">
            {result.score} /{" "}
            {result.total_marks}
          </p>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm text-gray-500">
            Result
          </p>

          <p
            className={`mt-1 text-xl font-bold ${
              result.passed
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {result.passed
              ? "Passed"
              : "Failed"}
          </p>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm text-gray-500">
            Correct Answers
          </p>

          <p className="mt-1 text-xl font-bold">
            {result.correct_answers}
          </p>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm text-gray-500">
            Wrong Answers
          </p>

          <p className="mt-1 text-xl font-bold">
            {result.wrong_answers}
          </p>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm text-gray-500">
            Unanswered
          </p>

          <p className="mt-1 text-xl font-bold">
            {result.unanswered}
          </p>
        </div>
      </div>
    </div>
  );
}