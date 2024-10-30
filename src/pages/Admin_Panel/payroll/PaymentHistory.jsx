import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';


const PaymentHistory = () => {
    let subtitle;



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


    const [toggleDrop4, setToggleDrop4] = useState(false);

    function handledrop4() {
        setToggleDrop4(!toggleDrop4)
    }

    const [toggleDrop5, setToggleDrop5] = useState(false);

    function handledrop5() {
        setToggleDrop5(!toggleDrop5)
    }


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
                        <label htmlFor="" className='text-[14px] font-medium'>Payroll Month</label>
                        <input type="date" className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm' />
                    </div>
                    <div className='xl:w-[240px]'>
                        <label htmlFor="" className='text-[14px] font-medium'>Company Branches</label>
                        <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                            <option>All Branches</option>
                            <option>Demo Main Branchs</option>

                        </select>
                    </div>

                    <div className='xl:w-[240px]'>
                        <label htmlFor="" className='text-[14px] font-medium'>Departments</label>
                        <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                            <option>All Departments</option>
                            <option>Website</option>

                        </select>
                    </div>

                    <div className='xl:w-[240px]'>
                        <label htmlFor="" className='text-[14px] font-medium'>Payment Mode</label>
                        <select className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm'>
                            <option>All </option>
                            <option>Google Pay</option>

                        </select>
                    </div>


                </div>


            </div>

            <div className='mt-5'>
                <div className='flex  items-start gap-[10px] flex-col  '>
                    <div className='relative  xl:w-[240px] lg:w-[240px] w-full mt-2'>
                        <input type="text" placeholder='Search' className='border rounded-md pr-[40px]  p-[8px] w-[100%]  focus-visible:outline-none' />
                        <SearchIcon className='absolute right-[10px] top-[10px] ' />
                    </div>



                    <div className='flex gap-[10px] w-full justify-between'>
                        <button className='first-btn'>Refresh</button>
                        <button className='second-btn'>Download Report</button>
                    </div>


                </div>
            </div>

            <div className='text-end'>
                <button className='p-[10px] second-btn mt-[10px] flex items-center' >
                    <UploadFileIcon className='upload-icon' />
                    Import Reimbursements
                </button>
            </div>
            <div className='xl:w-[1067px] overflow-scroll flex rounded-md shadow overflow-scroll border border-1 mt-4 pl-3 pr-3'>
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
                                Payment Date
                                <div className='relative dropdown-container'>
                                    <button onClick={() => handleDrop('payment')}>
                                        <FilterListIcon className='filter-icon' />
                                    </button>

                                    {activeDropdown === 'payment' && (
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
                                Payment Type
                                <div className='relative dropdown-container'>
                                    <button onClick={() => handleDrop('p-type')}>
                                        <FilterListIcon className='filter-icon' />
                                    </button>

                                    {activeDropdown === 'p-type' && (
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
                                Status
                                <div className='relative dropdown-container'>
                                    <button onClick={() => handleDrop('status')}>
                                        <FilterListIcon className='filter-icon' />
                                    </button>

                                    {activeDropdown === 'status' && (
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
                                Amount Paid
                                <div className='relative dropdown-container'>
                                    <button onClick={() => handleDrop('amount')}>
                                        <FilterListIcon className='filter-icon' />
                                    </button>

                                    {activeDropdown === 'amount' && (
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
                                Transaction ID

                            </div>
                        </th>

                        <th className=''>
                            <div className='flex'>
                                UTR Number

                            </div>
                        </th>

                        <th className=''>
                            <div className='flex'>
                                Paid By

                            </div>
                        </th>

                        <th className=''>
                            <div className='flex'>
                                Notes

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





        </div>
    )
}

export default PaymentHistory