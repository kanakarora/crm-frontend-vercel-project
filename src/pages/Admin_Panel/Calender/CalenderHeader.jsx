import React,{useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, NavLink } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const CalenderHeader = () => {
    const [toggleDrop, setToggleDrop] = useState(false);

    function handledrop() {
        setToggleDrop(!toggleDrop)
    }


  return (
   
    <div className='header-calender flex justify-between xl:p-[10px] lg:p-[10px] md:p-[10px] flex-col xl:flex-row lg:flex-row md:flex-row gap-[10px] xl:gap-[0] lg:gap-0 p-[0]'>
        <div className='flex gap-[20px] items-center justify-between'>
         
            <button className='first-btn'>Today</button>
            <div className='flex items-center  gap-[10px]'>
            <button className='bg-[#8a25b0]  text-white rounded-md p-[7px]'>
                <ArrowBackIosNewIcon />
            </button>
            
            <h5 className='font-medium text-[20px] whitespace-nowrap' >October 2024</h5>
            <button className='bg-[#8a25b0] text-white rounded-md p-[7px]'>
                <ArrowForwardIosIcon />
            </button>
            </div>


        </div>
        <div className='flex gap-[20px] items-center'>




            <div className="relative inline-block text-left w-full">
                <div>
                    <button type="button" onClick={handledrop} className="inline-flex items-center w-full justify-between gap-x-1.5 rounded-md second-btn text-sm  text-white shadow-sm" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Filter
                        <svg className="-mr-1 h-5 w-5 text-white hover:text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                {
                    toggleDrop &&

                    <div className="absolute w-[98%] xl:w-[200px] xl:left-[-100px]  lg:w-[200px] lg:left-[-100px]  md:w-[200px] md:left-[-100px] left-[4px] right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white set-shadow ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div className="py-1" role="none">
                            <NavLink to="/calender" className="block hover:bg-[#e3e3e3] px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Month</NavLink>
                            <NavLink to="/day-wise" className="block hover:bg-[#e3e3e3] px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Day</NavLink>
                            <NavLink to="/week-wise" className="block hover:bg-[#e3e3e3] px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Weekly</NavLink>
                            <NavLink to="/year-wise" className="block hover:bg-[#e3e3e3] px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Yearly</NavLink>
                            
                        </div>

                    </div>
                }
            </div>

          



        </div>
    </div>
     
  )
}

export default CalenderHeader