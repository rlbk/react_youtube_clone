import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../utils/helpers/localStorage";
import { StoreAuthI } from "../interfaces/common";

const NoAuthProtected = () => {
  const user: StoreAuthI | null = getUser();
  if (user && user.authenticated) return <Navigate to="/" />;
  return <Outlet />;
};

export default NoAuthProtected;
