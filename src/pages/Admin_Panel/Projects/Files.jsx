import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import SearchIcon from '@mui/icons-material/Search';

const Files = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
      setIsOn(!isOn);
  }
  return (
    <div>
      <div className="flex justify-center items-center w-full">
        <label
          for="dropzone-file"
          className="flex flex-col justify-center items-center w-full h-20 border-2 border-dashed border-[#4E58F2] rounded-lg cursor-pointer"
        >
          <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <p className="mb-2 text-sm text-[#4E58F2] font-medium">
              Drop files here to upload
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <div className="flex items-center space-x-6 space-y-2 justify-between mt-8">
        <div className="flex items-center gap-[10px]">
          
            Visible to Customer
          
          <div
            className={`${isOn ? 'bg-green-500' : 'bg-[#e6e0e0]'
              } relative inline-block w-12 h-6 rounded-full transition-colors duration-300 ease-in-out cursor-pointer`}
            onClick={toggleSwitch}
          >
            <span
              className={`${isOn ? 'translate-x-6' : 'translate-x-0'
                } inline-block w-6 h-6 bg-[#d5cdcd] rounded-full transform transition-transform duration-300 ease-in-out`}
            />
          </div>
          
        </div>

        <button className="flex items-center px-4 py-2 gap-2 text-sm text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100">
          <FaGoogle />
          Choose from Google Drive
        </button>
      </div>

      <div >
        <div className="p-4 shadow mt-8 rounded-xl">
          <div className="flex  justify-between items-center mb-4 max-[1050px]:block">
            <div className="flex space-x-2 text-[#000]">
              <select className="border text-[14px]  border-[#B1B1B1] rounded p-2 bg-white">
                <option>25</option>
              </select>
              <button className=" text-[#000] text-[14px] border border-[#B1B1B1] px-4 py-2 rounded">
                Export
              </button>
              <button className=" text-[#000] text-[14px] border border-[#B1B1B1] px-4 py-2 rounded">
                Bulk Actions
              </button>
              <button className=" text-[#000] text-[14px] border border-[#B1B1B1] px-4 py-2 rounded">
                Download All
              </button>
            </div>

            <div className='relative'>
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-lg shadow-cs focus-visible:outline-none p-2 w-64 max-[1050px]:mt-4"

              />
              <SearchIcon className='absolute right-[10px] top-[10px] text-[#b1b1b1]'/>
            </div>
          </div>

          <div className="overflow-x-auto ">
            <table className="min-w-full bg-white border border-[#dbdbdb] shadow-cs mb-[8px]">
              <thead>
                <tr>
                  <th className="p-[10px] font-normal whitespace-nowrap text-[#000] text-[14px] text-center border-b  border-t border-r border-[#DBDBDB]">Filename</th>
                  <th className="p-[10px] font-normal whitespace-nowrap text-[#000] text-[14px] text-center border-b  border border-[#DBDBDB]">File type</th>
                  <th className="p-[10px] font-normal whitespace-nowrap text-[#000] text-[14px] text-center border-b  border border-[#DBDBDB]">Last Activity</th>
                  <th className="p-[10px] font-normal whitespace-nowrap text-[#000] text-[14px] text-center border-b  border border-[#DBDBDB]">Total Comments</th>
                  <th className="p-[10px] font-normal whitespace-nowrap text-[#000] text-[14px] text-center border-b  border border-[#DBDBDB]">
                    Visible to Customer
                  </th>
                  <th className="p-[10px] font-normal whitespace-nowrap text-[#000] text-[14px] text-center border-b  border border-[#DBDBDB">Uploaded by</th>
                  <th className="p-[10px] font-normal whitespace-nowrap text-[#000] text-[14px] text-center border-b  border border-[#DBDBDB">Date uploaded</th>
                  <th className="p-[10px] font-normal whitespace-nowrap text-[#000] text-[14px] text-center border-b  border-t border-l border-[#DBDBDB] ">Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-[10px] text-[14px] text-start text-[#000]" colspan="8">
                    No entries found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;
