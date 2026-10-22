// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";

// import { getServices } from "../../api/serviceApi";

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   const [services, setServices] = useState([]);
//   const [servicesLoading, setServicesLoading] = useState(false);
//   const [servicesError, setServicesError] = useState("");

//   const desktopServicesRef = useRef(null);
//   const mobileServicesRef = useRef(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         setServicesLoading(true);
//         setServicesError("");

//         const response = await getServices();

//         const serviceData = Array.isArray(response.data) ? response.data : [];

//         setServices(serviceData);
//       } catch (error) {
//         console.error("Failed to fetch services:", error);

//         setServicesError(
//           error.response?.data?.message || "Unable to load services.",
//         );
//       } finally {
//         setServicesLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         desktopServicesRef.current &&
//         !desktopServicesRef.current.contains(event.target)
//       ) {
//         setDesktopServicesOpen(false);
//       }

//       if (
//         mobileServicesRef.current &&
//         !mobileServicesRef.current.contains(event.target)
//       ) {
//         setMobileServicesOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const closeMenus = () => {
//     setDesktopServicesOpen(false);
//     setMobileServicesOpen(false);
//     setMobileMenuOpen(false);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen((prev) => !prev);

//     setDesktopServicesOpen(false);
//     setMobileServicesOpen(false);
//   };

//   const toggleDesktopServices = () => {
//     setDesktopServicesOpen((prev) => !prev);
//   };

//   const toggleMobileServices = () => {
//     setMobileServicesOpen((prev) => !prev);
//   };

//   const renderServices = (isMobile = false) => {
//     if (servicesLoading) {
//       return (
//         <div
//           className={
//             isMobile
//               ? "px-4 py-3 text-sm text-white"
//               : "px-5 py-3 text-sm text-white"
//           }
//         >
//           Loading services...
//         </div>
//       );
//     }

//     if (servicesError) {
//       return (
//         <div
//           className={
//             isMobile
//               ? "px-4 py-3 text-sm text-red-200"
//               : "px-5 py-3 text-sm text-red-200"
//           }
//         >
//           Unable to load services.
//         </div>
//       );
//     }

//     // No services
//     if (services.length === 0) {
//       return (
//         <div
//           className={
//             isMobile
//               ? "px-4 py-3 text-sm text-white"
//               : "px-5 py-3 text-sm text-white"
//           }
//         >
//           No services available.
//         </div>
//       );
//     }

//     // Services
//     return services.map((service, index) => (
//       <Link
//         key={service.id}
//         to={`/services/${service.slug}`}
//         onClick={closeMenus}
//         className={`block text-sm text-white hover:bg-[#505B95] ${
//           isMobile ? "px-4 py-3" : "px-5 py-3"
//         } ${index !== services.length - 1 ? "border-b border-white/10" : ""}`}
//       >
//         {service.service_name}
//       </Link>
//     ));
//   };

//   /*
//     |--------------------------------------------------------------------------
//     | JSX
//     |--------------------------------------------------------------------------
//     */

//   return (
//     <header className="w-full">
//       <nav className="relative z-50 bg-[#727CB6]">
//         <div className="mx-auto flex max-w-[1170px] items-center justify-between px-4">
//           {/* =====================================================
//                         LOGO
//                     ====================================================== */}

//           <Link to="/" onClick={closeMenus} className="block py-3">
//             <img
//               src="/images/newntlogo.png"
//               alt="Networx Technologies"
//               className="h-auto max-h-[55px] w-auto"
//             />
//           </Link>

//           {/* =====================================================
//                         MOBILE HAMBURGER
//                     ====================================================== */}

//           <button
//             type="button"
//             onClick={toggleMobileMenu}
//             className="rounded border border-white/40 px-3 py-2 text-white md:hidden"
//             aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
//             aria-expanded={mobileMenuOpen}
//             aria-controls="mobile-navigation"
//           >
//             <span className="block h-0.5 w-6 bg-white"></span>

