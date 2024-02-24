import { useNavigate } from "react-router-dom";
import { StoreAuthI } from "../interfaces/common";
import { getUser, setUser } from "../utils/helpers/localStorage";

const LoginForm = () => {
  const navigate = useNavigate();

  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
      alert("Email and password is required");
    }

    const user: StoreAuthI | null = getUser();
    if (!user) {
      alert("User not registered");
    } else {
      if (user.email === email && user.password === password) {
        user.authenticated = true;
        setUser(user);
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <form onSubmit={loginHandler}>
      <div className="flex flex-col gap-2 mb-3">
        <label className="w-12" htmlFor="email">
          Email
        </label>
        <input
          name="email"
          placeholder="Enter your email here"
          type="email"
          className="border rounded p-2 w-full"
          id="email"
        />
      </div>
      <div className="flex flex-col gap-2 mb-3 ">
        <label className="w-12 " htmlFor="password">
          Password
        </label>
        <input
          name="password"
          placeholder="*******"
          type="password"
          className="border rounded p-2 w-full"
          id="password"
        />
      </div>
      <button type="submit" className="rounded w-full mt-3 p-2 bg-blue-200">
        Login
      </button>
    </form>
  );
};

export default LoginForm;

// Type '(formdata:FormData)=>void' is not assignable to type 'string'
