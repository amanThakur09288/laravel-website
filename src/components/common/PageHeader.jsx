//   <section className="bg-[#f5f5f5] py-8">
//     <div className="mx-auto max-w-[1170px] px-4">
//       <nav aria-label="Breadcrumb">
//         <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
//           <li>You are here:</li>

//           <li>
//             <Link to="/" className="text-[#727CB6] hover:text-[#505B95]">
//               Home
//             </Link>
//           </li>

//           <li>/</li>

//           <li>
//             <Link
//               to="/upcoming-batches"
//               className="text-[#727CB6] hover:text-[#505B95]"
//             >
//               Upcoming Batches
//             </Link>
//           </li>

//           <li>/</li>

//           <li className="text-gray-700">{batch.batchName}</li>
//         </ol>
//       </nav>

//       <h1 className="mt-4 text-3xl font-semibold text-gray-800">
//         {batch.courseName}
//       </h1>
//     </div>
//   </section>
import { Link, useLocation } from "react-router-dom";

const routeNames = {
  "upcoming-batches": "Upcoming Batches",
  services: "Services",
  "web-development": "Web Development",
  infrastructure: "Infrastructure / Network",
  cloud: "Cloud",
  security: "Security",
  training: "Training",
  consulting: "Consulting",
  contact: "Contact",
};

const Chevron = () => (
  <svg
    className="mx-[6px] h-[8px] w-[8px] shrink-0 text-[#777] md:mx-[8px]"
    viewBox="0 0 8 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1.5 1.5L6 6l-4.5 4.5" />
  </svg>
);

const PageHeader = ({ title }) => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  const breadcrumbs = pathParts.map((part, index) => ({
    label:
      routeNames[part] ||
      decodeURIComponent(part)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    path: `/${pathParts.slice(0, index + 1).join("/")}`,
  }));

  return (
    <section className="border-b-[3px] border-[#dcdbd7] bg-[url('/images/page-title-head.png')] bg-repeat">
      <div className="mx-auto w-full max-w-[1170px] px-[15px]">
        {/* Mobile: breadcrumb on top, title below. Desktop: title left, breadcrumb right */}
        <div className="flex flex-col-reverse items-start gap-0 md:flex-row md:justify-between md:gap-8">
          {/* Title (-mb lets the blue underline sit on the grey border) */}
          <div className="-mb-[3px] min-w-0">
            <h1 className="m-0 break-words border-b-[3px] border-[#727CB6] pb-[12px] pt-[6px] text-[20px] font-semibold uppercase leading-[26px] text-[#676767] md:pb-[17px] md:pt-[20px] md:text-[24px] md:leading-[30px]">
              {title}
            </h1>
          </div>

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex min-w-0 flex-wrap items-center pt-[14px] text-[12px] leading-[20px] text-[#888] md:justify-end md:pt-[22px] md:text-[13px]"
          >
            <span>You are here:</span>
            <Link
              to="/"
              className="ml-[8px] text-[#5b73b8] hover:text-[#505B95]"
            >
              Home
            </Link>

            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <div key={item.path} className="flex items-center">
                  <Chevron />
                  {isLast ? (
                    <span>{item.label}</span>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-[#5b73b8] hover:text-[#505B95]"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
