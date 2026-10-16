// import { Link } from "react-router-dom";
// import {
//   formatBatchDate,
//   formatBatchPrice,
//   getBatchDetailPath,
//   getModeIcon,
//   getSeatsPercentage,
//   getStatusClass,
// } from "../../utils/batchHelpers";

// const CalendarIcon = () => (
//   <svg
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <rect x="3" y="4" width="18" height="18" rx="2" />
//     <line x1="16" y1="2" x2="16" y2="6" />
//     <line x1="8" y1="2" x2="8" y2="6" />
//     <line x1="3" y1="10" x2="21" y2="10" />
//   </svg>
// );

// const ClockIcon = () => (
//   <svg
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <circle cx="12" cy="12" r="9" />
//     <polyline points="12 7 12 12 15 14" />
//   </svg>
// );

// const DurationIcon = () => (
//   <svg
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <path d="M6 2h12" />
//     <path d="M6 22h12" />
//     <path d="M8 2c0 5 4 5 4 10s-4 5-4 10" />
//     <path d="M16 2c0 5-4 5-4 10s4 5 4 10" />
//   </svg>
// );

// const UserIcon = () => (
//   <svg
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <circle cx="12" cy="7" r="4" />
//     <path d="M5 21a7 7 0 0 1 14 0" />
//   </svg>
// );

// const BatchCard = ({ batch }) => {
//   const seatsPercentage = getSeatsPercentage(batch);
//   const detailPath = getBatchDetailPath(batch.id);

//   return (
//     <div className="mb-[30px] w-full px-[15px] sm:w-1/2 lg:w-1/3">
//       <article className="flex h-full flex-col overflow-hidden rounded-[4px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
//         {/* Card Header */}
//         <div className="flex min-h-[52px] items-center justify-between gap-[10px] bg-[#425283] px-[18px] py-[10px]">
//           <span
//             className={`rounded-[20px] px-[11px] py-[5px] text-[11px] font-semibold text-white ${getStatusClass(
//               batch.status,
//             )}`}
//           >
//             {batch.status}
//           </span>

//           <span className="text-[12px] font-semibold text-white">
//             {getModeIcon(batch.mode)} {batch.mode}
//           </span>
//         </div>

//         {/* Card Body */}
//         <div className="flex flex-1 flex-col px-[18px] pb-[8px] pt-[18px]">
//           {/* Course Name */}
//           <h3 className="mb-[3px] text-[18px] font-bold leading-[27px] text-[#444A6D]">
//             {batch.courseName}
//           </h3>

//           {/* Batch Name */}
//           <p className="mb-[12px] text-[12px] uppercase tracking-[0.3px] text-[#999]">
//             {batch.batchName}
//           </p>

//           {/* Description */}
//           <p className="mb-[14px] text-[13px] leading-[21px] text-[#666]">
//             {batch.shortDescription}
//           </p>

//           {/* Batch Information */}
//           <ul className="m-0 mb-[15px] list-none space-y-[7px] p-0 text-[13px] leading-[20px] text-[#666]">
//             <li className="flex items-center">
//               <span className="mr-[7px] text-[#727CB6]">
//                 <CalendarIcon />
//               </span>

//               <span>
//                 <strong className="font-semibold text-[#555]">Starts:</strong>{" "}
//                 {formatBatchDate(batch.startDate)}
//               </span>
//             </li>

//             <li className="flex items-center">
//               <span className="mr-[7px] text-[#727CB6]">
//                 <ClockIcon />
//               </span>

//               <span>
//                 <strong className="font-semibold text-[#555]">Timing:</strong>{" "}
//                 {batch.classTiming}
//               </span>
//             </li>

//             <li className="flex items-center">
//               <span className="mr-[7px] text-[#727CB6]">
//                 <DurationIcon />
//               </span>

//               <span>
//                 <strong className="font-semibold text-[#555]">Duration:</strong>{" "}
//                 {batch.durationText}
//               </span>
//             </li>

