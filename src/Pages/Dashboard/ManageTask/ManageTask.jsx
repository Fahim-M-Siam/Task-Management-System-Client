// @ts-nocheck
import { useForm } from "react-hook-form";
import Completed from "../../../Components/Completed/Completed";
import Ongoing from "../../../Components/Ongoing/Ongoing";
import TODO from "../../../Components/TODO/TODO";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useGetTask from "../../../Hooks/useGetTask";

const ManageTask = () => {
  const { user } = useAuth();
  const [task, refetch] = useGetTask();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const toastId = toast.loading("Adding the task..");

    const taskData = {
      email: user?.email,
      title: data?.title,
      description: data?.description,
      date: data?.date,
      priority: data?.priority,
      status: "todo",
    };

    axiosPublic.post("/tasks", taskData).then((res) => {
      if (res?.data) {
        toast.success("Task Has been Succesfully Added", { id: toastId });
        refetch();
      } else {
        toast.error("Unable to add the task", { id: toastId });
      }
    });
  };

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
      <div className="max-w-7xl mx-auto flex justify-between mt-10">
        <h2 className="text-3xl">Total Tasks: {task?.length}</h2>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-outline btn-sm bg-[#5D3587] text-white"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          + Create Task
        </button>
        <dialog id="my_modal_4" className="modal">
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
                        Create
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
      <div>
        <TODO></TODO>
        <Ongoing></Ongoing>
        <Completed></Completed>
      </div>
    </div>
  );
};

export default ManageTask;
