import React, { useEffect, useState } from 'react'
import Search from '../../../Assets/Images/search.svg'
import Filter from '../../../Assets/Images/filter.svg'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../../Context/GlobalContext';

const StaffTab = () => {
  const { baseUrl,setSelectedStaff } = useGlobalContext();

  const [toggleDrop, setToggleDrop] = useState(false);

  function handledrop() {
    setToggleDrop(!toggleDrop)
  }

  const [staffDetail, setStaffDetail] = useState();

  const fetchRoles = async () => {
    const result = await fetch(baseUrl + "staff")
    console.log(baseUrl)
    console.log("reuslt---", result)
    if (result.status == 200) {
      const res = await result.json();
      setStaffDetail(res)
      console.log("---",res.name)
    }
    else {
      alert("An Error Occured")
    }

  }

  

  useEffect(() => {
    fetchRoles()
  }, [])


  return (
    <div className='staff-tab mt-[20px]'>
      <div className='flex justify-between flex-col xl:flex-row lg:flex-col lg:gap-[15px] md:flex-col gap-[15px] lg:gap-[0px]'>
        <div className='flex lg:gap-[20px] flex-col gap-[10px] lg:flex lg:flex-row'>
          <div className='searching-input relative'>
            <img src={Search} className='absolute left-2 top-3' />
            <input type="text" className='border rounded-md bg-[#F4F5F9] p-[8px] pl-[30px] w-[100%] lg:w-[225px] focus-visible:outline-none' placeholder='Search' />

          </div>

          <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
            <option>All Departments</option>
          </select>

          <div className='flex gap-[10px] whitespace-nowrap justify-end items-center cursor-pointer'>
            <img src={Filter} className='w-[40px] h-[40px] bg-[#F4F5F9] rounded-full p-[10px]' />
            <h2 className='text-[14px] font-normal	'>More Filters</h2>
          </div>

        </div>
        <div className='flex gap-[15px] justify-between lg:justify-start'>
          <button className='border border-1 pl-3 pr-3 rounded-md pt-2 pb-2 text-sm'>Update Staff</button>
          <div>
            <div className="relative inline-block text-left">
              <div>
                <button type="button" onClick={handledrop} className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md second-btn  text-sm  text-white shadow-sm" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Add Staff
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
              {
                toggleDrop &&

                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div className="py-1" role="none">
                    <Link to="/add-one-staff" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Add One Staff</Link>
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Add Mulitple Staff</Link>
                  </div>

                </div>
              }
            </div>


          </div>
        </div>
      </div>


      <div className='w-[100%] p-0 h-[300px] overflow-y-auto flex rounded-md shadow overflow-scroll border border-1 mt-4 '>
      <div className='   '>
        <table className='table-section '>
          <thead className='border border-1 sticky bg-[#fff] set-shadow top-[-1px]'>
            <th>#</th>
            <th>Name</th>
            <th>Job Title</th>
            <th>Employee Id</th>
            <th>Employee Type</th>
            <th>Date of Joining</th>
            <th>Date of Birth</th>
            <th>Mobile Number</th>
            <th>Personal Email ID</th>
            <th>Marital Status</th>
            <th>Gender</th>
            <th>Current Address</th>
            <th>Aadhaar</th>
            <th>Pan</th>
            <th>Guardian Name</th>
            <th>Emergency Contact Name</th>


          </thead>
          <tbody >
            {
              staffDetail?.map((staff, index) => {
                return <tr key={index} onClick={()=>{setSelectedStaff(staff)}} className='border'>
                  <td><input type='checkbox' className='border border-1 rounded-md ' /></td>
                  <td>
                    <Link to={`/personal-detail/${staff.id}`} className='text-[#8A25B0] font-medium'>{staff.name}</Link>
                  </td>
                  <td>{staff.job_title ? staff.job_title : "N/A"}</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>{staff.date_of_joining ? new Date( staff.date_of_joining).toLocaleDateString() :"N/A"}</td>
                  <td>{staff.date_of_birth ? new Date(staff.date_of_birth).toLocaleDateString() :"N/A"}</td>
                  <td>{staff.mobile}</td>
                  <td>{staff.official_email}</td>
                  <td>N/A</td>
                  <td>{staff.gender ? staff.gender :"N/A"}</td>
                  <td>{staff.current_address ? staff.current_address :"N/A"}</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>{staff.emergency_contact_name ? staff.emergency_contact_name : "N/A"}</td>
                  
                  


                  
                </tr>
                
              })
            }

            

          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}

export default StaffTab