//             <span className="my-1.5 block h-0.5 w-6 bg-white"></span>

//             <span className="block h-0.5 w-6 bg-white"></span>
//           </button>

//           {/* =====================================================
//                         DESKTOP NAVIGATION
//                     ====================================================== */}

//           <div className="hidden md:block">
//             <ul className="flex items-center">
//               {/* -------------------------------------------------
//                                 HOME
//                             -------------------------------------------------- */}

//               <li>
//                 <Link
//                   to="/"
//                   onClick={closeMenus}
//                   className="block px-5 py-6 text-sm font-semibold uppercase text-white transition hover:bg-[#505B95]"
//                 >
//                   Home
//                 </Link>
//               </li>

//               {/* -------------------------------------------------
//                                 COURSES
//                             -------------------------------------------------- */}

//               <li>
//                 <Link
//                   to="/courses"
//                   onClick={closeMenus}
//                   className="block px-5 py-6 text-sm font-semibold uppercase text-white transition hover:bg-[#505B95]"
//                 >
//                   Courses
//                 </Link>
//               </li>

//               {/* -------------------------------------------------
//                                 UPCOMING BATCHES
//                             -------------------------------------------------- */}

//               <li>
//                 <Link
//                   to="/upcoming-batches"
//                   onClick={closeMenus}
//                   className="block px-5 py-6 text-sm font-semibold uppercase text-white transition hover:bg-[#505B95]"
//                 >
//                   Upcoming Batches
//                 </Link>
//               </li>

//               {/* -------------------------------------------------
//                                 SERVICES
//                             -------------------------------------------------- */}

//               <li ref={desktopServicesRef} className="relative">
//                 <button
//                   type="button"
//                   onClick={toggleDesktopServices}
//                   className={`flex items-center gap-2 px-5 py-6 text-sm font-semibold uppercase text-white transition ${
//                     desktopServicesOpen ? "bg-[#505B95]" : "hover:bg-[#505B95]"
//                   }`}
//                   aria-expanded={desktopServicesOpen}
//                   aria-haspopup="true"
//                 >
//                   Services
//                   {/* Dropdown Arrow */}
//                   <svg
//                     className={`h-3 w-3 transition-transform ${
//                       desktopServicesOpen ? "rotate-180" : ""
//                     }`}
//                     viewBox="0 0 10 6"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     aria-hidden="true"
//                   >
//                     <path
//                       d="M1 1L5 5L9 1"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>

//                 {/* -------------------------------------------------
//                                     DESKTOP SERVICES DROPDOWN
//                                 -------------------------------------------------- */}

//                 {desktopServicesOpen && (
//                   <div className="absolute left-0 top-full z-[100] min-w-[230px] bg-[#727CB6] shadow-xl">
//                     {renderServices(false)}
//                   </div>
//                 )}
//               </li>

//               {/* -------------------------------------------------
//                                 CONTACT
//                             -------------------------------------------------- */}

//               <li>
//                 <Link
//                   to="/contact"
//                   onClick={closeMenus}
//                   className="block px-5 py-6 text-sm font-semibold uppercase text-white transition hover:bg-[#505B95]"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* =========================================================
//                     MOBILE NAVIGATION
//                 ========================================================== */}

//         {mobileMenuOpen && (
//           <div
//             id="mobile-navigation"
//             className="border-t border-white/20 bg-[#727CB6] md:hidden"
//           >
//             <div className="px-4 pb-4">
//               {/* -------------------------------------------------
//                                 HOME
//                             -------------------------------------------------- */}

//               <Link
//                 to="/"
//                 onClick={closeMenus}
//                 className="block border-b border-white/10 py-3 text-sm font-semibold uppercase text-white"
//               >
//                 Home
//               </Link>

//               {/* -------------------------------------------------
//                                 COURSES
//                             -------------------------------------------------- */}

