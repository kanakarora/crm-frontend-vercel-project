import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import selfie from '../../../Assets/Images/selfie-img.svg'
import qr from '../../../Assets/Images/qr-code.svg'
import gps from '../../../Assets/Images/gps.svg'
import biometric from '../../../Assets/Images/biometric.svg'
import rightimg from '../../../Assets/Images/right.svg'
import { useGlobalContext } from '../../../Context/GlobalContext';


const EditAttendanceDetail = () => {

    const { baseUrl, selectedStaff } = useGlobalContext();
    const [toggleSelfieAttendance, setToggleSelfieAttendance] = useState(selectedStaff?.AttendenceMode?.selfie_attendance || false);
    const [toggleAllowPunchInMobile, setToggleAllowPunchInMobile] = useState(selectedStaff?.AttendenceMode?.allow_punch_in_for_mobile || false);
    const [toggleQRAttendance, setToggleQRAttendance] = useState(selectedStaff?.AttendenceMode?.qr_attendance || false);
    const [toggleGPSAttendance, setToggleGPSAttendance] = useState(selectedStaff?.AttendenceMode?.gps_attendance || false);
    const [markLocation, setMarkLocation] = useState(selectedStaff?.AttendenceMode?.mark_attendance || "Office");
    const [weekOff, setWeekOff] = useState(false)
    const [shiftName, setShiftName] = useState("");
    const [shiftStartTime, setShiftStartTime] = useState("");
    const [shiftEndTime, setShiftEndTime] = useState("");
    const [punchInType, setPunchInType] = useState("");
    const [punchOutType, setPunchOutType] = useState("");
    const [allowPunchInHours, setAllowPunchInHours] = useState("");
    const [allowPunchInMinutes, setAllowPunchInMinutes] = useState("");
    const [allowPunchOutHours, setAllowPunchOutHours] = useState("");
    const [allowPunchOutMinutes, setAllowPunchOutMinutes] = useState("");
    const [shifts, setShifts] = useState([]);
    const [daysChecked, setDaysChecked] = useState({
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: false,
        Sun: false,
    });
    // State to track selected shifts for each day
    const [selectedShifts, setSelectedShifts] = useState({
        Mon: '',
        Tue: '',
        Wed: '',
        Thu: '',
        Fri: '',
        Sat: '',
        Sun: '',
    });

    // Fetch available shifts from backend and store them in `shifts`
    useEffect(() => {
        fetchShifts();
    }, []);

    // Fetch available shifts from backend
    async function fetchShifts() {
        try {
            const response = await fetch(baseUrl + "shift/");
            const data = await response.json();
            if (data && data.shifts) {
                setShifts(data.shifts); // Ensure data is in the expected format
            } else {
                console.error("No shifts found in response", data);
                setShifts([]); // Handle case where no shifts are returned
            }
        } catch (error) {
            console.error("Error fetching shifts", error);
            setShifts([]); // In case of an error, set an empty array to avoid undefined issues
        } // Assuming data contains a `shifts` array with `id` and `name`
    }

    // Handle checkbox changes for week off selection
    const handleCheckboxChange = (day) => {
        setDaysChecked((prev) => ({
            ...prev,
            [day]: !prev[day],
        }));
    };


    // Handle shift select changes
    const handleShiftChange = (day, shiftId) => {
        setSelectedShifts((prev) => ({
            ...prev,
            [day]: shiftId, // Save the selected shiftId for the day
        }));
    };

    async function createNewShift() {
        const response = await fetch(baseUrl + "shift/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ shiftName: shiftName, shiftStartTime: shiftStartTime, shiftEndTime: shiftEndTime, punchInType: punchInType, punchOutType: punchOutType, allowPunchInHours: Number(allowPunchInHours), allowPunchInMinutes: Number(allowPunchInMinutes), allowPunchOutHours: Number(allowPunchOutHours), allowPunchOutMinutes: Number(allowPunchOutMinutes) })
        });

        console.log(response);

        if (response.status === 201) {
            const newShift = await response.json()
            console.log(newShift);

            // After creating the shift, fetch shifts again to update the dropdown
            fetchShifts();

            // Optionally, directly set the new shift in the corresponding `selectedShifts` state
            setSelectedShifts((prev) => ({
                ...prev,
                [newShift.day]: newShift.id, // Set the newly created shift ID for the selected day
            }));

            closeModal();
            alert("Shift successfully created");
        } else {
            alert("An error occurred");
        }
    }

    // Submit the fixed shifts
    async function submitFixedShift() {
        // Filter out the days where weekOff is checked
        const weekOffDays = Object.keys(daysChecked).filter((day) => daysChecked[day]);

        // Loop through the selected weekOff days
        for (const day of weekOffDays) {
            const shiftId = selectedShifts[day]; // Get the selected shift ID for the current day

            const response = await fetch(baseUrl + "shift/createFixedShift", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    day, // The current day (e.g., 'Mon', 'Tue')
                    weekOff: daysChecked[day], // Whether it's marked as a week off
                    staffId: selectedStaff.id, // Selected staff member's ID
                    shiftId: shiftId || null, // Pass the correct shift ID or null if no shift is selected
                }),
            });

            // Handle the response for each day
            if (response.status === 201) {
                const result = await response.json();
                console.log(`${day} shift created successfully:`, result);
            } else {
                console.error(`An error occurred while saving the shift for ${day}`);
                alert(`An error occurred while saving the shift for ${day}`);
            }
        }

        // Close the modal after all requests are completed
        closeModal();
        alert("Fixed Shift successfully created for the selected days.");
    }

    async function submitFlexibleShift() {
        const response = await fetch(baseUrl + "shift/createFlexibleShift", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ weekOff: weekOff, staffId: selectedStaff.id })
        });

        console.log(response);

        if (response.status === 201) {
            const result = await response.json()
            console.log(result);
            closeModal();
            alert("Flexible Shift successfully created");
        } else {
            alert("An error occurred");
        }
    }

    // console.log(markLocation, toggleAllowPunchInMobile, toggleGPSAttendance, toggleQRAttendance, toggleSelfieAttendance);
    // console.log(selectedStaff.AttendenceMode);
    async function updateAttendanceMode(e) {
        e.preventDefault();
        const data = {
            staff_ids: [
                selectedStaff.id
            ],
            attendence_mode: {
                "selfie_attendance": toggleSelfieAttendance,
                "qr_attendance": toggleQRAttendance,
                "gps_attendance": toggleGPSAttendance,
                "mark_attendance": markLocation,
                "allow_punch_in_for_mobile": toggleAllowPunchInMobile
            }
        };


        const response = await fetch(baseUrl + "attendance/mode/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data) // send the formatted data
        });
        const result = await response.json();
        if (response.status === 200) {
            console.log(result);
            openModal6();
        } else {
            console.log(result);
            alert("An error occurred during update attendance mode staff");
        }
    }
    let subtitle;
    // update work timing
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
    // update work timing


    //update onclick shift modal
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
    // update onclick shift modal


    // when onclick add shift
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

    // when onclick add shift

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

    return (
        <div className='w-full p-[20px] pt-[100px] xl:p-[40px] relative xl:pt-[100px]    xl:pl-[320px] flex flex-col '>
            <h2 className='bg-[#f6f9fa] pt-[10px] pb-[10px] pl-[14px] rounded-md font-normal shadow'>Attendance Details</h2>

            <div className='mt-5'>
                <button type="button" onClick={openModal} className=" shadow bg-white w-full mb-4  text-start text-[14px]  text-[#000] p-4 rounded-md " id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Update Work Timings

                </button>

                <button type="button" onClick={openModal5} className=" shadow bg-white w-full mb-4  text-start  text-[14px] text-[#000] p-4 rounded-md" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Update Attendance Modes

                </button>
                <button type="button" onClick={openModal7} className="  shadow bg-white w-full mb-4  text-start  text-[14px] text-[#000] p-4 rounded-md" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Update Automation Rules

                </button>

                <div className='  shadow bg-white w-full mb-4  text-start text-[14px]  text-[#000] p-4 rounded-md flex justify-between'>
                    <div className='flex gap-[12px] items-center '>
                        <h4 className='m-0'>Staff Can View Own Attendance</h4>
                    </div>
                    <div className="flex items-center  ">
                        <div
                            onClick={handleToggle}
                            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isOn ? 'bg-[#27004a]' : 'bg-gray-300'
                                }`}
                        >
                            <div
                                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${isOn ? 'translate-x-6' : 'translate-x-0'
                                    }`}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>





            {/* update work timing */}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Bulk Update Work Timings for All Staff</h2>
                <button onClick={closeModal} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <Tabs className="p-[s0px] fixed-tab-section">
                    <TabList className="flex justify-around items-center mt-3 m-2 xl:m-2 mb-2 bg-[#F4F5F9] pt-[10px] pb-[10px] rounded-md">
                        <label className='text-[14px]'>Select Type</label>
                        <Tab className="cursor-pointer flex items-center gap-[10px]">
                            <input type="radio" id="fixed" name='fixed' className='rounded-full ' checked />
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
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                                        <tr className='' key={day}>
                                            <td className='text-center text-[12px] font-normal'>{day}</td>
                                            <td className='p-3 text-center'>
                                                <input type="checkbox" checked={daysChecked[day]} onChange={() => handleCheckboxChange(day)} />
                                            </td>
                                            <td className='pr-5'>
                                                <select onClick={openModal1} value={selectedShifts[day]} onChange={(e) => handleShiftChange(day, e.target.value)} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                                    <option value="">Select Shift</option>
                                                    {shifts && shifts.length > 0 ? (
                                                    shifts.map((shift) => (
                                                        <option key={shift.id} value={shift.id}>
                                                            {shift.name} {/* Show shift name in the dropdown */}
                                                        </option>
                                                    )) ):<option disabled>No shifts available</option> }
                                                </select>
                                            </td>
                                        </tr>
                                        // <tr className=''>
                                        //     <td className='text-center text-[12px] font-normal'>Tue</td>
                                        //     <td className='p-3 text-center'>
                                        //         <input type="checkbox" value="Tue" />
                                        //     </td>
                                        //     <td className='pr-5'>
                                        //         <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                        //             <option>Select Shift</option>
                                        //         </select>
                                        //     </td>
                                        // </tr>
                                        // <tr className=''>
                                        //     <td className='text-center text-[12px] font-normal'>Wed</td>
                                        //     <td className='p-3 text-center'>
                                        //         <input type="checkbox" value="Wed" onChange={(e) => setWeekOff(e.target.checked ? e.target.value : null)} />
                                        //     </td>
                                        //     <td className='pr-5'>
                                        //         <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                        //             <option>Select Shift</option>
                                        //         </select>
                                        //     </td>
                                        // </tr>
                                        // <tr className=''>
                                        //     <td className='text-center text-[12px] font-normal'>Thu</td>
                                        //     <td className='p-3 text-center'>
                                        //         <input type="checkbox" value="Thu" onChange={(e) => setWeekOff(e.target.checked ? e.target.value : null)} />
                                        //     </td>
                                        //     <td className='pr-5'>
                                        //         <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                        //             <option>Select Shift</option>
                                        //         </select>
                                        //     </td>
                                        // </tr>
                                        // <tr className=''>
                                        //     <td className='text-center text-[12px] font-normal'>Fri</td>
                                        //     <td className='p-3 text-center'>
                                        //         <input type="checkbox" value="Fri" onChange={(e) => setWeekOff(e.target.checked ? e.target.value : null)} />
                                        //     </td>
                                        //     <td className='pr-5'>
                                        //         <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                        //             <option>Select Shift</option>
                                        //         </select>
                                        //     </td>
                                        // </tr>

                                        // <tr className=''>
                                        //     <td className='text-center text-[12px] font-normal'>Sat</td>
                                        //     <td className='p-3 text-center'>
                                        //         <input type="checkbox" value="Sat" onChange={(e) => setWeekOff(e.target.checked ? e.target.value : null)} />
                                        //     </td>
                                        //     <td className='pr-5'>
                                        //         <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                        //             <option>Select Shift</option>
                                        //         </select>
                                        //     </td>
                                        // </tr>

                                        // <tr className=''>
                                        //     <td className='text-center text-[12px] font-normal'>Sun</td>
                                        //     <td className='p-3 text-center'>
                                        //         <input type="checkbox" value="Sun" onChange={(e) => setWeekOff(e.target.checked ? e.target.value : null)} />
                                        //     </td>
                                        //     <td className='pr-5'>
                                        //         <select onClick={openModal1} className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                        //             <option>Select Shift</option>
                                        //         </select>
                                        //     </td>
                                        // </tr>



                                    ))}
                                </tbody>
                            </table>

                            <div class="pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3">
                                <button className="first-btn" onClick={closeModal}>Cancel</button><button onClick={submitFixedShift} className="second-btn">Confirm</button>
                            </div>
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className='first-panel'>
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
                            <div class="pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3">
                                <button class="first-btn" onClick={closeModal}>Cancel</button>
                                <button class="second-btn" onClick={submitFlexibleShift}>Update Work Timings for All Staff</button></div>
                        </div>
                    </TabPanel>

                </Tabs>
            </Modal>
            {/* update work timing */}



            <Modal
                isOpen={modalIsOpen1}
                onAfterOpen={afterOpenModal1}
                onRequestClose={closeModal1}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"

            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b-1 p-3 text-[13px] xl:text-[15px] '>Monday - Shifts</h2>
                <button onClick={closeModal1} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div>
                    <h4 className='p-4 pl-3 border border-b border-l-0 border-r-0 text-[13px] xl:text-[15px]'>No Options Available ....</h4>
                    <Link to="" className='text-[#27004a] p-4 font-medium mt-3 block w-full flex items-center text-[16px] xl:text-[15px]' onClick={openModal2} ><AddIcon /> Add Shift</Link><br />
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
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"

            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b-1 p-3 text-[13px] xl:text-[15px] '>Add New Shifts</h2>
                <button onClick={closeModal2} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className=''>
                    <div className='modal-field p-[10px] border border-t'>
                        <label className='text-[13px] xl:text-[14px] font-medium'>Shift Name</label><br />
                        <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' value={shiftName} onChange={(e) => setShiftName(e.target.value)} /><br />
                        <label className='text-[13px] xl:text-[14px] font-medium' >Shift Start Time</label><br />
                        {/* <select onClick={openModal3} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                            <option>Please Select Time</option>
                        </select> */}
                        <input className="border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]" type="time" id="start-time" name="start-time" value={shiftStartTime} onChange={(e) => setShiftStartTime(e.target.value)} />
                        <br />
                        <label className='text-[13px] xl:text-[14px] font-medium'>Can Punch In</label><br />
                        <div className='flex  justify-between'>


                            <Tabs className="w-full">
                                <TabList className="w-full flex justify-between w-full gap-[20px]">
                                    <Tab className="w-[48%]">
                                        <div className='border border-1 cursor-pointer rounded-md w-full flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                            <input type="radio" id="anytime" name="select-timing" onChange={(e) => setPunchInType('ANYTIME')} />
                                            <label for="anytime" className='text-[13px] xl:text-[14px] font-medium  cursor-pointer' >Anytime</label><br />
                                        </div>

                                    </Tab>
                                    <Tab className="w-[48%]">
                                        <div className='border border-1 cursor-pointer rounded-md w-full flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                            <input type="radio" id="limit" name="select-timing" onChange={(e) => setPunchInType('ADDLIMIT')} />
                                            <label for="limit" className='text-[13px] xl:text-[14px] font-medium  cursor-pointer' >Add Limit</label><br />
                                        </div>
                                    </Tab>
                                </TabList>

                                <TabPanel></TabPanel>

                                <TabPanel>
                                    <label className='text-[13px] xl:text-[14px] font-medium'>Allow Punch In</label><br />
                                    <div className='flex gap-[3px] xl:gap-[30px] flex-col xl:flex-row lg:flex-row'>
                                        <div className='flex items-center gap-2'>
                                            <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[40px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' value={allowPunchInHours} onChange={(e) => setAllowPunchInHours(e.target.value)} />
                                            <label for="limit" className='text-[13px] xl:text-[14px] font-medium  cursor-pointer'>Hours</label><br />

                                        </div>


                                        <div className='flex items-center gap-2'>
                                            <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[100px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' value={allowPunchInMinutes} onChange={(e) => setAllowPunchInMinutes(e.target.value)} />
                                            <label for="limit" className='text-[13px] flex whitespace-nowrap xl:text-[14px] font-medium  cursor-pointer'>Minutes <span className='pl-[10px] xl:pl-[15px]'>Before Shift Start Time</span></label><br />

                                        </div>
                                    </div>

                                </TabPanel>

                            </Tabs>



                        </div>


                        <label className='text-[13px] xl:text-[14px] font-medium'>Shift End Time</label><br />

                        {/* <select onClick={openModal3}  className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                            <option>Please Select Time</option>
                        </select> */}
                        <input className="border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]" type="time" id="start-time" name="start-time" value={shiftEndTime} onChange={(e) => setShiftEndTime(e.target.value)} />

                        <br />

                        <label className='text-[13px] xl:text-[14px] font-medium'>Can Punch Out</label><br />
                        <div className=''>


                            <Tabs className="w-full">
                                <TabList className="w-full flex justify-between w-full gap-[20px]">
                                    <Tab className="w-[48%]">
                                        <div className='border border-1 cursor-pointer rounded-md w-[100%] flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                            <input type="radio" id="anytime1" name="punching-timing" onChange={(e) => setPunchOutType('ANYTIME')} />
                                            <label className='text-[13px] xl:text-[14px] cursor-pointer font-medium' for="anytime1" >Anytime</label><br />
                                        </div>


                                    </Tab>
                                    <Tab className="w-[48%]">
                                        <div className='border border-1 cursor-pointer rounded-md w-[100%] flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                            <input type="radio" id="limit1" name="punching-timing" onChange={(e) => setPunchOutType('ADDLIMIT')} />
                                            <label className='text-[13px] xl:text-[14px]  cursor-pointer font-medium' for="limit1" >Add Limit</label><br />
                                        </div>
                                    </Tab>
                                </TabList>

                                <TabPanel>

                                </TabPanel>
                                <TabPanel>
                                    <label className='text-[14px] font-medium'>Allow Punch Out</label><br />
                                    <div className='flex gap-[3px] xl:gap-[30px] flex-col xl:flex-row lg:flex-row'>
                                        <div className='flex items-center gap-2'>
                                            <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[40px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' value={allowPunchOutHours} onChange={(e) => setAllowPunchOutHours(e.target.value)} />
                                            <label for="limit" className='text-[13px] xl:text-[14px] font-medium  cursor-pointer'>Hours</label><br />

                                        </div>


                                        <div className='flex items-center gap-2'>
                                            <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[100px] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' value={allowPunchOutMinutes} onChange={(e) => setAllowPunchOutMinutes(e.target.value)} />
                                            <label for="limit" className='text-[13px] flex whitespace-nowrap xl:text-[14px] font-medium  cursor-pointer' >Minutes <span className='pl-[10px] xl:pl-[15px]'>Before Shift Start Time</span></label><br />

                                        </div>
                                    </div>

                                </TabPanel>
                            </Tabs>








                        </div>
                    </div>
                    <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
                        <button className='first-btn' onClick={closeModal2}>Cancel</button>
                        <button className='second-btn' onClick={createNewShift}>Confirm</button>
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


            {/* onclick update attendance modal */}
            <Modal
                isOpen={modalIsOpen5}
                onAfterOpen={afterOpenModal5}
                onRequestClose={closeModal5}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3   border-[#000] text-[14px]'>Bulk Update Work Timings for All Staff</h2>
                <button onClick={closeModal5} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2'>
                    <div className='flex justify-between items-center p-[10px] pl-[20px] text-[13px] xl:text-[14px] bg-[#F0F6FE]'>
                        <h4 className='m-0'>Allow punch in from Staff App</h4>
                        <div className="flex items-center  ">
                            <div
                                onClick={() => setToggleAllowPunchInMobile(!toggleAllowPunchInMobile)}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${toggleAllowPunchInMobile ? 'bg-[#27004a]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${toggleAllowPunchInMobile ? 'translate-x-6' : 'translate-x-0'
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
                                onClick={() => setToggleSelfieAttendance(!toggleSelfieAttendance)}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${toggleSelfieAttendance ? 'bg-[#27004a]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${toggleSelfieAttendance ? 'translate-x-6' : 'translate-x-0'
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
                                onClick={() => setToggleQRAttendance(!toggleQRAttendance)}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${toggleQRAttendance ? 'bg-[#27004a]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${toggleQRAttendance ? 'translate-x-6' : 'translate-x-0'
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
                                onClick={() => setToggleGPSAttendance(!toggleGPSAttendance)}
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${toggleGPSAttendance ? 'bg-[#27004a]' : 'bg-gray-300'
                                    }`}
                            >
                                <div
                                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${toggleGPSAttendance ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className='p-4 pl-5 border border-b border-l-0 border-r-0 border-t-0'>
                        <label className='text-[13px] xl:text-[14px] font-medium'>Mark Attendance From</label>

                        <div className='flex gap-[12px] pt-3'>
                            <div className='flex items-center gap-[10px] border pl-3 pt-2 pb-2 pr-3 rounded-md'>
                                <input onClick={(e) => setMarkLocation(e.target.value)}
                                    type="radio" id="foroffice" name="office" value="Office" />
                                <label for="foroffice" className='text-[13px] xl:text-[14px]'>Office</label><br />
                            </div>
                            <div className='flex items-center gap-[10px] border pl-3 pt-2 pb-2 pr-3 rounded-md'>
                                <input onClick={(e) => setMarkLocation(e.target.value)}
                                    type="radio" id="anywhere" name="office" value="Anywhere" />
                                <label for="anywhere" className='text-[13px] xl:text-[14px]'>Anywhere</label><br />
                            </div>
                        </div>
                    </div>


                    <div className='p-4 pl-5 border border-b border-l-0 border-r-0 border-t-0 flex gap-[14px] items-center'>
                        <img src={biometric} />
                        <div>
                            <label className='text-[13px] xl:text-[14px] font-medium'>Biometric Devices</label><br />
                            <Link to="/biometric" className='text-[13px] xl:text-[14px] text-[#27004a] underline decoration-1'>Manage biometric devices</Link>
                        </div>

                    </div>

                    <div className="pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3">
                        <button className="first-btn" onClick={(e) => {
                            closeModal5();
                        }}>Cancel</button>
                        <button className="second-btn" onClick={(e) => {
                            updateAttendanceMode(e);
                        }}>Update Attendance Modes for All Staff</button>
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
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
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
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
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
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isOn ? 'bg-[#27004a]' : 'bg-gray-300'
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
                                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isOn ? 'bg-[#27004a]' : 'bg-gray-300'
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
                            <button className='first-btn' onClick={openModal16}>Not Set</button>
                        </div>
                    </div>

                    <div className='flex justify-between items-center border-t-0 p-[10px] border border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={gps} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>Mandatory half day hours</h4>
                        </div>
                        <div className="flex items-center  ">
                            <button className='first-btn' onClick={openModal17}>Not Set</button>
                        </div>
                    </div>

                    <div className='flex justify-between items-center border-t-0 p-[10px] border border-b border-l-0 border-r-0 pl-[20px] text-[13px] xl:text-[14px] '>
                        <div className='flex gap-[12px] items-center '>
                            <img src={gps} className='h-[25px] w-[25px]' />
                            <h4 className='m-0'>Mandatory full day hours</h4>
                        </div>
                        <div className="flex items-center  ">
                            <button className='first-btn' onClick={openModal18}>Not Set</button>
                        </div>
                    </div>



                    <div className="pr-[10px] pb-3 flex gap-[10px] justify-end  pt-3">
                        <button className="first-btn" onClick={closeModal7}>Cancel</button>
                        <button className="second-btn" onClick={openModal8} >Update Automation Rules for All Staff</button>
                    </div>

                </div>
            </Modal>

            {/* onclick update automation rules */}

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

            {/* onclick autohalf day minutes  button */}

            <Modal
                isOpen={modalIsOpen16}
                onAfterOpen={afterOpenModal16}
                onRequestClose={closeModal16}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
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
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
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
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
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

        </div>
    )
}

export default EditAttendanceDetail