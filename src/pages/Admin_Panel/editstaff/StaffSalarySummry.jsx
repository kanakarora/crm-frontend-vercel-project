 import React, { useState } from "react";
import { Link } from "react-router-dom";
import WarningIcon from '@mui/icons-material/Warning';
import DownloadIcon from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useParams } from 'react-router';

const StaffSalarySummry = () => {
    const {id}= useParams();
    console.log(id)

    const [isOpen, setIsOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsOpen(false);
    };

    const [isOpen2, setIsOpen2] = useState(false);

    // Function to open the modal 2
    const openModal2 = () => {
        setIsOpen2(true);
    };

    // Function to close the modal 2
    const closeModal2 = () => {
        setIsOpen2(false);
    };

    //salary2 dropdown
    const [isOpen3, setIsOpen3] = useState(false);

    const toggleDropdown3 = () => {
        setIsOpen3(!isOpen3);
    };

    //salary2 dropdown

    // Function to open the modal 6

    const [isOpen6, setIsOpen6] = useState(false);
    const openModal6 = () => {
        setIsOpen6(true);
    };

    // Function to close the modal 6
    const closeModal6 = () => {
        setIsOpen6(false);
    };


    //salary2 dropdown
    const [isOpen9, setIsOpen9] = useState(false);

    const toggleDropdown9 = () => {
        setIsOpen9(!isOpen9);
    };

    //salary2 dropdown




    // Function to open the modal 7

    const [isOpen0, setIsOpen0] = useState(false);
    const openModal0 = () => {
        setIsOpen0(true);
    };

    // Function to close the modal 7
    const closeModal0 = () => {
        setIsOpen0(false);
    };

       // Function to open the modal 12

       const [isOpen12, setIsOpen12] = useState(false);
       const openModal12 = () => {
           setIsOpen12(true);
       };
   
       // Function to close the modal 12
       const closeModal12 = () => {
           setIsOpen12(false);
       };


          // Function to open the modal 14

          const [isOpen14, setIsOpen14] = useState(false);
          const openModal14 = () => {
              setIsOpen14(true);
          };
      
          // Function to close the modal 14
          const closeModal14 = () => {
              setIsOpen14(false);
          };

  return (
    <div className='  w-full p-[20px] pt-[80px] xl:p-[40px] relative xl:pt-[100px]    xl:pl-[320px] flex flex-col '>
            <div className='flex  justify-between  '>
                <div className='flex gap-[10px] items-center'>
                    <h1 className='font-medium'>Piyush Loona <span>#136</span></h1>
                 </div>
                 
                    <Link className='first-btn text-[14px] font-semibold flex items-center' to="/">Download Report</Link>
 
            </div>

            <div className='shadow p-[20px] rounded-md mt-[24px] '>

                <div className='flex gap-[14px] flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row  justify-between xl:items-center  '>
                    <div className='flex '>
                        {/* <input className='bg-transparent font-medium text-[14px]' type="date" /> */}
                        <div className="flex items-center gap-4">
                            <ArrowBackIosIcon className="arrow-icon-back"/>
                            <h2>Oct, 2024</h2>
                            <ArrowForwardIosIcon className="arrow-icon-back"/>
                        </div>
                    </div>
                    <div className='flex xl:items-center lg:items-end justify-between gap-[14px] flex-col xl:flex-row'>
                        <h2 className='text-[14px] font-medium'>Total Pending for Approval : 10</h2>
                        <Link className='bg-[#8a25b0] text-center  text-[white] review-btn rounded-md' to="/">Approve All</Link>
                    </div>
                </div>
                <div className='mt-[16px] flex lg:gap-[30px] xl:gap-[30px] md:gap-[30px] md:flex-row lg:flex-row  xl:justify-start lg:justify-start md:justify-start    justify-between gap-[20px]'>

                    <div className="flex xl:gap-[20px] lg:gap-[20px] md:gap-[20px] justify-between xl:flex-row lg:flex-row md:flex-row flex-col gap-[10px]">
                    <div className=' total-staff-salary'>
                        <h2 className='text-[14px] font-normal text-[#000000bf]'>Day</h2>
                        <p className='text-[14px] font-medium'>13</p>
                    </div>
                    <div className=' total-staff-salary'>
                        <h2 className='text-[14px] font-normal text-[#000000bf]'>Present</h2>
                        <p className='text-[14px] font-medium'>0(+ 10)</p>
                    </div>
                    <div className=' total-staff-salary'>
                        <h2 className='text-[14px] font-normal text-[#000000bf]'>Absent</h2>
                        <p className='text-[14px] font-medium'>1</p>
                    </div>
                    </div>

                    <div className="flex xl:gap-[20px] lg:gap-[20px] md:gap-[20px] justify-between xl:flex-row lg:flex-row md:flex-row flex-col gap-[10px]">
                    <div className=' total-staff-salary text-end xl:text-center lg:text-center md:text-center'>
                        <h2 className='text-[14px] font-normal text-[#000000bf]'>Half Day</h2>
                        <p className='text-[14px] font-medium'>0</p>
                    </div>
                    <div className=' total-staff-salary text-end xl:text-center lg:text-center md:text-center'>
                        <h2 className='text-[14px] font-normal text-[#000000bf]'>Overtime Hours</h2>
                        <p className='text-[14px] font-medium'>00.00</p>
                    </div>
                    <div className=' total-staff-salary text-end xl:text-center lg:text-center md:text-center'>
                        <h2 className='text-[14px] font-normal text-[#000000bf]'>Weekly Off</h2>
                        <p className='text-[14px] font-medium'>04.29</p>
                    </div>
                    </div>
                </div>


            </div>
           
             
          
            <div className='shadow p-[20px] mt-[18px] rounded-md'>
                <div className='flex items-start justify-between  flex-col xl:flex-row lg:flex-row md:flex-row xl:items-center lg:items-center md:items-center gap-4 xl:gap-0 lg:gap-0 md:gap-0'>
                    <div>
                        <h2 className='text-[16px]'>07 Oct | Mon</h2>
                        <p className='text-[#9c9797] text-[14px]'>0:00 hours</p>
                        <p className="text-[#9c9797] text-[13px] whitespace-nowrap">Daily Shift (10:12 AM - NA)</p>
                        <p className='text-[#8a25b0] font-medium text-[14px] mt-[10px]'>Add Note - Login</p>

                    </div>
                    <div className='flex gap-[18px] xl:flex-col flex-row md:flex-col lg:flex-col w-full justify-between xl:justify-start md:justify-start lg:justify-start '>
                        <div className="flex gap-[20px] flex-col xl:flex-row lg:flex-row md:flex-row xl:justify-end lg:justify-end md:justify-end">

                        <div className="flex xl:justify-center justify-start items-center">
                            {/* Button to open modal */}
                            <button
                                onClick={openModal6}
                                className=" btns px-6 py-3 text-[14px] text-black font-medium bg-[white] rounded-md focus:outline-none xl:w-[200px]  lg:w-[200px] md:w-[140px] whitespace-nowrap shadow shadow "
                            >
                                P I Present
                            </button>

                            {/* Modal overlay and content */}
                            {isOpen6 && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full h-[430px] p-6">
                                        <div className='flex items-center justify-between'>
                                            <div className='mb-[20px]'>
                                                <h2 className="text-xl text-[18px] text-[black] font-semibold  ">Present Day </h2>
                                                <p className=' text-[14px]'>Name I 28 Sep, 2024</p>
                                            </div>
                                            <button className="px-4 py-2 bg-[#8a25b0] text-white rounded-md">Add Shift</button>

                                        </div>

                                        <div className='bg-[#ececec] p-[10px] rounded-md mb-[20px] '>
                                            <div className='text-right'>
                                                <DeleteIcon className='del-icon text-[#89868d]' />
                                            </div>
                                            <div className='gap-[5px] flex flex-col'>
                                                <label className='text-[#89868d] text-[14px]'>Shift Time</label>

                                                <div className="relative inline-block text-left w-[100%]">
                                                    {/* Button to open/close the dropdown */}
                                                    <button
                                                        className=" w-[100%] bg-[white] text-[#89868d] items-center p-[6px] text-left text-[12px] text-sm font-normal  select-pe  rounded-md  focus:outline-none"
                                                        onClick={toggleDropdown3}
                                                    >
                                                        DAILY SHIFT <KeyboardArrowDownIcon className='new-arrow2' />
                                                    </button>

                                                    {/* Dropdown menu */}
                                                    {isOpen3 && (
                                                        <div className="absolute right-0 w-[100%] z-10 mt-2  origin-top-right left-[0px] bg-white border border-gray-200 rounded-md shadow-lg">
                                                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                    role="menuitem"
                                                                >
                                                                    Option 1
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                    role="menuitem"
                                                                >
                                                                    Option 2
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                    role="menuitem"
                                                                >
                                                                    Option 3
                                                                </a>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                            </div>
                                            <div className='w-[100%] mt-[14px] gap-[64px] flex '>
                                                <div className='w-[50%] relative'>
                                                    <label className='text-[#89868d] text-[14px]'>Start Time</label>
                                                    <input className='select-pe p-[6px] text-[14px] rounded-md' type="text" placeholder='Start Time' />
                                                    <AvTimerIcon className='absolute avitimer text-[#89868d]' />
                                                </div>
                                                <div className='w-[50%] relative'>
                                                    <label className='text-[#89868d] text-[14px]'>End Time</label>
                                                    <input className='select-pe p-[6px] text-[14px] rounded-md' type="text" placeholder='End Time' />
                                                    <AvTimerIcon className='absolute avitimer text-[#89868d]' />
                                                </div>
                                            </div>
                                        </div>
                                     

                                        <div className="flex flex-col gap-[10px] ">
                                            <button

                                                className="px-4 py-2 bg-[#8a25b0] text-white rounded-md"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={closeModal6}
                                                className="px-4 py-2 bg-[#8a25b0] text-white rounded-md"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex justify-center items-center">
                            {/* Button to open modal */}
                            <button
                                onClick={openModal2}
                                className=" btns px-6 py-3 text-[14px] text-black font-medium bg-[white] rounded-md focus:outline-none xl:w-[200px] lg:w-[200px] md:w-[140px] whitespace-nowrap shadow"
                            >
                                HD I HalfDay
                            </button>

                            {/* Modal overlay and content */}
                            {isOpen2 && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full h-[430px] p-6">
                                        <div className='flex items-center justify-between'>
                                            <div className='mb-[20px]'>
                                                <h2 className="text-xl text-[18px] text-[black] font-semibold  ">Half Day </h2>
                                                <p className=' text-[14px]'>Name I 28 Sep, 2024</p>
                                            </div>
                                            <button className="px-4 py-2 bg-[#8a25b0] text-white rounded-md">Add Shift</button>

                                        </div>

                                        <div className='bg-[#ececec] p-[16px] rounded-md mb-[20px] '>
                                            <div className='text-right'>
                                                <DeleteIcon className='del-icon text-[#89868d]' />
                                            </div>
                                            <div className='gap-[5px] flex flex-col'>
                                                <label className='text-[#89868d] text-[14px]'>Shift Time</label>

                                                <div className="relative inline-block text-left w-[100%]">
                                                    {/* Button to open/close the dropdown */}
                                                    <button
                                                        className=" w-[100%] bg-[white] text-[#89868d] items-center p-[6px] text-left text-[12px] text-sm font-normal  select-pe  rounded-md  focus:outline-none"
                                                        onClick={toggleDropdown3}
                                                    >
                                                        DAILY SHIFT <KeyboardArrowDownIcon className='new-arrow2' />
                                                    </button>

                                                    {/* Dropdown menu */}
                                                    {isOpen3 && (
                                                        <div className="absolute right-0 w-[100%] z-10 mt-2  origin-top-right left-[0px] bg-white border border-gray-200 rounded-md shadow-lg">
                                                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                    role="menuitem"
                                                                >
                                                                    Option 1
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                    role="menuitem"
                                                                >
                                                                    Option 2
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                    role="menuitem"
                                                                >
                                                                    Option 3
                                                                </a>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                            </div>
                                            <div className='w-[100%] mt-[14px] gap-[64px] flex '>
                                                <div className='w-[50%] relative'>
                                                    <label className='text-[#89868d] text-[14px]'>Start Time</label>
                                                    <input className='select-pe p-[6px] text-[14px] rounded-md' type="text" placeholder='Start Time' />
                                                    <AvTimerIcon className='absolute avitimer text-[#89868d]' />
                                                </div>
                                                <div className='w-[50%] relative'>
                                                    <label className='text-[#89868d] text-[14px]'>End Time</label>
                                                    <input className='select-pe p-[6px] text-[14px] rounded-md' type="text" placeholder='End Time' />
                                                    <AvTimerIcon className='absolute avitimer text-[#89868d]' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-[10px] ">
                                            <button

                                                className="px-4 py-2 bg-[#8a25b0] text-white rounded-md"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={closeModal2}
                                                className="px-4 py-2 bg-[#8a25b0] text-white rounded-md"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex xl:justify-center justify-start items-center">
                            {/* Button to open modal */}
                            <button
                                onClick={openModal0}
                                className=" btns px-6 py-3 text-[14px] text-black font-medium bg-[white] rounded-md focus:outline-none xl:w-[200px] lg:w-[200px] md:w-[140px] whitespace-nowrap shadow"
                            >
                                F I Fine
                            </button>

                            {/* Modal overlay and content */}
                            {isOpen0 && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full h-[470px] p-6">
                                        <div className=''>
                                            <div className='mb-[20px]'>
                                                <h2 className="text-xl text-[18px] text-[black] font-semibold  "> Fine </h2>
                                                <p className=' text-[14px]'>Name I 28 Sep, 2024</p>
                                            </div>

                                            <div className='flex justify-between items-center mb-[10px]'>
                                                <p className='text-[14px]'>DAILY SHIFT</p>
                                                <DeleteIcon className='del-icon2 text-[#89868d]' />
                                            </div>


                                        </div>

                                        <div className='bg-[#ececec] p-[16px] rounded-md mb-[20px] '>
                                            <div className='flex items-center justify-between mb-[5px]'>
                                                <p className='text-[14px]'>Late Entry</p>
                                                <CloseIcon className='close-icon text-[#89868d]' />
                                            </div>

                                            <div className='flex items-center gap-[10px]'>

                                            <div>
                                                <p className='text-[12px]'>Hours</p>
                                                <p className='text-[14px] select-pe p-[5px] w-[124px] rounded-md'>00:41      hrs</p>
                                                <p className='text-[12px]' >Amount $ 61.63</p>
                                            </div>
                                            <div className='flex '>
                                                

                                                <div className="relative inline-block text-left">
                                                    {/* Button to open/close the dropdown */}
                                                    <button
                                                        className="  bg-[white] w-[150px] text-[#89868d] items-center p-[4px] text-left text-[12px] text-sm font-normal  select-pe  focus:outline-none"
                                                        onClick={toggleDropdown9}
                                                    >
                                                        1X Salary <KeyboardArrowDownIcon className='new-arrow2' />
                                                    </button>

                                                    {/* Dropdown menu */}
                                                    {isOpen9 && (
                                                        <div className="absolute right-0 w-[100%] z-10 mt-2  origin-top-right left-[0px] bg-white border border-gray-200 rounded-md shadow-lg">
                                                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                    role="menuitem"
                                                                >
                                                                    Option 1
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                    role="menuitem"
                                                                >
                                                                    Option 2
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                    role="menuitem"
                                                                >
                                                                    Option 3
                                                                </a>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className=''>
                                                <p className='text-[14px] w-[148px] select-pe p-[5px]'>00:00 Per Hours</p>
                                                
                                                </div>

                                            </div>
                                            </div>
                                            <div className='w-[100%] mt-[14px] gap-[64px] flex '>
                                                <div className='w-[50%] relative'>
                                                    <label className='text-[#89868d] text-[14px]'>Start Time</label>
                                                    <input className='select-pe p-[6px] text-[14px] rounded-md' type="text" placeholder='Start Time' />
                                                    <AvTimerIcon className='absolute avitimer text-[#89868d]' />
                                                </div>
                                                <div className='w-[50%] relative'>
                                                    <label className='text-[#89868d] text-[14px]'>End Time</label>
                                                    <input className='select-pe p-[6px] text-[14px] rounded-md' type="text" placeholder='End Time' />
                                                    <AvTimerIcon className='absolute avitimer text-[#89868d]' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-[10px] ">
                                            <button

                                                className="px-4 py-2 bg-[#8a25b0] text-white rounded-md"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={closeModal0}
                                                className="px-4 py-2 bg-[#8a25b0] text-white rounded-md"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        </div>
                        <div className="flex gap-[20px] flex-col xl:flex-row lg:flex-row md:flex-row xl:justify-end lg:justify-end md:justify-end">

                        <div className="flex justify-center items-center">
                            {/* Button to open modal */}
                            <button
                                onClick={openModal12}
                                className=" btns px-6 py-3 text-[14px] text-black font-medium bg-[white] rounded-md focus:outline-none xl:w-[200px] lg:w-[200px] md:w-[140px] whitespace-nowrap shadow"
                            >
                                OT I Overtime
                            </button>

                            {/* Modal overlay and content */}
                            {isOpen12 && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full h-[470px] p-6">
                                        <div className=''>
                                            <div className='mb-[20px]'>
                                                <h2 className="text-xl text-[18px] text-[black] font-semibold  "> Overtime Day </h2>
                                                <p className=' text-[14px]'>Name I 28 Sep, 2024</p>
                                            </div>

                                            <div className='flex justify-between items-center mb-[10px]'>
                                                <p className='text-[14px]'>DAILY SHIFT</p>
                                                <DeleteIcon className='del-icon2 text-[#89868d]' />
                                            </div>


                                        </div>

                                        <div className='bg-[#ececec] p-[16px] rounded-md mb-[20px] '>
                                            <div className='flex items-center justify-between mb-[5px]'>
                                                <p className='text-[14px]'>Late Entry</p>
                                                <CloseIcon className='close-icon text-[#89868d]' />
                                            </div>

                                            <div className='flex items-center gap-[10px]'>

                                            <div>
                                                <p className='text-[12px]'>Hours</p>
                                                <p className='text-[14px] select-pe p-[5px] w-[124px] rounded-md'>00:41      hrs</p>
                                                <p className='text-[12px]' >Amount $ 61.63</p>
                                            </div>
                                            <div className='flex '>
                                                

                                                <div className="relative inline-block text-left">
                                                    {/* Button to open/close the dropdown */}
                                                    <button
                                                        className="  bg-[white] w-[150px] text-[#89868d] items-center p-[4px] text-left text-[12px] text-sm font-normal  select-pe  focus:outline-none"
                                                        onClick={toggleDropdown9}
                                                    >
                                                        1X Salary <KeyboardArrowDownIcon className='new-arrow2' />
                                                    </button>

                                                    {/* Dropdown menu */}
                                                    {isOpen9 && (
                                                        <div className="absolute right-0 w-[100%] z-10 mt-2  origin-top-right left-[0px] bg-white border border-gray-200 rounded-md shadow-lg">
                                                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                    role="menuitem"
                                                                >
                                                                    Option 1
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                    role="menuitem"
                                                                >
                                                                    Option 2
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                    role="menuitem"
                                                                >
                                                                    Option 3
                                                                </a>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className=''>
                                                <p className='text-[14px] w-[148px] select-pe p-[5px]'>00:00 Per Hours</p>
                                                
                                                </div>

                                            </div>
                                            </div>
                                            <div className='w-[100%] mt-[14px] gap-[64px] flex '>
                                                <div className='w-[50%] relative'>
                                                    <label className='text-[#89868d] text-[14px]'>Start Time</label>
                                                    <input className='select-pe p-[6px] text-[14px] rounded-md' type="text" placeholder='Start Time' />
                                                    <AvTimerIcon className='absolute avitimer text-[#89868d]' />
                                                </div>
                                                <div className='w-[50%] relative'>
                                                    <label className='text-[#89868d] text-[14px]'>End Time</label>
                                                    <input className='select-pe p-[6px] text-[14px] rounded-md' type="text" placeholder='End Time' />
                                                    <AvTimerIcon className='absolute avitimer text-[#89868d]' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-[10px] ">
                                            <button

                                                className="px-4 py-2 bg-[#8a25b0] text-white rounded-md"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={closeModal12}
                                                className="px-4 py-2 bg-[#8a25b0] text-white rounded-md"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-center items-center">
                            {/* Button to open modal */}
                            <button
                                onClick={openModal14}
                                className=" btns px-6 py-3 text-[14px] text-white bg-[#008000] rounded-md focus:outline-none xl:w-[200px] lg:w-[200px] md:w-[143px] whitespace-nowrap"
                            >
                                L I Paid Leave
                            </button>

                            {/* Modal overlay and content */}
                            {isOpen14 && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full h-[200px] p-6">
                                        <h2 className="text-xl text-center text-[18px] text-[black] font-semibold mt-[28px] mb-[6px] ">Sure You Want To Accept ? </h2>
                                        <p className='text-center mb-[16px] text-[14px]'>Are you sure you want to accept this ??</p>

                                        <div className="flex justify-around ">
                                            <button

                                                className="px-4 py-2 bg-[#8a25b0] text-white rounded-md"
                                            >
                                                Yes , Confirm
                                            </button>
                                            <button
                                                onClick={closeModal14}
                                                className="px-4 py-2 bg-[#8a25b0] text-white rounded-md"
                                            >
                                                No , Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex xl:justify-center lg:justify-center md:justify-center items-center justify-end">
                            {/* Button to open modal */}
                            <button
                                onClick={openModal}
                                className=" btns px-6 py-3 text-[14px] text-black bg-[white] rounded-md focus:outline-none xl:w-[200px] lg:w-[200px] md:w-[138px] whitespace-nowrap shadow"
                            >
                                A I Absent
                            </button>

                            {/* Modal overlay and content */}
                            {isOpen && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full h-[200px] p-6">
                                        <h2 className="text-xl text-center text-[18px] text-[black] font-semibold mt-[28px] mb-[6px] ">Sure You Want To Accept ? </h2>
                                        <p className='text-center mb-[16px] text-[14px]'>Are you sure you want to accept this ??</p>

                                        <div className="flex justify-around ">
                                            <button

                                                className="px-4 py-2 bg-[#8a25b0] text-white rounded-md"
                                            >
                                                Yes , Confirm
                                            </button>
                                            <button
                                                onClick={closeModal}
                                                className="px-4 py-2 bg-[#8a25b0] text-white rounded-md"
                                            >
                                                No , Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        </div>











                    </div>
                </div>

            </div>

        </div>
  )
}

export default StaffSalarySummry