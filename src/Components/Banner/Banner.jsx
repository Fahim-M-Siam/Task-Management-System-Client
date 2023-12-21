/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
import { Link } from "react-router-dom";
import "./banner.css";

const Banner = () => {
  return (
    <div className="hero bg-base-200 h-[500px] banner mb-20 ">
      <div className="overlay">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold text-white mt-16">
              Unleash Team Potential with SCC Technovision Inc.
            </h1>
            <p className="py-6 text-sm text-white">
              Welcome to a new era of productivity! SCC Technovision Inc's Task
              Management System is your key to seamless collaboration and
              efficient task handling. Unleash the potential of your team with
              our intuitive platform, designed to simplify workflows and drive
              success. Join us in revolutionizing the way you work—where
              innovation meets productivity. Get started today and experience a
              brighter, more organized future for your projects.
            </p>
            <Link to="/dashboard/manageTask">
              <button className="btn btn-outline bg-[#392467] text-white">
                Let’s Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
