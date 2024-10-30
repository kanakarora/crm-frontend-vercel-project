import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CachedIcon from "@mui/icons-material/Cached";
import SearchIcon from "@mui/icons-material/Search";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PersonIcon from "@mui/icons-material/Person";

const Task_Status = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle accordion toggling
  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the accordion if clicked again
    } else {
      setOpenIndex(index); // Open the accordion
    }
  };
  //salary dropdown
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  //salary dropdown

  //Toggle swich off on btn
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  //Toggle swich off on btn

  //Modal
  // State to control the visibility of the modal
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  //Modal

  // Array of accordion items
  const accordionItems = [
    {
      title: (
        <div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-[12px] h-[12px] font-medium p-[10px] w-[50px] border-r whitespace-nowrap">
                  ID
                </th>

                <th className="text-[11px] w-[130px] p-[10px] border-r font-medium whitespace-nowrap">
                  Status Name
                </th>

                <th className="text-[11px] font-medium p-[10px] w-[110px] border-r whitespace-nowrap">
                  Status Color
                </th>
                <th className="text-[11px] font-medium p-[10px] w-[110px] border-r whitespace-nowrap">
                  Status Order
                </th>

                <th className="text-[11px] font-medium p-[10px] w-[150px] border-r whitespace-nowrap	">
                  Status default filter
                </th>

                <th className="text-[11px] font-medium p-[10px] w-[300px] border-r whitespace-nowrap	">
                  Status can be changed to
                </th>
                <th className="text-[11px] font-medium p-[10px] w-[148px] border-r whitespace-nowrap	">
                  Status is hidden for
                </th>
              </tr>
            </thead>
          </table>
        </div>
      ),
      content: (
        <table className="w-full ">
          <tbody>
            <tr>
              <td className="text-[12px] h-[12px] font-medium p-[10px] w-[50px]  whitespace-nowrap">
                1
              </td>

              <td className="text-[11px] w-[130px] p-[10px] font-medium whitespace-nowrap">
                Not Started
              </td>

              <td className="text-[11px] font-medium p-[10px] w-[110px]  whitespace-nowrap">
                #000000
              </td>
              <td className="text-[11px] font-medium p-[10px] w-[110px] whitespace-nowrap">
                20
              </td>

              <td className="text-[11px] font-medium p-[10px] w-[150px]  whitespace-nowrap">
                yes
              </td>

              <td className="text-[11px] font-medium p-[10px] w-[300px]  whitespace-nowrap">
                <Link className="first-btn p-[5px]" to="/">
                  in Progress
                </Link>
              </td>
              <td className="text-[11px] font-medium p-[10px] w-[148px]  whitespace-nowrap	"></td>
            </tr>
          </tbody>
        </table>
      ),
    },

    //   { title: "2", content: "This is the content for item 2" },
    //     { title: "3", content: "This is the content for item 3" },
  ];
  return (
    <div className=" w-full absolute pl-[145px] top-[95px] right-[5px] ">
      <div className="bg-[#fff] p-[10px] ml-[100px]">
        <div className="p-[20px] summary-border w-full">
          <div className="flex items-center gap-[14px] mb-[10px]">
            <div className="flex items-center justify-center text-[14px] h-[50px]">
              {/* Button to open the modal */}
              <button
                onClick={toggleModal}
                className="px-4 py-2 second-btn bg-blue-500 text-white rounded-md"
              >
                Add task status
              </button>

              {/* Modal (visible only when isOpen is true) */}
              {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                  <div className="bg-white rounded-lg shadow-lg w-96">
                    {/* Modal Header */}
                    <div className="px-4 py-2 border-b">
                      <h2 className="text-lg font-semibold">
                        Create new task status
                      </h2>
                    </div>

                    {/* Modal Body */}
                    <div className="p-4">
                      <div className="w-[100%] xl:[48%] mb-[10px] ">
                        <label className="text-[14px]">*Status Name</label>
                        <br />
                        <input
                          type="text"
                          placeholder=""
                          className="border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#fff] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                        />
                      </div>
                      <div className="w-[100%] xl:[48%] mb-[10px] ">
                        <label className="text-[14px]">*Status Color</label>
                        <br />
                        <input
                          type="text"
                          placeholder=""
                          className="border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#fff] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                        />
                      </div>
                      <div className="w-[100%] xl:[48%] mb-[10px] ">
                        <label className="text-[14px]">*Status Order</label>
                        <br />
                        <input
                          type="text"
                          placeholder=""
                          className="border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#fff] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                        />
                      </div>
                      <div className="mb-[10px] flex items-center gap-[6px]">
                        <input type="checkbox" />
                        <p>Default Filter</p>
                      </div>
                      <div className="w-[100%]  xl:[48%] mb-[26px]">
                        <label className="text-[14px]">is hidden for</label>
                        <br />
                        <select className="border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]">
                          <option>Nothing Selected</option>
                        </select>
                      </div>
                      <div className="w-[100%]  xl:[48%] mb-[20px]">
                        <label className="text-[14px]">Can be changed to</label>
                        <br />
                        <select className="border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]">
                          <option>Nothing Selected</option>
                        </select>
                      </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="px-4 py-2 border-t flex justify-end">
                      <button
                        onClick={toggleModal}
                        className="px-4 py-2 bg-[red]  text-white rounded-md mr-2"
                      >
                        Close
                      </button>
                      <button
                        onClick={toggleModal}
                        className=" second-btn bg-blue-500 text-white rounded-md"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-[10px]">
              <div className="relative inline-block text-left">
                {/* Button to open/close the dropdown */}
                <button
                  className=" items-center p-[6px] text-left text-[12px] text-sm font-normal text-[black] select-pe  rounded-md  focus:outline-none"
                  onClick={toggleDropdown1}
                >
                  25 <KeyboardArrowDownIcon className="newadd" />
                </button>

                {/* Dropdown menu */}
                {isOpen1 && (
                  <div className="absolute right-0 w-[100%] z-10 mt-2  origin-top-right left-[0px] bg-white border border-gray-200 rounded-md shadow-lg">
                    <div
                      className=""
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        className="block p-[5px] text-center text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        30
                      </a>
                      <a
                        href="#"
                        className="block p-[5px] text-center text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        40
                      </a>
                      <a
                        href="#"
                        className="block p-[5px] text-center text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        50
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <p className=" relative p-[7px] text-[12px] w-[100px] font-medium summary-border rounded-md  ">
                {" "}
                Export{" "}
                <CachedIcon className="absolute cursor-pointer right-[5px] top-[9px] newadd2" />{" "}
              </p>
            </div>
            <div className="relative">
              <input
                className="p-[6px] rounded-2xl  summary-border text-[13px] "
                type="text"
                placeholder=" Search......."
              />
              <SearchIcon className="absolute newadd2 right-[8px] top-[8px]" />
            </div>
          </div>
        </div>

        {accordionItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            {/* Accordion Header */}
            <button
              onClick={() => handleToggle(index)}
              className="flex justify-between items-center w-full text-left text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            >
              <span>{item.title}</span>
            </button>

            {/* Accordion Content */}
            {openIndex === index && (
              <div className="mb-[10px] text-gray-700 bg-white">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Task_Status;
