// export default function QuizQuestion({
//   question,
//   selectedOptionIds = [],
//   onChange,
// }) {
//   const isMultiSelect = question.type === "multi_select";

//   const handleOptionChange = (optionId) => {
//     if (isMultiSelect) {
//       const alreadySelected = selectedOptionIds.includes(optionId);

//       if (alreadySelected) {
//         onChange(selectedOptionIds.filter((id) => id !== optionId));
//       } else {
//         onChange([...selectedOptionIds, optionId]);
//       }

//       return;
//     }

//     onChange([optionId]);
//   };

//   return (
//     <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
//       <div className="mb-6">
//         <div className="flex items-start justify-between gap-4">
//           <h2 className="text-lg font-semibold leading-7 text-gray-900">
//             {question.question_text}
//           </h2>

//           <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
//             {question.marks} marks
//           </span>
//         </div>

//         <p className="mt-2 text-sm text-gray-500">
//           {isMultiSelect ? "Select all correct options." : "Select one option."}
//         </p>
//       </div>

//       <div className="space-y-3">
//         {question.options?.map((option) => {
//           const checked = selectedOptionIds.includes(option.id);

//           return (
//             <label
//               key={option.id}
//               className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition ${
//                 checked
//                   ? "border-blue-500 bg-blue-50"
//                   : "border-gray-200 hover:bg-gray-50"
//               }`}
//             >
//               <input
//                 type={isMultiSelect ? "checkbox" : "radio"}
//                 name={`question-${question.id}`}
//                 checked={checked}
//                 onChange={() => handleOptionChange(option.id)}
//                 className="h-4 w-4"
//               />

//               <span className="text-sm text-gray-800">
//                 {option.option_text}
//               </span>
//             </label>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

export default function QuizQuestion({
  question,
  questionNumber,
  selectedOptionIds,
  onAnswer,
  disabled,
}) {
  const selectedIds = selectedOptionIds || [];

  const handleOptionClick = (optionId) => {
    if (disabled) {
      return;
    }

    if (question.type === "single_select") {
      onAnswer(question.id, [optionId]);
      return;
    }

    const alreadySelected = selectedIds.includes(optionId);

    let updatedIds;

    if (alreadySelected) {
      updatedIds = selectedIds.filter((id) => id !== optionId);
    } else {
      updatedIds = [...selectedIds, optionId];
    }

    onAnswer(question.id, updatedIds);
  };

  return (
    <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-sm">
      <div className="flex gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#727CB6] text-sm font-bold text-white">
          {questionNumber}
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h2 className="text-lg font-semibold leading-7 text-[#333]">
              {question.question_text}
            </h2>

            <span className="rounded-full bg-[#f1f2f8] px-3 py-1 text-xs font-semibold text-[#727CB6]">
              {question.marks} {question.marks === 1 ? "mark" : "marks"}
            </span>
          </div>

          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#999]">
            {question.type === "single_select"
              ? "Choose one answer"
              : "Choose all correct answers"}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {question.options?.map((option, index) => {
          const selected = selectedIds.includes(option.id);

          return (
            <button
              key={option.id}
              type="button"
              disabled={disabled}
              onClick={() => handleOptionClick(option.id)}
              className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                selected
                  ? "border-[#727CB6] bg-[#f1f2f8]"
                  : "border-[#e5e5e5] bg-white hover:border-[#aeb4d3] hover:bg-[#fafafa]"
              } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                  selected
                    ? "border-[#727CB6] bg-[#727CB6] text-white"
                    : "border-[#d5d5d5] text-[#666]"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </span>

              <span
                className={`text-sm leading-6 ${
                  selected ? "font-semibold text-[#333]" : "text-[#555]"
                }`}
              >
                {option.option_text}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
