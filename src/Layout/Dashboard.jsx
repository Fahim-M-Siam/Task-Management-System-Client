// @ts-nocheck
import { NavLink, Outlet } from "react-router-dom";
import { MdManageHistory } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import SectionTitle from "../Components/SectionTitle/SectionTitle";

const Dashboard = () => {
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
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
