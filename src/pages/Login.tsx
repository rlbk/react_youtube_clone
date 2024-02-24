import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className=" h-full flex items-center justify-center">
      <div className=" border border-slate-300 border-solid px-6 py-10 rounded-md">
        <h1 className="font-bold text-2xl text-center">Login</h1>
        <div className="my-4">
          <LoginForm />
        </div>
        <Link to="/signup" className="text-sm">
          Don't have account?
        </Link>
      </div>
    </div>
  );
};

export default Login;
