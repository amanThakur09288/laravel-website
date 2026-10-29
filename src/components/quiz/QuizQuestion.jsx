// export default function QuizQuestion({
//   question,
//   questionNumber,
//   selectedOptionIds,
//   onAnswer,
//   disabled,
// }) {
//   const selectedIds = selectedOptionIds || [];

//   const handleOptionClick = (optionId) => {
//     if (disabled) {
//       return;
//     }

//     if (question?.type === "single_select") {
//       onAnswer(question.id, [optionId]);
//       return;
//     }

//     const alreadySelected = selectedIds?.includes(optionId);

//     let updatedIds;

//     if (alreadySelected) {
//       updatedIds = selectedIds?.filter((id) => id !== optionId);
//     } else {
//       updatedIds = [...selectedIds, optionId];
//     }

//     onAnswer(question?.id, updatedIds);
//   };

//   return (
//     <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-sm">
//       <div className="flex gap-3">
//         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#727CB6] text-sm font-bold text-white">
//           {questionNumber}
//         </div>

//         <div className="flex-1">
//           <div className="flex flex-wrap items-start justify-between gap-3">
//             <h2 className="text-lg font-semibold leading-7 text-[#333]">
//               {question?.question_text}
//             </h2>

//             <span className="rounded-full bg-[#f1f2f8] px-3 py-1 text-xs font-semibold text-[#727CB6]">
//               {question?.marks} {question?.marks === 1 ? "mark" : "marks"}
//             </span>
//           </div>

//           <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#999]">
//             {question?.type === "single_select"
//               ? "Choose one answer"
//               : "Choose all correct answers"}
//           </p>
//         </div>
//       </div>

//       <div className="mt-6 space-y-3">
//         {question?.options?.map((option, index) => {
//           const selected = selectedIds.includes(option.id);

//           return (
//             <button
//               key={option.id}
//               type="button"
//               disabled={disabled}
//               onClick={() => handleOptionClick(option.id)}
//               className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
//                 selected
//                   ? "border-[#727CB6] bg-[#f1f2f8]"
//                   : "border-[#e5e5e5] bg-white hover:border-[#aeb4d3] hover:bg-[#fafafa]"
//               } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
//             >
//               <span
//                 className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
//                   selected
//                     ? "border-[#727CB6] bg-[#727CB6] text-white"
//                     : "border-[#d5d5d5] text-[#666]"
//                 }`}
//               >
//                 {String.fromCharCode(65 + index)}
//               </span>

//               <span
//                 className={`text-sm leading-6 ${
//                   selected ? "font-semibold text-[#333]" : "text-[#555]"
//                 }`}
//               >
//                 {option?.option_text}
//               </span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default function QuizQuestion({
//   question,
//   questionNumber,
//   selectedOptionIds,
//   onAnswer,
//   disabled,
// }) {
//   const selectedIds = selectedOptionIds || [];

//   const handleOptionClick = (optionId) => {
//     if (disabled) {
//       return;
//     }

//     if (question?.type === "single_select") {
//       onAnswer(question.id, [optionId]);
//       return;
//     }

//     const alreadySelected = selectedIds?.includes(optionId);

//     let updatedIds;

//     if (alreadySelected) {
//       updatedIds = selectedIds?.filter((id) => id !== optionId);
//     } else {
//       updatedIds = [...selectedIds, optionId];
//     }

//     onAnswer(question?.id, updatedIds);
//   };

//   return (
//     <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-sm">
//       {/* Question Header */}
//       <div className="flex gap-3">
//         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#727CB6] text-sm font-bold text-white">
//           {questionNumber}
//         </div>

//         <div className="flex-1">
//           <div className="flex flex-wrap items-start justify-between gap-3">
//             <h2 className="text-lg font-semibold leading-7 text-[#333]">
//               {question?.question_text}
//             </h2>

//             <span className="rounded-full bg-[#f1f2f8] px-3 py-1 text-xs font-semibold text-[#727CB6]">
//               {question?.marks} {question?.marks === 1 ? "mark" : "marks"}
//             </span>
//           </div>

//           <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#999]">
//             {question?.type === "single_select"
//               ? "Choose one answer"
//               : "Choose all correct answers"}
//           </p>
//         </div>
//       </div>

//       {/* Question Image */}
//       {question?.question_image && (
//         <div className="mt-6 overflow-hidden rounded-xl border border-[#e5e5e5] bg-[#fafafa]">
//           <img
//             src={question.question_image}
//             alt={`Question ${questionNumber}`}
//             className="max-h-[420px] w-full object-contain"
//           />
//         </div>
//       )}

//       {/* Options */}
//       <div className="mt-6 space-y-3">
//         {question?.options?.map((option, index) => {
//           const selected = selectedIds.includes(option.id);