//             <li className="flex items-center">
//               <span className="mr-[7px] text-[#727CB6]">
//                 <UserIcon />
//               </span>

//               <span>
//                 <strong className="font-semibold text-[#555]">
//                   Instructor:
//                 </strong>{" "}
//                 {batch.instructor?.name}
//               </span>
//             </li>
//           </ul>

//           {/* Seats */}
//           <div className="mb-[14px]">
//             <div className="mb-[6px] text-[12px] text-[#666]">
//               {batch.availableSeats} of {batch.totalSeats} seats available
//             </div>

//             <div className="h-[6px] overflow-hidden rounded-[10px] bg-[#eceef5]">
//               <div
//                 className="h-full rounded-[10px] bg-[#727CB6]"
//                 style={{
//                   width: `${seatsPercentage}%`,
//                 }}
//               />
//             </div>
//           </div>

//           {/* Price */}
//           <div className="flex items-baseline gap-[10px]">
//             {batch.discountedFee ? (
//               <>
//                 <span className="text-[13px] text-[#aaa] line-through">
//                   {formatBatchPrice(batch.fee)}
//                 </span>

//                 <span className="text-[20px] font-bold text-[#425283]">
//                   {formatBatchPrice(batch.discountedFee)}
//                 </span>
//               </>
//             ) : (
//               <span className="text-[20px] font-bold text-[#425283]">
//                 {formatBatchPrice(batch.fee)}
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Card Footer */}
//         <div className="px-[18px] pb-[18px] pt-[14px]">
//           <Link
//             to={detailPath}
//             className="block rounded-[3px] bg-[#727CB6] px-[15px] py-[9px] text-center text-[13px] text-white transition-colors duration-200 hover:bg-[#444A6D]"
//           >
//             View Details
//           </Link>
//         </div>
//       </article>
//     </div>
//   );
// };

// export default BatchCard;

import { Link } from "react-router-dom";

const formatDate = (date) => {
  if (!date) return "";

  // Works for "2026-10-09" and "2026-10-09T00:00:00.000000Z"
  const [year, month, day] = String(date).slice(0, 10).split("-").map(Number);
  const parsedDate = new Date(year, month - 1, day);

  // An invalid date returns empty text instead of crashing the page
  if (!year || Number.isNaN(parsedDate.getTime())) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
};

const formatTime = (time) => {
  if (!time) return "";

  const [hours, minutes] = time.split(":");

  const date = new Date();

  date.setHours(Number(hours));
  date.setMinutes(Number(minutes));

  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatPrice = (price) => {
  if (price === null || price === undefined) return "";

  return new Intl.NumberFormat("en-IN").format(Number(price));
};

const getStatusClass = (status) => {
  const styles = {
    "Enrolling Open": "bg-emerald-500",
    "Filling Fast": "bg-orange-500",
    "Few Seats Left": "bg-orange-500",
    "Coming Soon": "bg-blue-500",
    "Sold Out": "bg-red-500",
  };

  return styles[status] || "bg-gray-500";
};

const getModeIcon = (mode) => {
  if (mode === "Online") return "💻";
  if (mode === "Offline") return "🏫";
  if (mode === "Hybrid") return "🔄";

  return "📚";
};

const getSeatsPercentage = (batch) => {
  if (!batch.total_seats) return 0;

  return Math.min(
    100,
    Math.max(
      0,
      (Number(batch.available_seats) / Number(batch.total_seats)) * 100,
    ),
  );
};

const CalendarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 14" />
  </svg>
);

const DurationIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 2h12" />
    <path d="M6 22h12" />
    <path d="M8 2c0 5 4 5 4 10s-4 5-4 10" />
    <path d="M16 2c0 5-4 5-4 10s4 5 4 10" />
  </svg>
);

const UserIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M5 21a7 7 0 0 1 14 0" />
  </svg>
);

