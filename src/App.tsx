import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NoAuthProtected from "./components/NoAuthProtected";
import Signup from "./pages/Signup";
import AuthProtected from "./components/AuthProtected";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<AuthProtected />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<NoAuthProtected />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
