import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <div className=" h-full flex items-center justify-center">
      <div className=" border border-slate-300 border-solid px-6 py-10 rounded-md">
        <h1 className="font-bold text-2xl text-center">Register</h1>
        <div className="my-4">
          <SignupForm />
        </div>
        <Link to="/login" className="text-sm">
          Already have account?
        </Link>
      </div>
    </div>
  );
};

export default Signup;