const BatchCard = ({ batch }) => {
  const seatsPercentage = getSeatsPercentage(batch);

  return (
    <div className="mb-[30px] w-full px-[15px] sm:w-1/2 lg:w-1/3">
      <article className="flex h-full flex-col overflow-hidden rounded-[4px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
        {/* Card Header */}
        <div className="flex min-h-[52px] items-center justify-between gap-[10px] bg-[#425283] px-[18px] py-[10px]">
          <span
            className={`rounded-[20px] px-[11px] py-[5px] text-[11px] font-semibold text-white ${getStatusClass(
              batch.status,
            )}`}
          >
            {batch.status}
          </span>

          <span className="text-[12px] font-semibold text-white">
            {getModeIcon(batch.mode)} {batch.mode}
          </span>
        </div>

        {/* Card Body */}
        <div className="flex flex-1 flex-col px-[18px] pb-[8px] pt-[18px]">
          {/* Course Name */}
          <h3 className="mb-[3px] text-[18px] font-bold leading-[27px] text-[#444A6D]">
            {batch.course?.course_name}
          </h3>

          {/* Batch Name */}
          <p className="mb-[12px] text-[12px] uppercase tracking-[0.3px] text-[#999]">
            {batch.batch_name}
          </p>

          {/* Description */}
          <p className="mb-[14px] text-[13px] leading-[21px] text-[#666]">
            {batch.short_description}
          </p>

          {/* Batch Information */}
          <ul className="m-0 mb-[15px] list-none space-y-[7px] p-0 text-[13px] leading-[20px] text-[#666]">
            <li className="flex items-center">
              <span className="mr-[7px] text-[#727CB6]">
                <CalendarIcon />
              </span>

              <span>
                <strong className="font-semibold text-[#555]">Starts:</strong>{" "}
                {formatDate(batch.start_date)}
              </span>
            </li>

            <li className="flex items-center">
              <span className="mr-[7px] text-[#727CB6]">
                <ClockIcon />
              </span>

              <span>
                <strong className="font-semibold text-[#555]">Timing:</strong>{" "}
                {formatTime(batch.class_start_time)}
                {" - "}
                {formatTime(batch.class_end_time)}
              </span>
            </li>

            <li className="flex items-center">
              <span className="mr-[7px] text-[#727CB6]">
                <DurationIcon />
              </span>

              <span>
                <strong className="font-semibold text-[#555]">Duration:</strong>{" "}
                {batch.duration_text}
              </span>
            </li>

            <li className="flex items-center">
              <span className="mr-[7px] text-[#727CB6]">
                <UserIcon />
              </span>

              <span>
                <strong className="font-semibold text-[#555]">
                  Instructor:
                </strong>{" "}
                {batch.instructor_name || "Not specified"}
              </span>
            </li>
          </ul>

          {/* Seats */}
          <div className="mb-[14px]">
            <div className="mb-[6px] text-[12px] text-[#666]">
              {batch.available_seats} of {batch.total_seats} seats available
            </div>

            <div className="h-[6px] overflow-hidden rounded-[10px] bg-[#eceef5]">
              <div
                className="h-full rounded-[10px] bg-[#727CB6]"
                style={{
                  width: `${seatsPercentage}%`,
                }}
              />
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-[10px]">
            {batch.discounted_fee !== null &&
            batch.discounted_fee !== undefined ? (
              <>
                <span className="text-[13px] text-[#aaa] line-through">
                  ₹{formatPrice(batch.fee)}
                </span>

                <span className="text-[20px] font-bold text-[#425283]">
                  ₹{formatPrice(batch.discounted_fee)}
                </span>
              </>
            ) : (
              <span className="text-[20px] font-bold text-[#425283]">
                ₹{formatPrice(batch.fee)}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer */}
        <div className="px-[18px] pb-[18px] pt-[14px]">
          <Link
            to={`/upcoming-batches/${batch?.slug}`}
            className="block rounded-[3px] bg-[#727CB6] px-[15px] py-[9px] text-center text-[13px] text-white transition-colors duration-200 hover:bg-[#444A6D]"
          >
            View Details
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BatchCard;
