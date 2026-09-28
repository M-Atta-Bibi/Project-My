import { Navigate, Outlet, useLocation } from "react-router-dom";
import pathConstants from "../../routes/pathConstants";
import environment from "../../environment";
import Cookies from "js-cookie";
const PrivateRoutes = () => {
  const Location = useLocation();
  const isAuthorized = Cookies.get(environment.TOKEN_KEY);
  return isAuthorized ? (
    <Outlet />
  ) : (
    <Navigate to={pathConstants.Login} state={{ from: Location }} replace />
  );
};

export default PrivateRoutes;
