const services = [
  {
    title: "WEB DEVELOPMENT",
    description:
      "Our development team ensures your website is lightweight, easily expandable, search engine friendly.",
    icon: "globe",
  },
  {
    title: "ANDROID",
    description:
      "Our android team is dedicated to providing quality custom applications that are cost-effective and useful.",
    icon: "android",
  },
  {
    title: "WEBSITE DESIGNING",
    description:
      "Your Website is the centerpiece of your marketing efforts, and should speak to your ideal customer & generate new leads",
    icon: "desktop",
  },
];

const ServiceIcon = ({ type }) => {
  if (type === "globe") {
    return (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }

  if (type === "android") {
    return (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path d="M7 9h10v8a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V9Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 7 7.5 4.8M15 7l1.5-2.2M5 10v5M19 10v5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="9.5" cy="12" r=".8" fill="currentColor" />
        <circle cx="14.5" cy="12" r=".8" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 21h8M12 17v4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white px-4 pb-10 sm:px-6 lg:px-0">
      <div className="mx-auto w-full max-w-[1170px]">
        <div className="grid grid-cols-1 gap-8 py-4 sm:grid-cols-3 sm:gap-5">
          {services.map((service) => (
            <article key={service.title} className="text-center">
              <div className="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full border-2 border-[#727CB6] text-[#727CB6] transition duration-300 hover:bg-[#727CB6] hover:text-white">
                <ServiceIcon type={service.icon} />
              </div>

              <div className="mt-5">
                <h3 className="m-0 text-[18px] font-semibold uppercase text-[#333]">
                  {service.title}
                </h3>

                <p className="mx-auto mt-5 max-w-[330px] text-sm leading-6 text-[#777]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
