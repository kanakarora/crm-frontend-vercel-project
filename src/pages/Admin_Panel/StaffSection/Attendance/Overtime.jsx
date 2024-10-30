import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import WarningIcon from '@mui/icons-material/Warning';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Overtime = () => {

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    }

    const [isOpen, setIsOpen] = useState(false);



    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    //salary dropdown
    const [isOpen1, setIsOpen1] = useState(false);



    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };

    //salary dropdown

    //salary2 dropdown
    const [isOpen2, setIsOpen2] = useState(false);



    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };

    //salary2 dropdown

    return (
        <div className='w-full p-[20px]'>
            <div className=''>
                <Link className='text-[14px]' to="/"> <ArrowBackIcon className='back-arrow text-[blue]' /> Back</Link>
            </div>
            <div className='flex justify-between items-center mt-[20px] mb-[20px]'>
                <h2 className='font-medium daily-heading'>Daily Work Time</h2>
                <div className="flex items-center justify-center gap-[6px]">
                    {/* Toggle Switch */}
                    <p className='daily-staff'>Send SMS to Staff</p>
                    <div
                        className={`${isOn ? 'bg-green-500' : 'bg-gray-300'
                            } relative inline-block w-12 h-6 rounded-full transition-colors duration-300 toggle-btn ease-in-out cursor-pointer`}
                        onClick={toggleSwitch}
                    >
                        <span
                            className={`${isOn ? 'translate-x-6' : 'translate-x-0'
                                } inline-block w-6 h-6 bg-[#d5cdcd] rounded-full transform transition-transform duration-300 ease-in-out`}
                        />
                    </div>
                </div>

            </div>
            <div className='p-[8px] shadow-md rounded-md flex items-center justify-between mb-[20px] approval-date'>
                <input className='text-[14px]' type="date" />
                <p className='bg-[#edd0ca] p-[5px] text-[12px] border border-b border-[#e07964] text-[black] rounded-md'> <WarningIcon className='warning-icon text-[14px] text-[red] ' /> Approval pending for other  <Link className='text-[blue] ml-[10px]' to="/">View</Link> </p>
            </div>
            <div className='flex main-fixed items-center gap-[10px] mb-[20px] '>
                <div className='flex items-center gap-[10px] w-[105px] rounded-md p-[6px] all-select2 select-pe'>
                    <input type="checkbox" />
                    <p className='text-[14px] all-select'>Select All</p>


                </div>

                <div className="relative inline-block text-left amount-res">
                    {/* Button to open/close the dropdown */}
                    <button
                        className="flex items-center gap-[5px] p-[6px] text-[14px]  w-full  text-sm font-medium text-[black] select-pe  rounded-md fixed-amount1 focus:outline-none"
                        onClick={toggleDropdown}
                    >
                        Fixed Amount <KeyboardArrowDownIcon />
                    </button>

                    {/* Dropdown menu */}
                    {isOpen && (
                        <div className="absolute right-0 w-[100%] z-10 mt-2 origin-top-right left-[0px] bg-white border border-gray-200 rounded-md shadow-cs">
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

                <div className='btn-apply'>
                    <button className='apply-btn bg-[#8a25b0] rounded-md text-[white]' type='submit'>Apply</button>
                </div>



            </div>
            <div className='flex gap-[10px] items-center mb-[20px] shift-daily '>
                <input type="checkbox" />
                <p className='text-[14px]'>DAILY SHIFT I 10:00 AM - 6:30 PM</p>
            </div>

            <div className='shadow-md rounded-md p-[20px]  mb-[20px]  '>
                <div className='flex items-center gap-[16px] w-full flowchange'>
                    <input className='h-[12px]' type="checkbox" />
                    <div>
                        <h5 className='text-[14px]'>Rishi Flowchanger</h5>
                        <p className='text-[12px] text-[#ad9f9f]' >in 10:41 AM I Out 7:35 PM</p>
                    </div>
                    <div className='flex gap-[20px] ml-[50px] overtime-sixty'>
                        <div>
                            <h5 className='text-[12px] font-medium'>65 min Overtime</h5>
                            <p className='text-[12px] text-[#ad9f9f]' >65 min</p>
                        </div>
                        <div>
                            <h5 className='text-[12px] font-medium'>23 Sep, 2024</h5>
                            <p className='text-[12px] text-[#ad9f9f]' >DAILY SHIFT</p>
                        </div>
                    </div>
                </div>

                <div className='p-[30px] flex md:block md:justify-center mt-[20px] sm:p-[2px] sm:flex-col  justify-between  mb-20px late-main '>
                    <div className='flex gap-[50px] sm:gap-[8px] sm:flex-col hours-main xl:flex-row  xl:gap-[50px]'>
                        <div className='flex items-center gap-[10px]'>
                            <input type="checkbox" />
                            <p className='text-[14px] sm:whitespace-nowrap font-medium'>Late Entry</p>

                        </div>
                        <div className='flex gap-[26px] main-flex'>
                            <div>
                                <p className='text-[12px]'>Hours</p>
                                <p className='text-[14px] select-pe p-[5px] w-[124px] rounded-md hrs-wid'>01:05      hrs</p>
                                <p className='text-[12px]' >Amount $ 97.71</p>
                            </div>
                            <div>
                                <p className='text-[12px]'>Overtime Amount</p>
                                <div className="relative inline-block text-left hrs-wid">
                                    {/* Button to open/close the dropdown */}
                                    <button
                                        className=" w-[164px] hrs-wid items-center p-[6px] text-left text-[12px] text-sm font-normal text-[black] select-pe  rounded-md  focus:outline-none"
                                        onClick={toggleDropdown1}
                                    >
                                        1x Salary <KeyboardArrowDownIcon className='new-arrow1' />
                                    </button>

                                    {/* Dropdown menu */}
                                    {isOpen1 && (
                                        <div className="absolute right-0 w-[100%] z-10 mt-2  origin-top-right left-[0px] bg-white border border-gray-200 rounded-md shadow-cs">
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
                            <div className='flex items-center'>
                                <p className='text-[14px] hrs-wid1 select-pe p-[5px] w-[124px] bg-[#eeeeee] rounded-md'>$ 90.02  Per Hour</p>
                            </div>

                            <div className='flex items-center md:justify-end md:m-[0px] md:w-[100%] sm:m-[0px] mt-[20px] lg:w-[100%] lg:justify-end lg:m-[0] sm:justify-center save-btn'>
                        <button className='apply-btn bg-[#8a25b0]  rounded-md text-[white]' type='submit'>Save</button>
                    </div>
                        </div>
                  
                    </div>
                 

                </div>
            </div>
            <div>
            </div>
        </div>

    );


}

export default Overtime;