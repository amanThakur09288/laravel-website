import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import PageHeader from "../components/common/PageHeader";
import CourseCard from "../components/courses/CourseCard";

import { getCourses } from "../api/courseApi";
import { setCourses } from "../redux/slices/courseSlice";

const Courses = () => {
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.courses.items);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);

        const response = await getCourses();

        dispatch(setCourses(response.data || []));
      } catch (error) {
        console.error("Failed to fetch courses:", error);

        toast.error(
          error.response?.data?.message ||
            "Unable to load courses. Please try again later.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [dispatch]);

  return (
    <>
      <PageHeader title="Courses" />

      <section className="bg-[#f7f7f9] pb-[70px] pt-[50px]">
        <div className="mx-auto w-full max-w-[1170px] px-[15px]">

          <div className="mx-auto mb-[45px] max-w-[760px] text-center">
            <span className="mb-[10px] inline-block text-[11px] font-semibold uppercase tracking-[1.5px] text-[#727CB6]">
              Explore Our Programs
            </span>

            <h2 className="mb-[12px] text-[26px] font-semibold leading-[36px] text-[#676767] md:text-[32px] md:leading-[42px]">
              Build Skills That Move Your Career Forward
            </h2>

            <p className="m-0 text-[14px] leading-[25px] text-[#888] md:text-[15px]">
              Explore our industry-focused courses designed with practical
              training, real-world projects and career-oriented learning.
            </p>
          </div>

          {loading && (
            <div className="py-[70px] text-center">
              <div className="mx-auto h-[38px] w-[38px] animate-spin rounded-full border-[3px] border-[#ddd] border-t-[#727CB6]" />

              <p className="mt-[15px] text-[14px] text-[#888]">
                Loading courses...
              </p>
            </div>
          )}

          {!loading && courses.length === 0 && (
            <div className="rounded-[6px] bg-white px-[20px] py-[70px] text-center shadow-sm">
              <div className="mx-auto mb-[18px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#f0f1f8]">
                <span className="text-[25px] text-[#727CB6]">📚</span>
              </div>

              <h3 className="text-[20px] font-semibold text-[#676767]">
                No Courses Available
              </h3>

              <p className="mx-auto mt-[10px] max-w-[500px] text-[14px] leading-[24px] text-[#888]">
                We currently don't have any courses available. Please check back
                soon for new training programs.
              </p>
            </div>
          )}

          {/* =========================
              COURSE GRID
          ========================== */}
          {!loading && courses.length > 0 && (
            <div className="-mx-[15px] flex flex-wrap">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Courses;