//               <Link
//                 to="/courses"
//                 onClick={closeMenus}
//                 className="block border-b border-white/10 py-3 text-sm font-semibold uppercase text-white"
//               >
//                 Courses
//               </Link>

//               {/* -------------------------------------------------
//                                 UPCOMING BATCHES
//                             -------------------------------------------------- */}

//               <Link
//                 to="/upcoming-batches"
//                 onClick={closeMenus}
//                 className="block border-b border-white/10 py-3 text-sm font-semibold uppercase text-white"
//               >
//                 Upcoming Batches
//               </Link>

//               {/* -------------------------------------------------
//                                 MOBILE SERVICES
//                             -------------------------------------------------- */}

//               <div ref={mobileServicesRef}>
//                 <button
//                   type="button"
//                   onClick={toggleMobileServices}
//                   className={`flex w-full items-center justify-between border-b border-white/10 py-3 text-left text-sm font-semibold uppercase text-white ${
//                     mobileServicesOpen ? "bg-[#505B95]" : ""
//                   }`}
//                   aria-expanded={mobileServicesOpen}
//                   aria-haspopup="true"
//                 >
//                   <span>Services</span>

//                   {/* Dropdown Arrow */}
//                   <svg
//                     className={`h-3 w-3 transition-transform ${
//                       mobileServicesOpen ? "rotate-180" : ""
//                     }`}
//                     viewBox="0 0 10 6"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     aria-hidden="true"
//                   >
//                     <path
//                       d="M1 1L5 5L9 1"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//                 {mobileServicesOpen && (
//                   <div className="bg-[#505B95]">{renderServices(true)}</div>
//                 )}
//               </div>
//               <Link
//                 to="/contact"
//                 onClick={closeMenus}
//                 className="block py-3 text-sm font-semibold uppercase text-white"
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { getServices } from "../../api/serviceApi";
import { mergeServices } from "../../utils/serviceRoutes";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Services created in the admin panel
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [servicesError, setServicesError] = useState("");

  const desktopServicesRef = useRef(null);
  const mobileServicesRef = useRef(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setServicesLoading(true);
        setServicesError("");

        const response = await getServices();

        const serviceData = Array.isArray(response.data) ? response.data : [];

        setServices(serviceData);
      } catch (error) {
        console.error("Failed to fetch services:", error);

        setServicesError(
          error.response?.data?.message || "Unable to load services.",
        );
      } finally {
        setServicesLoading(false);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopServicesRef.current &&
        !desktopServicesRef.current.contains(event.target)
      ) {
        setDesktopServicesOpen(false);
      }

      if (
        mobileServicesRef.current &&
        !mobileServicesRef.current.contains(event.target)
      ) {
        setMobileServicesOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setDesktopServicesOpen(false);
        setMobileServicesOpen(false);
      }
    };

    // "pointerdown" works for mouse AND touch (phones and tablets)
    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenus = () => {
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);

    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  };

  const toggleDesktopServices = () => {
    setDesktopServicesOpen((prev) => !prev);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen((prev) => !prev);
  };

  // Static services + admin services
  const allServices = mergeServices(services);

  const renderServices = (isMobile = false) => {
    const padding = isMobile ? "px-4 py-3" : "px-5 py-3";

    // Nothing to show: say why
    if (allServices.length === 0) {
      const message = servicesLoading
        ? "Loading services..."
        : servicesError || "No services available.";

      return (
        <div
          className={`${padding} text-sm ${
            servicesError ? "text-red-200" : "text-white"
          }`}
        >
          {message}
        </div>
      );
    }

    return allServices.map((service, index) => (
      <Link
        key={service.id}
        to={`/services/${service.slug}`}
        onClick={closeMenus}
        className={`block text-sm text-white hover:bg-[#505B95] ${padding} ${
          index !== allServices.length - 1 ? "border-b border-white/10" : ""
        }`}
      >
        {service.name}
      </Link>
    ));
  };

  return (
    <header className="w-full">
      <nav className="relative z-50 bg-[#727CB6]">
        <div className="mx-auto flex max-w-[1170px] items-center justify-between px-4">
          <Link to="/" onClick={closeMenus} className="block py-3">
            <img
              src="/images/newntlogo.png"
              alt="Networx Technologies"
              className="h-auto max-h-[55px] w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="rounded border border-white/40 px-3 py-2 text-white md:hidden"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="block h-0.5 w-6 bg-white"></span>

            <span className="my-1.5 block h-0.5 w-6 bg-white"></span>

            <span className="block h-0.5 w-6 bg-white"></span>
          </button>

          <div className="hidden md:block">
            <ul className="flex items-center">
              {/* HOME */}
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
                  to="/quizzes"
                  onClick={closeMenus}
                  className="block px-5 py-6 text-sm font-semibold uppercase text-white transition hover:bg-[#505B95]"
                >
                  Quizzes
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  onClick={closeMenus}
                  className="block px-5 py-6 text-sm font-semibold uppercase text-white transition hover:bg-[#505B95]"
                >
                  Courses
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

              <li ref={desktopServicesRef} className="relative">
                <button
                  type="button"
                  onClick={toggleDesktopServices}
                  className={`flex items-center gap-2 px-5 py-6 text-sm font-semibold uppercase text-white transition ${
                    desktopServicesOpen ? "bg-[#505B95]" : "hover:bg-[#505B95]"
                  }`}
                  aria-expanded={desktopServicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg
                    className={`h-3 w-3 transition-transform ${
                      desktopServicesOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
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

                {/* DESKTOP  DROPDOWN */}
                {desktopServicesOpen && (
                  <div className="absolute left-0 top-full z-[100] max-h-[70vh] min-w-[230px] overflow-y-auto bg-[#727CB6] shadow-xl">
                    {renderServices(false)}
                  </div>
                )}
              </li>

              {/* CONTACT */}
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

        {/* =========================================================
                    MOBILE NAVIGATION
                ========================================================== */}

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/20 bg-[#727CB6] md:hidden"
          >
            <div className="px-4 pb-4">
              {/* HOME */}
              <Link
                to="/"
                onClick={closeMenus}
                className="block border-b border-white/10 py-3 text-sm font-semibold uppercase text-white"
              >
                Home
              </Link>
              <Link
                to="/quizzes"
                onClick={closeMenus}
                className="block border-b border-white/10 py-3 text-sm font-semibold uppercase text-white"
              >
                Quizzes
              </Link>

              {/* COURSES */}
              <Link
                to="/courses"
                onClick={closeMenus}
                className="block border-b border-white/10 py-3 text-sm font-semibold uppercase text-white"
              >
                Courses
              </Link>

              {/* UPCOMING BATCHES */}
              <Link
                to="/upcoming-batches"
                onClick={closeMenus}
                className="block border-b border-white/10 py-3 text-sm font-semibold uppercase text-white"
              >
                Upcoming Batches
              </Link>

              {/* MOBILE SERVICES */}
              <div ref={mobileServicesRef}>
                <button
                  type="button"
                  onClick={toggleMobileServices}
                  className={`flex w-full items-center justify-between border-b border-white/10 py-3 text-left text-sm font-semibold uppercase text-white ${
                    mobileServicesOpen ? "bg-[#505B95]" : ""
                  }`}
                  aria-expanded={mobileServicesOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>

                  {/* Dropdown Arrow */}
                  <svg
                    className={`h-3 w-3 transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
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

                {mobileServicesOpen && (
                  <div className="max-h-[60vh] overflow-y-auto bg-[#505B95]">
                    {renderServices(true)}
                  </div>
                )}
              </div>

              {/* CONTACT */}
              <Link
                to="/contact"
                onClick={closeMenus}
                className="block py-3 text-sm font-semibold uppercase text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
