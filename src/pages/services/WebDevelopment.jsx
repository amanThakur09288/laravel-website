import { Link } from "react-router-dom";
import {
  ArrowIcon,
  CheckIcon,
  CodeIcon,
} from "../../components/services/ServiceIcons";
import PageHeader from "../../components/common/PageHeader";

const webServices = [
  "Business websites",
  "Web applications",
  "E-commerce solutions",
  "Responsive UI development",
  "Database-driven systems",
  "Website maintenance",
];

const WebDevelopment = () => {
  return (
    <>
      <PageHeader title="Web Development" />

      {/* Hero */}
      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-0">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-3 rounded-2xl bg-[#727CB6]/10 px-4 py-3 text-[#727CB6]">
                <CodeIcon className="h-6 w-6" />

                <span className="text-sm font-bold">
                  Design • Develop • Deliver
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
                Websites that look good and work hard for your business.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                From a clean company website to a complete web application, we
                focus on responsive interfaces, maintainable code and a smooth
                user experience.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#727CB6] px-5 py-3 text-sm font-semibold text-white hover:bg-[#505B95]"
              >
                Start a Web Project
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>

            {/* Browser Mockup */}
            <div className="rounded-[28px] border border-gray-200 bg-gray-100 p-3 shadow-2xl sm:p-5">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />

                  <div className="ml-3 h-7 flex-1 rounded-lg bg-gray-100" />
                </div>

                <div className="grid min-h-[320px] grid-cols-[72px_1fr] sm:min-h-[380px] sm:grid-cols-[100px_1fr]">
                  <div className="space-y-3 bg-[#292F38] p-3">
                    <div className="h-8 rounded bg-white/10" />
                    <div className="h-3 rounded bg-white/10" />
                    <div className="h-3 rounded bg-white/10" />
                    <div className="h-3 rounded bg-white/10" />
                    <div className="h-3 rounded bg-white/10" />
                  </div>

                  <div className="p-5 sm:p-8">
                    <div className="h-10 w-2/3 rounded-lg bg-[#727CB6]/15" />

                    <div className="mt-4 h-3 w-full rounded bg-gray-100" />
                    <div className="mt-2 h-3 w-4/5 rounded bg-gray-100" />

                    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                          key={item}
                          className="h-20 rounded-xl border border-gray-100 bg-gray-50"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-[#292F38] py-14 text-white sm:py-20">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-0">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#aeb3d4]">
                What We Build
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Digital experiences for different business needs.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {webServices.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckIcon className="h-5 w-5 shrink-0 text-[#aeb3d4]" />

                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f6f7fb] py-14 sm:py-20">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-0">
          <div className="grid gap-5 md:grid-cols-3">
            {["01 — Understand", "02 — Build", "03 — Improve"].map(
              (title, index) => (
                <article
                  key={title}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#727CB6]">
                    {title}
                  </p>

                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    {
                      [
                        "Understand your users and business goals.",
                        "Create a responsive and maintainable solution.",
                        "Refine the experience as your business grows.",
                      ][index]
                    }
                  </h3>
                </article>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopment;
