// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import toast from "react-hot-toast";

// import PageHeader from "../components/common/PageHeader";
// import { getCourse } from "../api/courseApi";

// const CourseDetails = () => {
//   const { id } = useParams();

//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         setLoading(true);

//         const response = await getCourse(id);

//         setCourse(response?.data ?? null);
//       } catch (error) {
//         console.error("Failed to fetch course:", error);

//         toast.error(
//           error.response?.data?.message || "Unable to load course details.",
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourse();
//   }, [id]);

//   if (loading) {
//     return (
//       <>
//         <PageHeader title="Course Details" />

//         <div className="py-[80px] text-center">
//           <div className="mx-auto h-[35px] w-[35px] animate-spin rounded-full border-[3px] border-[#ddd] border-t-[#727CB6]" />

//           <p className="mt-[15px] text-[14px] text-[#888]">
//             Loading course details...
//           </p>
//         </div>
//       </>
//     );
//   }

//   if (!course) {
//     return (
//       <>
//         <PageHeader title="Course Details" />

//         <div className="px-[20px] py-[80px] text-center">
//           <h2 className="text-[20px] font-semibold text-[#676767]">
//             Course not found
//           </h2>

//           <Link
//             to="/courses"
//             className="mt-[20px] inline-block rounded-[4px] bg-[#727CB6] px-[20px] py-[10px] text-[13px] text-white"
//           >
//             Back to Courses
//           </Link>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <PageHeader title={course.course_name} />

//       <section className="bg-[#f7f7f9] pb-[70px] pt-[50px]">
//         <div className="mx-auto w-full max-w-[1170px] px-[15px]">
//           {/* Course Header */}
//           <div className="mb-[30px] rounded-[5px] bg-white p-[30px] shadow-sm">
//             <h1 className="mb-[10px] text-[28px] font-semibold text-[#676767]">
//               {course.course_name}
//             </h1>

//             {course.category && (
//               <p className="mb-[15px] text-[14px] text-[#727CB6]">
//                 {course.category}
//               </p>
//             )}

//             <p className="text-[14px] leading-[26px] text-[#888]">
//               {course.short_description}
//             </p>
//           </div>

//           {/* Course Information */}
//           <div className="mb-[30px] grid grid-cols-1 gap-[20px] md:grid-cols-3">
//             <div className="rounded-[5px] bg-white p-[20px] shadow-sm">
//               <p className="text-[12px] text-[#999]">Level</p>

//               <p className="mt-[5px] text-[15px] font-medium text-[#676767]">
//                 {course.level || "N/A"}
//               </p>
//             </div>

//             <div className="rounded-[5px] bg-white p-[20px] shadow-sm">
//               <p className="text-[12px] text-[#999]">Duration</p>

//               <p className="mt-[5px] text-[15px] font-medium text-[#676767]">
//                 {course.duration || "N/A"}
//               </p>
//             </div>

//             <div className="rounded-[5px] bg-white p-[20px] shadow-sm">
//               <p className="text-[12px] text-[#999]">Total Hours</p>

//               <p className="mt-[5px] text-[15px] font-medium text-[#676767]">
//                 {course.total_hours || "N/A"}
//               </p>
//             </div>
//           </div>

//           {/* Course Description */}
//           {course.course_description && (
//             <div className="mb-[30px] rounded-[5px] bg-white p-[30px] shadow-sm">
//               <h2 className="mb-[15px] text-[20px] font-semibold text-[#676767]">
//                 Course Overview
//               </h2>

//               <p className="whitespace-pre-line text-[14px] leading-[26px] text-[#888]">
//                 {course.course_description}
//               </p>
//             </div>
//           )}

//           {/* Back */}
//           <Link
//             to="/courses"
//             className="inline-block rounded-[4px] bg-[#727CB6] px-[20px] py-[10px] text-[13px] font-medium text-white hover:bg-[#505B95]"
//           >
//             ← Back to Courses
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CourseDetails;
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { getCourse } from "../api/courseApi";
import PageHeader from "../components/common/PageHeader";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN").format(Number(price) || 0);

