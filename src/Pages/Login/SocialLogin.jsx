// @ts-nocheck
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();
  const handleSocialLogin = (media) => {
    media()
      .then(() => {
        toast.success("Registration has been successful");
        Navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Registration failed");
      });
  };
  return (
    <>
      <div className="divider">Continue With</div>
      <div className="flex justify-between">
        <div className="text-center">
          <button
            onClick={() => handleSocialLogin(googleLogin)}
            className="btn btn-outline btn-sm"
          >
            <FcGoogle />
            Google
          </button>
        </div>
        <div className="text-center">
          <button
            onClick={() => handleSocialLogin(githubLogin)}
            className="btn btn-outline btn-sm"
          >
            <FaGithub />
            Github
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
