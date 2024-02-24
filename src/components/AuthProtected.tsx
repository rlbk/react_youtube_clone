import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../utils/helpers/localStorage";
import { StoreAuthI } from "../interfaces/common";

const AuthProtected = () => {
  const user: StoreAuthI | null = getUser();
  if (!user || !user.authenticated) return <Navigate to="/login" />;
  return <Outlet />;
};

export default AuthProtected;
