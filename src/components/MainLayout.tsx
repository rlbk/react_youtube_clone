import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import Error from "../pages/Error";

const MainLayout = () => {
  const error = useAppSelector((state) => state.youtubeApp.error);
  if (error) return <Error error={error} />;
  return (
    <div className="bg-slate-50 h-screen w-screen xl:w-10/12 mx-auto overflow-y-hidden">
      <Outlet />
    </div>
  );
};

export default MainLayout;
