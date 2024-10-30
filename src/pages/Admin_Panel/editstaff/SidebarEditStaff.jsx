import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useGlobalContext } from '../../../Context/GlobalContext';
import { useParams } from 'react-router';


const SidebarEditStaff = () => {
  const { selectedStaff } = useGlobalContext();
  const navigate = useNavigate()
  const {id}= useParams();


  useEffect(() => {
    if (selectedStaff == null) {
      navigate("/staff-menu")
    }
  }, [])
  return (
    <div className='edit-sidebar h-lvh shadow mt-[60px]  fixed top-[6px] bg-white p-[30px] pl-[5px] pr-[5px] overflow-scroll w-[300px] z-10 pb-10'>
      <div className='flex flex-col sidelinks'>
        <NavLink to={`/personal-detail/${id}`} className='p-5 pb-5 flex justify-between text-[12px] whitespace-nowra
        
        p font-medium items-center'>Personal Details <KeyboardArrowRightIcon className='arrow-icon' /></NavLink>
        <NavLink to={`/custom-detail/${id}`} className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Custom Details <KeyboardArrowRightIcon /></NavLink>
        <NavLink to={`/background-verification/${id}`} className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Background Verification <KeyboardArrowRightIcon /></NavLink>
        <NavLink to={`/employee-detail/${id}`} className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Employment Details <KeyboardArrowRightIcon /></NavLink>
        <NavLink to={`/bank-detail/${id}`} className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Bank Account <KeyboardArrowRightIcon /></NavLink>
        <NavLink to={`/user-permission/${id}`} className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>User Permission <KeyboardArrowRightIcon /></NavLink>
        <NavLink to={`/attendance-detail/${id}`} className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Attendance Details <KeyboardArrowRightIcon /></NavLink>
        <NavLink to={`/salary-details-edit/${id}`} className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Salary Details <KeyboardArrowRightIcon /></NavLink>
        <NavLink to={`/leavepolicy-detail/${id}`} className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Leave & Balance Details <KeyboardArrowRightIcon /></NavLink>
        <NavLink to={`/edit-penalty/${id}`} className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Penalty & Overtime Details <KeyboardArrowRightIcon /></NavLink>
        <NavLink to={`/salary-overview/${id}`} className='p-5 pb-10 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Salary Overview<KeyboardArrowRightIcon /></NavLink>
        {/* <NavLink to="#" className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Tax Declarations<KeyboardArrowRightIcon/></NavLink>  */}
        {/* <NavLink to="#" className='p-5  pb-5 flex justify-between text-[12px] whitespace-nowrap font-medium items-center'>Salary Details<KeyboardArrowRightIcon/></NavLink>  */}

      </div>
    </div>
  )
}

export default SidebarEditStaff