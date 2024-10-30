import React, { useState } from "react";
import details from "../../../Assets/Images/Details.png";
import arrowbtn from "../../../Assets/Images/arrowbtn.png";
import { MdManageSearch } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { PiFiles } from "react-icons/pi";
import { GoCommentDiscussion } from "react-icons/go";
import { FaChartGantt } from "react-icons/fa6";
import { IoTicketSharp } from "react-icons/io5";
import { FaNoteSticky } from "react-icons/fa6";
import { MdLocalActivity } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import Over from "./View";
// import Task from "./All_Task";
import Files from "./Files";
import Discussion from "./Discussion";
import Tickets from "./Tickets";
import Notes from "./Nots";
import Activity from "./Activity";
import Calender from "./Calender";
import People from "./People";
import Task from './Task'

const Projects = () => {
  const [activeTab, setactiveTab] = useState("Overview");

  const handleActiveClick = (tab) => {
    setactiveTab(tab);
  };

  const tabIcons = {
    Overview: <MdManageSearch />,
    Task: <FaTasks />,
    Files: <PiFiles />,
    Discussions: <GoCommentDiscussion />,
    Gantt: <FaChartGantt />,
    Tickets: <IoTicketSharp />,
    Notes: <FaNoteSticky />,
    Activity: <MdLocalActivity />,
    Calendar: <FaCalendarAlt />,
    People: <IoIosPeople />,
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div>
            <Over />
          </div>
        );
      case "Task":
        return (
          <div>
            <Task />
          </div>
        );
      case "Files":
        return (
          <div>
            <Files />
          </div>
        );
      case "Discussions":
        return (
          <div>
            <Discussion />
          </div>
        );
      case "Gantt":
        return <div>Gantt Content</div>;
      case "Tickets":
        return (
          <div>
            <Tickets />
          </div>
        );
      case "Notes":
        return (
          <div>
            <Notes />
          </div>
        );
      case "Activity":
        return (
          <div>
            <Activity />
          </div>
        );
      case "Calendar":
        return (
          <div>
            <Calender />
          </div>
        );
      case "People":
        return (
          <div>
            <People />
          </div>
        );
      default:
        return <div>Overview Content</div>;
    }
  };

  return (
    <div className="p-[16px]">
      <div>
        <span className=" text-[18px] font-medium max-[600px]:text-[15px]">
          Projects / Overview
        </span>
        <div className="flex justify-between  items-center gap-3">
          <div className="flex gap-[10px]">
          <div className="flex items-center gap-2">
            <span className="text-black text-[20px] font-medium max-[600px]:text-[25px]">
              Addodle
            </span>
            {/*- Profile Pictures -*/}
            <div className="flex items-center space-x-2">
              <img
                className="rounded-full border-2 h-[32px] border-white"
                src={details}
                alt="Profile 1"
              />
            </div>
          </div>
          <div className="">
            <button className="bg-green-100 text-[#4BA665] pt-[8px] pb-[8px] pl-[18px] pr-[18px] rounded-lg" type="submit">Finished</button>
          </div>
          </div>
          {/*-- Status Badge -*/}
      
          {/*-- More Dropdown --*/}
          <div className=" mb-[26px]">
            
            <br />
            <select className="border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]">
              <option>More</option>
              <option>Pin Project</option>
              <option>Edit Project</option>
              <option>Copy Project</option>
              <option>Mark as Not Started</option>
              <option>Mark as On Hold</option>
              <option>Mark as Cancelled</option>
              <option>Mark as Finished</option>
              <option>Export Project dara</option>
              <option>View project as customer</option>
              <option className="del-project">Delete project</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center p-[8px] shadow-cs border h-auto shadow-md rounded-xl overflow-x-auto gap-[30px]  whitespace-wrap">
        {[
          "Overview",
          "Task",
          "Files",
          "Discussions",
          "Gantt",
          "Tickets",
          "Notes",
          "Activity",
          "Calendar",
          "People",
        ].map((tab) => (
          <button
            key={tab}
            onClick={() => handleActiveClick(tab)}
            className={`flex items-center space-x-2 sm:space-x-3 ${activeTab === tab
                ? " bg-[#27004a] active-set2  p-[8px] rounded-lg text-base sm:text-lg lg:text-xl"
                : "text-[#b1b1b1] text-sm sm:text-base"
              }   cursor-pointer`}
          >
            {tabIcons[tab]} {/* Render the corresponding icon */}
            <span className="text-sm tab-span sm:text-base">{tab}</span>
          </button>
        ))}
      </div>
      <div className="mt-10">{renderTabContent()}</div>
    </div>
  );
};

export default Projects;
