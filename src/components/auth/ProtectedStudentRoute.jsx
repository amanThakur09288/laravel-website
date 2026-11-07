import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedStudentRoute({ children }) {
  const { user, initialized } = useSelector((state) => state.studentAuth);

  const location = useLocation();

  if (!initialized) {
    return (
      <div className="py-20 text-center text-gray-500">
        Checking student session...
      </div>
    );
  }

  if (!user || user.role !== "user" || user.is_active !== true) {
    return (
      <Navigate
        to="/student/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return children;
}
