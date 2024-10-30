import React, { useState } from "react";
import logo from "../../Assets/Images/logo.png";
import home from "../../Assets/Images/home.png";
import project from "../../Assets/Images/project.png";
import task from "../../Assets/Images/task.png";
import client from "../../Assets/Images/client.png";
import report from "../../Assets/Images/report.png";
import staff from "../../Assets/Images/staff.png";
import setting from "../../Assets/Images/setting.png";
import { Link } from "react-router-dom";
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const SidebarClient = ({ toggleSideBar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
 
   const [isMenuOpen1, setIsMenuOpen1] = useState(false);
   const toggleMenu1 = () => setIsMenuOpen1(!isMenuOpen1);
  
   const [isMenuOpen2, setIsMenuOpen2] = useState(false);
   const toggleMenu2 = () => setIsMenuOpen2(!isMenuOpen2);

   const [isMenuOpen3, setIsMenuOpen3] = useState(false);
   const toggleMenu3 = () => setIsMenuOpen3(!isMenuOpen3);

   const [isMenuOpen4, setIsMenuOpen4] = useState(false);
   const toggleMenu4 = () => setIsMenuOpen4(!isMenuOpen4);

   const [isMenuOpen5, setIsMenuOpen5] = useState(false);
   const toggleMenu5 = () => setIsMenuOpen5(!isMenuOpen5);

   const [isMenuOpen6, setIsMenuOpen6] = useState(false);
   const toggleMenu6 = () => setIsMenuOpen6(!isMenuOpen6);
   
   const [isMenuOpen7, setIsMenuOpen7] = useState(false);
   const toggleMenu7 = () => setIsMenuOpen7(!isMenuOpen7);
   
   const [isMenuOpen8, setIsMenuOpen8] = useState(false);
   const toggleMenu8 = () => setIsMenuOpen8(!isMenuOpen8);

   const [isMenuOpen9, setIsMenuOpen9] = useState(false);
   const toggleMenu9 = () => setIsMenuOpen9(!isMenuOpen9);

   

  return (
    <div className="sidebar w-[250px] xl:w-[200px] lg:w-[300px] md:w-[300px] bg-[#27004a] h-[100vh] p-[10px] ">

 
      <div className="flex xl:justify-center lg:justify-center  p-[20px]">
        <img src={logo} alt="" className="w-[120px]" />
      </div>
      <ul className="pl-[2px] pr-[2px] pt-[0px] pb-[20px]">
        <li className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
          <img src={home} />
          <Link to="/" className="">Dashboard</Link>
        </li>
        <li className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
          <img src={home} />
          <Link to="/" className="">Chat</Link>
        </li>


        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            <img src={project} alt="" />
            <button
              onClick={toggleMenu}
              className=" "
            >
              Projects
            </button>

          </div>

          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out mt-[5px] ${isMenuOpen ? 'max-h-screen' : 'max-h-0'
              }`}
          >

            <Link to="#"
              className="w-full ml-[40px] text-left py-[10px] flex items-center gap-[10px] pl-[0px] whitespace-nowrap  text-white   transition-all	rounded-md"
            >
              <ArrowForwardIosIcon className="arrow-icon-sidebar"/>
              Task
            </Link>



          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            <img src={task} alt="" />
            <button
              onClick={toggleMenu1}
              className=" "
            >
              Task
            </button>

          </div>

      
        </div>
        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            <img src={task} alt="" />
            <button
              onClick={toggleMenu1}
              className=" "
            >
              Notes
            </button>

          </div>

      
        </div>
        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            <img src={task} alt="" />
            <button
              onClick={toggleMenu1}
              className=" "
            >
              Invoice
            </button>

          </div>

      
        </div>


      

       
      </ul>
    </div>
  );
};

export default SidebarClient;
