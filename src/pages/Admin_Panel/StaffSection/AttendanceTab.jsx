import React, { useState } from 'react'
import Search from '../../../Assets/Images/search.svg'
import Filter from '../../../Assets/Images/bi_filter.svg'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddIcon from '@mui/icons-material/Add';
import selfie from '../../../Assets/Images/selfie-img.svg'
import qr from '../../../Assets/Images/qr-code.svg'
import gps from '../../../Assets/Images/gps.svg'
import biometric from '../../../Assets/Images/biometric.svg'
import rightimg from '../../../Assets/Images/right.svg'


const AttendanceTab = () => {



    const customStyles = {
        content: {
            top: '50%',
            left: '55%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: "40%",
            padding: "0",
            borderRadius: '10px',

        },
    };

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal() {
        setIsOpen(false);
    }

    const [modalIsOpen1, setIsOpen1] = React.useState(false);
    function openModal1() {
        setIsOpen1(true);
    }
    function afterOpenModal1() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal1() {
        setIsOpen1(false);
    }

    const [modalIsOpen2, setIsOpen2] = React.useState(false);
    function openModal2() {
        setIsOpen2(true);
    }
    function afterOpenModal2() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal2() {
        setIsOpen2(false);
    }


    // onclick start timing

    const [modalIsOpen3, setIsOpen3] = React.useState(false);
    function openModal3() {
        setIsOpen3(true);
    }
    function afterOpenModal3() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal3() {
        setIsOpen3(false);
    }
    // onclick start timing


    // onclick end timing

    const [modalIsOpen4, setIsOpen4] = React.useState(false);
    function openModal4() {
        setIsOpen4(true);
    }
    function afterOpenModal4() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal4() {
        setIsOpen4(false);
    }
    // onclick end timing

    //  onclick auto half day button

    const [modalIsOpen16, setIsOpen16] = React.useState(false);
    function openModal16() {
        setIsOpen16(true);
    }
    function afterOpenModal16() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal16() {
        setIsOpen16(false);
    }
    // onclick auto half day button



    // onclick mandatory half day button
    const [modalIsOpen17, setIsOpen17] = React.useState(false);
    function openModal17() {
        setIsOpen17(true);
    }
    function afterOpenModal17() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal17() {
        setIsOpen17(false);
    }
    // onclick mandatory half day button

    // onclick mandatory full day button
    const [modalIsOpen18, setIsOpen18] = React.useState(false);
    function openModal18() {
        setIsOpen18(true);
    }
    function afterOpenModal18() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal18() {
        setIsOpen18(false);
    }
    // onclick mandatory half day button

    // onclick update attendance 
    const [modalIsOpen5, setIsOpen5] = React.useState(false);
    function openModal5() {
        setIsOpen5(true);
    }
    function afterOpenModal5() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal5() {
        setIsOpen5(false);
    }

    // onclick update attendance



    // toggle switch
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };
    // toggle switch


    {/* when onclick update attendance modes for all staff */ }
    const [modalIsOpen6, setIsOpen6] = React.useState(false);
    function openModal6() {
        setIsOpen6(true);
    }
    function afterOpenModal6() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal6() {
        setIsOpen6(false);
    }

    {/* when onclick update attendance modes for all staff */ }

    {/* when onclick update automation rule for all staff */ }
    const [modalIsOpen7, setIsOpen7] = React.useState(false);
    function openModal7() {
        setIsOpen7(true);
    }
    function afterOpenModal7() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal7() {
        setIsOpen7(false);
    }

    {/* when onclick update automation rule for all staff */ }




    {/* when onclick update attendance modes  rule for all staff  successfull message*/ }

    const [modalIsOpen8, setIsOpen8] = React.useState(false);
    function openModal8() {
        setIsOpen8(true);
    }
    function afterOpenModal8() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal8() {
        setIsOpen8(false);
    }

    {/* when onclick update attendance modes  rule for all staff  successfull message*/ }


    return (
        <div className='attendance-tab mt-[20px]'>

            <div className='tabs-attendance'>

                <Tabs>
                    <TabList className="flex flex-col gap-[10px] xl:flex-row lg:flex-row mb-[20px]">
                        <Tab><button >Work Timings</button></Tab>
                        <Tab> <button >Attendance Modes</button></Tab>
                        <Tab> <button >Automation Rules</button></Tab>
                    </TabList>

                    <TabPanel>
                        <div className='flex justify-between flex-col xl:flex-row lg:flex-col lg:gap-[15px] md:flex-col gap-[15px]'>
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
                                <div>
                                    <div className="relative inline-block text-left">
                                        <div>
                                            <button type="button" onClick={openModal} className=" second-btn w-full    text-white shadow-sm" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                Update Work Timings

                                            </button>
                                        </div>






                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className='w-[100%] p-0 h-[300px] overflow-y-auto flex rounded-md shadow overflow-scroll border border-1 mt-4 '>
                            <div className='w-full   '>
                                <table className='table-section w-full'>
                                    <thead className='border border-1 sticky bg-[#fff] set-shadow top-[-1px]'>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Job Title</th>
                                        <th>Schedule Type</th>


                                    </thead>
                                    <tbody>
                                        <tr className='border'>
                                            <td><input type='checkbox' className='border border-1 rounded-md ' /></td>
                                            <td>Demo</td>
                                            <td>Demo</td>
                                            <td>Demo</td>
                                        </tr>
                                     

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex justify-between flex-col xl:flex-row lg:flex-col lg:gap-[15px] md:flex-col gap-[15px]'>
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
                                <div>
                                    <div className="relative inline-block text-left">
                                        <div>
                                            <button type="button" onClick={openModal5} className=" second-btn w-full    text-white shadow-sm" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                Update Attendance Modes

                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>


                        <div className='w-[100%] p-0 h-[300px] overflow-y-auto flex rounded-md shadow overflow-scroll border border-1 mt-4 '>
                            <div className='w-full   '>
                            <table className='table-section  w-full'>
                                <thead className='border border-1 '>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Job Title</th>
                                    <th>SmartPhone Attendance</th>
                                    <th>Selfie</th>
                                    <th>QR</th>
                                    <th>Mark Attendance From</th>
                                    <th>Biometric</th>



                                </thead>
                                <tbody className=''>
                                    <tr className='border'>
                                    <td><input type='checkbox' className='border border-1 rounded-md ' /></td>
                                    <td>Demo</td>
                                    <td>Demo</td>
                                    <td>Demo</td>
                                    <td>Demo</td>
                                    <td>Demo</td>
                                    <td>Demo</td>
                                    <td>Demo</td>
                                    </tr>


                                </tbody>
                            </table>
                            </div>






                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='flex justify-between flex-col xl:flex-row lg:flex-col lg:gap-[15px] md:flex-col gap-[15px]'>
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
                                <div>
                                    <div className="relative inline-block text-left">
                                        <div>
                                            <button type="button" onClick={openModal7} className=" second-btn w-full    text-white shadow-sm" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                Update Automation Rules

                                            </button>
                                        </div>






                                    </div>


                                </div>
                            </div>
                        </div>


                        <div className='w-[100%] p-0 h-[300px] overflow-y-auto flex rounded-md shadow overflow-scroll border border-1 mt-4 '>
                            <div className='w-full   '>
                            <table className='table-section  w-full'>
                                <thead className='border border-1 '>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Job Title</th>
                                    <th>Auto Present</th>
                                    <th>Present On Punch In</th>
                                    <th>Auto Half Day</th>
                                    <th>Mandatory Half Day Hours</th>
                                    <th>Mandatory Full Day Hours</th>



                                </thead>
                                <tbody className=''>
                                    <tr className='border'> 
                                    <td><input type='checkbox' className='border border-1 rounded-md ' /></td>
                                    <td>Demo</td>
                                    <td>Demo</td>
                                    <td>Demo</td>
                                    <td>Demo</td>
                                    <td>Demo</td>
                                    <td>Demo</td>
                                    <td>Demo</td>
                                    </tr>


                                </tbody>
                            </table>
                            </div>






                        </div>
                    </TabPanel>
                </Tabs>




            </div>



            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Bulk Update Work Timings for All Staff</h2>
                <button onClick={closeModal} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <Tabs className="p-[s0px] fixed-tab-section">
                    <TabList className="flex justify-around items-center mt-3 m-2 xl:m-2 mb-2 bg-[#F4F5F9] pt-[10px] pb-[10px] rounded-md">
                        <label className='text-[14px]'>Select Type</label>
                        <Tab className="cursor-pointer flex items-center gap-[10px]">
                            <input type="radio" id="fixed" name='fixed' className='rounded-full ' />
                            <label for="fixed" className='text-[14px]'> Fixed</label><br />
                        </Tab>
                        <Tab className="cursor-pointer flex items-center gap-[10px]">
                            <input type="radio" id="flexible" name='fixed' className='rounded-full ' />
                            <label for="flexible" className='text-[14px]'> Flexible</label><br />
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <div className='first-panel'>
                            <table className='w-full'>
                                <thead className='border-b border-[#000] '>
                                    <th className='p-3 text-[13px] font-medium'>Day </th>
                                    <th className='p-3 text-[13px] font-medium w-[45px]'>Weekoff </th>
                                    <th className='p-3 text-[13px] font-medium text-left'>Shifts</th>

                                </thead>
                                <tbody>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal'>Mon</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal'>Tue</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal'>Wed</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal'>Thu</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal'>Fri</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>

                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal'>Sat</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>

                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal'>Sun</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>




                                </tbody>
                            </table>

                            <div className="pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3">
                                <button className="first-btn" onClick={closeModal}>Cancel</button><button className="second-btn">Confirm</button>
                            </div>
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className='first-panel'>
                            <div className='flex justify-center gap-4 items-center'>
                                <h2>Select Month</h2>
                                <input type="date" className='border rounded-md bg-[#F4F5F9] p-[8px] lg:w-[240px] w-[100%] focus-visible:outline-none text-sm' />
                            </div>
                            <table className='w-full'>
                                <thead className='border-b border-[#000] '>
                                    <th className='p-3 text-[13px]  font-medium'>Day </th>
                                    <th className='p-3 text-[13px] font-medium w-[45px]'>Weekoff </th>
                                    <th className='p-3 text-[13px] font-medium text-left pl-[8px]'>Shifts</th>

                                </thead>
                                <tbody>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal	'>Sep 01 | Mon</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal	'>Sep 01 | Tue</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal	'>Sep 01 | Wed</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal	'>Sep 01 | Thu</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal	'>Sep 01 | Fri</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal	'>Sep 01 | Sat</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center text-[12px] font-normal	'>Sep 01 | Sun</td>
                                        <td className='p-3 text-center'>
                                            <input type="checkbox" />
                                        </td>
                                        <td className='pr-5'>
                                            <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>                                                <option>Select Shift</option>
                                            </select>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div className="pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3">
                                <button className="first-btn" onClick={closeModal}>Cancel</button>
                                <button className="second-btn">Update Work Timings for All Staff</button></div>
                        </div>
                    </TabPanel>

                </Tabs>
            </Modal>



            <Modal
                isOpen={modalIsOpen1}
                onAfterOpen={afterOpenModal1}
                onRequestClose={closeModal1}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"

            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b-1 p-3 text-[13px] xl:text-[15px] '>Monday - Shifts</h2>
                <button onClick={closeModal1} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div>
                    <h4 className='p-4 pl-3 border border-b border-l-0 border-r-0 text-[13px] xl:text-[15px]'>No Options Available ....</h4>
                    <Link to="" className='text-[#8A25B0] p-4 font-medium mt-3 w-full flex items-center text-[16px] xl:text-[15px]' onClick={openModal2} ><AddIcon /> Add Shift</Link><br />
                    <div className='text-end pr-4 pb-3'>
                        <button className='second-btn'>Okay</button>
                    </div>
                </div>
            </Modal>




            <Modal
                isOpen={modalIsOpen2}
                onAfterOpen={afterOpenModal2}
                onRequestClose={closeModal2}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"

            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b-1 p-3 text-[13px] xl:text-[15px] '>Add New Shifts</h2>
                <button onClick={closeModal2} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className=''>
                    <div className='modal-field p-[10px] border border-t'>
                        <label className='text-[13px] xl:text-[14px] font-medium'>Shift Name</label><br />
                        <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' /><br />
                        <label className='text-[13px] xl:text-[14px] font-medium'>Shift Start Time</label><br />
                        <select onClick={openModal3} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                            <option>Please Select Time</option>
                        </select><br />
                        <label className='text-[13px] xl:text-[14px] font-medium'>Can Punch In</label><br />
                        <div className='flex  justify-between'>


                            <Tabs className="w-full">
                                <TabList className="w-full flex justify-between gap-[20px]">
                                    <Tab className="w-[48%]">
                                        <div className='border border-1 cursor-pointer rounded-md w-full flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                            <input type="radio" id="anytime" name="select-timing" />
                                            <label for="anytime" className='text-[13px] xl:text-[14px] font-medium  cursor-pointer'>Anytime</label><br />
                                        </div>

                                    </Tab>
                                    <Tab className="w-[48%]">
                                        <div className='border border-1 cursor-pointer rounded-md w-full flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                            <input type="radio" id="limit" name="select-timing" />
                                            <label for="limit" className='text-[13px] xl:text-[14px] font-medium  cursor-pointer'>Add Limit</label><br />
                                        </div>
                                    </Tab>
                                </TabList>

                                <TabPanel></TabPanel>

                                <TabPanel>
                                    <label className='text-[13px] xl:text-[14px] font-medium'>Allow Punch In</label><br />
                                    <div className='flex gap-[3px] xl:gap-[30px] flex-col xl:flex-row lg:flex-row'>
                                        <div className='flex items-center gap-2'>
                                            <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[40px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
                                            <label for="limit" className='text-[13px] xl:text-[14px] font-medium  cursor-pointer'>Hours</label><br />

                                        </div>


                                        <div className='flex items-center gap-2'>
                                            <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[100px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
                                            <label for="limit" className='text-[13px] flex whitespace-nowrap xl:text-[14px] font-medium  cursor-pointer'>Minutes <span className='pl-[10px] xl:pl-[15px]'>Before Shift Start Time</span></label><br />

                                        </div>
                                    </div>

                                </TabPanel>

                            </Tabs>



                        </div>


                        <label className='text-[13px] xl:text-[14px] font-medium'>Shift End Time</label><br />

                        <select onClick={openModal3} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                            <option>Please Select Time</option>
                        </select><br />

                        <label className='text-[13px] xl:text-[14px] font-medium'>Can Punch Out</label><br />
                        <div className=''>


                            <Tabs className="w-full">
                                <TabList className="w-full flex justify-between gap-[20px]">
                                    <Tab className="w-[48%]">
                                        <div className='border border-1 cursor-pointer rounded-md w-[100%] flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                            <input type="radio" id="anytime1" name="punching-timing" />
                                            <label className='text-[13px] xl:text-[14px] cursor-pointer font-medium' for="anytime1">Anytime</label><br />
                                        </div>


                                    </Tab>
                                    <Tab className="w-[48%]">
                                        <div className='border border-1 cursor-pointer rounded-md w-[100%] flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                            <input type="radio" id="limit1" name="punching-timing" />
                                            <label className='text-[13px] xl:text-[14px]  cursor-pointer font-medium' for="limit1">Add Limit</label><br />
                                        </div>
                                    </Tab>
                                </TabList>

                                <TabPanel>

                                </TabPanel>
                                <TabPanel>
                                    <label className='text-[14px] font-medium'>Allow Punch In</label><br />
                                    <div className='flex gap-[3px] xl:gap-[30px] flex-col xl:flex-row lg:flex-row'>
                                        <div className='flex items-center gap-2'>
                                            <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[40px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
                                            <label for="limit" className='text-[13px] xl:text-[14px] font-medium  cursor-pointer'>Hours</label><br />

                                        </div>


                                        <div className='flex items-center gap-2'>
                                            <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[100px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
                                            <label for="limit" className='text-[13px] flex whitespace-nowrap xl:text-[14px] font-medium  cursor-pointer'>Minutes <span className='pl-[10px] xl:pl-[15px]'>Before Shift Start Time</span></label><br />

                                        </div>
                                    </div>

                                </TabPanel>
                            </Tabs>








                        </div>
                    </div>
                    <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
                        <button className='first-btn' onClick={closeModal2}>Cancel</button>
                        <button className='second-btn'>Confirm</button>
                    </div>
                </div>
            </Modal>




            {/* onclick star timing ---- time modal */}
            <Modal
                isOpen={modalIsOpen3}
                onAfterOpen={afterOpenModal3}
                onRequestClose={closeModal3}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"

            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border border-b border-t-0 border-r-0 border-l-0 mb-4  p-3 text-[13px] xl:text-[14px] '>Select Time</h2>
                <button onClick={closeModal3} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className=''>

                    <table className='p-[10px] table-timing w-full' >
                        <tbody className='flex justify-center w-full gap-[12px]'>
                            <tr className='flex flex-col w-[100px] h-[205px]  overflow-scroll overflow-x-hidden '>
                                <td className=''>00</td>
                                <td>01</td>
                                <td>02</td>
                                <td>03</td>
                                <td>04</td>
                                <td>05</td>
                                <td>06</td>
                                <td>07</td>
                            </tr>
                            <tr className='flex flex-col w-[100px] h-[205px] overflow-scroll overflow-x-hidden	'>
                                <td>00</td>
                                <td>01</td>
                                <td>02</td>
                                <td>03</td>
                                <td>04</td>
                                <td>05</td>
                                <td>06</td>
                                <td>07</td>
                            </tr>
                            <tr className='flex flex-col w-[100px]'>
                                <td>AM</td>
                                <td>PM</td>
                            </tr>
                        </tbody>
                        <h3 className='text-center pt-[25px] pb-[25px] text-[13px] xl:text-[14px]'>Selected Time: 12:00 PM</h3>
                    </table>

                    <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
                        <button className='first-btn' onClick={closeModal3}>Cancel</button>
                        <button className='second-btn'>Okay</button>
                    </div>
                </div>
            </Modal>



            {/* onclick star timing ---- time modal */}


            {/* onclick end timing ----time modal */}


            <Modal
                isOpen={modalIsOpen4}
                onAfterOpen={afterOpenModal4}
                onRequestClose={closeModal4}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border border-b border-t-0 border-r-0 border-l-0 mb-4  p-3  '>Select Time</h2>
                <button onClick={closeModal4} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className=''>

                    <table className='p-[10px] table-timing w-full' >
                        <tbody className='flex justify-center w-full gap-[12px]'>
                            <tr className='flex flex-col w-[100px] h-[205px]  overflow-scroll overflow-x-hidden '>
                                <td className=''>00</td>
                                <td>01</td>
                                <td>02</td>
                                <td>03</td>
                                <td>04</td>
                                <td>05</td>
                                <td>06</td>
                                <td>07</td>
                            </tr>
                            <tr className='flex flex-col w-[100px] h-[205px] overflow-scroll overflow-x-hidden	'>
                                <td>00</td>
                                <td>01</td>
                                <td>02</td>
                                <td>03</td>
                                <td>04</td>
                                <td>05</td>
                                <td>06</td>
                                <td>07</td>
                            </tr>
                            <tr className='flex flex-col w-[100px]'>
                                <td>AM</td>
                                <td>PM</td>
                            </tr>
                        </tbody>
                        <h3 className='text-center pt-[25px] pb-[25px]'>Selected Time: 12:00 PM</h3>
                    </table>

                    <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
                        <button className='first-btn' onClick={closeModal4}>Cancel</button>
                        <button className='second-btn'>Okay</button>
                    </div>
                </div>
            </Modal>


            {/* onclick end timing modal */}


            {/* onclick update attendance modal */}
            <Modal
                isOpen={modalIsOpen5}
                onAfterOpen={afterOpenModal5}
                onRequestClose={closeModal5}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Bulk Update Work Timings for All Staff</h2>
                <button onClick={closeModal5} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2 '>
                    <div className='flex justify-between items-center p-[10px] pl-[20px] text-[13px] xl:text-[14px] bg-[#F0F6FE]'>
                        <h4 className='m-0'>Allow punch in from Staff App</h4>
                        <div className="flex items-center  ">
                            <div
                                onClick={handleToggle}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isOn ? 'bg-[#8A25B0]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${isOn ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between items-center p-[10px] border border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={selfie} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>Selfie Attendance</h4>
                        </div>
                        <div className="flex items-center  ">
                            <div
                                onClick={handleToggle}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isOn ? 'bg-[#8A25B0]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${isOn ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between items-center p-[10px] border border-t-0 border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={qr} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>QR Attendance</h4>
                        </div>
                        <div className="flex items-center  ">
                            <div
                                onClick={handleToggle}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isOn ? 'bg-[#8A25B0]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${isOn ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                ></div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-between items-center border-t-0 p-[10px] border border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={gps} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>GPS Attendance</h4>
                        </div>
                        <div className="flex items-center  ">
                            <div
                                onClick={handleToggle}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isOn ? 'bg-[#8A25B0]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${isOn ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className='p-4 pl-5 border border-b border-l-0 border-r-0 border-t-0'>
                        <label className='text-[13px] xl:text-[14px] font-medium'>Mark Attendance From</label>

                        <div className='flex gap-[12px] pt-3'>
                            <div className='flex items-center gap-[10px] border pl-3 pt-2 pb-2 pr-3 rounded-md'>
                                <input type="radio" id="foroffice" name="office" value="office" />
                                <label for="foroffice" className='text-[13px] xl:text-[14px]'>Office</label><br />
                            </div>
                            <div className='flex items-center gap-[10px] border pl-3 pt-2 pb-2 pr-3 rounded-md'>
                                <input type="radio" id="anywhere" name="office" value="anywhere" />
                                <label for="anywhere" className='text-[13px] xl:text-[14px]'>Anywhere</label><br />
                            </div>
                        </div>
                    </div>


                    <div className='p-4 pl-5 border border-b border-l-0 border-r-0 border-t-0 flex gap-[14px] items-center'>
                        <img src={biometric} />
                        <div>
                            <label className='text-[13px] xl:text-[14px] font-medium'>Biometric Devices</label><br />
                            <Link to="/biometric" className='text-[13px] xl:text-[14px] text-[#8A25B0] underline decoration-1'>Manage biometric devices</Link>
                        </div>

                    </div>

                    <div className="pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3">
                        <button className="first-btn" onClick={closeModal5}>Cancel</button>
                        <button className="second-btn" onClick={openModal6}>Update Attendance Modes for All Staff</button>
                    </div>

                </div>
            </Modal>

            {/* onclick update attendance modal */}

            {/* when onclick update attendance modes for all staff */}

            <Modal
                isOpen={modalIsOpen6}
                onAfterOpen={afterOpenModal6}
                onRequestClose={closeModal6}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Bulk Update Work Timings for All Staff</h2>
                <button onClick={closeModal6} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='flex items-center justify-center flex-col gap-[10px] pt-[20px] pb-[20px]'>
                    <img src={rightimg} className='w-[65px]' />
                    <h3 className='text-center'>You have Successfully updated attendance modes</h3>
                    <button className='second-btn '>Okay</button>
                </div>
            </Modal>


            {/* when onclick update attendance modes for all staff */}



            {/* onclick update automation rules */}
            <Modal
                isOpen={modalIsOpen7}
                onAfterOpen={afterOpenModal7}
                onRequestClose={closeModal7}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Bulk Update Automation Rules for All Staff</h2>
                <button onClick={closeModal7} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2'>

                    <div className='flex justify-between items-center p-[10px] border border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={selfie} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>Auto Present at day start</h4>
                        </div>
                        <div className="flex items-center  ">
                            <div
                                onClick={handleToggle}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isOn ? 'bg-[#8A25B0]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${isOn ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between items-center p-[10px] border border-t-0 border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={qr} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>Present on Punch In</h4>
                        </div>
                        <div className="flex items-center  ">
                            <div
                                onClick={handleToggle}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isOn ? 'bg-[#8A25B0]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${isOn ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                ></div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-between items-center border-t-0 p-[10px] border border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={gps} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>Auto half day if late by</h4>
                        </div>
                        <div className="flex items-center  ">
                            <button className='first-btn' onClick={openModal16}>10 Minutes</button>
                        </div>
                    </div>

                    <div className='flex justify-between items-center border-t-0 p-[10px] border border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={gps} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>Mandatory half day hours</h4>
                        </div>
                        <div className="flex items-center  ">
                            <button className='first-btn' onClick={openModal17}>10 Minutes</button>
                        </div>
                    </div>

                    <div className='flex justify-between items-center border-t-0 p-[10px] border border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={gps} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>Mandatory full day hours</h4>
                        </div>
                        <div className="flex items-center  ">
                            <button className='first-btn' onClick={openModal18}>10 Minutes</button>
                        </div>
                    </div>



                    <div className="pr-[10px] pb-3 flex gap-[10px] justify-end  pt-3">
                        <button className="first-btn" onClick={closeModal7}>Cancel</button>
                        <button className="second-btn" onClick={openModal8} >Update Automation Rules for All Staff</button>
                    </div>

                </div>
            </Modal>

            {/* onclick update automation rules */}



            {/* onclick autohalf day minutes  button */}

            <Modal
                isOpen={modalIsOpen16}
                onAfterOpen={afterOpenModal16}
                onRequestClose={closeModal16}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Auto half day if late by
                </h2>
                <button onClick={closeModal16} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2 p-[12px]'>

                    <label className="text-[13px] xl:text-[14px] font-medium">Select Duration</label>

                    <div className="flex gap-[3px] xl:gap-[30px] flex-col xl:flex-row lg:flex-row">
                        <div className="flex items-center gap-2">
                            <input type="number" className="border border-1 rounded-md p-[5px] mt-1 w-[40px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]" />
                            <label for="limit" className="text-[13px] xl:text-[14px] font-medium  cursor-pointer">Hours</label><br />
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="number" className="border border-1 rounded-md p-[5px] mt-1 w-[100px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]" />
                            <label for="limit" className="text-[13px] flex whitespace-nowrap xl:text-[14px] font-medium  cursor-pointer">Minutes</label><br />
                        </div>
                    </div>



                    <div className="pr-[10px] pb-3 flex gap-[10px] justify-end  pt-3">
                        <button className="first-btn" onClick={closeModal16}>Turn Off</button>
                        <button className="second-btn" onClick={openModal16} >Confirm</button>
                    </div>

                </div>
            </Modal>


            {/* onclick autohalf day minutes  button */}


            {/* onclick mandatory half day minutes  button */}

            <Modal
                isOpen={modalIsOpen17}
                onAfterOpen={afterOpenModal17}
                onRequestClose={closeModal17}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Mandatory half day hours

                </h2>
                <button onClick={closeModal17} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2 p-[12px]'>

                    <label className="text-[13px] xl:text-[14px] font-medium">Select Duration</label>

                    <div className="flex gap-[3px] xl:gap-[30px] flex-col xl:flex-row lg:flex-row">
                        <div className="flex items-center gap-2">
                            <input type="number" className="border border-1 rounded-md p-[5px] mt-1 w-[40px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]" />
                            <label for="limit" className="text-[13px] xl:text-[14px] font-medium  cursor-pointer">Hours</label><br />
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="number" className="border border-1 rounded-md p-[5px] mt-1 w-[100px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]" />
                            <label for="limit" className="text-[13px] flex whitespace-nowrap xl:text-[14px] font-medium  cursor-pointer">Minutes</label><br />
                        </div>
                    </div>



                    <div className="pr-[10px] pb-3 flex gap-[10px] justify-end  pt-3">
                        <button className="first-btn" onClick={closeModal17}>Turn Off</button>
                        <button className="second-btn" onClick={openModal16} >Confirm</button>
                    </div>

                </div>
            </Modal>


            {/* onclick mandatory half day minutes  button */}


            {/* onclick mandatory full day minutes  button */}

            <Modal
                isOpen={modalIsOpen18}
                onAfterOpen={afterOpenModal18}
                onRequestClose={closeModal18}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Mandatory Full day hours

                </h2>
                <button onClick={closeModal18} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2 p-[12px]'>

                    <label className="text-[13px] xl:text-[14px] font-medium">Select Duration</label>

                    <div className="flex gap-[3px] xl:gap-[30px] flex-col xl:flex-row lg:flex-row">
                        <div className="flex items-center gap-2">
                            <input type="number" className="border border-1 rounded-md p-[5px] mt-1 w-[40px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]" />
                            <label for="limit" className="text-[13px] xl:text-[14px] font-medium  cursor-pointer">Hours</label><br />
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="number" className="border border-1 rounded-md p-[5px] mt-1 w-[100px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]" />
                            <label for="limit" className="text-[13px] flex whitespace-nowrap xl:text-[14px] font-medium  cursor-pointer">Minutes</label><br />
                        </div>
                    </div>



                    <div className="pr-[10px] pb-3 flex gap-[10px] justify-end  pt-3">
                        <button className="first-btn" onClick={closeModal18}>Turn Off</button>
                        <button className="second-btn" onClick={openModal18} >Confirm</button>
                    </div>

                </div>
            </Modal>


            {/* onclick mandatory full day minutes  button */}



            {/* when onclick update attendance mods for aall staff successfull msg */}
            <Modal
                isOpen={modalIsOpen8}
                onAfterOpen={afterOpenModal8}
                onRequestClose={closeModal8}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Bulk Update Work Timings for All Staff</h2>
                <button onClick={closeModal8} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='flex items-center justify-center flex-col gap-[10px] pt-[20px] pb-[20px]'>
                    <img src={rightimg} className='w-[65px]' />
                    <h3 className='text-center'>You have Successfully updated attendance modes</h3>
                    <button className='second-btn' onClick={closeModal8}>Okay</button>
                </div>
            </Modal>


            {/* when onclick update attendance mods for aall staff successfull msg */}

        </div>


    )
}

export default AttendanceTab 