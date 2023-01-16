import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../Context/Auth";

const PrivateRoute = () => {
//   const { token } = useContext(AuthContext);

  const auth = { token: true };

  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
