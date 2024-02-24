import { useNavigate } from "react-router-dom";
import { StoreAuthI } from "../interfaces/common";
import { setUser } from "../utils/helpers/localStorage";

const SignupForm = () => {
  const navigate = useNavigate();
  const signupHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
      alert("Email and password is required");
    }

    const payload: StoreAuthI = {
      email: email as string,
      password: password as string,
      authenticated: false,
    };
    const isRegistered = setUser(payload);
    console.log(isRegistered, "@re");
    if (isRegistered) navigate("/login");
  };

  return (
    <form onSubmit={signupHandler}>
      <div className="flex flex-col gap-2 mb-3">
        <label className="w-12 " htmlFor="email">
          Email
        </label>
        <input
          name="email"
          className="border rounded p-2 w-full"
          id="email"
          placeholder="Enter your email here"
        />
      </div>
      <div className="flex flex-col gap-2 mb-3">
        <label className="w-12 " htmlFor="password">
          Password
        </label>
        <input
          type="password"
          placeholder="********"
          name="password"
          className="border rounded p-2 w-full"
          id="password"
        />
      </div>
      <button type="submit" className="rounded w-full mt-3 p-2 bg-blue-200">
        Register
      </button>
    </form>
  );
};

export default SignupForm;

// Type '(formdata:FormData)=>void' is not assignable to type 'string'
