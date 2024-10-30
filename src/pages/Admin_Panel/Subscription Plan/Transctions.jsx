import React from 'react'
import CachedIcon from "@mui/icons-material/Cached";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Transctions = () => {
  return (
    <div className="m-4">
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

      <table className="mt-8 overflow-x-auto w-full">
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
            Amount
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB] max-[600px]:text-[10px]">
            Charging Currency
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB] max-[600px]:text-[10px]">
            Transaction ID
            </th>

            <th className="px-4 py-2 font-semibold text-[#566a7f] text-[16px] border-b text-center border border-[#DBDBDB] max-[600px]:text-[10px]">
            Created Date
            </th>
          </tr>
        </thead>

        <tbody>
            <tr>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >668</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >Sid gor</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >Basic Plan</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >Paypal</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#ffb827]  border-[#DBDBDB] max-[600px]:text-[10px]" >Pending</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >₹ 100.0</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >₹</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >660ea0ff95c3a</td>
                <td className="px-4 py-2 text-center border text-[15px] text-[#566a7f]  border-[#DBDBDB] max-[600px]:text-[10px]" >04-04-2024</td>
             </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transctions