//           return (
//             <button
//               key={option.id}
//               type="button"
//               disabled={disabled}
//               onClick={() => handleOptionClick(option.id)}
//               className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
//                 selected
//                   ? "border-[#727CB6] bg-[#f1f2f8]"
//                   : "border-[#e5e5e5] bg-white hover:border-[#aeb4d3] hover:bg-[#fafafa]"
//               } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
//             >
//               {/* Option Letter */}
//               <span
//                 className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
//                   selected
//                     ? "border-[#727CB6] bg-[#727CB6] text-white"
//                     : "border-[#d5d5d5] text-[#666]"
//                 }`}
//               >
//                 {String.fromCharCode(65 + index)}
//               </span>

//               {/* Option Text */}
//               <span
//                 className={`text-sm leading-6 ${
//                   selected ? "font-semibold text-[#333]" : "text-[#555]"
//                 }`}
//               >
//                 {option?.option_text}
//               </span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

export default function QuizQuestion({
  question,
  questionNumber,
  selectedOptionIds,
  onAnswer,
  disabled,
}) {
  const selectedIds = selectedOptionIds || [];

  const [imageSrc, setImageSrc] = useState(null);

  /*
  |--------------------------------------------------------------------------
  | Question Image URL
  |--------------------------------------------------------------------------
  |
  | Backend may return:
  |
  | 1. Full URL:
  |    http://localhost:8000/storage/quiz/questions/image.jpg
  |
  | 2. Relative storage path:
  |    quiz/questions/image.jpg
  |
  */

  useEffect(() => {
    if (!question?.question_image) {
      setImageSrc(null);
      return;
    }

    const image = question.question_image;

    if (
      typeof image === "string" &&
      (image.startsWith("http://") || image.startsWith("https://"))
    ) {
      setImageSrc(image);
      return;
    }

    const backendUrl =
      import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

    const cleanBackendUrl = backendUrl.replace(/\/$/, "");

    const cleanImagePath = String(image).replace(/^\/+/, "");

    /*
     * Laravel public storage:
     *
     * storage/app/public/quiz/questions/...
     *
     * is available through:
     *
     * /storage/quiz/questions/...
     */

    if (cleanImagePath.startsWith("storage/")) {
      setImageSrc(`${cleanBackendUrl}/${cleanImagePath}`);
    } else {
      setImageSrc(`${cleanBackendUrl}/storage/${cleanImagePath}`);
    }
  }, [question?.question_image]);

  /*
  |--------------------------------------------------------------------------
  | Handle Option Click
  |--------------------------------------------------------------------------
  */

  const handleOptionClick = (optionId) => {
    if (disabled) {
      return;
    }

    /*
     * Single Select
     */

    if (question?.type === "single_select") {
      onAnswer(question.id, [optionId]);

      return;
    }

    /*
     * Multi Select
     */

    const alreadySelected = selectedIds.includes(optionId);

    let updatedIds;

    if (alreadySelected) {
      updatedIds = selectedIds.filter((id) => id !== optionId);
    } else {
      updatedIds = [...selectedIds, optionId];
    }

    onAnswer(question?.id, updatedIds);
  };

  return (
    <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-sm">
      {/* ================================================================ */}
      {/* QUESTION HEADER */}
      {/* ================================================================ */}

      <div className="flex gap-3">
        {/* Question Number */}

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#727CB6] text-sm font-bold text-white">
          {questionNumber}
        </div>

        {/* Question Content */}

        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h2 className="text-lg font-semibold leading-7 text-[#333]">
              {question?.question_text}
            </h2>

            <span className="rounded-full bg-[#f1f2f8] px-3 py-1 text-xs font-semibold text-[#727CB6]">
              {question?.marks} {question?.marks === 1 ? "mark" : "marks"}
            </span>
          </div>

          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#999]">
            {question?.type === "single_select"
              ? "Choose one answer"
              : "Choose all correct answers"}
          </p>
        </div>
      </div>

      {/* ================================================================ */}
      {/* QUESTION IMAGE */}
      {/* ================================================================ */}

      {imageSrc && (
        <div className="mt-5 flex justify-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-3">
            <img
              src={imageSrc}
              alt={`Question ${questionNumber}`}
              className="mx-auto max-h-[280px] w-auto max-w-full rounded-lg object-contain"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      )}

      {/* ================================================================ */}
      {/* OPTIONS */}
      {/* ================================================================ */}

      <div className="mt-6 space-y-3">
        {question?.options?.map((option, index) => {
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
              {/* Option Letter */}

              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                  selected
                    ? "border-[#727CB6] bg-[#727CB6] text-white"
                    : "border-[#d5d5d5] text-[#666]"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </span>

              {/* Option Text */}

              <span
                className={`text-sm leading-6 ${
                  selected ? "font-semibold text-[#333]" : "text-[#555]"
                }`}
              >
                {option?.option_text}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
