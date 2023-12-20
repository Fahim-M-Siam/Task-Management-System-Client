/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// @ts-nocheck
const Login = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (event) => {
    event.preventDefault();
    const toastId = toast.loading("Logging In..");
    const form = event.target;
    // inputvalues
    const email = form.email.value;
    const password = form.password.value;

    // signIn
    signIn(email, password)
      .then(() => {
        toast.success("Successfully Logged In", { id: toastId });

        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // validations
        if (errorCode === "auth/invalid-login-credentials") {
          toast.error("Invalid Login Credential", { id: toastId });
        } else {
          console.error(errorMessage);
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-[#A367B1]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=" lg:text-left mt-28 text-end">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-5 w-[500px]">
            Welcome to SCC Technovision Inc's Task Management System. Streamline
            your workday with our intuitive platform designed to enhance
            collaboration and boost productivity. Log in to access a suite of
            powerful tools that empower your team to manage tasks efficiently
            and stay organized. Elevate your workflow with SCC Technovision Inc
            – where innovation meets seamless task management.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-10">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-[17.25rem] lg:left-[18rem] top-[3.2rem]"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
              <label className="label">
                <NavLink href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </NavLink>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-outline bg-[#5D3587] text-white"
              >
                Login
              </button>
            </div>
            <div className="flex text-sm">
              <p>New here?</p>
              <Link to="/register" className="link link-hover font-bold">
                Register Now
              </Link>
            </div>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
