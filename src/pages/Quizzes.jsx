// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import toast from "react-hot-toast";
// import { getQuizzes } from "../api/quizApi";
// import { setQuizzes } from "../redux/slices/quizSlice";
// import QuizCard from "../components/quiz/QuizCard";

// export default function Quizzes() {
//   const dispatch = useDispatch();

//   const quizzes = useSelector((state) => state.quiz.quizzes);

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadQuizzes();
//   }, []);

//   const loadQuizzes = async () => {
//     try {
//       setLoading(true);

//       const response = await getQuizzes();

//       dispatch(setQuizzes(response.data || []));
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Unable to load quizzes.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div className="py-10 text-center">Loading quizzes...</div>;
//   }

//   return (
//     <div className="mx-auto max-w-7xl px-4 py-8">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900">Quizzes</h1>

//         <p className="mt-2 text-gray-600">Available quizzes for you.</p>
//       </div>

//       {quizzes.length === 0 ? (
//         <div className="rounded-xl border border-gray-200 bg-white p-10 text-center">
//           <p className="text-gray-500">No quizzes are available.</p>
//         </div>
//       ) : (
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {quizzes.map((quiz) => (
//             <QuizCard key={quiz.id} quiz={quiz} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import PageHeader from "../components/common/PageHeader";
import QuizCard from "../components/quiz/QuizCard";
import { getQuizzes } from "../api/quizApi";
import { setQuizzes, clearQuizState } from "../redux/slices/quizSlice";

export default function Quizzes() {
  const dispatch = useDispatch();
  const quizzes = useSelector((state) => state.quiz?.quizzes || []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadQuizzes();

    return () => {
      dispatch(clearQuizState());
    };
  }, [dispatch]);

  const loadQuizzes = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getQuizzes();

      /*
      |--------------------------------------------------------------------------
      | Laravel response
      |--------------------------------------------------------------------------
      |
      | {
      |   success: true,
      |   data: [...]
      | }
      |
      */

      const quizData = Array.isArray(response?.data) ? response.data : [];

      dispatch(setQuizzes(quizData));
    } catch (error) {
      console.error("Failed to load quizzes:", error);

      const message =
        error.response?.data?.message || "Unable to load quizzes.";

      setError(message);

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHeader title="Quizzes" />

      <section className="px-5 py-[50px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          {/* ------------------------------------------------------------- */}
          {/* Page Intro */}
          {/* ------------------------------------------------------------- */}

          <div className="mb-[35px] text-center">
            <h1 className="text-[28px] font-bold text-[#222] sm:text-[32px]">
              Available Quizzes
            </h1>

            <p className="mx-auto mt-[10px] max-w-[650px] text-[14px] leading-7 text-[#777] sm:text-[15px]">
              Test your knowledge, improve your skills, and check your
              understanding with our available quizzes.
            </p>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* Loading */}
          {/* ------------------------------------------------------------- */}

          {loading && (
            <div className="py-[60px] text-center">
              <div className="mx-auto h-[35px] w-[35px] animate-spin rounded-full border-[3px] border-[#ddd] border-t-[#727CB6]" />

              <p className="mt-[15px] text-[14px] text-[#888]">
                Loading quizzes...
              </p>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* Error */}
          {/* ------------------------------------------------------------- */}

          {!loading && error && (
            <div className="mx-auto max-w-[650px] rounded-[8px] border border-red-200 bg-red-50 px-5 py-5 text-center">
              <div className="mb-2 text-[25px]">⚠️</div>

              <h3 className="text-[16px] font-semibold text-red-700">
                Unable to load quizzes
              </h3>

              <p className="mt-2 text-[14px] text-red-600">{error}</p>

              <button
                type="button"
                onClick={loadQuizzes}
                className="mt-5 rounded-[5px] bg-[#727CB6] px-6 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#626da8]"
              >
                Try Again
              </button>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* Empty */}
          {/* ------------------------------------------------------------- */}

          {!loading && !error && quizzes.length === 0 && (
            <div className="mx-auto max-w-[650px] rounded-[8px] border border-[#eee] bg-[#fafafa] px-6 py-[60px] text-center">
              <div className="mx-auto mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#727CB6]/10 text-[30px]">
                📝
              </div>

              <h3 className="text-[20px] font-bold text-[#333]">
                No quizzes available
              </h3>

              <p className="mx-auto mt-2 max-w-[450px] text-[14px] leading-6 text-[#888]">
                There are currently no quizzes available. Please check again
                later.
              </p>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* Quiz Grid */}
          {/* ------------------------------------------------------------- */}

          {!loading && !error && quizzes.length > 0 && (
            <>
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[14px] text-[#777]">
                  <span className="font-semibold text-[#333]">
                    {quizzes.length}
                  </span>{" "}
                  {quizzes.length === 1 ? "quiz" : "quizzes"} available
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {quizzes.map((quiz) => (
                  <QuizCard key={quiz.id} quiz={quiz} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
