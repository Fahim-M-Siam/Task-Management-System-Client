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
    <div className="w-full max-w-[1250px] px-[25px] mx-auto mb-10">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>

      <div className="flex-1 text-xl mt-10 font-bold">
        <Link to="/">SCC Technovision Inc</Link>
      </div>

      <div className="hidden lg:flex items-center -mt-9 justify-end gap-2">
        {/* This will be displayed on larger screens */}
        {/* Navbar menu content here */}
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
      </div>

      <div className="lg:hidden">
        {" "}
        {/* This will be displayed on smaller screens */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="cursor-pointer">
            <div className="avatar">
              <div className="w-10 rounded-full">
                {user?.email ? (
                  <img src={user.photoURL} alt="User Avatar" />
                ) : (
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <FaUser className="mt-2 text-xl" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user?.email ? (
              <>
                <NavLink
                  to="/Dashboard"
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
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="px-4 py-2 hover:bg-base-300 rounded-lg"
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
    </div>
  );
};

export default Navbar;
