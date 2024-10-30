import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import Project_Setting from "./Project_Setting";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SellIcon from "@mui/icons-material/Sell";

import PrintIcon from '@mui/icons-material/Print';
import { useNavigate } from "react-router";

const Edit_Project = () => {

    const navigate = useNavigate()
    function handleCloseForm() {
        navigate("/project_summary")
      }
  return (
    <Tabs className="m-5 shadow rounded-lg">
      <TabList className="flex p-7 gap-4 text-[20px] font-medium border-b border-[#B1B1B1] cursor-pointer">
        <Tab className="hover:text-[#2568EC] hover:border-b pb-2 border-[#2568EC]">
          Project
        </Tab>
        <Tab className="hover:text-[#2568EC] hover:border-b  pb-2 border-[#2568EC]">
          Project Settings
        </Tab>
      </TabList>

      <TabPanel className="m-5">
        <div className="w-[100%] space-y-5">
          <div className="space-y-2">
            <h1 className="font-medium">* Project Name</h1>
            <input
              className="h-[46px] w-[100%] border border-[#DBDCDE] rounded-md pl-2"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <h1 className="font-medium">* Customer</h1>
            <select className="w-[100%] h-[46px] bg-white border border-[#DBDCDE] rounded-md pl-5 ">
              <option value="">Select and begin typing</option>
            </select>
          </div>

          <div className="font-medium flex gap-4 items-center">
            <input type="checkbox" />
            <h1>Calculate progress through tasks</h1>
          </div>

          <div className="space-y-2">
            <h1>Progress 0%</h1>
            <div className="h-7 bg-[#FBFBFB] border border-[#D9D9D9] rounded-md"></div>
          </div>

          <div className="flex w-[100%] gap-10">
            <div className="w-[50%] space-y-2">
              <h1>* Billing Type</h1>
              <select className="h-[46px] w-[100%] bg-white border border-[#DBDCDE] rounded-md pl-5">
                <option value="">Fixed rate</option>
              </select>
            </div>

            <div className="w-[50%] space-y-2">
              <h1>Status</h1>
              <select className="h-[46px] w-[100%] bg-white border border-[#DBDCDE] rounded-md pl-5">
                <option value="">In Progress</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="font-medium">Total Rate</h1>
            <input
              className="h-[46px] w-[100%] border border-[#DBDCDE] rounded-md pl-2"
              type="text"
            />
          </div>

          <div className="grid grid-rows-2 space-y-2">
            <div className="flex w-[100%] gap-10">
              <div className="w-[50%] space-y-2">
                <h1>* Start Date</h1>
                <input
                  className="h-[46px] w-[100%] border border-[#DBDCDE] rounded-md pl-2"
                  type="text"
                />
              </div>

              <div className="w-[50%] space-y-2">
                <h1>Members</h1>
                <select className="h-[46px] w-[100%] bg-white border border-[#DBDCDE] rounded-md pl-5">
                  <option value="">Select Member</option>
                </select>
              </div>
            </div>

            <div className="flex w-[100%] gap-10">
              <div className="w-[50%] space-y-2">
                <h1>* Start Date</h1>
                <input
                  className="h-[46px] w-[100%] border border-[#DBDCDE] rounded-md px-2"
                  type="date"
                />
              </div>

              <div className="w-[50%] space-y-2">
                <h1>Deadline</h1>
                <input
                  className="h-[46px] w-[100%] border border-[#DBDCDE] rounded-md px-2"
                  type="date"
                />
              </div>
            </div>
          </div>

          <div>
            <SellIcon />
            <span className="font-medium pl-2">Tags</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-[18px] font-semibold">Description</h1>
            <div>
              <ul className="flex gap-10 text-[#1A1A1AB2] font-medium overflow-auto">
                <li className="cursor-pointer">File</li>
                <li className="cursor-pointer">Edit</li>
                <li className="cursor-pointer">View</li>
                <li className="cursor-pointer">Insert</li>
                <li className="cursor-pointer">Format</li>
                <li className="cursor-pointer">Tools</li>
                <li className="cursor-pointer">Table</li>
              </ul>
            </div>

            <div className=" border  border-[#E1E1E2]">
              <div class="p-2 flex gap-3 border-b border-[#E1E1E2]  items-center bg-white overflow-auto">
                <button class="p-2 hover:bg-gray-100 rounded">
                  <ArrowBackIcon />
                </button>
                <button class="p-2 hover:bg-gray-100 rounded">
                  <ArrowForwardIcon />
                </button>
                <button class="p-2 hover:bg-gray-100 rounded">
                  <PrintIcon />
                </button>

                <select class="border border-gray-300 rounded p-[2px]">
                  <option>Arial</option>
                </select>

                <div class="flex items-center space-x-3 border px-4 border-[#E1E1E2] rounded-full">
                  <button class="hover:bg-gray-100 rounded">-</button>
                  <span class="">00</span>
                  <button class="hover:bg-gray-100 rounded">+</button>
                </div>

                <button class="p-2 hover:bg-gray-100 rounded font-bold">
                  B
                </button>
                <button class="p-2 hover:bg-gray-100 rounded italic">I</button>
                <button class="p-2 hover:bg-gray-100 rounded underline">
                  U
                </button>

                <button class="p-2 hover:bg-gray-100 rounded">
                  <div class="h-4 w-4 bg-blue-500 rounded"></div>
                </button>

                <button class="p-2 hover:bg-gray-100 rounded">A</button>
                <button class="p-2 hover:bg-gray-100 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 10h14M5 6h14M7 14h10M9 18h6"
                    />
                  </svg>
                </button>
              </div>

              <div class=" mt-2 p-4 bg-white h-40">
                {/*-- This is the editable content area --*/}
              </div>
            </div>
          </div>

          <div className="space-x-3 border-b border-t border-[#B1B1B1] py-4">
            <input type="checkbox" />
            <span className="font-medium">Send project created email</span>
          </div>

          <div className="flex justify-end gap-5 pb-10">
            <button
              onClick={handleCloseForm}
              className="bg-white text-[#511992] border border-[#511992] h-10 w-20 rounded-md"
            >
              Cancel
            </button>
            <button className="bg-[#511992] text-white h-10 w-20 rounded-md">
              Save
            </button>
          </div>
        </div>
      </TabPanel>

      <TabPanel className="m-5">
        {/* <Project_Setting closeform={handleCloseForm} /> */}
      </TabPanel>
    </Tabs>
  );
};

export default Edit_Project;
