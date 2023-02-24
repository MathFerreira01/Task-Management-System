import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const ProtectedRoute = () => {
  const { signed } = useAuth();

  return signed > 0 ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