const formatDate = (date) => {
  if (!date) return "";

  // Works for "2026-10-09" and "2026-10-09T00:00:00.000000Z"
  const [year, month, day] = String(date).slice(0, 10).split("-").map(Number);

  if (!year) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
};

const formatTime = (time) => {
  if (!time) return "";

  const [hours, minutes] = String(time).split(":");
  const date = new Date();
  date.setHours(Number(hours), Number(minutes));

  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const getStatusStyle = (status) => {
  const styles = {
    "Enrolling Open": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Filling Fast": "bg-orange-50 text-orange-700 border-orange-200",
    "Few Seats Left": "bg-orange-50 text-orange-700 border-orange-200",
    "Coming Soon": "bg-blue-50 text-blue-700 border-blue-200",
    "Sold Out": "bg-red-50 text-red-700 border-red-200",
  };

  return styles[status] || "bg-gray-50 text-gray-700 border-gray-200";
};

// Items can be plain text or objects, always return text
const toText = (item) =>
  typeof item === "string" ? item : (item?.title ?? item?.name ?? "");

const toList = (value) =>
  Array.isArray(value) ? value.map(toText).filter(Boolean) : [];

const toArray = (value) => (Array.isArray(value) ? value : []);


const SectionTitle = ({ eyebrow, title, description }) => (
  <div className="mb-7">
    {eyebrow && (
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#727CB6]">
        {eyebrow}
      </p>
    )}

    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h2>

    {description && (
      <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
        {description}
      </p>
    )}
  </div>
);

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#727CB6]/10 text-[#727CB6]">
      {icon}
    </div>

    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-gray-800">
        {value || "Not specified"}
      </p>
    </div>
  </div>
);

