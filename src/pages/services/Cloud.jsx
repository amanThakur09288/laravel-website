import { Link } from "react-router-dom";
import {
  ArrowIcon,
  CheckIcon,
  CloudIcon,
} from "../../components/services/ServiceIcons";
import PageHeader from "../../components/common/PageHeader";

const cloudCards = [
  {
    title: "Cloud Strategy",
    text: "Choose a practical cloud direction based on workload, cost, security and growth requirements.",
  },
  {
    title: "Cloud Migration",
    text: "Move applications and workloads through a structured migration approach with minimal disruption.",
  },
  {
    title: "Cloud Infrastructure",
    text: "Design scalable compute, storage, networking and access foundations for modern applications.",
  },
  {
    title: "Cloud Optimization",
    text: "Review utilization and architecture to improve reliability, performance and operational efficiency.",
  },
];

const cloudBenefits = [
  "Clear migration priorities",
  "Better workload visibility",
  "Scalable infrastructure",
  "Security-conscious access",
  "Performance monitoring",
  "Operational documentation",
];

const cloudArchitectureItems = [
  "Applications",
  "Compute",
  "Storage",
  "Database",
  "Network",
  "Monitoring",
];

const Cloud = () => {
  return (
    <>
      <PageHeader title="Cloud" />

      {/* Hero */}
      <section className="bg-[#eef0fb] py-14 sm:py-20">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-0">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#727CB6] text-white shadow-lg shadow-[#727CB6]/20">
                <CloudIcon className="h-9 w-9" />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#727CB6]">
                Cloud Ready
              </p>

              <h2 className="mt-2 text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
                Move from infrastructure limits to cloud flexibility.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                We help businesses plan, migrate and manage cloud environments
                with a focus on reliability, security and practical business
                outcomes.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#505B95] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#727CB6]"
              >
                Start a Cloud Discussion
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>

            {/* Cloud Architecture */}
            <div className="rounded-3xl bg-[#292F38] p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Cloud Architecture
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    Connected workload view
                  </p>
                </div>

                <div
                  className="h-3 w-3 rounded-full bg-emerald-400"
                  aria-label="System available"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 py-7 sm:grid-cols-3">
                {cloudArchitectureItems.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-xl border border-white/10 bg-white/[0.04] p-4 ${
                      index === 0 ? "col-span-2 sm:col-span-3" : ""
                    }`}
                  >
                    <div className="h-2 w-12 rounded-full bg-[#727CB6]" />

                    <p className="mt-3 text-sm font-medium text-white/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-[#727CB6]/30 bg-[#727CB6]/10 p-4 text-xs leading-6 text-white/60">
                Secure access • Scalable resources • Centralized monitoring
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-0">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#727CB6]">
              Cloud Services
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              A complete path to cloud adoption.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {cloudCards.map((card, index) => (
              <article
                key={card.title}
                className="relative overflow-hidden rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span
                  className="absolute right-5 top-4 text-5xl font-black text-[#727CB6]/10"
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>

                <CloudIcon className="h-7 w-7 text-[#727CB6]" />

                <h3 className="mt-7 font-bold text-gray-900">{card.title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f6f7fb] py-14 sm:py-20">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-0">
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Why a structured cloud approach matters
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {cloudBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-3 rounded-xl bg-gray-50 p-4 text-sm font-medium text-gray-700"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />

                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cloud;
