/* eslint-disable react-refresh/only-export-components */
// @ts-nocheck
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";

const TODO = () => {
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
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="font-bold">Hart Hagerty</div>
                </div>
              </td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>Purple</td>
              <th>Low</th>
              <th>Todo</th>
              <th>
                <button className="btn btn-outline bg-[#5D3587] btn-sm text-white">
                  Ongoing
                </button>
              </th>
              <th>
                <button className="btn btn-outline bg-[#5D3587] btn-sm text-white">
                  Completed
                </button>
              </th>
              <th>
                <button className="btn btn-outline bg-[#5D3587] btn-sm text-white">
                  <FaEdit />
                </button>
              </th>
              <th>
                <button className="btn btn-outline bg-[#5D3587] btn-sm text-white">
                  <MdDelete />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TODO;
