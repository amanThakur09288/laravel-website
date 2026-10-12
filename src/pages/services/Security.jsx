import { Link } from "react-router-dom";
import {
  ArrowIcon,
  CheckIcon,
  SecurityIcon,
} from "../../components/services/ServiceIcons";
import PageHeader from "../../components/common/PageHeader";

const securityLayers = [
  {
    title: "Identity",
    text: "Control who can access systems, applications and sensitive resources.",
  },
  {
    title: "Network",
    text: "Protect connectivity through segmentation, secure configurations and visibility.",
  },
  {
    title: "Application",
    text: "Reduce application risk with secure development and configuration practices.",
  },
  {
    title: "Data",
    text: "Protect important business information with access and backup controls.",
  },
];

const Security = () => {
  return (
    <>
      <PageHeader title="Security" />
      {/* Hero */}
      <section className="bg-[#111827] text-white">
        <div className="mx-auto grid max-w-[1170px] items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-0">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-red-300/20 bg-red-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-red-200">
              <SecurityIcon className="h-4 w-4" />
              Security First
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-5xl">
              Protect the technology your business depends on.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Security works best as a continuous practice. We help you
              identify risks, strengthen controls and create clearer
              operational security processes.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#727CB6] px-5 py-3 text-sm font-semibold text-white hover:bg-[#858dcc]"
            >
              Talk to a Security Specialist
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          {/* Security Layers */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/35">
                  Security posture
                </p>

                <p className="mt-1 font-semibold">
                  Protection layers
                </p>
              </div>

              <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                Protected
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {securityLayers.map((layer, index) => (
                <div
                  key={layer.title}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#727CB6]/20 text-sm font-bold text-[#c8cbea]">
                    0{index + 1}
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold">
                      {layer.title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/45">
                      {layer.text}
                    </p>
                  </div>

                  <CheckIcon className="ml-auto h-5 w-5 shrink-0 text-emerald-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-0">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#727CB6]">
              Security Services
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Reduce avoidable security gaps.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Security assessment",
              "Network security",
              "Access control",
              "Backup & recovery planning",
              "Security awareness",
              "Application security",
            ].map((item, index) => (
              <article
                key={item}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#727CB6]/40 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <SecurityIcon className="h-7 w-7 text-[#727CB6]" />

                  <span className="text-xs font-bold text-gray-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-bold text-gray-900">
                  {item}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Practical controls and processes designed around the
                  environment you actually operate.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f6f7fb] py-14 sm:py-20">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-0">
          <div className="rounded-3xl bg-[#727CB6] p-7 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                Security Mindset
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Make security part of everyday operations.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
                Strong security is a combination of technology,
                configuration, access control and consistent processes.
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#505B95] lg:mt-0"
            >
              Discuss Security Needs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Security;