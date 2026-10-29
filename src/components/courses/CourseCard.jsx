import { Link } from "react-router-dom";

// Level badge colours (falls back to a neutral style for any other value)
const levelStyles = {
  Beginner: "border-emerald-300/40 bg-emerald-400/20 text-emerald-50",
  Intermediate: "border-amber-300/40 bg-amber-400/20 text-amber-50",
  Advanced: "border-rose-300/40 bg-rose-400/20 text-rose-50",
};

const defaultLevelStyle = "border-white/25 bg-white/10 text-white";

// Items can be plain text or objects, always return text
const toText = (item) =>
  typeof item === "string" ? item : (item?.title ?? item?.name ?? "");

const toList = (value) =>
  Array.isArray(value) ? value.map(toText).filter(Boolean) : [];

const Stat = ({ label, value }) => (
  <div className="rounded-[8px] border border-[#eeeeee] bg-[#fafafa] px-[10px] py-[11px] text-center">
    <p className="m-0 text-[10px] font-medium uppercase tracking-[0.7px] text-[#999]">
      {label}
    </p>

    <p className="mt-[5px] truncate text-[13px] font-semibold text-[#505B95]">
      {value}
    </p>
  </div>
);

const CourseCard = ({ course }) => {
  const outcomes = toList(course.learning_outcomes).slice(0, 3);
  const upcomingCount = Number(course.upcoming_batches_count) || 0;

  return (
    <div className="w-full px-[15px] pb-[30px] md:w-1/2 lg:w-1/3">
      <div className="group flex h-full flex-col overflow-hidden rounded-[12px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_16px_40px_rgba(80,91,149,0.22)]">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#505B95] via-[#727CB6] to-[#858dcc] px-[25px] pb-[26px] pt-[24px]">
          <div className="absolute -right-[35px] -top-[35px] h-[120px] w-[120px] rounded-full bg-white/10" />
          <div className="absolute -bottom-[60px] left-[30px] h-[120px] w-[120px] rounded-full bg-white/5" />

          <div className="relative z-10">
            <div className="mb-[18px] flex items-start justify-between gap-[10px]">
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-white/15 text-[22px] backdrop-blur-sm">
                🎓
              </div>

              {course.level && (
                <span
                  className={`rounded-full border px-[11px] py-[4px] text-[10px] font-semibold uppercase tracking-[0.8px] ${
                    levelStyles[course.level] || defaultLevelStyle
                  }`}
                >
                  {course.level}
                </span>
              )}
            </div>

            {course.category && (
              <p className="m-0 mb-[6px] text-[11px] font-semibold uppercase tracking-[1.2px] text-white/70">
                {course.category}
              </p>
            )}

            <h3 className="m-0 text-[21px] font-semibold leading-[29px] text-white">
              {course.course_name}
            </h3>
          </div>
        </div>

        {/* =========================
            BODY
        ========================== */}
        <div className="flex flex-1 flex-col px-[25px] pb-[25px] pt-[22px]">
          <p className="mb-[20px] line-clamp-3 min-h-[72px] text-[14px] leading-[24px] text-[#888]">
            {course.short_description ||
              "Explore this professional training course and develop practical skills for your career."}
          </p>

          {/* Quick facts */}
          <div className="mb-[20px] grid grid-cols-3 gap-[10px]">
            <Stat label="Duration" value={course.duration || "N/A"} />

            <Stat
              label="Hours"
              value={course.total_hours ? `${course.total_hours} hrs` : "N/A"}
            />

            <Stat label="Batches" value={upcomingCount} />
          </div>

          {/* What you will learn (first 3) */}
          {outcomes.length > 0 && (
            <ul className="mb-[22px] space-y-[8px]">
              {outcomes.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-[9px] text-[13px] leading-[20px] text-[#777]"
                >
                  <span className="mt-[1px] flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-600">
                    ✓
                  </span>

                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mb-[18px] mt-auto border-t border-[#eeeeee]" />

          {/* =========================
              FOOTER
          ========================== */}
          <div className="flex items-center justify-between gap-[12px]">
            {upcomingCount > 0 ? (
              <span className="inline-flex items-center gap-[6px] rounded-full bg-emerald-50 px-[11px] py-[5px] text-[11px] font-semibold text-emerald-700">
                <span className="h-[6px] w-[6px] rounded-full bg-emerald-500" />
                {upcomingCount} upcoming{" "}
                {upcomingCount === 1 ? "batch" : "batches"}
              </span>
            ) : (
              <span className="rounded-full bg-gray-100 px-[11px] py-[5px] text-[11px] font-semibold text-gray-500">
                No batch scheduled
              </span>
            )}

            <Link
              to={`/courses/${course?.slug}`}
              className="shrink-0 rounded-[6px] bg-[#727CB6] px-[16px] py-[10px] text-[11px] font-semibold uppercase tracking-[0.4px] text-white transition-all duration-300 hover:bg-[#505B95]"
            >
              View Course →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
