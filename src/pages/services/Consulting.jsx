import { Link } from "react-router-dom";
import {
  ArrowIcon,
  CheckIcon,
  ConsultingIcon,
} from "../../components/services/ServiceIcons";
import PageHeader from "../../components/common/PageHeader";

const consultingAreas = [
  "Technology planning",
  "Infrastructure assessment",
  "Cloud & migration guidance",
  "Web application architecture",
  "Security improvement planning",
  "Technical project guidance",
];

const consultingSteps = [
  {
    title: "Understand",
    text: "Understand your current environment, goals and constraints.",
  },
  {
    title: "Assess",
    text: "Review the technical situation and identify the key gaps.",
  },
  {
    title: "Recommend",
    text: "Create clear recommendations with practical priorities.",
  },
  {
    title: "Execute",
    text: "Support implementation and help the team move forward.",
  },
];

const Consulting = () => {
  return (
    <>
      <PageHeader title="Consulting" />
      {/* Hero / Process */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-0">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#727CB6] text-white shadow-lg shadow-[#727CB6]/20">
                <ConsultingIcon className="h-9 w-9" />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#727CB6]">
                Technology Consulting
              </p>

              <h2 className="mt-2 text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
                Turn technology questions into practical next steps.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                When a project needs technical direction, an architecture
                review or a clearer implementation plan, our consulting
                approach focuses on practical decisions rather than
                unnecessary complexity.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#727CB6] px-5 py-3 text-sm font-semibold text-white hover:bg-[#505B95]"
              >
                Discuss a Project
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>

            {/* Process */}
            <div className="relative">
              <div className="absolute bottom-8 left-7 top-8 hidden w-px bg-[#727CB6]/20 sm:block" />

              <div className="space-y-5">
                {consultingSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="relative flex gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#727CB6] text-sm font-bold text-white shadow-md">
                      0{index + 1}
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="bg-[#292F38] py-14 text-white sm:py-20">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-0">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#aeb3d4]">
                Where We Help
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Focused expertise when you need it.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {consultingAreas.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckIcon className="h-5 w-5 shrink-0 text-[#aeb3d4]" />

                  <span className="text-sm text-white/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f6f7fb] py-14 sm:py-20">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-0">
          <div className="rounded-3xl bg-white p-7 text-center shadow-sm sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#727CB6]">
              Need a second opinion?
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Let's turn the requirement into a clear plan.
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600">
              Share your current challenge, project stage or technology
              requirement and start with a focused discussion.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#727CB6] px-6 py-3 text-sm font-bold text-white hover:bg-[#505B95]"
            >
              Start a Conversation
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consulting;