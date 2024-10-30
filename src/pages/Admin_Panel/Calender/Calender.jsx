import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Link, NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import SellIcon from '@mui/icons-material/Sell';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DescriptionEditer from './DescriptionEditer';
import CalenderYear from './CalenderYear';



const Calender = () => {
    let subtitle;

    const [modalIsOpen15, setIsOpen15] = React.useState(false);
    function openModal15() {
        setIsOpen15(true);
    }
    function afterOpenModal15() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal15() {
        setIsOpen15(false);
    }

    // State to store the list of file input divs
    const [divs, setDivs] = useState([{}]); // Start with one empty object

    // Function to add a new div
    const addNewDiv = () => {
        setDivs([...divs, {}]); // Add a new empty object to the state array
    };

    // Function to remove a specific div
    const removeDiv = (indexToRemove) => {
        setDivs(divs.filter((_, index) => index !== indexToRemove)); // Filter out the div with the given index
    };

    const [value, setValue] = useState('');

 
    return (
        <div className='calender'>
            
                    <div className='mt-[30px] border calender-div overflow-scroll'>
                        <table className='w-full'>
                            <thead className='flex justify-around'>
                                <button className='flex flex-col' onClick={openModal15}>
                                    <th>SUN</th>
                                    <td>01</td>
                                </button>
                                <button className='flex flex-col'>
                                    <th>SUN</th>
                                    <td>01</td>
                                </button>
                                <button className='flex flex-col'>
                                    <th>SUN</th>
                                    <td>01</td>
                                </button>
                                <button className='flex flex-col'>
                                    <th>SUN</th>
                                    <td>01</td>
                                </button>
                                <button className='flex flex-col'>
                                    <th>SUN</th>
                                    <td>01</td>
                                </button>
                                <button className='flex flex-col'>
                                    <th>SUN</th>
                                    <td>01</td>
                                </button>
                                <button to="/" className='flex flex-col'>
                                    <th>SUN</th>
                                    <td>01</td>
                                </button>

                            </thead>
                            <tbody className='flex justify-around'>
                                <td>
                                    <button className='flex flex-col'>
                                        <p>01</p>
                                    </button>
                                </td>
                                <td>
                                    <button className='flex flex-col'>
                                        <p>01</p>
                                    </button>
                                </td>
                                <td>
                                    <button className='flex flex-col'>
                                        <p>01</p>
                                    </button>
                                </td>
                                <td>
                                    <button className='flex flex-col'>
                                        <p>01</p>
                                    </button>
                                </td>
                                <td>
                                    <button className='flex flex-col'>
                                        <p>01</p>
                                    </button>
                                </td>
                                <td>
                                    <button className='flex flex-col'>
                                        <p>01</p>
                                    </button>
                                </td>
                                <td>
                                    <button className='flex flex-col'>
                                        <p>01</p>
                                    </button>
                                </td>
                            </tbody>
                        </table>
                    </div>
             
            
 

            <Modal
                isOpen={modalIsOpen15}
                onAfterOpen={afterOpenModal15}
                onRequestClose={closeModal15}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"

            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b-1 p-3 text-[13px] xl:text-[15px] '>Add Aadhaar</h2>
                <button onClick={closeModal15} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='p-2 modal-field event-modal'>
                    <input type='text' placeholder='Add Title And Time' className='w-full border-b focus:outline-none' />

                    <Tabs>
                        <TabList className="flex gap-[20px] mt-3 mb-3">
                            <Tab>Event</Tab>
                            <Tab>Task</Tab>
                        </TabList>

                        <TabPanel>
                            <div>
                                <label className='text-[13px] xl:text-[14px] font-medium'>Event Title</label><br />
                                <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                <label className='text-[13px] xl:text-[14px] font-medium'>Description</label>    <br />
                                <textarea rows="3" className='border border-1 rounded-md p-[5px] mt-1 w-[100%]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                </textarea>
                                <label className='text-[13px] xl:text-[14px] font-medium'>Start Date</label>    <br />
                                <input type='date' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                <label className='text-[13px] xl:text-[14px] font-medium'>End Date</label>    <br />
                                <input type='date' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                <div className='flex'>
                                    <input type='number' placeholder='22' className='border border-1 rounded-md p-[5px] mt-1 w-[100%]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                    <select className='border border-1 rounded-md p-[5px] mt-1 w-[94%]   focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                        <option>Months</option>
                                        <option>Weekly</option>
                                        <option>Daily</option>
                                        <option>Hourly</option>
                                    </select>
                                </div>

                                <div className='pt-4 pb-4 cursor-pointer flex items-center gap-[8px]'>
                                    <input type="checkbox" id="event" name="event" value="event" />
                                    <label for="event" > Event</label><br />
                                </div>

                                <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
                                    <button className='first-btn' onClick={closeModal15}>More Options</button>
                                    <button className='second-btn'>Save </button>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <label className='text-[13px] xl:text-[14px] font-medium'>Task Name</label><br />
                                <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                <label className='text-[13px] xl:text-[14px] font-medium'>Task Status</label>    <br />
                                <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                <label className='text-[13px] xl:text-[14px] font-medium'>Task Type</label>    <br />
                                <select className='border border-1 rounded-md p-[5px] mt-1 mb-[10px] w-full  focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px]   hover:bg-[#fff]'>
                                    <option>Graphic</option>
                                    <option>Video</option>
                                </select>

                                <label className='text-[13px] xl:text-[14px] font-medium'>Start Date</label>    <br />
                                <input type='date' className='border border-1 rounded-md p-[5px] mt-1 w-[100%]  mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                <label className='text-[13px] xl:text-[14px] font-medium'>End Date</label>    <br />
                                <input type='date' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]   focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                <label className='text-[13px] xl:text-[14px] font-medium'>Due Date</label>    <br />
                                <input type='date' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />

                                <label className='text-[13px] xl:text-[14px] font-medium'>Select Project</label>    <br />
                                <select className='border border-1 rounded-md p-[5px] mt-1 mb-[10px] w-full  focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px]   hover:bg-[#fff]'>
                                    <option>Graphic</option>
                                    <option>Video</option>
                                </select>

                                <label className='text-[13px] xl:text-[14px] font-medium'>Select Department</label>    <br />
                                <select className='border border-1 rounded-md p-[5px] mt-1 mb-[10px] w-full  focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px]   hover:bg-[#fff]'>
                                    <option>Graphic</option>
                                    <option>Video</option>
                                </select>

                                <label className='text-[13px] xl:text-[14px] font-medium'>Task Assignee</label><br />
                                <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />

                                <label className='text-[13px] xl:text-[14px] font-medium'>Task Discription</label><br />
                                <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />


                                <label className='text-[13px] xl:text-[14px] font-medium mb-3'><SellIcon className='sell-icon' />Task Tag</label><br />
                                <input type='text' className=' mb-[10px]  pr-2 focus:outline-none tag-input mt-2' placeholder='Tag' />    <br />

                                <label className='text-[13px] xl:text-[14px] font-medium'>Task Priority</label><br />
                                <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />

                                <label className='text-[13px] xl:text-[14px] font-medium'>Task Reminder</label><br />
                                <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />

                                <div>
                                    <label className='text-[13px] xl:text-[14px] font-medium'>Attach File</label><br />
                                    <div className='relative'>
                                        <input type='file' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
                                        <button onClick={addNewDiv} >
                                            <AddIcon className='plus-icon' />
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    {/* Dynamically render each div */}
                                    {divs.map((_, index) => (
                                        <div key={index} className='mb-[10px]'>
                                            <label className='text-[13px] xl:text-[14px] font-medium'>Attach File {index + 1}</label><br />
                                            <div className='relative'>
                                                <input
                                                    type='file'
                                                    className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'
                                                />

                                                {/* Remove Button for every div */}
                                                <button onClick={() => removeDiv(index)} className='  rounded plus-icon'>
                                                    <RemoveIcon />
                                                </button>
                                            </div>
                                        </div>
                                    ))}


                                </div>
                                {/* <div className='flex'>
                                    <input type='number' placeholder='22' className='border border-1 rounded-md p-[5px] mt-1 w-[100%]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                    <select className='border border-1 rounded-md p-[5px] mt-1 w-[94%]   focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                        <option>Months</option>
                                        <option>Weekly</option>
                                        <option>Daily</option>
                                        <option>Hourly</option>
                                    </select>
                                </div> */}


                                <DescriptionEditer />

                                <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
                                    <button className='first-btn' onClick={closeModal15}>More Options</button>
                                    <button className='second-btn'>Save </button>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>


                </div>
            </Modal>
        </div>
    )
}

export default Calender