const CurriculumItem = ({ module, index }) => {
  const [open, setOpen] = useState(index === 0);
  const topics = toList(module?.topics);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-gray-50"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#727CB6] text-sm font-bold text-white">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="font-semibold text-gray-800">{module?.title}</span>
        </div>

        <span
          className={`text-xl text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </button>

      {open && (
        <div className="border-t border-gray-100 bg-gray-50 px-5 py-5">
          {module?.description && (
            <p className="mb-4 text-sm leading-6 text-gray-600">
              {module.description}
            </p>
          )}

          {topics.length > 0 && (
            <ul className="grid gap-3 sm:grid-cols-2">
              {topics.map((topic, topicIndex) => (
                <li
                  key={topicIndex}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                    ✓
                  </span>

                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

const FaqItem = ({ faq, index }) => {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        className="flex w-full items-center justify-between gap-5 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-800">{faq?.question}</span>

        <span className="shrink-0 text-xl text-[#727CB6]">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="whitespace-pre-line pb-5 pr-8 text-sm leading-7 text-gray-600">
          {faq?.answer}
        </div>
      )}
    </div>
  );
};

// One upcoming batch of this course
const BatchItem = ({ batch }) => {
  const isSoldOut = batch.status === "Sold Out";
  const hasDiscount = Number(batch.discounted_fee) > 0;

  const timing =
    batch.class_start_time && batch.class_end_time
      ? `${formatTime(batch.class_start_time)} - ${formatTime(batch.class_end_time)}`
      : "";

  const details = [
    ["📅", "Starts", formatDate(batch.start_date)],
    ["⏰", "Timing", timing],
    ["🗓", "Days", batch.class_days],
    [
      "💻",
      "Mode",
      batch.location && batch.mode !== "Online"
        ? `${batch.mode} - ${batch.location}`
        : batch.mode,
    ],
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-[#727CB6]/40 hover:shadow-md sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-gray-900">{batch.batch_name}</h3>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-bold ${getStatusStyle(
            batch.status,
          )}`}
        >
          {batch.status}
        </span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {details.map(([icon, label, value]) =>
          value ? (
            <p key={label} className="flex items-start gap-2 text-sm">
              <span>{icon}</span>

              <span className="text-gray-500">
                {label}:{" "}
                <strong className="font-semibold text-gray-800">{value}</strong>
              </span>
            </p>
          ) : null,
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-4">
        <div>
          {hasDiscount ? (
            <p className="flex items-end gap-2">
              <span className="text-xl font-bold text-[#505B95]">
                Rs. {formatPrice(batch.discounted_fee)}
              </span>

              <span className="pb-0.5 text-sm text-gray-400 line-through">
                Rs. {formatPrice(batch.fee)}
              </span>
            </p>
          ) : (
            <p className="text-xl font-bold text-[#505B95]">
              Rs. {formatPrice(batch.fee)}
            </p>
          )}

          <p className="mt-1 text-xs text-gray-500">
            {batch.available_seats} of {batch.total_seats} seats available
          </p>
        </div>

        <Link
          to={`/upcoming-batches/${batch.slug}`}
          className={`rounded-lg px-5 py-2.5 text-sm font-bold text-white transition ${
            isSoldOut
              ? "bg-gray-500 hover:bg-gray-600"
              : "bg-[#727CB6] hover:bg-[#505B95]"
          }`}
        >
          {isSoldOut ? "View Batch" : "View & Enroll"}
        </Link>
      </div>
    </div>
  );
};

/* =====================================================
   PAGE
===================================================== */

const CourseDetails = () => {
  const { slug } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);

        const response = await getCourse(slug);

        setCourse(response?.data ?? null);
      } catch (error) {
        console.error("Failed to fetch course:", error);

        setCourse(null);

        toast.error(
          error?.response?.data?.message || "Unable to load course details.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug]);

  /* ---------- Loading ---------- */
  if (loading) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-[3px] border-gray-200 border-t-[#727CB6]" />

          <p className="mt-4 text-sm text-gray-500">
            Loading course details...
          </p>
        </div>
      </section>
    );
  }

  /* ---------- Not found ---------- */
  if (!course) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#727CB6]/10 text-3xl">
            📚
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Course Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            The course you are looking for could not be found.
          </p>

          <Link
            to="/courses"
            className="mt-7 inline-flex rounded-lg bg-[#727CB6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#505B95]"
          >
            View All Courses
          </Link>
        </div>
      </section>
    );
  }

  /* ---------- Prepare data ---------- */
  const batches = toArray(course.batches);
  const learningOutcomes = toList(course.learning_outcomes);
  const curriculum = toArray(course.curriculum);
  const prerequisites = toList(course.prerequisites);
  const whoShouldJoin = toList(course.who_should_join);
  const features = toList(course.course_features);
  const faqs = toArray(course.faqs);

  return (
    <div className="bg-gray-50">
        <PageHeader title="Courses" />
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#505B95] via-[#727CB6] to-[#858dcc]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-[1170px] px-4 py-12 sm:py-16">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-3">
              {course.category && (
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  {course.category}
                </span>
              )}

              {course.level && (
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  {course.level} Level
                </span>
              )}
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {course.course_name}
            </h1>

            {course.short_description && (
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                {course.short_description}
              </p>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              {course.duration && (
                <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm">
                  ⏱ {course.duration}
                </div>
              )}

              {course.total_hours ? (
                <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm">
                  📖 {course.total_hours} Hours
                </div>
              ) : null}

              <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm">
                🎓 {batches.length} Upcoming{" "}
                {batches.length === 1 ? "Batch" : "Batches"}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#batches"
                className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#505B95] shadow-lg transition hover:bg-gray-100"
              >
                View Upcoming Batches
              </a>

              <Link
                to="/contact"
                className="rounded-lg border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK INFO
      ====================================================== */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-[1170px] grid-cols-1 divide-y divide-gray-100 px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          <div className="py-6 sm:px-6">
            <InfoItem icon="📊" label="Level" value={course.level} />
          </div>

          <div className="py-6 sm:px-6">
            <InfoItem icon="🎓" label="Duration" value={course.duration} />
          </div>

          <div className="py-6 sm:px-6">
            <InfoItem
              icon="⏰"
              label="Total Hours"
              value={course.total_hours ? `${course.total_hours} Hours` : ""}
            />
          </div>

          <div className="py-6 sm:px-6">
            <InfoItem
              icon="📅"
              label="Next Batch"
              value={
                batches[0]?.start_date
                  ? formatDate(batches[0].start_date)
                  : "To be announced"
              }
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <main className="mx-auto max-w-[1170px] px-4 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            {/* Overview */}
            {(course.course_description || course.short_description) && (
              <section>
                <SectionTitle
                  eyebrow="About the Course"
                  title="Course Overview"
                />

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                  <p className="whitespace-pre-line text-sm leading-8 text-gray-600 sm:text-base">
                    {course.course_description || course.short_description}
                  </p>
                </div>
              </section>
            )}

            {/* Upcoming batches */}
            <section id="batches" className="scroll-mt-6">
              <SectionTitle
                eyebrow="Join a Batch"
                title="Upcoming Batches"
                description="Choose the batch that suits your schedule and reserve your seat."
              />

              {batches.length > 0 ? (
                <div className="space-y-4">
                  {batches.map((batch) => (
                    <BatchItem key={batch.id} batch={batch} />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center">
                  <p className="text-base font-semibold text-gray-800">
                    No batch is scheduled right now
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    Contact us and we will let you know when the next batch
                    starts.
                  </p>

                  <Link
                    to="/contact"
                    className="mt-5 inline-flex rounded-lg bg-[#727CB6] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#505B95]"
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </section>

            {/* Learning outcomes */}
            {learningOutcomes.length > 0 && (
              <section>
                <SectionTitle
                  eyebrow="Your Benefits"
                  title="What You Will Learn"
                  description="By the end of this course, you will be able to:"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  {learningOutcomes.map((outcome, index) => (
                    <div
                      key={index}
                      className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-600">
                        ✓
                      </span>

                      <p className="text-sm leading-6 text-gray-600">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Curriculum */}
            {curriculum.length > 0 && (
              <section>
                <SectionTitle
                  eyebrow="Course Content"
                  title="Curriculum"
                  description="A practical, project-focused curriculum designed to take you from fundamentals to real-world implementation."
                />

                <div className="space-y-3">
                  {curriculum.map((module, index) => (
                    <CurriculumItem key={index} module={module} index={index} />
                  ))}
                </div>
              </section>
            )}

            {/* Prerequisites */}
            {prerequisites.length > 0 && (
              <section>
                <SectionTitle
                  eyebrow="Before You Start"
                  title="Prerequisites"
                />

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <ul className="space-y-4">
                    {prerequisites.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <span className="mt-0.5 text-[#727CB6]">✓</span>

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Who should join */}
            {whoShouldJoin.length > 0 && (
              <section>
                <SectionTitle
                  eyebrow="Is This For You?"
                  title="Who Should Join?"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  {whoShouldJoin.map((person, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-gray-200 bg-white p-5 text-sm leading-6 text-gray-600 shadow-sm"
                    >
                      {person}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            {faqs.length > 0 && (
              <section>
                <SectionTitle
                  eyebrow="Need Help?"
                  title="Frequently Asked Questions"
                />

                <div className="rounded-2xl border border-gray-200 bg-white px-5 shadow-sm">
                  {faqs.map((faq, index) => (
                    <FaqItem key={index} faq={faq} index={index} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* =================================================
              SIDEBAR
          ================================================== */}
          <aside className="lg:col-span-1">
            <div className="space-y-5 lg:sticky lg:top-6">
              <div className="rounded-2xl bg-[#292F38] p-6 text-white shadow-xl">
                <p className="text-sm font-medium text-white/60">
                  Interested in this course?
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Start Learning Today
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  Pick a batch, or contact our team and we will help you choose
                  the right one.
                </p>

                <a
                  href="#batches"
                  className="mt-6 flex w-full justify-center rounded-lg bg-[#727CB6] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#858dcc]"
                >
                  View Batches
                </a>

                <Link
                  to="/contact"
                  className="mt-3 flex w-full justify-center rounded-lg border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>

              {features.length > 0 && (
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900">Course Highlights</h3>

                  <ul className="mt-4 space-y-3">
                    {features.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-sm leading-6 text-gray-600"
                      >
                        <span className="text-emerald-500">✓</span>

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-[#727CB6]">
        <div className="mx-auto max-w-[1170px] px-4 py-12 text-center sm:py-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Start Your Learning Journey?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            Seats are limited. Contact our team today to secure your place in
            the next batch.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-[#505B95] shadow-lg transition hover:bg-gray-100"
            >
              Contact Us
            </Link>

            <Link
              to="/courses"
              className="inline-flex rounded-lg border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Browse All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
