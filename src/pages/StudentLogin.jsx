// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { loginStudent } from "../api/studentAuthApi";
// import { setStudent } from "../redux/slices/studentAuthSlice";

// export default function StudentLogin() {
//   const [form, setForm] = useState({ username: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const user = await loginStudent(form);

//       if (!user || user.role !== "user" || user.is_active !== true) {
//         throw new Error(
//           "This account is not allowed to access the student website.",
//         );
//       }

//       dispatch(setStudent(user));
//       toast.success("Welcome back!");

//       navigate(location.state?.from || "/student/dashboard", { replace: true });
//     } catch (err) {
//       const message =
//         err.response?.data?.errors?.username?.[0] ||
//         err.response?.data?.message ||
//         err.message ||
//         "Unable to sign in.";

//       setError(message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="mx-auto max-w-md px-5 py-16">
//       <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
//         <h1 className="text-2xl font-bold text-gray-800">Student Login</h1>

//         <p className="mt-2 text-sm text-gray-500">
//           Sign in to access your courses and quizzes.
//         </p>

//         {error && (
//           <p
//             role="alert"
//             className="mt-4 rounded bg-red-50 p-3 text-sm text-red-700"
//           >
//             {error}
//           </p>
//         )}

//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Username
//             <input
//               required
//               autoComplete="username"
//               value={form.username}
//               onChange={(event) =>
//                 setForm((current) => ({
//                   ...current,
//                   username: event.target.value,
//                 }))
//               }
//               className="mt-1 w-full rounded border border-gray-300 px-3 py-3"
//             />
//           </label>

//           <label className="block text-sm font-medium text-gray-700">
//             Password
//             <input
//               required
//               type="password"
//               autoComplete="current-password"
//               value={form.password}
//               onChange={(event) =>
//                 setForm((current) => ({
//                   ...current,
//                   password: event.target.value,
//                 }))
//               }
//               className="mt-1 w-full rounded border border-gray-300 px-3 py-3"
//             />
//           </label>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full rounded bg-[#727CB6] px-4 py-3 font-semibold text-white hover:bg-[#505B95] disabled:opacity-60"
//           >
//             {loading ? "Signing in..." : "Sign In"}
//           </button>
//         </form>

//         <p className="mt-5 text-sm text-gray-600">
//           New student?{" "}
//           <Link className="font-semibold text-[#505B95]" to="/student/register">
//             Create an account
//           </Link>
//         </p>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginStudent } from "../api/studentAuthApi";
import { setStudent } from "../redux/slices/studentAuthSlice";

export default function StudentLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const user = await loginStudent(form);

      if (!user || user.role !== "user" || user.is_active !== true) {
        throw new Error(
          "This account is not allowed to access the student website.",
        );
      }

      dispatch(setStudent(user));
      toast.success("Welcome back!");

      navigate(location.state?.from || "/student/dashboard", {
        replace: true,
      });
    } catch (err) {
      const message =
        err.response?.data?.errors?.username?.[0] ||
        err.response?.data?.message ||
        err.message ||
        "Unable to sign in.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-md px-5 py-16">
      <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">Student Login</h1>

        <p className="mt-2 text-sm text-gray-500">
          Sign in to access your courses and quizzes.
        </p>

        {error && (
          <p
            role="alert"
            className="mt-4 rounded bg-red-50 p-3 text-sm text-red-700"
          >
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Username
            <input
              required
              autoComplete="username"
              value={form.username}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  username: event.target.value,
                }))
              }
              className="mt-1 w-full rounded border border-gray-300 px-3 py-3"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Password
            <div className="relative mt-1">
              <input
                required
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={form.password}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    password: event.target.value,
                  }))
                }
                className="w-full rounded border border-gray-300 px-3 py-3 pr-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-800"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-[#727CB6] px-4 py-3 font-semibold text-white hover:bg-[#505B95] disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-600">
          New student?{" "}
          <Link className="font-semibold text-[#505B95]" to="/student/register">
            Create an account
          </Link>
        </p>
      </div>
    </section>
  );
}
