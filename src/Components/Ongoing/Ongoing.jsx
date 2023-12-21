// @ts-nocheck
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../SectionTitle/SectionTitle";
import { MdDelete } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";

const Ongoing = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    axiosPublic
      .get(`/tasks?email=${user?.email}&status=ongoing`)
      .then((res) => {
        setTasks(res?.data);
      });
  }, [axiosPublic, user?.email]);

  // updating status to ongoing
  const handleCompleted = (_id) => {
    const status = "completed";
    const update = {
      status,
    };
    axiosPublic
      .put(`/tasks/${_id}`, update)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Completed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="pt-20 pb-20">
      <SectionTitle heading={"Ongoing task list"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Completed</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((item, index) => (
              <tr key={item?._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="font-bold">{item?.title}</div>
                </td>
                <td>{item?.description}</td>
                <td>{item?.date}</td>
                <th>{item?.priority}</th>
                <th>{item?.status}</th>

                <th>
                  <button
                    onClick={() => handleCompleted(item?._id)}
                    className="btn btn-outline bg-[#5D3587] btn-sm text-white"
                  >
                    Completed
                  </button>
                </th>
                <th>
                  <button className="btn btn-outline bg-[#5D3587] btn-sm text-white">
                    <MdDelete />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ongoing;
