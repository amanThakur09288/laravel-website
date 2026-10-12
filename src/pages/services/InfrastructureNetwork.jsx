import { Link } from "react-router-dom";
import {
  ArrowIcon,
  CheckIcon,
  NetworkIcon,
  ServerIcon,
} from "../../components/services/ServiceIcons";
import PageHeader from "../../components/common/PageHeader";

const networkServices = [
  {
    title: "Network Design",
    text: "Plan reliable network architecture for offices, branches, data centers and growing teams.",
  },
  {
    title: "LAN / WAN Setup",
    text: "Build and configure wired and wireless connectivity with practical, scalable network layouts.",
  },
  {
    title: "Server Infrastructure",
    text: "Design server environments with structured deployment, monitoring and maintenance practices.",
  },
  {
    title: "Network Monitoring",
    text: "Improve visibility into network health, availability and performance with proactive monitoring.",
  },
];

const InfrastructureNetwork = () => {
  return (
    <>
      <PageHeader title="Infrastructure / Network" />
      {/* Hero */}
      <section className="overflow-hidden bg-[#292F38] text-white">
        <div className="mx-auto grid max-w-[1170px] grid-cols-1 items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-0">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/80">
              <NetworkIcon className="h-4 w-4" />
              Infrastructure Services
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-5xl">
              Build an infrastructure that keeps your business connected.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              From network planning to server infrastructure, we help create
              stable, manageable and business-ready IT environments.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#727CB6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#858dcc]"
            >
              Discuss Your Requirement
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          {/* Network Visual */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute inset-8 rounded-full border border-[#727CB6]/30" />
            <div className="absolute inset-20 rounded-full border border-[#727CB6]/20" />

            <div className="relative grid grid-cols-3 gap-4 sm:gap-6">
              <div />

              <div className="flex h-24 items-center justify-center rounded-2xl border border-[#727CB6]/40 bg-[#727CB6]/15 shadow-2xl shadow-black/20 sm:h-28">
                <ServerIcon className="h-10 w-10 text-[#b8bde0]" />
              </div>

              <div />

              <div className="mt-5 flex h-20 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs text-white/70 sm:h-24">
                Office
              </div>

              <div className="mt-5 flex h-20 items-center justify-center rounded-xl border border-[#727CB6]/30 bg-[#727CB6]/10 text-xs font-semibold text-white sm:h-24">
                Core Network
              </div>

              <div className="mt-5 flex h-20 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs text-white/70 sm:h-24">
                Branch
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-center text-xs text-white/60">
              Secure connectivity • Centralized infrastructure • Better
              visibility
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-0">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#727CB6]">
              What We Handle
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Infrastructure built for dependable operations.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {networkServices.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#727CB6]/40 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#727CB6]/10 text-[#727CB6]">
                  <span className="text-sm font-bold">0{index + 1}</span>
                </div>

                <h3 className="mt-5 font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#f6f7fb] py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1170px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-0">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#727CB6]">
              Our Approach
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              A practical infrastructure lifecycle.
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              We keep the process clear: understand the environment, design the
              right architecture, implement carefully and maintain visibility
              after deployment.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Requirement analysis",
              "Network architecture",
              "Configuration & deployment",
              "Performance checks",
              "Documentation",
              "Ongoing support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckIcon className="h-4 w-4" />
                </span>

                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InfrastructureNetwork;
