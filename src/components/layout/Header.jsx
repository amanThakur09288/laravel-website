import { useEffect, useRef, useState } from "react";
import { Link, Links } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleServices = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setServicesOpen((prev) => !prev);
  };

  const closeMenus = () => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      {/* <div className="bg-[#292F38] text-white">
        <div className="mx-auto flex max-w-[1170px] justify-end px-4">
          <div className="flex">
            <a
              href="#register"
              className="border-l border-white/10 px-4 py-2 text-sm hover:bg-white/5"
            >
              Register
            </a>

            <a
              href="#login"
              className="border-l border-r border-white/10 px-4 py-2 text-sm hover:bg-white/5"
            >
              LogIn
            </a>
          </div>
        </div>
      </div> */}

      {/* Navigation */}
      <nav className="relative z-50 bg-[#727CB6]">
        <div className="mx-auto flex max-w-[1170px] items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" onClick={closeMenus} className="block py-3">
            <img
              src="/images/newntlogo.png"
              alt="Networx Technologies"
              className="h-auto max-h-[55px] w-auto"
            />
          </Link>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
              setServicesOpen(false);
            }}
            className="rounded border border-white/40 px-3 py-2 text-white md:hidden"
            aria-label="Toggle navigation"
          >
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="my-1.5 block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center">
              <li>
                <Link
                  to="/"
                  onClick={closeMenus}
                  className="block px-5 py-6 text-sm font-semibold uppercase text-white transition hover:bg-[#505B95]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/upcoming-batches"
                  onClick={closeMenus}
                  className="block px-5 py-6 text-sm font-semibold uppercase text-white transition hover:bg-[#505B95]"
                >
                  Upcoming Batches
                </Link>
              </li>

              {/* Services */}
              <li ref={servicesRef} className="relative">
                <button
                  type="button"
                  onClick={toggleServices}
                  className={`flex items-center gap-2 px-5 py-6 text-sm font-semibold uppercase text-white transition ${
                    servicesOpen ? "bg-[#505B95]" : "hover:bg-[#505B95]"
                  }`}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <svg
                    className={`h-3 w-3 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Desktop Dropdown */}
                {servicesOpen && (
                  <div className="absolute left-0 top-full z-[100] min-w-[230px] bg-[#727CB6] shadow-xl">
                    <Link
                      to="/services/infrastructure-network"
                      onClick={closeMenus}
                      className="block border-b border-white/10 px-5 py-3 text-sm text-white hover:bg-[#505B95]"
                    >
                      Infrastructure / Network
                    </Link>

                    <Link
                      to="/services/cloud"
                      onClick={closeMenus}
                      className="block border-b border-white/10 px-5 py-3 text-sm text-white hover:bg-[#505B95]"
                    >
                      Cloud
                    </Link>

                    <Link
                      to="/services/security"
                      onClick={closeMenus}
                      className="block border-b border-white/10 px-5 py-3 text-sm text-white hover:bg-[#505B95]"
                    >
                      Security
                    </Link>

                    <Link
                      to="/services/web-development"
                      onClick={closeMenus}
                      className="block border-b border-white/10 px-5 py-3 text-sm text-white hover:bg-[#505B95]"
                    >
                      Web Development
                    </Link>

                    <Link
                      to="/services/training"
                      onClick={closeMenus}
                      className="block border-b border-white/10 px-5 py-3 text-sm text-white hover:bg-[#505B95]"
                    >
                      Training
                    </Link>

                    <Link
                      to="/services/consulting"
                      onClick={closeMenus}
                      className="block px-5 py-3 text-sm text-white hover:bg-[#505B95]"
                    >
                      Consulting
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={closeMenus}
                  className="block px-5 py-6 text-sm font-semibold uppercase text-white transition hover:bg-[#505B95]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-white/20 bg-[#727CB6] md:hidden">
            <div className="px-4 pb-4">
              <a
                href="/"
                onClick={closeMenus}
                className="block border-b border-white/10 py-3 text-sm font-semibold uppercase text-white"
              >
                Home
              </a>

              <a
                href="#upcoming-batches"
                onClick={closeMenus}
                className="block border-b border-white/10 py-3 text-sm font-semibold uppercase text-white"
              >
                Upcoming Batches
              </a>

              {/* Mobile Services */}
              <div ref={servicesRef}>
                <button
                  type="button"
                  onClick={toggleServices}
                  className="flex w-full items-center justify-between border-b border-white/10 py-3 text-left text-sm font-semibold uppercase text-white"
                  aria-expanded={servicesOpen}
                >
                  <span>Services</span>

                  <svg
                    className={`h-3 w-3 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {servicesOpen && (
                  <div className="bg-[#505B95]">
                    <a
                      href="#infrastructure-network"
                      onClick={closeMenus}
                      className="block border-b border-white/10 px-4 py-3 text-sm text-white"
                    >
                      Infrastructure / Network
                    </a>

                    <a
                      href="#cloud"
                      onClick={closeMenus}
                      className="block border-b border-white/10 px-4 py-3 text-sm text-white"
                    >
                      Cloud
                    </a>

                    <a
                      href="#security"
                      onClick={closeMenus}
                      className="block border-b border-white/10 px-4 py-3 text-sm text-white"
                    >
                      Security
                    </a>

                    <a
                      href="#web-development"
                      onClick={closeMenus}
                      className="block border-b border-white/10 px-4 py-3 text-sm text-white"
                    >
                      Web Development
                    </a>

                    <a
                      href="#training"
                      onClick={closeMenus}
                      className="block border-b border-white/10 px-4 py-3 text-sm text-white"
                    >
                      Training
                    </a>

                    <a
                      href="#consulting"
                      onClick={closeMenus}
                      className="block px-4 py-3 text-sm text-white"
                    >
                      Consulting
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#contact"
                onClick={closeMenus}
                className="block py-3 text-sm font-semibold uppercase text-white"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
