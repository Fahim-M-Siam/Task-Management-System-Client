// @ts-nocheck
import Completed from "../../../Components/Completed/Completed";
import Ongoing from "../../../Components/Ongoing/Ongoing";
import TODO from "../../../Components/TODO/TODO";
import useAuth from "../../../Hooks/useAuth";

const ManageTask = () => {
  const { user } = useAuth();
  return (
    <div className="-mt-12">
      <div className="flex justify-end mt-20 mr-10">
        <h2 className="mr-3 mt-2">{user.displayName}</h2>
        <label tabIndex={0} className="cursor-pointer">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} alt="User Avatar" />
            </div>
          </div>
        </label>
      </div>
      <div className="max-w-7xl mx-auto flex justify-between">
        <h2 className="text-3xl">Total Tasks: 10</h2>
        <h2 className="text-3xl">Ongoing Tasks: 10</h2>
        <h2 className="text-3xl">Completed Tasks: 10</h2>
      </div>
      <div>
        <TODO></TODO>
        <Ongoing></Ongoing>
        <Completed></Completed>
      </div>
    </div>
  );
};

export default ManageTask;
