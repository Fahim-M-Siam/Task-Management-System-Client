// @ts-nocheck
import { MdDeveloperMode } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";
import { GiBank } from "react-icons/gi";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FcManager } from "react-icons/fc";
import { GrUserManager } from "react-icons/gr";
import SectionTitle from "../SectionTitle/SectionTitle";

const Benifit = () => {
  return (
    <div className="space-y-20">
      <SectionTitle heading={"Our Users"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 p-3">
        <div className="card  bg-[#A367B1] shadow-xl text-center">
          <figure className="mt-10 text-2xl">
            <MdDeveloperMode />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title flex justify-center">Developers</h2>
            <p>
              Streamline project workflows, manage tasks efficiently, and
              enhance collaboration among development teams.
            </p>
          </div>
        </div>
        <div className="card  bg-[#A367B1] shadow-xl">
          <figure className="mt-10 text-2xl">
            <MdCorporateFare />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title flex justify-center">
              Corporate Professionals
            </h2>
            <p>
              Optimize organizational efficiency, track progress seamlessly, and
              foster a collaborative work environment for corporate teams.
            </p>
          </div>
        </div>
        <div className="card  bg-[#A367B1] shadow-xl">
          <figure className="mt-10 text-2xl">
            <GiBank />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title flex justify-center">
              Bankers and Finance Professionals
            </h2>
            <p>
              Stay organized with financial tasks, manage deadlines, and enhance
              communication within financial teams.
            </p>
          </div>
        </div>
        <div className="card  bg-[#A367B1] shadow-xl">
          <figure className="mt-10 text-2xl">
            <SiGooglemarketingplatform />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title flex justify-center">Marketing Teams</h2>
            <p>
              Coordinate campaigns, track marketing initiatives, and boost
              creativity and efficiency among marketing professionals.
            </p>
          </div>
        </div>
        <div className="card  bg-[#A367B1] shadow-xl">
          <figure className="mt-10 text-2xl">
            <FcManager />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title flex justify-center">Managers</h2>
            <p>
              Facilitate project planning, monitor task progress, and ensure
              successful project completion with our intuitive platform.
            </p>
          </div>
        </div>
        <div className="card  bg-[#A367B1] shadow-xl">
          <figure className="mt-10 text-2xl">
            <GrUserManager />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title flex justify-center">Entrepreneurs</h2>
            <p>
              Drive business growth by efficiently managing tasks, fostering
              collaboration, and staying organized in the entrepreneurial
              journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifit;
