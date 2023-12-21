// @ts-nocheck
import SectionTitle from "../SectionTitle/SectionTitle";
import { MdDelete } from "react-icons/md";

const Ongoing = () => {
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
                  Completed
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

export default Ongoing;
