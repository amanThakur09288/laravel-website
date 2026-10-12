import { Link } from "react-router-dom";
import {
  ArrowIcon,
  CheckIcon,
  TrainingIcon,
} from "../../components/services/ServiceIcons";
import PageHeader from "../../components/common/PageHeader";

const learningTracks = [
  {
    number: "01",
    title: "Web Development",
    text: "Build practical frontend and backend development skills.",
  },
  {
    number: "02",
    title: "Networking",
    text: "Understand network fundamentals, infrastructure and administration.",
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    text: "Learn modern infrastructure and deployment concepts.",
  },
  {
    number: "04",
    title: "Career Preparation",
    text: "Practice projects, interview concepts and real-world workflows.",
  },
];

const Training = () => {
  return (
    <>
      <PageHeader title="Training" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#727CB6] text-white">
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full border-[50px] border-white/5" />

        <div className="mx-auto max-w-[1170px] px-4 py-14 sm:px-6 sm:py-20 lg:px-0">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <TrainingIcon className="h-8 w-8" />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                Learn by doing
              </p>

              <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-5xl">
                Turn technology concepts into practical skills.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                Our training approach combines instructor-led learning,
                hands-on practice, projects and support so learners can build
                confidence through real work.
              </p>

              <Link
                to="/upcoming-batches"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#505B95] hover:bg-gray-100"
              >
                Explore Upcoming Batches
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>

            {/* Learning Model */}
            <div className="rounded-3xl bg-[#292F38] p-5 shadow-2xl sm:p-7">
              <p className="text-xs uppercase tracking-widest text-white/40">
                Learning model
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Learn",
                  "Practice",
                  "Build",
                  "Review",
                  "Improve",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-xl border border-white/10 p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#727CB6] text-xs font-bold">
                      {index + 1}
                    </span>

                    <span className="font-semibold text-white/85">
                      {item}
                    </span>

                    {index < 4 && (
                      <span className="ml-auto text-white/20">
                        ↓
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#727CB6]">
                Learning Paths
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Choose the direction that fits your goals.
              </h2>
            </div>

            <Link
              to="/upcoming-batches"
              className="text-sm font-semibold text-[#727CB6] hover:text-[#505B95]"
            >
              View batches →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {learningTracks.map((track) => (
              <article
                key={track.number}
                className="group flex gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-3xl font-black text-[#727CB6]/20">
                  {track.number}
                </span>

                <div>
                  <h3 className="font-bold text-gray-900">
                    {track.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {track.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What Learners Get */}
      <section className="bg-[#f6f7fb] py-14 sm:py-20">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-0">
          <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900">
              What learners can expect
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Instructor-led sessions",
                "Hands-on practice",
                "Real-world projects",
                "Dedicated doubt support",
                "Structured learning path",
                "Career-focused guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 text-sm font-medium text-gray-700"
                >
                  <CheckIcon className="h-5 w-5 shrink-0 text-emerald-500" />

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;