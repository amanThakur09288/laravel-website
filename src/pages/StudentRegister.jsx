// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import toast from "react-hot-toast";
// import { registerStudent } from "../api/studentAuthApi";
// import { setStudent } from "../redux/slices/studentAuthSlice";

// const initialForm = {
//   name: "",
//   username: "",
//   email: "",
//   password: "",
//   password_confirmation: "",
// };

// export default function StudentRegister() {
//   const [form, setForm] = useState(initialForm);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const change = (event) => {
//     const { name, value } = event.target;

//     setForm((current) => ({
//       ...current,
//       [name]: value,
//     }));
//   };

//   const submit = async (event) => {
//     event.preventDefault();
//     setError("");

//     if (form.password !== form.password_confirmation) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const user = await registerStudent(form);

//       if (!user || user.role !== "user") {
//         throw new Error("Student registration could not be verified.");
//       }

//       dispatch(setStudent(user));
//       toast.success("Account created successfully.");

//       navigate("/student/dashboard", { replace: true });
//     } catch (err) {
//       const errors = err.response?.data?.errors;

//       const firstError = errors ? Object.values(errors).flat()[0] : null;

//       setError(
//         firstError ||
//           err.response?.data?.message ||
//           err.message ||
//           "Unable to create account.",
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="mx-auto max-w-xl px-5 py-16">
//       <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
//         <h1 className="text-2xl font-bold text-gray-800">
//           Create Student Account
//         </h1>

//         <p className="mt-2 text-sm text-gray-500">
//           Register to access your learning portal.
//         </p>

//         {error && (
//           <p
//             role="alert"
//             className="mt-4 rounded bg-red-50 p-3 text-sm text-red-700"
//           >
//             {error}
//           </p>
//         )}

//         <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
//           {[
//             ["name", "Full name", "text"],
//             ["username", "Username", "text"],
//             ["email", "Email address", "email"],
//             ["password", "Password", "password"],
//             ["password_confirmation", "Confirm password", "password"],
//           ].map(([name, label, type]) => (
//             <label
//               key={name}
//               className="block text-sm font-medium text-gray-700"
//             >
//               {label}

//               <input
//                 name={name}
//                 type={type}
//                 required
//                 autoComplete={
//                   name.includes("password")
//                     ? "new-password"
//                     : name === "email"
//                       ? "email"
//                       : "off"
//                 }
//                 value={form[name]}
//                 onChange={change}
//                 className="mt-1 w-full rounded border border-gray-300 px-3 py-3"
//               />
//             </label>
//           ))}

//           <div className="sm:col-span-2">
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full rounded bg-[#727CB6] px-4 py-3 font-semibold text-white hover:bg-[#505B95] disabled:opacity-60"
//             >
//               {loading ? "Creating account..." : "Register"}
//             </button>
//           </div>
//         </form>

//         <p className="mt-5 text-sm text-gray-600">
//           Already registered?{" "}
//           <Link to="/student/login" className="font-semibold text-[#505B95]">
//             Sign in
//           </Link>
//         </p>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { registerStudent } from "../api/studentAuthApi";
import { setStudent } from "../redux/slices/studentAuthSlice";

const initialForm = {
  name: "",
  username: "",
  email: "",
  password: "",
  password_confirmation: "",
};

export default function StudentRegister() {
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const change = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setError("");

    if (form.password !== form.password_confirmation) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const user = await registerStudent(form);

      if (!user || user.role !== "user") {
        throw new Error("Student registration could not be verified.");
      }

      dispatch(setStudent(user));
      toast.success("Account created successfully.");

      navigate("/student/dashboard", { replace: true });
    } catch (err) {
      const errors = err.response?.data?.errors;
      const firstError = errors ? Object.values(errors).flat()[0] : null;

      setError(
        firstError ||
          err.response?.data?.message ||
          err.message ||
          "Unable to create account.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-xl px-5 py-16">
      <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">
          Create Student Account
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Register to access your learning portal.
        </p>

        {error && (
          <p
            role="alert"
            className="mt-4 rounded bg-red-50 p-3 text-sm text-red-700"
          >
            {error}
          </p>
        )}

        <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-gray-700">
            Full name
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={change}
              className="mt-1 w-full rounded border border-gray-300 px-3 py-3"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Username
            <input
              name="username"
              type="text"
              required
              autoComplete="username"
              value={form.username}
              onChange={change}
              className="mt-1 w-full rounded border border-gray-300 px-3 py-3"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700 sm:col-span-2">
            Email address
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={change}
              className="mt-1 w-full rounded border border-gray-300 px-3 py-3"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Password
            <div className="relative mt-1">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="new-password"
                value={form.password}
                onChange={change}
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

          <label className="block text-sm font-medium text-gray-700">
            Confirm password
            <div className="relative mt-1">
              <input
                name="password_confirmation"
                type={showConfirmPassword ? "text" : "password"}
                required
                autoComplete="new-password"
                value={form.password_confirmation}
                onChange={change}
                className="w-full rounded border border-gray-300 px-3 py-3 pr-12"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword((previous) => !previous)}
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
                aria-pressed={showConfirmPassword}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-800"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </label>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded bg-[#727CB6] px-4 py-3 font-semibold text-white hover:bg-[#505B95] disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Register"}
            </button>
          </div>
        </form>

        <p className="mt-5 text-sm text-gray-600">
          Already registered?{" "}
          <Link to="/student/login" className="font-semibold text-[#505B95]">
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}
