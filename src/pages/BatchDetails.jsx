import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { getBatch } from "../api/batchApi";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN").format(Number(price) || 0);

const formatDate = (date) => {
  if (!date) return "";

  // API may send "2026-10-09" or "2026-10-09T00:00:00Z"
  const [year, month, day] = String(date).slice(0, 10).split("-");

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

// Always returns an array, even if the API sends null
const toArray = (value) => (Array.isArray(value) ? value : []);

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

const SectionTitle = ({ eyebrow, title, description }) => (
  <div className="mb-8">
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

const CurriculumItem = ({ module, index }) => {
  const [open, setOpen] = useState(index === 0);
  const topics = toArray(module?.topics);

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

/* =====================================================
   PAGE
===================================================== */

const BatchDetails = () => {
  const { slug } = useParams();

  const [batch, setBatch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBatch = async () => {
      try {
        setLoading(true);
        const response = await getBatch(slug);
        setBatch(response?.data ?? null);
      } catch (error) {
        console.error("Failed to fetch batch:", error);
        setBatch(null);
        toast.error(
          error?.response?.data?.message || "Unable to load batch details.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBatch();
  }, [slug]);

  /* ---------- Loading ---------- */
  if (loading) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-[3px] border-gray-200 border-t-[#727CB6]" />
          <p className="mt-4 text-sm text-gray-500">Loading batch details...</p>
        </div>
      </section>
    );
  }

  /* ---------- Not found ---------- */
  if (!batch) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#727CB6]/10 text-3xl">
            📚
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Batch Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            The training batch you are looking for could not be found.
          </p>

          <Link
            to="/upcoming-batches"
            className="mt-7 inline-flex rounded-lg bg-[#727CB6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#505B95]"
          >
            View Upcoming Batches
          </Link>
        </div>
      </section>
    );
  }

  /* ---------- Prepare data ---------- */
  const isSoldOut = batch.status === "Sold Out";
  const hasDiscount =
    batch.discounted_fee !== null &&
    batch.discounted_fee !== undefined &&
    Number(batch.discounted_fee) > 0;

  const classTiming =
    batch.class_start_time && batch.class_end_time
      ? `${formatTime(batch.class_start_time)} - ${formatTime(
          batch.class_end_time,
        )}`
      : "";

  const learningOutcomes = toArray(batch.learning_outcomes);
  const curriculum = toArray(batch.curriculum);
  const prerequisites = toArray(batch.prerequisites);
  const whoShouldJoin = toArray(batch.who_should_join);
  const faqs = toArray(batch.faqs);
  const paymentInfo = toArray(batch.payment_info);

  const instructorInitials = (batch.instructor_name || "")
    .split(" ")
    .filter(Boolean)
    .map((name) => name[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="bg-gray-50">
      {/* =====================================================
          BREADCRUMB
      ====================================================== */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1170px] px-4 py-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition hover:text-[#727CB6]"
                >
                  Home
                </Link>
              </li>
              <li className="text-gray-300">/</li>
              <li>
                <Link
                  to="/upcoming-batches"
                  className="text-gray-500 transition hover:text-[#727CB6]"
                >
                  Upcoming Batches
                </Link>
              </li>
              <li className="text-gray-300">/</li>
              <li className="max-w-[250px] truncate font-medium text-gray-800">
                {batch.batch_name}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#505B95] via-[#727CB6] to-[#858dcc]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-[1170px] px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-3">
            {/* Hero content */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-3">
                <span
                  className={`rounded-full border px-4 py-1.5 text-xs font-bold ${getStatusStyle(
                    batch.status,
                  )}`}
                >
                  {batch.status}
                </span>

                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  {batch.mode}
                </span>
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                {batch.batch_name}
              </p>

              <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {batch.course?.course_name}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                {batch.short_description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {batch.start_date && (
                  <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm">
                    📅 {formatDate(batch.start_date)}
                  </div>
                )}

                {batch.duration_text && (
                  <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm">
                    ⏱ {batch.duration_text}
                  </div>
                )}

                {batch.instructor_name && (
                  <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm">
                    👨‍🏫 {batch.instructor_name}
                  </div>
                )}
              </div>
            </div>

            {/* Price card */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-7">
                <p className="text-sm font-medium text-gray-500">Course Fee</p>

                {hasDiscount ? (
                  <div className="mt-2 flex items-end gap-3">
                    <span className="text-3xl font-bold text-[#505B95]">
                      Rs. {formatPrice(batch.discounted_fee)}
                    </span>
                    <span className="pb-1 text-sm text-gray-400 line-through">
                      Rs. {formatPrice(batch.fee)}
                    </span>
                  </div>
                ) : (
                  <p className="mt-2 text-3xl font-bold text-[#505B95]">
                    Rs. {formatPrice(batch.fee)}
                  </p>
                )}

                {batch.offer_text && (
                  <div className="mt-4 rounded-lg bg-amber-50 p-3 text-xs font-medium leading-5 text-amber-700">
                    🎁 {batch.offer_text}
                  </div>
                )}

                <div className="mt-5 flex items-center justify-between border-b border-gray-100 pb-4 text-sm">
                  <span className="text-gray-500">Seats available</span>
                  <strong className="text-gray-800">
                    {batch.available_seats} / {batch.total_seats}
                  </strong>
                </div>

                <Link
                  to="/contact"
                  className={`mt-5 flex w-full items-center justify-center rounded-lg px-5 py-3.5 text-sm font-bold text-white transition ${
                    isSoldOut
                      ? "bg-gray-500 hover:bg-gray-600"
                      : "bg-[#727CB6] hover:bg-[#505B95]"
                  }`}
                >
                  {isSoldOut ? "Join Waitlist" : "Enroll Now"}
                </Link>

                <p className="mt-3 text-center text-xs text-gray-400">
                  Secure your seat before the batch fills.
                </p>
              </div>
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
            <InfoItem
              icon="📅"
              label="Start Date"
              value={formatDate(batch.start_date)}
            />
          </div>

          <div className="py-6 sm:px-6">
            <InfoItem icon="⏰" label="Class Timing" value={classTiming} />
          </div>

          <div className="py-6 sm:px-6">
            <InfoItem icon="🎓" label="Duration" value={batch.duration_text} />
          </div>

          <div className="py-6 sm:px-6">
            <InfoItem
              icon="💻"
              label="Learning Mode"
              value={
                batch.location && batch.mode !== "Online"
                  ? `${batch.mode} - ${batch.location}`
                  : batch.mode
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
            {/* Course overview */}
            <section>
              <SectionTitle
                eyebrow="About the Course"
                title="Course Overview"
              />

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="whitespace-pre-line text-sm leading-8 text-gray-600 sm:text-base">
                  {batch.course_description || batch.short_description}
                </p>

                {batch.batch_overview && (
                  <div className="mt-6 rounded-xl bg-[#727CB6]/5 p-5">
                    <h3 className="font-semibold text-gray-800">
                      About This Batch
                    </h3>
                    <p className="mt-2 whitespace-pre-line text-sm leading-7 text-gray-600">
                      {batch.batch_overview}
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Learning outcomes */}
            {learningOutcomes.length > 0 && (
              <section>
                <SectionTitle
                  eyebrow="Your Benefits"
                  title="What You Will Learn"
                  description="By the end of this training, you will be able to:"
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

            {/* Instructor */}
            {batch.instructor_name && (
              <section>
                <SectionTitle
                  eyebrow="Meet Your Instructor"
                  title="Learn From Industry Experience"
                />

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#727CB6] to-[#505B95] text-3xl font-bold text-white">
                      {instructorInitials}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {batch.instructor_name}
                      </h3>

                      {batch.instructor_designation && (
                        <p className="mt-1 text-sm font-medium text-[#727CB6]">
                          {batch.instructor_designation}
                        </p>
                      )}

                      {batch.instructor_experience && (
                        <p className="mt-3 text-sm font-semibold text-gray-700">
                          {batch.instructor_experience}
                        </p>
                      )}

                      {batch.instructor_bio && (
                        <p className="mt-3 whitespace-pre-line text-sm leading-7 text-gray-600">
                          {batch.instructor_bio}
                        </p>
                      )}
                    </div>
                  </div>
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
              {/* Enrollment card */}
              <div className="rounded-2xl bg-[#292F38] p-6 text-white shadow-xl">
                <p className="text-sm font-medium text-white/60">
                  Ready to start?
                </p>

                <h3 className="mt-2 text-2xl font-bold">Reserve Your Seat</h3>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  Join this batch and start building practical skills with
                  instructor-led training.
                </p>

                <Link
                  to="/contact"
                  className="mt-6 flex w-full justify-center rounded-lg bg-[#727CB6] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#858dcc]"
                >
                  {isSoldOut ? "Contact for Waitlist" : "Enroll Now"}
                </Link>
              </div>

              {/* Payment */}
              {paymentInfo.length > 0 && (
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900">
                    Payment Information
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {paymentInfo.map((item, index) => (
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

              {/* Training support */}
              {(batch.live_class_info ||
                batch.recorded_class_info ||
                batch.doubt_support) && (
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900">Training Support</h3>

                  <div className="mt-5 space-y-4 text-sm text-gray-600">
                    {batch.live_class_info && (
                      <div>
                        <p className="font-semibold text-gray-800">
                          Live Classes
                        </p>
                        <p className="mt-1 leading-6">
                          {batch.live_class_info}
                        </p>
                      </div>
                    )}

                    {batch.recorded_class_info && (
                      <div>
                        <p className="font-semibold text-gray-800">
                          Recorded Classes
                        </p>
                        <p className="mt-1 leading-6">
                          {batch.recorded_class_info}
                        </p>
                      </div>
                    )}

                    {batch.doubt_support && (
                      <div>
                        <p className="font-semibold text-gray-800">
                          Doubt Support
                        </p>
                        <p className="mt-1 leading-6">{batch.doubt_support}</p>
                      </div>
                    )}
                  </div>
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
            the upcoming batch.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-[#505B95] shadow-lg transition hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BatchDetails;