import { Link } from "react-router-dom";

export default function QuizCard({ quiz }) {
  const title = quiz?.title || "Untitled Quiz";
  const description =
    quiz?.description || "Test your knowledge with this quiz.";
  const duration = Number(quiz?.duration_minutes || 0);
  const totalMarks = Number(quiz?.total_marks || 0);
  const passingMarks = Number(quiz?.passing_marks || 0);
  const questionCount = Number(
    quiz?.questions_count ?? quiz?.question_count ?? 0,
  );
  const status = quiz?.status || "draft";
  const isPublished = status === "published";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#e8e8e8] bg-white shadow-[0_3px_15px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]">
      <div className="h-[5px] w-full bg-[#727CB6]" />
      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#727CB6]/10 text-[24px]">
            📝
          </div>

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
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-[52px] text-[19px] font-bold leading-6 text-[#333] transition group-hover:text-[#727CB6]">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-3 min-h-[66px] text-[13px] leading-6 text-[#777]">
          {description}
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {/* Duration */}
          <div className="rounded-[6px] bg-[#f7f7f9] px-3 py-3">
            <div className="flex items-center gap-2">
              <span className="text-[17px]">⏱️</span>

              <div>
                <p className="text-[11px] text-[#999]">Duration</p>

                <p className="mt-0.5 text-[13px] font-semibold text-[#444]">
                  {duration} min
                </p>
              </div>
            </div>
          </div>

          {/* Marks */}
          <div className="rounded-[6px] bg-[#f7f7f9] px-3 py-3">
            <div className="flex items-center gap-2">
              <span className="text-[17px]">⭐</span>

              <div>
                <p className="text-[11px] text-[#999]">Total Marks</p>

                <p className="mt-0.5 text-[13px] font-semibold text-[#444]">
                  {totalMarks}
                </p>
              </div>
            </div>
          </div>

          {/* Questions */}
          <div className="rounded-[6px] bg-[#f7f7f9] px-3 py-3">
            <div className="flex items-center gap-2">
              <span className="text-[17px]">❓</span>

              <div>
                <p className="text-[11px] text-[#999]">Questions</p>
                <p className="mt-0.5 text-[13px] font-semibold text-[#444]">
                  {questionCount}
                </p>
              </div>
            </div>
          </div>

          {/* Passing Marks */}
          <div className="rounded-[6px] bg-[#f7f7f9] px-3 py-3">
            <div className="flex items-center gap-2">
              <span className="text-[17px]">🎯</span>

              <div>
                <p className="text-[11px] text-[#999]">Passing Marks</p>

                <p className="mt-0.5 text-[13px] font-semibold text-[#444]">
                  {passingMarks}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* Divider */}
        {/* ------------------------------------------------------------- */}

        <div className="my-5 h-px bg-[#eeeeee]" />

        {/* ------------------------------------------------------------- */}
        {/* Footer */}
        {/* ------------------------------------------------------------- */}

        <div className="mt-auto">
          {isPublished ? (
            <Link
              to={`/quizzes/${quiz.id}`}
              className="flex w-full items-center justify-center gap-2 rounded-[5px] bg-[#727CB6] px-5 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#626da8]"
            >
              View Quiz
              <span className="text-[16px] transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          ) : (
            <div className="flex w-full items-center justify-center rounded-[5px] bg-[#f1f1f1] px-5 py-3 text-[13px] font-semibold uppercase tracking-wide text-[#999]">
              Quiz Unavailable
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
