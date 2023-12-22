// @ts-nocheck
import { NavLink, Outlet } from "react-router-dom";
import { MdManageHistory } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { logOut } = useAuth();
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
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#5D3587]">
        <SectionTitle heading={"SCC Technovision Inc."}></SectionTitle>
        <ul className="menu mt-20">
          <li className="text-white">
            <NavLink to="/dashboard/manageTask">
              <MdManageHistory /> Manage Task
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <div className="divider mt-10"></div>
          <button onClick={handleLogOut} className="btn btn-ghost text-white">
            <div className="flex gap-2">
              <IoIosLogOut className="-ml-28" /> Sign Out
            </div>
          </button>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
