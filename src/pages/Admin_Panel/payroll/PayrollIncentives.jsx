import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
 


const PayrollIncentives = () => {

    
    let subtitle;

    const [toggleDrop11, setToggleDrop11] = useState(false);

    function handledrop11() {
        setToggleDrop11(!toggleDrop11)
    }

    const [toggleDrop, setToggleDrop] = useState(false);
    function handledrop() {
        setToggleDrop(!toggleDrop)
    }

    const [toggleDrop2, setToggleDrop2] = useState(false);

    function handledrop2() {
        setToggleDrop2(!toggleDrop2)
    }

    const [toggleDrop3, setToggleDrop3] = useState(false);

    function handledrop3() {
        setToggleDrop3(!toggleDrop3)
    }
    const [toggleDrop5, setToggleDrop5] = useState(false);

    function handledrop5() {
        setToggleDrop5(!toggleDrop5)
    }

    const [modalIsOpen9, setIsOpen9] = React.useState(false);
    function openModal9() {
        setIsOpen9(true);
    }
    function afterOpenModal9() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal9() {
        setIsOpen9(false);
    }
    // when onclick update staff

    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDrop = (dropdown) => {
        setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.dropdown-container')) {
            setActiveDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className='mt-[20px]'>
            <div className='flex justify-between items-end flex-col xl:flex-row lg:flex-row lg:flex-col lg:gap-[15px] md:flex-col gap-[15px] lg:gap-[0px]'>
            <div className='flex lg:gap-[20px] flex-col gap-[10px] lg:flex lg:flex-row w-full'>

                    <div className='xl:w-[240px]'>
                        <label htmlFor="" className='text-[14px] font-medium'>Payroll Month</label><br/>
                        <input type="date" className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm' />
                    </div>
                    <div className='xl:w-[240px]'>
                        <label htmlFor="" className='text-[14px] font-medium'>Company Branches</label><br/>
                        <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                            <option>All Branches</option>
                            <option>Demo Main Branchs</option>

                        </select>
                    </div>

                    <div className='xl:w-[240px]'>
                        <label htmlFor="" className='text-[14px] font-medium'>Departments</label><br/>
                        <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                            <option>All Departments</option>
                            <option>Website</option>

                        </select>
                    </div>


                </div>
                {
                    toggleDrop11 &&
                    <div className=''>
                        <Link to="#" className='text-[#1890ff] font-normal'>Reset</Link>
                    </div>
                }

            </div>

            <div className='mt-5'>
                <div className='flex justify-between items-start  xl:items-center lg:items-center gap-[10px] flex-col xl:flex-row lg:flex-row '>
                    <div className='relative  xl:w-[240px] lg:w-[240px] w-full mt-2'>
                        <input type="text" placeholder='Search' className='border rounded-md pr-[40px]  p-[8px] w-[100%]  focus-visible:outline-none' />
                        <SearchIcon className='absolute right-[10px] top-[10px] ' />
                    </div>

                    <div>
                        <input type="checkbox" onClick={handledrop11} id="breakdown" name="breakdown" value="breakdown" />
                        <label for="breakdown" > Show Incentive Staff</label>
                    </div>


                </div>
            </div>

            <div className='text-end'>
                <button className='p-[10px] second-btn mt-[10px]' onClick={openModal9}>
                    <UploadFileIcon/>
                    Import Incentives
                </button>
                </div>
            <div className='w-[100%] overflow-scroll flex rounded-md shadow overflow-scroll border border-1 mt-4 pl-3 pr-3'>
                <table className='table-section mt-4 w-full'>
                    

                    <thead className='border border-1 '>
                        <th>
                            <div className='flex'>
                                Name
                                <div className='relative dropdown-container'>
                                    <button onClick={() => handleDrop('name')}>
                                        <FilterListIcon className='filter-icon' />
                                    </button>

                                    {activeDropdown === 'name' && (
                                        <div className="absolute left-[0px] z-10 text-left mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                            <div className="py-1" role="none">
                                                <Link to="/add-one-staff" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Sort A to Z</Link>
                                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Sort Z to A</Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className='flex'>
                                Job Title
                                <div className='relative dropdown-container'>
                                    <button onClick={() => handleDrop('job')}>
                                        <FilterListIcon className='filter-icon' />
                                    </button>

                                    {activeDropdown === 'job' && (
                                        <div className="absolute left-[0px] z-10 text-left mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                            <div className="py-1" role="none">
                                                <Link to="/add-one-staff" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Sort A to Z</Link>
                                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Sort Z to A</Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className='flex'>
                                CTC
                                <div className='relative dropdown-container'>
                                    <button onClick={() => handleDrop('ctc')}>
                                        <FilterListIcon className='filter-icon' />
                                    </button>

                                    {activeDropdown === 'ctc' && (
                                        <div className="absolute left-[0px] z-10 text-left mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                            <div className="py-1" role="none">
                                                <Link to="/add-one-staff" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Sort A to Z</Link>
                                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Sort Z to A</Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </th>
                        
                        <th className=''>
                            <div className='flex'>
                                Payroll Finalized
                               
                            </div>

                        </th>

                        <th className=''>
                            <div className='flex'>
                                Total Incentives
                                <div className='relative dropdown-container'>
                                    <button onClick={() => handleDrop('total')}>
                                        <FilterListIcon className='filter-icon' />
                                    </button>

                                    {activeDropdown === 'total' && (
                                        <div className="absolute left-[0px] z-10 text-left mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                            <div className="py-1" role="none">
                                                <Link to="/add-one-staff" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Sort A to Z</Link>
                                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Sort Z to A</Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </th>

                        <th className=''>
                            <div className='flex'>
                                Action
                              
                            </div>

                        </th>
                    </thead>

                    <tbody className='w-full'>

                        <tr className='h-[300px]'>
                            Hello
                        </tr>


                    </tbody>

                    <div className='w-full'>
                        <h2 className='whitespace-nowrap p-[10px]  pl-0'>Grand Total</h2>
                    </div>

                </table>
            </div>



          {/* when onclick update staff */}

          <Modal
                isOpen={modalIsOpen9}
                onAfterOpen={afterOpenModal9}
                onRequestClose={closeModal9}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3     text-[14px] font-medium text-center bg-[#F0F6FE] rounded-t-lg rounded-r-lg rounded-b-none'>Import Incentives for all Staff
                </h2>
                <button onClick={closeModal9} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2'>
                  

                    <div className='flex justify-between items-center p-[10px] border border-b border-l-0  border-t-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] font-medium '>
                        <div className='flex gap-[0px] items-center '>
                             <h4 className='m-0 font-medium' >Step 1. Download Salarybox Incentive Template.</h4>
                        </div>
                        <div className="flex items-center  ">
                         <Link to="#" className='whitespace-nowrap outline-dashed p-1 rounded-md text-[13px] outline-1 outline-offset-1'>Download Template</Link>
                        </div>
                    </div>

                  
                     
                  
                    <div className='flex justify-between items-center p-[10px] border border-b border-l-0  border-t-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] font-medium '>
                        <div className='flex gap-[0px] items-center '>
                             <h4 className='m-0 font-medium' >Step 3. Upload Incentives</h4>
                        </div>
                        <div className="flex items-center  ">
                         <button className='outline-dashed p-1 rounded-md text-[13px] outline-1 outline-offset-1'>Import Incentives</button>
                         {/* <input type='file' placeholder='ddjfksj'/> */}
                        </div>
                    </div>

                    

                </div>
            </Modal>
            {/* when onclick update staff
             */}

        </div>
    )
}

export default PayrollIncentives