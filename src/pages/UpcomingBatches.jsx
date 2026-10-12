// import { Link } from "react-router-dom";
// import PageHeader from "../components/common/PageHeader";
// import BatchCard from "../components/batches/BatchCard";
// import upcomingBatches from "../data/upcomingBatches";

// const UpcomingBatches = () => {
//   return (
//     <>
//       <PageHeader title="Upcoming Batches" />
//       <section className="bg-[#f7f7f9] pb-[70px] pt-[50px]">
//         <div className="mx-auto w-full max-w-[1170px] px-[15px]">
//           <div className="mx-auto mb-[35px] max-w-[720px] text-center">
//             <h2 className="mb-[12px] text-[22px] font-semibold leading-[30px] text-[#676767]">
//               Explore Our Upcoming Training Batches
//             </h2>

//             <p className="m-0 text-[14px] leading-[24px] text-[#888]">
//               Pick a batch that fits your schedule and career goals. Every batch
//               is led by an experienced instructor with live classes, hands-on
//               projects and dedicated support.
//             </p>
//           </div>

//           {upcomingBatches?.length > 0 ? (
//             <div className="-mx-[15px] flex flex-wrap">
//               {upcomingBatches?.map((batch) => (
//                 <BatchCard key={batch.id} batch={batch} />
//               ))}
//             </div>
//           ) : (
//             <div className="rounded-[4px] bg-white px-[20px] py-[60px] text-center">
//               <h3 className="text-[18px] font-semibold text-[#676767]">
//                 No upcoming batches right now
//               </h3>

//               <p className="mt-[10px] text-[13px] text-[#888]">
//                 Please check back soon or{" "}
//                 <Link
//                   to="/contact"
//                   className="text-[#727CB6] hover:text-[#505B95]"
//                 >
//                   contact us
//                 </Link>
//                 .
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default UpcomingBatches;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import PageHeader from "../components/common/PageHeader";
import BatchCard from "../components/batches/BatchCard";

import { getBatches } from "../api/batchApi";
import { setBatches } from "../redux/slices/batchSlice";

const UpcomingBatches = () => {
  const dispatch = useDispatch();

  const batches = useSelector((state) => state.batches.items);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        setLoading(true);

        const response = await getBatches();

        dispatch(setBatches(response.data || []));
      } catch (error) {
        console.error("Failed to fetch batches:", error);

        toast.error(
          error.response?.data?.message ||
            "Unable to load upcoming batches. Please try again later.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBatches();
  }, [dispatch]);

  return (
    <>
      <PageHeader title="Upcoming Batches" />

      <section className="bg-[#f7f7f9] pb-[70px] pt-[50px]">
        <div className="mx-auto w-full max-w-[1170px] px-[15px]">
          {/* Intro */}
          <div className="mx-auto mb-[35px] max-w-[720px] text-center">
            <h2 className="mb-[12px] text-[22px] font-semibold leading-[30px] text-[#676767]">
              Explore Our Upcoming Training Batches
            </h2>

            <p className="m-0 text-[14px] leading-[24px] text-[#888]">
              Pick a batch that fits your schedule and career goals. Every batch
              is led by an experienced instructor with live classes, hands-on
              projects and dedicated support.
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="py-[60px] text-center">
              <div className="mx-auto h-[35px] w-[35px] animate-spin rounded-full border-[3px] border-[#ddd] border-t-[#727CB6]" />

              <p className="mt-[15px] text-[14px] text-[#888]">
                Loading upcoming batches...
              </p>
            </div>
          )}

          {/* Batches */}
          {!loading && batches.length > 0 && (
            <div className="-mx-[15px] flex flex-wrap">
              {batches.map((batch) => (
                <BatchCard key={batch.id} batch={batch} />
              ))}
            </div>
          )}

          {/* Empty */}
          {!loading && batches.length === 0 && (
            <div className="rounded-[4px] bg-white px-[20px] py-[60px] text-center">
              <h3 className="text-[18px] font-semibold text-[#676767]">
                No upcoming batches right now
              </h3>

              <p className="mt-[10px] text-[13px] text-[#888]">
                Please check back soon or{" "}
                <Link
                  to="/contact"
                  className="text-[#727CB6] hover:text-[#505B95]"
                >
                  contact us
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default UpcomingBatches;
