import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';

const Worktime = () => {
  return (
    <>
    <div className='w-full p-[20px]'>
    <div className=''>
        <Link className='text-[14px]' to = "/"> <ArrowBackIcon className='back-arrow text-[blue]'/> Back</Link>
    </div>
    <div className='flex justify-between items-center mt-[20px] mb-[20px]'>
        <h2 className='font-medium'>Daily Work Time</h2>
        <Link className=' new-menubook p-[8px] text-[12px]  rounded-md  text-[blue]  flex items-center gap-[6px]'  to="/"> <MenuBookIcon className='menu-book'/>Download Report</Link>
    </div>
    <div className="relative shadow-md">
                <SearchIcon className='absolute top-[10px] right-[7px]' />
                <input className='w-full pr-[38px]  p-[10px] rounded-md search-staff ' type="text" placeholder='Search Staff ' />
    </div>
    <div className='mt-[20px] mb-[20px] '>
        <div className='p-[16px] font-medium designer-bot'>
            <h2 className='text-[16px]'>AMAN DESIGNER FC</h2>
        </div>
        <div className='shadow-md p-[14px] text-center'>
            <h2 className='text-[12px]'>No Entries Avialable</h2>
        </div>
    </div>
    <div className='mt-[20px] mb-[20px] '>
        <div className='p-[16px] font-medium designer-bot'>
            <h2 className='text-[16px]'>Jasmine FC</h2>
        </div>
        <div className='shadow-md p-[14px] text-center'>
            <h2 className='text-[12px]'>No Entries Avialable</h2>
        </div>
    </div>
    <div className='mt-[20px] mb-[20px] '>
        <div className='p-[16px] font-medium designer-bot'>
            <h2 className='text-[16px]'>Akash</h2>
        </div>
        <div className='shadow-md p-[14px] text-center'>
            <h2 className='text-[12px]'>No Entries Avialable</h2>
        </div>
    </div>

   
    

    </div>
    </>
  )
}

export default Worktime