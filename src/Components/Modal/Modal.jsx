/* eslint-disable react/prop-types */
// @ts-nocheck
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Modal = ({ index, item, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const toastId = toast.loading("Updating the task data..");
    const updatedTaskData = {
      email: item?.email,
      title: data?.title,
      description: data?.description,
      date: data?.date,
      priority: data?.priority,
      status: "todo",
    };

    axiosPublic
      .patch(`/tasks/${item?._id}`, updatedTaskData)
      .then((res) => {
        const data = res?.data;
        if (data.modifiedCount > 0) {
          toast.success("Task Has been Succesfully Updated", { id: toastId });
          refetch();
        } else {
          toast.error(data.message, { id: toastId });
        }
      })
      .catch((error) => {
        console.log("Unable to Update the task", error, { id: toastId });
      });
  };
  return (
    <div>
      <button
        className="btn btn-outline bg-[#5D3587] btn-sm text-white"
        onClick={() => document.getElementById(index).showModal()}
      >
        <FaEdit />
      </button>
      <dialog id={index} className="modal">
        <div className="modal-box w-11/12 h-[550px]">
          <div>
            <div>
              <div className="modal-action">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                  {/* if there is a button, it will close the modal */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Title</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      defaultValue={item?.title}
                      className="input input-bordered"
                      placeholder="Title"
                      {...register("title", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      type="text"
                      name="description"
                      defaultValue={item?.description}
                      className="textarea textarea-bordered"
                      placeholder="Description"
                      {...register("description", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Deadline</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      defaultValue={item?.date}
                      className="input input-bordered"
                      placeholder="Deadline"
                      {...register("date", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Priority</span>
                    </label>
                    <select
                      name="priority"
                      className="select select-bordered w-full max-w-xs"
                      {...register("priority", { required: true })}
                    >
                      <option disabled selected>
                        Select Your Priority Level
                      </option>
                      <option>Low</option>
                      <option>Moderate</option>
                      <option>High</option>
                    </select>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-outline bg-[#5D3587] text-white">
                      Update
                    </button>
                  </div>
                  <div>
                    <form method="dialog">
                      <div className="text-end mt-5">
                        <button className="btn btn-outline btn-sm">X</button>
                      </div>
                    </form>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
