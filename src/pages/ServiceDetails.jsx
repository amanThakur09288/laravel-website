// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// import { getService } from "../api/serviceApi";

// export default function ServiceDetails() {
//   const { slug } = useParams();

//   const [service, setService] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const fetchService = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response = await getService(slug);

//       setService(response.data);
//     } catch (error) {
//       console.error("Failed to fetch service:", error);

//       if (error.response?.status === 404) {
//         setError("Service not found.");
//       } else {
//         setError(error.response?.data?.message || "Unable to load service.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchService();
//   }, [slug]);

//   if (loading) {
//     return (
//       <div className="flex min-h-[500px] items-center justify-center">
//         <p className="text-gray-500 dark:text-gray-400">Loading service...</p>
//       </div>
//     );
//   }

//   if (error || !service) {
//     return (
//       <main className="flex min-h-[500px] flex-col items-center justify-center px-6">
//         <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
//           {error || "Service not found."}
//         </h1>

//         <Link
//           to="/services"
//           className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
//         >
//           Back to Services
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main>
//       {/* =========================================
//                 1. HERO
//             ========================================== */}
//       <section className="bg-gray-100 px-6 py-20 dark:bg-gray-900">
//         <div className="mx-auto max-w-7xl">
//           <Link
//             to="/services"
//             className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
//           >
//             ← All Services
//           </Link>

//           <div className="mt-8 max-w-4xl">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
//               {service.service_name}
//             </h1>

//             <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
//               {service.short_description}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//                 2. SERVICE OVERVIEW
//             ========================================== */}
//       <section className="px-6 py-16">
//         <div className="mx-auto max-w-7xl">
//           <div className="max-w-4xl">
//             <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//               Service Overview
//             </h2>

//             <div className="mt-6 whitespace-pre-line text-base leading-8 text-gray-600 dark:text-gray-400">
//               {service.description}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//                 3. WHAT WE OFFER
//             ========================================== */}
//       {service.offerings?.length > 0 && (
//         <section className="bg-gray-50 px-6 py-16 dark:bg-gray-950">
//           <div className="mx-auto max-w-7xl">
//             <div className="max-w-3xl">
//               <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//                 What We Offer
//               </h2>

//               <p className="mt-4 text-gray-600 dark:text-gray-400">
//                 Our services are designed to help businesses solve their
//                 technology requirements effectively.
//               </p>
//             </div>

//             <div className="mt-10 grid gap-6 md:grid-cols-2">
//               {service.offerings.map((offering, index) => (
//                 <div
//                   key={index}
//                   className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
//                 >
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                     {offering.title}
//                   </h3>

//                   <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
//                     {offering.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* =========================================
//                 4. OUR PROCESS
//             ========================================== */}
//       {service.process?.length > 0 && (
//         <section className="px-6 py-16">
//           <div className="mx-auto max-w-7xl">
//             <div className="max-w-3xl">
//               <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//                 Our Process
//               </h2>

//               <p className="mt-4 text-gray-600 dark:text-gray-400">
//                 We follow a structured approach to deliver reliable and
//                 effective solutions.
//               </p>
//             </div>

//             <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {service.process.map((step, index) => (
//                 <div
//                   key={index}
//                   className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
//                 >
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
//                     {index + 1}
//                   </div>

//                   <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
//                     {step.title}
//                   </h3>

//                   <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
//                     {step.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* =========================================
//                 5. FAQ + CTA
//             ========================================== */}
//       <section className="bg-gray-50 px-6 py-16 dark:bg-gray-950">
//         <div className="mx-auto max-w-7xl">
//           {/* FAQ */}
//           {service.faqs?.length > 0 && (
//             <div className="mx-auto max-w-4xl">
//               <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//                 Frequently Asked Questions
//               </h2>

//               <div className="mt-8 space-y-4">
//                 {service.faqs.map((faq, index) => (
//                   <details
//                     key={index}
//                     className="group rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
//                   >
//                     <summary className="cursor-pointer list-none font-semibold text-gray-900 dark:text-white">
//                       <div className="flex items-center justify-between gap-4">
//                         <span>{faq.question}</span>

//                         <span className="text-xl text-gray-400 transition group-open:rotate-45">
//                           +
//                         </span>
//                       </div>
//                     </summary>

//                     <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
//                       {faq.answer}
//                     </p>
//                   </details>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* CTA */}
//           <div className="mx-auto mt-16 max-w-4xl rounded-2xl bg-blue-600 px-8 py-12 text-center">
//             <h2 className="text-3xl font-bold text-white">
//               Need Help With Your Project?
//             </h2>

//             <p className="mx-auto mt-4 max-w-2xl text-blue-100">
//               Talk to our team and find the right solution for your business.
//             </p>

//             <Link
//               to="/contact"
//               className="mt-7 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getService } from "../api/serviceApi";

export default function ServiceDetails() {
  const { slug } = useParams();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getService(slug);
        setService(response.data);
      } catch (err) {
        console.error("Failed to fetch service:", err);
        if (err.response?.status === 404) {
          setError("Service not found.");
        } else {
          setError(err.response?.data?.message || "Unable to load service.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Loading service...</p>
      </div>
    );
  }

  if (error || !service) {
    return (
      <main className="flex min-h-[500px] flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {error || "Service not found."}
        </h1>
        <Link
          to="/services"
          className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          Back to Services
        </Link>
      </main>
    );
  }

  return (
    <main>
      {/* 1. HERO */}
      <section className="bg-gray-100 px-6 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/services"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            ← All Services
          </Link>

          <div className="mt-8 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
              {service.service_name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              {service.short_description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Service Overview
            </h2>
            <div className="mt-6 whitespace-pre-line text-base leading-8 text-gray-600 dark:text-gray-400">
              {service.description}
            </div>
          </div>
        </div>
      </section>

      {/* 3. OFFERINGS */}
      {service.offerings?.length > 0 && (
        <section className="bg-gray-50 px-6 py-16 dark:bg-gray-950">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                What We Offer
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Our services are designed to help businesses solve their technology requirements effectively.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {service.offerings.map((offering, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {offering.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                    {offering.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. PROCESS */}
      {service.process?.length > 0 && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Process
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                We follow a structured approach to deliver reliable and effective solutions.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. FAQS & CTA */}
      <section className="bg-gray-50 px-6 py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl">
          {service.faqs?.length > 0 && (
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <div className="mt-8 space-y-4">
                {service.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-gray-900 dark:text-white">
                      <div className="flex items-center justify-between gap-4">
                        <span>{faq.question}</span>
                        <span className="text-xl text-gray-400 transition group-open:rotate-45">
                          +
                        </span>
                      </div>
                    </summary>
                    <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div className="mx-auto mt-16 max-w-4xl rounded-2xl bg-blue-600 px-8 py-12 text-center">
            <h2 className="text-3xl font-bold text-white">
              Need Help With Your Project?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Talk to our team and find the right solution for your business.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}