import { Link } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import ContactForm from "../components/contact/ContactForm";

const contactDetails = [
  {
    title: "Address",
    value: (
      <>
        SCO 11, Industrial Area, Phase 5, Mohali
        <br />
        Punjab
      </>
    ),
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Email",
    value: (
      <div className="space-y-1">
        <a
          href="mailto:hr@networx256.com"
          className="block transition hover:text-[#727CB6]"
        >
          hr@networx256.com
        </a>

        <a
          href="mailto:networx256@gmail.com"
          className="block transition hover:text-[#727CB6]"
        >
          networx256@gmail.com
        </a>
      </div>
    ),
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    title: "Our Phone",
    value: (
      <div className="space-y-1">
        <a
          href="tel:+919872820553"
          className="block transition hover:text-[#727CB6]"
        >
          (+91) 9872820553
        </a>

        <a
          href="tel:+911725091715"
          className="block transition hover:text-[#727CB6]"
        >
          (+91) 0172-5091715
        </a>
      </div>
    ),
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L9 10.71a16 16 0 0 0 4.29 4.29l1.27-1.27a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <main className="bg-white">
      {/* <section className="relative overflow-hidden border-b border-gray-200 bg-[#f7f7f7]">
        <div className="absolute inset-0 opacity-40">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "radial-gradient(#d7d7d7 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1170px] px-4 py-8 sm:px-6 lg:px-0 lg:py-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold uppercase tracking-wide text-[#505B95] sm:text-4xl">
                Contact Area
              </h1>

              <div className="mt-3 h-1 w-28 bg-[#727CB6]" />
            </div>

            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <li>You are here:</li>

                <li>
                  <Link
                    to="/"
                    className="text-[#727CB6] transition hover:text-[#505B95]"
                  >
                    Home
                  </Link>
                </li>

                <li aria-hidden="true">›</li>

                <li className="text-gray-600">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
      </section> */}
      <PageHeader title="Contact Area" />
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-0">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <aside>
              <div className="mb-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#727CB6]">
                  Contact Information
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-[#505B95] sm:text-3xl">
                  Let&apos;s talk about your requirements
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                  You could get in touch with us by calling us on the number
                  mentioned below or by email. We look forward to taking the
                  opportunity of servicing your requirements.
                </p>
              </div>

              <div className="space-y-4">
                {contactDetails?.map((item) => (
                  <div
                    key={item.title}
                    className="group flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#727CB6]/40 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#727CB6]/10 text-[#727CB6] transition group-hover:bg-[#727CB6] group-hover:text-white">
                      {item.icon}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-bold uppercase tracking-wide text-[#505B95]">
                        {item.title}
                      </h3>
                      <div className="mt-2 text-sm leading-6 text-gray-600">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl bg-[#505B95] p-6 text-white shadow-lg">
                <div className="relative">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/10" />

                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                      Networx Technologies
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                      We are here to help.
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Have a project, training requirement or business
                      requirement? Send us your details and our team can connect
                      with you.
                    </p>

                    <Link
                      to="/upcoming-batches"
                      className="mt-5 inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#505B95] transition hover:bg-gray-100"
                    >
                      View Upcoming Batches
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
            <section>
              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#727CB6]">
                    Get in Touch
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-[#505B95] sm:text-3xl">
                    Send us a message
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    You could get in touch with us by filling in the form below.
                  </p>
                </div>
                {/* <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        maxLength={100}
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#727CB6] focus:ring-4 focus:ring-[#727CB6]/10"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                      >
                        Your E-mail
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        maxLength={100}
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#727CB6] focus:ring-4 focus:ring-[#727CB6]/10"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                      >
                        Company
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        maxLength={100}
                        placeholder="Enter company name"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#727CB6] focus:ring-4 focus:ring-[#727CB6]/10"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                      >
                        Subject
                      </label>

                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        maxLength={100}
                        placeholder="Enter subject"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#727CB6] focus:ring-4 focus:ring-[#727CB6]/10"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={8}
                      maxLength={5000}
                      placeholder="Write your message..."
                      className="w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#727CB6] focus:ring-4 focus:ring-[#727CB6]/10"
                    />
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-5 text-gray-500">
                      We&apos;ll use your information only to respond to your
                      enquiry.
                    </p>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-xl bg-[#727CB6] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#727CB6]/20 transition hover:bg-[#505B95] focus:outline-none focus:ring-4 focus:ring-[#727CB6]/20"
                    >
                      Send Message
                    </button>
                  </div>
                </form> */}
                <ContactForm />
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
