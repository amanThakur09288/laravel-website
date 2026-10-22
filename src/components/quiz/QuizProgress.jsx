// export default function QuizProgress({
//   questions,
//   answers,
//   currentIndex,
//   onSelect,
// }) {
//   return (
//     <div className="rounded-xl border border-gray-200 bg-white p-4">
//       <p className="mb-3 text-sm font-semibold text-gray-700">Questions</p>

//       <div className="flex flex-wrap gap-2">
//         {questions.map((question, index) => {
//           const answered = (answers[question.id] || []).length > 0;

//           let className = "bg-gray-100 text-gray-700";

//           if (index === currentIndex) {
//             className = "bg-blue-600 text-white";
//           } else if (answered) {
//             className = "bg-green-100 text-green-700";
//           }

//           return (
//             <button
//               key={question.id}
//               type="button"
//               onClick={() => onSelect(index)}
//               className={`h-9 w-9 rounded-lg text-sm font-medium ${className}`}
//             >
//               {index + 1}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

export default function QuizProgress({ totalQuestions, answeredQuestions }) {
  const percentage =
    totalQuestions > 0
      ? Math.round((answeredQuestions / totalQuestions) * 100)
      : 0;

  return (
    <div className="rounded-xl border border-[#e5e5e5] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#888]">
            Progress
          </p>

          <p className="mt-1 text-lg font-bold text-[#333]">
            {answeredQuestions} / {totalQuestions}
          </p>
        </div>

        <span className="text-sm font-semibold text-[#727CB6]">
          {percentage}%
        </span>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#eeeeee]">
        <div
          className="h-full rounded-full bg-[#727CB6] transition-all duration-300"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}
