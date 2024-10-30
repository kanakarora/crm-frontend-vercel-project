import React from "react";
import CachedIcon from "@mui/icons-material/Cached";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Subscription_History = () => {
  return (
    <div className="m-4 ">
      <div className="flex items-center gap-2 justify-end">
        <input
          className="h-[40px] rounded-md border border-[#d9dee3] pl-2 max-[600px]:text-[10px]"
          type="text"
          placeholder="Search"
        />

        <div className="bg-[#8592a3] text-white px-7 py-[8px] rounded-md space-x-6 max-[463px]:flex max-[463px]:h-[40px]">
          <button>
            <CachedIcon />
          </button>
          <button>
            <KeyboardArrowDownIcon />
          </button>
        </div>
      </div>

      <table className="mt-8 w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border-t border-r border-l border-[#DBDBDB] max-[600px]:text-[10px]">
              ID
            </th>
            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB] max-[600px]:text-[10px]">
              User Name
            </th>
            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB] max-[600px]:text-[10px]">
              Plan Name
            </th>
            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB] max-[600px]:text-[10px]">
              Payment method
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB] max-[600px]:text-[10px]">
              Status
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB] max-[600px]:text-[10px]">
              Charging Price
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB] max-[600px]:text-[10px]">
              Features
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB] max-[600px]:text-[10px]">
              Tenure
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB] max-[600px]:text-[10px]">
              Started at
            </th>
            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB] max-[600px]:text-[10px]">
              End Date
            </th>
          </tr>
        </thead>

        <tbody>
            <tr>
                <td className="px-4 py-20 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >668</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >Sid gor</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >Standard Plan</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >Paypal</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#71dd37]  border-[#DBDBDB] max-[600px]:text-[10px]" >Active</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >₹ 500.0</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >
                    <ul className="flex flex-col items-start max-[600px]:text-[10px]">
                        <li>
                            <strong>Max Projects: </strong>
                            10
                        </li>

                        <li>
                            <strong>Max Team Members: </strong>
                            10
                        </li>

                        <li>
                            <strong>Max Workspaces: </strong>
                            10
                        </li>

                        <li>
                            <strong>Max Clients: </strong>
                            10
                        </li>

                        <li>
                            <strong>Modules: </strong>
                        </li>
                    </ul>

                    <ul className="flex flex-col items-start max-[600px]:text-[10px]">
                        <li>Tasks</li>
                        <li>Notes</li>
                        <li>Meetings</li>
                        <li>Chat</li>
                        <li>Todos</li>
                        <li>Contracts</li>
                        <li>Payslips</li>
                        <li>Finance</li>
                    </ul>
                </td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >Monthly</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >2024-04-05</td>
                <td className="px-4 py-4 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >2024-05-05</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Subscription_History;
