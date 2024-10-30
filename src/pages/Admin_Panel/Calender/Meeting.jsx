import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import Select from 'react-select';
import SaveIcon from '@mui/icons-material/Save';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import userimg from '../../../Assets/Images/users.jpg'
import CreateIcon from '@mui/icons-material/Create';

const Meeting = () => {

    let subtitle;
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

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


    const [chosenUsers, setChosenUsers] = useState([]); // Changed state to chosenUsers
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Changed state for dropdown
    const usersList = ['Piyush', 'Karan', 'Sanjay']; // Changed array name to usersList

    const handleUserSelectionChange = (e) => { // Changed function name
        const user = e.target.value; // Kept variable name as user

        if (e.target.checked) {
            // Add user to chosenUsers if checked
            setChosenUsers([...chosenUsers, user]);
        } else {
            // Remove user from chosenUsers if unchecked
            setChosenUsers(chosenUsers.filter((u) => u !== user));
        }
    };

    const removeUserBadge = (user) => { // Changed function name
        setChosenUsers(chosenUsers.filter((u) => u !== user));
    };

    const toggleDropdownVisibility = () => { // Changed function name
        setIsDropdownOpen(!isDropdownOpen);
    };



    const [selectedClients, setSelectedClients] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const clients = ['Piyush', 'karan', 'Sanjay'];

    const handleCheckboxChange = (e) => {
        const client = e.target.value;

        if (e.target.checked) {
            // Add client to selectedClients if checked
            setSelectedClients([...selectedClients, client]);
        } else {
            // Remove client from selectedClients if unchecked
            setSelectedClients(selectedClients.filter((c) => c !== client));
        }
    };

    const handleBadgeRemove1 = (client) => {
        setSelectedClients(selectedClients.filter((c) => c !== client));
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className=' mx-auto px-4 pl-3 pr-3 py-8 lg:px-4 '>
            <div className='heading flex justify-between items-center '>
                <h2 className='font-medium text-[22px]'>Meetings</h2>
                <button className='bg-[#8a25b0] text-white rounded-md p-[7px]' onClick={openModal2}>
                    <AddIcon />
                </button>
            </div>
            <div className='shadow p-4' >
                <div className='flex grid gap-x-8 gap-y-4 grid-cols-3'>
                    {/* <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)} // Updates the date
                    placeholderText="Start Date Between" // Placeholder for input
                    dateFormat="yyyy/MM/dd" // Format of the date
                    isClearable // Allows the user to clear the date
                    className='border border-1 rounded-md p-[5px] mt-1 w-[300px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'
                />
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)} // Updates the date
                    placeholderText="End Date Between" // Placeholder for input
                    dateFormat="yyyy/MM/dd" // Format of the date
                    isClearable // Allows the user to clear the date
                    className='border border-1 rounded-md p-[5px] mt-1 w-[300px]   focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'
                /> */}
                    <select className="border border-1 rounded-md p-[5px] mt-1 w-[300px]   focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]">
                        <option>Select User</option>
                        <option>Sid gor</option>
                        <option>Team Member 1</option>
                    </select>

                    <select className="border border-1 rounded-md p-[5px] mt-1 w-[300px]   focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]">
                        <option>Select Client</option>
                        <option>Same Parker</option>
                        <option>Thomas Bond</option>
                    </select>

                    <select className="border border-1 rounded-md p-[5px] mt-1 w-[300px]   focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]">
                        <option>Select Status</option>
                        <option>On Going</option>
                        <option>Yet to Start</option>
                    </select>
                </div>

                <div className='flex items-center justify-between mt-8'>
                    <div className='flex gap-4'>
                        <button className=' flex items-center gap-1 p-2 rounded-lg text-red-600 border border-red-600'>
                            <DeleteOutlineIcon /> Delete Selected
                        </button>
                        <button className='second-btn flex items-center gap-1'>
                            <SaveIcon /> Save Column Visibilty
                        </button>
                    </div>

                    <input type='search' placeholder='Search Here' className='border border-1 rounded-md p-[5px] mt-1 w-[300px]   focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'/>
                </div>

                <div className='w-[100%] flex rounded-md shadow overflow-scroll border border-1 mt-4 pl-3 pr-3'>
                    <table className='table-section mt-4 w-full'>
                        <thead className='border border-1 '>
                            <th>#</th>
                            <th>ID</th>
                            <th> TITLE</th>
                            <th>USERS</th>
                            <th>CLIENTS</th>
                            <th>START At</th>
                            <th>ENDS AT</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>
                            

                        </thead>
                        <tbody>
                            <td><input type='checkbox' className='border border-1 rounded-md ' /></td>
                           
                            <td>Demo</td>
                            <td>Demo</td>
                            <td>
                                <div className='flex user-img'>
                                    <img src={userimg}  className='w-[30px] rounded-full relative  '/>
                                    <img src={userimg}  className='w-[30px] rounded-full relative left-[-7px]'/>
                                   <button className='rounded bg-[#8A25B0] text-white -[2px] w-[33px]' onClick={openModal16}>
                                        <CreateIcon/>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <div className='flex user-img'>
                                    <img src={userimg}  className='w-[30px] rounded-full relative  '/>
                                     <img src={userimg}  className='w-[30px] rounded-full relative left-[-7px]'/>
                                    <button className='rounded bg-[#8A25B0] text-white -[2px] w-[33px]' onClick={openModal16}>
                                        <CreateIcon/>
                                    </button>
                                </div>
                            </td>
                            <td>10-07-2024 10:04:00</td>
                            <td>10-07-2024 10:04:00</td>
                            <td>Ended before 91 days 01 hours 15 minutes 47 seconds	</td>
                            <td>
                            <button className='rounded bg-[#8A25B0] text-[#fff] p-[2px] w-[33px] mr-2' onClick={openModal16}>
                                        <CreateIcon/>
                                    </button>
                                    <button className='rounded text-red-500 p-[2px] w-[33px]' onClick={openModal16}>
                                        <DeleteOutlineIcon/>
                                    </button>
                                    
                            </td>

                        </tbody>
                    </table>
                </div>

            </div>




            <Modal
                isOpen={modalIsOpen2}
                onAfterOpen={afterOpenModal2}
                onRequestClose={closeModal2}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"

            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b-1 p-3 text-[13px] xl:text-[15px] '>Create Meeting</h2>
                <button onClick={closeModal2} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className=''>
                    <div className='modal-field p-[10px] border border-t'>
                        <label className='text-[13px] xl:text-[14px] font-medium'>Title</label><br />
                        <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' placeholder='Please Enter Title' /><br />
                        {/* <label className='text-[13px] xl:text-[14px] font-medium'>Shift Start Time</label><br /> */}

                        {/* <label className='text-[13px] xl:text-[14px] font-medium'>Shift End Time</label><br /> */}



                        <label className='text-[13px] xl:text-[14px] font-medium'>Start At</label><br />
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)} // Updates the date
                            placeholderText="Start Date " // Placeholder for input
                            dateFormat="yyyy/MM/dd" // Format of the date
                            isClearable // Allows the user to clear the date
                            className='border border-1 rounded-md p-[5px] mt-1 w-full  mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'
                        />

                        <label className='text-[13px] xl:text-[14px] font-medium'>Start Time</label><br />
                        <select onClick={openModal3} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                            <option>Please Select Time</option>
                        </select><br />


                        <label className='text-[13px] xl:text-[14px] font-medium'>End At</label><br />
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)} // Updates the date
                            placeholderText="Start Date " // Placeholder for input
                            dateFormat="yyyy/MM/dd" // Format of the date
                            isClearable // Allows the user to clear the date
                            className='border border-1 rounded-md p-[5px] mt-1 w-full  mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'
                        />

                        <label className='text-[13px] xl:text-[14px] font-medium'>End Time</label><br />
                        <select onClick={openModal3} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                            <option>Please Select Time</option>
                        </select><br />

                        <label className='text-[13px] xl:text-[14px] font-medium'>Select Client</label><br />


                        <div className="w-full relative">
                            {/* Dropdown Button */}
                            <button
                                onClick={toggleDropdown}
                                className="border border-1 rounded-md p-[5px] w-full  text-left focus:outline-none text-[#000] placeholder:font-normal text-[14px]"
                            >
                                {selectedClients.length > 0
                                    ? ` ${selectedClients.join(', ')}`
                                    : 'Choose Clients'}
                            </button>

                            {/* Dropdown List */}
                            {dropdownOpen && (
                                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                    <div className="p-2">
                                        {clients.map((client, index) => (
                                            <div key={index} className="flex items-center space-x-2 mb-1">
                                                <input
                                                    type="checkbox"
                                                    value={client}
                                                    id={`client-${index}`}
                                                    onChange={handleCheckboxChange}
                                                    checked={selectedClients.includes(client)}
                                                />
                                                <label className='w-full flex' htmlFor={`client-${index}`}>{client}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Display Selected Clients as Badges */}
                            <div className="flex flex-wrap mt-3 space-x-2">
                                {selectedClients.map((client, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-1 bg-[#8A25B0] text-white px-2 py-1 rounded-full text-[14px] mb-2"
                                    >
                                        <span>{client}</span>
                                        {/* "X" Button to Remove Client Badge */}
                                        <button
                                            className="text-red-500 font-bold ml-2"
                                            onClick={() => handleBadgeRemove1(client)}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <label className='text-[13px] xl:text-[14px] font-medium'>Select Users</label><br />
                        <div className="w-full relative">
                            {/* Dropdown Button */}
                            <button
                                onClick={toggleDropdownVisibility}
                                className="border border-1 rounded-md p-[5px] w-full text-left focus:outline-none text-[#000] placeholder:font-normal text-[14px]"
                            >
                                {chosenUsers.length > 0
                                    ? ` ${chosenUsers.join(', ')}`
                                    : 'Choose Users'}
                            </button>

                            {/* Dropdown List */}
                            {isDropdownOpen && ( // Changed to isDropdownOpen
                                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                    <div className="p-2">
                                        {usersList.map((user, index) => ( // Changed users to usersList
                                            <div key={index} className="flex items-center space-x-2 mb-1">
                                                <input
                                                    type="checkbox"
                                                    value={user} // Kept variable name as user
                                                    id={`user-${index}`} // Updated id for accessibility
                                                    onChange={handleUserSelectionChange} // Changed to new function name
                                                    checked={chosenUsers.includes(user)} // Checked if already selected
                                                />
                                                <label htmlFor={`user-${index}`}>{user}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Display Selected Users as Badges */}
                            <div className="flex flex-wrap mt-3 space-x-2">
                                {chosenUsers.map((user, index) => ( // Changed to chosenUsers
                                    <div
                                        key={index}
                                        className="flex items-center space-x-1 bg-[#8A25B0] text-white px-2 py-1 rounded-full text-[14px] mb-2"
                                    >
                                        <span>{user}</span>
                                        {/* "X" Button to Remove User Badge */}
                                        <button
                                            className="text-red-500 font-bold ml-2"
                                            onClick={() => removeUserBadge(user)} // Changed to new function name
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
                        <button className='first-btn' onClick={closeModal2}>Cancel</button>
                        <button className='second-btn'>Create</button>
                    </div>
                </div>
            </Modal>


            <Modal
                isOpen={modalIsOpen16}
                onAfterOpen={afterOpenModal16}
                onRequestClose={closeModal16}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"

            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b-1 p-3 text-[13px] xl:text-[15px] '>Update Meeting</h2>
                <button onClick={closeModal16} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className=''>
                    <div className='modal-field p-[10px] border border-t'>
                        <label className='text-[13px] xl:text-[14px] font-medium'>Title</label><br />
                        <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' placeholder='Please Enter Title' /><br />
                        {/* <label className='text-[13px] xl:text-[14px] font-medium'>Shift Start Time</label><br /> */}

                        {/* <label className='text-[13px] xl:text-[14px] font-medium'>Shift End Time</label><br /> */}



                        <label className='text-[13px] xl:text-[14px] font-medium'>Start At</label><br />
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)} // Updates the date
                            placeholderText="Start Date " // Placeholder for input
                            dateFormat="yyyy/MM/dd" // Format of the date
                            isClearable // Allows the user to clear the date
                            className='border border-1 rounded-md p-[5px] mt-1 w-full  mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'
                        />

                        <label className='text-[13px] xl:text-[14px] font-medium'>Start Time</label><br />
                        <select onClick={openModal3} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                            <option>Please Select Time</option>
                        </select><br />


                        <label className='text-[13px] xl:text-[14px] font-medium'>End At</label><br />
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)} // Updates the date
                            placeholderText="Start Date " // Placeholder for input
                            dateFormat="yyyy/MM/dd" // Format of the date
                            isClearable // Allows the user to clear the date
                            className='border border-1 rounded-md p-[5px] mt-1 w-full  mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'
                        />

                        <label className='text-[13px] xl:text-[14px] font-medium'>End Time</label><br />
                        <select onClick={openModal3} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                            <option>Please Select Time</option>
                        </select><br />

                        <label className='text-[13px] xl:text-[14px] font-medium'>Select Client</label><br />


                        <div className="w-full relative">
                            {/* Dropdown Button */}
                            <button
                                onClick={toggleDropdown}
                                className="border border-1 rounded-md p-[5px] w-full  text-left focus:outline-none text-[#000] placeholder:font-normal text-[14px]"
                            >
                                {selectedClients.length > 0
                                    ? ` ${selectedClients.join(', ')}`
                                    : 'Choose Clients'}
                            </button>

                            {/* Dropdown List */}
                            {dropdownOpen && (
                                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                    <div className="p-2">
                                        {clients.map((client, index) => (
                                            <div key={index} className="flex items-center space-x-2 mb-1">
                                                <input
                                                    type="checkbox"
                                                    value={client}
                                                    id={`client-${index}`}
                                                    onChange={handleCheckboxChange}
                                                    checked={selectedClients.includes(client)}
                                                />
                                                <label className='w-full flex' htmlFor={`client-${index}`}>{client}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Display Selected Clients as Badges */}
                            <div className="flex flex-wrap mt-3 space-x-2">
                                {selectedClients.map((client, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-1 bg-[#8A25B0] text-white px-2 py-1 rounded-full text-[14px] mb-2"
                                    >
                                        <span>{client}</span>
                                        {/* "X" Button to Remove Client Badge */}
                                        <button
                                            className="text-red-500 font-bold ml-2"
                                            onClick={() => handleBadgeRemove1(client)}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <label className='text-[13px] xl:text-[14px] font-medium'>Select Users</label><br />
                        <div className="w-full relative">
                            {/* Dropdown Button */}
                            <button
                                onClick={toggleDropdownVisibility}
                                className="border border-1 rounded-md p-[5px] w-full text-left focus:outline-none text-[#000] placeholder:font-normal text-[14px]"
                            >
                                {chosenUsers.length > 0
                                    ? ` ${chosenUsers.join(', ')}`
                                    : 'Choose Users'}
                            </button>

                            {/* Dropdown List */}
                            {isDropdownOpen && ( // Changed to isDropdownOpen
                                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                    <div className="p-2">
                                        {usersList.map((user, index) => ( // Changed users to usersList
                                            <div key={index} className="flex items-center space-x-2 mb-1">
                                                <input
                                                    type="checkbox"
                                                    value={user} // Kept variable name as user
                                                    id={`user-${index}`} // Updated id for accessibility
                                                    onChange={handleUserSelectionChange} // Changed to new function name
                                                    checked={chosenUsers.includes(user)} // Checked if already selected
                                                />
                                                <label htmlFor={`user-${index}`}>{user}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Display Selected Users as Badges */}
                            <div className="flex flex-wrap mt-3 space-x-2">
                                {chosenUsers.map((user, index) => ( // Changed to chosenUsers
                                    <div
                                        key={index}
                                        className="flex items-center space-x-1 bg-[#8A25B0] text-white px-2 py-1 rounded-full text-[14px] mb-2"
                                    >
                                        <span>{user}</span>
                                        {/* "X" Button to Remove User Badge */}
                                        <button
                                            className="text-red-500 font-bold ml-2"
                                            onClick={() => removeUserBadge(user)} // Changed to new function name
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
                        <button className='first-btn' onClick={closeModal16}>Cancel</button>
                        <button className='second-btn'>Create</button>
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
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"

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

        </div>
    )
}

export default Meeting