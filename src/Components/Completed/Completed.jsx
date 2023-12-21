// @ts-nocheck

import SectionTitle from "../SectionTitle/SectionTitle";

const Completed = () => {
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Completed;
