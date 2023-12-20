/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { imageUpload } from "../../API/Utils";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../Login/SocialLogin";

// @ts-nocheck
const Register = () => {
  const { createUser, logOut } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Registering..");
    const form = event.target;
    // inputvalues
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageFile = form.image.files[0];

    // validations
    if (password.length < 6) {
      toast.error("Password is less than 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password don't have a capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      toast.error("Password don't have a special character");
      return;
    }

    try {
      const imageData = await imageUpload(imageFile);
      const image = imageData?.data?.display_url;

      // creatingUser
      await createUser(email, password)
        .then((user) => {
          toast.success("Registration has been succesful", { id: toastId });
          logOut();
          // update profile
          updateProfile(user?.user, {
            displayName: name,
            photoURL: image,
          }).then(() => {
            toast.success("Profile Updated");
          });
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="hero min-h-screen bg-[#A367B1]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left mt-28">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-5 w-[500px]">
            Join SCC Technovision Inc's Task Management System and unlock a
            world of efficient collaboration. Register now to harness the power
            of streamlined task management, enabling your team to achieve more
            together. Experience the convenience of our user-friendly platform
            as you embark on a journey towards enhanced productivity. Start your
            SCC Technovision Inc account today and take the first step towards a
            smarter, more organized work environment.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-10">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Image</span>
              </label>
              <input
                type="file"
                placeholder="image"
                name="image"
                required
                accept="image/*"
                id="image"
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
                className="absolute left-[13.25rem] lg:left-[18rem] top-[3.2rem]"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-outline bg-[#5D3587] text-white"
              >
                Register
              </button>
            </div>
            <div className="flex text-sm">
              <p>Have a account?</p>
              <Link
                to="/login"
                className="link link-hover text-black font-bold"
              >
                Login Now
              </Link>
            </div>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
