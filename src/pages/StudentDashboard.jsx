import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  const user = useSelector((state) => state.studentAuth.user);

  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome, {user?.name || "Student"}
      </h1>

      <p className="mt-2 text-gray-600">
        Your student account is active. Explore courses and available quizzes to
        continue learning.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Link
          to="/courses"
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-[#727CB6]"
        >
          <h2 className="text-xl font-semibold text-gray-800">
            Browse Courses
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Explore available courses and lessons.
          </p>
        </Link>

        <Link
          to="/quizzes"
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-[#727CB6]"
        >
          <h2 className="text-xl font-semibold text-gray-800">
            Available Quizzes
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            View published quizzes and your attempts.
          </p>
        </Link>
      </div>
    </section>
  );
}
