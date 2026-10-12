import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/fraction-slider/sl1.jpg",
    heading: "Delivering Powerful",
    subLine: "Web Solutions",
    text: (
      <>
        CUSTOM WEBSITE DESIGN AND DEVELOPMENT <br />
        WEB APPLICATION PROGRAMMING <br />
        ECOMMERCE SOLUTIONS <br />
        DATABASE DEVELOPMENT
      </>
    ),
    overlay: "/images/fraction-slider/gadgets/slone.png",
    type: "web",
  },
  {
    image: "/images/fraction-slider/sl2.jpg",
    heading: "responsive design",
    subLine: "High Quality Architectural",
    overlay: "/images/fraction-slider/web-design3.png",
    type: "design",
  },
];

const HeroSlider = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="w-full overflow-hidden border-b-2 border-[#C6C6C6] bg-[#323A45]">
      <div className="relative aspect-[16/6] min-h-[190px] w-full sm:min-h-[250px] md:min-h-0 md:aspect-[1920/450]">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              active === index ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className="hero-fade absolute inset-0 h-full w-full object-cover"
            />

            {slide.type === "web" && (
              <div className="absolute inset-0 mx-auto max-w-[1170px]">
                <img
                  src={slide.overlay}
                  alt=""
                  className="absolute bottom-[-2%] left-[18%] hidden h-auto w-[43%] object-contain sm:block md:left-[23%] md:w-[38%] lg:left-[29%] lg:w-[37%]"
                />

                <div className="hero-text-up absolute left-[5%] top-[16%] max-w-[92%] sm:left-[50%] sm:top-[18%] sm:max-w-[48%]">
                  <h2 className="inline-block rounded-[2px] bg-[#727CB6] px-3 py-2 text-lg font-semibold text-white shadow-sm sm:px-4 sm:py-2 sm:text-2xl md:text-[30px] lg:text-[36px]">
                    {slide.heading}
                  </h2>

                  <div className="mt-2 inline-block rounded-[2px] bg-white px-3 py-2 text-sm font-medium text-[#727CB6] sm:px-4 sm:text-lg md:text-[22px]">
                    {slide.subLine}
                  </div>

                  <p className="mt-2 hidden bg-white/70 px-2 py-1 text-[9px] font-bold leading-[1.5] tracking-[-0.2px] text-[#5B5B5B] sm:block sm:text-[11px] md:text-[14px] lg:text-[16px]">
                    {slide.text}
                  </p>
                </div>
              </div>
            )}

            {slide.type === "design" && (
              <>
                <img
                  src={slide.overlay}
                  alt=""
                  className="absolute bottom-[-7%] right-[-5%] hidden h-auto w-[56%] object-contain sm:block md:right-[3%] md:w-[57%] lg:right-[5%]"
                />

                <div className="hero-text-up absolute left-[8%] top-[29%] sm:left-[14%] md:left-[19%]">
                  <h2 className="inline-block rounded-[2px] bg-[#373B3F] px-3 py-2 text-lg font-semibold text-white sm:px-4 sm:py-2 sm:text-2xl md:text-[36px]">
                    {slide.heading}
                  </h2>

                  <div className="mt-2 rounded-[2px] bg-white px-3 py-2 text-sm font-medium text-[#727CB6] sm:text-lg md:text-[22px]">
                    {slide.subLine}
                  </div>

                  <a
                    href="#portfolio"
                    className="mt-3 inline-block rounded-[4px] bg-[#727CB6] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#505B95] sm:px-5 sm:py-3 sm:text-sm"
                  >
                    View Our Portfolio
                  </a>
                </div>
              </>
            )}
          </div>
        ))}

        <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-2.5 w-2.5 rounded-full border border-white transition ${
                active === index ? "bg-white" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
