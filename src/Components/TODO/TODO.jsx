/* eslint-disable react-refresh/only-export-components */
// @ts-nocheck
import { MdDelete } from "react-icons/md";
import SectionTitle from "../SectionTitle/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useGetTask from "../../Hooks/useGetTask";
import Modal from "../Modal/Modal";

const TODO = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [refetch] = useGetTask();
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    axiosPublic.get(`/tasks?email=${user?.email}&status=todo`).then((res) => {
      setTasks(res?.data);
    });
  }, [axiosPublic, user?.email, refetch]);

  // updating status to ongoing
  const handleOngoing = (_id) => {
    const status = "ongoing";
    const update = {
      status,
    };
    axiosPublic
      .put(`/tasks/${_id}`, update)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Ongoing");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // updating status to completed
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

  // delete task
  const handleDeleteTask = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/tasks/${item?._id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: `Your ${item?.title} has been deleted.`,
            icon: "success",
          });
          const remaining = tasks?.filter((task) => task?._id !== item?._id);
          setTasks(remaining);
        }
      }
    });
  };
  return (
    <div>
      <SectionTitle heading={"TODO-TASK-LIST"}></SectionTitle>
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
              <th>Ongoing</th>
              <th>Completed</th>
              <th>Customize</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="font-bold">{item?.title}</div>
                  </div>
                </td>
                <td>{item?.description}</td>
                <td>{item?.date}</td>
                <th>{item?.priority}</th>
                <th>{item?.status}</th>
                <th>
                  <button
                    onClick={() => handleOngoing(item?._id)}
                    className="btn btn-outline bg-[#5D3587] btn-sm text-white"
                  >
                    Ongoing
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleCompleted(item?._id)}
                    className="btn btn-outline bg-[#5D3587] btn-sm text-white"
                  >
                    Completed
                  </button>
                </th>
                <th>
                  <Modal index={index + 1} item={item}></Modal>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteTask(item)}
                    className="btn btn-outline bg-[#5D3587] btn-sm text-white"
                  >
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

export default TODO;
