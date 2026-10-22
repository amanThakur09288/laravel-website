// import { useEffect, useState } from "react";

// function getRemainingSeconds(expiresAt) {
//   const difference = new Date(expiresAt).getTime() - Date.now();

//   return Math.max(0, Math.floor(difference / 1000));
// }

// export default function QuizTimer({ expiresAt, onExpire }) {
//   const [remaining, setRemaining] = useState(getRemainingSeconds(expiresAt));

//   useEffect(() => {
//     const updateTimer = () => {
//       const seconds = getRemainingSeconds(expiresAt);

//       setRemaining(seconds);

//       return seconds;
//     };

//     updateTimer();

//     const interval = setInterval(() => {
//       const seconds = updateTimer();

//       if (seconds <= 0) {
//         clearInterval(interval);
//         onExpire();
//       }
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [expiresAt, onExpire]);

//   const minutes = Math.floor(remaining / 60);

//   const seconds = remaining % 60;

//   const isDanger = remaining <= 60;

//   return (
//     <div
//       className={`rounded-lg px-4 py-2 text-sm font-bold ${
//         isDanger ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-800"
//       }`}
//     >
//       {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";

export default function QuizTimer({ remainingSeconds, onTimeUp }) {
  const [seconds, setSeconds] = useState(remainingSeconds || 0);

  const timeUpCalled = useRef(false);

  useEffect(() => {
    setSeconds(remainingSeconds || 0);
    timeUpCalled.current = false;
  }, [remainingSeconds]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((current) => {
        if (current <= 1) {
          clearInterval(timer);

          if (!timeUpCalled.current) {
            timeUpCalled.current = true;
            onTimeUp();
          }

          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [onTimeUp]);

  const minutes = Math.floor(seconds / 60);

  const remaining = seconds % 60;

  return (
    <div className="rounded-xl border border-[#e5e5e5] bg-white px-5 py-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#888]">
        Time Remaining
      </p>

      <p
        className={`mt-1 text-2xl font-bold ${
          seconds <= 60 ? "text-red-500" : "text-[#727CB6]"
        }`}
      >
        {String(minutes).padStart(2, "0")}:{String(remaining).padStart(2, "0")}
      </p>
    </div>
  );
}
