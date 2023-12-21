// @ts-nocheck
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../SectionTitle/SectionTitle";

const Completed = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    axiosPublic
      .get(`/tasks?email=${user?.email}&status=completed`)
      .then((res) => {
        setTasks(res?.data);
      });
  }, [axiosPublic, user?.email]);

  return (
    <div className="mb-20">
      <SectionTitle heading={"Completed task list"}></SectionTitle>
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
            </tr>
          </thead>
          <tbody>
            {tasks?.map((item, index) => (
              <tr key={item?._id}>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Completed;
