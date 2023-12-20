// @ts-nocheck
import { FaUser } from "react-icons/fa6";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import { Link, NavLink } from "react-router-dom";

// @ts-nocheck
const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logged Out");
      })
      .catch(() => {
        toast.error("Logout Action Failed");
      });
  };
  return (
    <div>
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown navbarDropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user?.email ? (
                <>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "btn btn-outline bg-[#392467] text-white btn-sm"
                        : "btn btn-ghost btn-sm"
                    }
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "btn btn-outline bg-[#392467] text-white btn-sm"
                        : "btn btn-ghost btn-sm"
                    }
                  >
                    Dashboard
                  </NavLink>

                  <div
                    onClick={handleLogOut}
                    className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
                  >
                    Logout
                  </div>
                </>
              ) : (
                <>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "btn btn-outline bg-[#392467] text-white btn-sm"
                        : "btn btn-ghost btn-sm"
                    }
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "btn btn-outline bg-[#FF715A] text-white btn-sm"
                        : "btn btn-ghost btn-sm"
                    }
                  >
                    Dashboard
                  </NavLink>

                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-[#5D3587] btn-sm text-white"
                        : "btn btn-ghost btn-sm"
                    }
                  >
                    Login
                  </NavLink>
                </>
              )}
            </ul>
          </div>
          <div className="flex text-xl gap-2 items-center font-bold">
            <div>
              <Link to="/">Ship Ease Delivery</Link>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline bg-[#5D3587] text-white btn-sm"
                  : "btn btn-ghost btn-sm"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboad"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline bg-[#5D3587] text-white btn-sm"
                  : "btn btn-ghost btn-sm"
              }
            >
              Dashboard
            </NavLink>
            {user?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="cursor-pointer">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} alt="User Avatar" />
                    </div>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <NavLink className="px-4 py-2 hover:bg-base-300 rounded-lg">
                    {user?.displayName}
                  </NavLink>
                  <NavLink
                    to="/dashboard"
                    className="px-4 py-2 hover:bg-base-300 rounded-lg"
                  >
                    Dashboard
                  </NavLink>

                  <div
                    onClick={handleLogOut}
                    className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
                  >
                    Logout
                  </div>
                </div>
              </div>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "btn bg-[#5D3587] btn-sm text-white"
                      : "btn btn-ghost btn-sm"
                  }
                >
                  Login
                </NavLink>
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <div className="w-10 rounded-full">
                      <FaUser className="mt-2 text-xl" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </ul>
        </div>

        <div className="navbar navbar-end">
          {/* This will be displayed on smaller screens */}
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt="User Avatar" />
                  </div>
                </div>
              </label>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavLink className="px-4 py-2 hover:bg-base-300 rounded-lg">
                  {user.displayName}
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className="px-4 py-2 hover-bg-base-300 rounded-lg"
                >
                  Dashboard
                </NavLink>

                <div
                  onClick={handleLogOut}
                  className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Logout
                </div>
              </div>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "btn bg-[#FF715A] btn-sm mr-2"
                    : "btn btn-ghost btn-sm mr-2"
                }
              >
                Login
              </NavLink>
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <FaUser className="mt-2 text-xl" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
