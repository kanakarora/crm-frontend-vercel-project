import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useGlobalContext } from '../../../Context/GlobalContext';


const EditPenalty = () => {

    const [fineType, setFineType] = useState("");
    const [gracePeriodMins, setGracePeriodMins] = useState("");
    const [fineAmountMins, setFineAmountMins] = useState("");
    const [waiveOffDays, setWaiveOffDays] = useState("");

    const [lateFineType, setLateFineType] = useState("");
    const [lateGracePeriodMins, setLateGracePeriodMins] = useState("");
    const [lateFineAmountMins, setLateFineAmountMins] = useState("");
    const [lateWaiveOffDays, setLateWaiveOffDays] = useState("");

    const [overGracePeriodMins, setOverGracePeriodMins] = useState("");
    const [extraHourPay, setExtraHourPay] = useState("");
    const [publicHolidayPay, setPublicHolidayPay] = useState("");
    const [weekOffPay, setWeekOffPay] = useState("");

    const { baseUrl, selectedStaff } = useGlobalContext();


    async function submitEarlyLeavePolicy() {
        const response = await fetch(baseUrl + "policy/early-leave", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fineType: fineType, gracePeriodMins: Number(gracePeriodMins), fineAmountMins: Number(fineAmountMins), waiveOffDays: Number(waiveOffDays), staffId: selectedStaff.id})
        });

        console.log(response);

        if (response.status === 201) {
            const result = await response.json()
            console.log(result);
            closeModal12();
            alert("Early Leave Policy successfully saved");
        } else {
            alert("An error occurred");
        }
    }

    async function submitLateComingPolicy() {
        const response = await fetch(baseUrl + "policy/late-coming", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fineType: lateFineType, gracePeriodMins: Number(lateGracePeriodMins), fineAmountMins: Number(lateFineAmountMins), waiveOffDays: Number(lateWaiveOffDays), staffId: selectedStaff.id})
        });

        console.log(response);

        if (response.status === 201) {
            const result = await response.json()
            console.log(result);
            closeModal12();
            alert("Late Coming Policy successfully saved");
        } else {
            alert("An error occurred");
        }
    }

    async function submitOvertimePolicy() {
        const response = await fetch(baseUrl + "policy/overtime", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ gracePeriodMins: Number(overGracePeriodMins), extraHoursPay: Number(extraHourPay), publicHolidayPay: Number(publicHolidayPay), weekOffPay: Number(weekOffPay), staffId: selectedStaff.id})
        });

        console.log(response);

        if (response.status === 201) {
            const result = await response.json()
            console.log(result);
            closeModal12();
            alert("Overtime Policy successfully saved");
        } else {
            alert("An error occurred");
        }
    }

    let subtitle;
    // when onclick update staff



    // when on click update leave policiy
    const [modalIsOpen12, setIsOpen12] = React.useState(false);
    function openModal12() {
        setIsOpen12(true);
    }
    function afterOpenModal12() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal12() {
        setIsOpen12(false);
    }
    // when on click update leave policy


    // when on click update leave policiy
    const [modalIsOpen13, setIsOpen13] = React.useState(false);
    function openModal13() {
        setIsOpen13(true);
    }
    function afterOpenModal13() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal13() {
        setIsOpen13(false);
    }
    // when on click update leave policy


    // when on click update leave policiy
    const [modalIsOpen14, setIsOpen14] = React.useState(false);
    function openModal14() {
        setIsOpen14(true);
    }
    function afterOpenModal14() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal14() {
        setIsOpen14(false);
    }
    // when on click update leave policy

    return (
        <div className='w-full p-[20px] pt-[80px] xl:p-[40px] relative xl:pt-[60px]    xl:pl-[320px] flex flex-col '>
            <div className='flex justify-between items-center  w-[100%] p-[20px] xl:pr-0 pr-0  pl-[0] top-0 bg-white'>

                <h3 className='font-medium'>Penalty & Overtime Details

                </h3>
                {/* <button className='second-btn'>Update Details</button> */}
            </div>


            <div className='mt-5'>
                <button className='shadow bg-white w-full mb-4  text-start text-[14px]  text-[#000] p-4 rounded-md ' onClick={openModal12}>Early Leave Policy</button>
                <button className='shadow bg-white w-full mb-4  text-start text-[14px]  text-[#000] p-4 rounded-md ' onClick={openModal13}>Late Coming Policy</button>
                <button className='shadow bg-white w-full mb-4  text-start text-[14px]  text-[#000] p-4 rounded-md ' onClick={openModal14}> Overtime Policy</button>





            </div>







            {/* when onclick leave policies
             */}

            <Modal
                isOpen={modalIsOpen12}
                onAfterOpen={afterOpenModal12}
                onRequestClose={closeModal12}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3     text-[14px]   rounded-t-lg rounded-r-lg rounded-b-none'>Early Leaving Policy</h2>
                <button onClick={closeModal12} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2 pl-3 pr-3 pt-[20px]'>

                    <label className='text-[14px]'>Fine Type</label>
                    <div className=' flex justify-between gap-4'>
                        <div className='flex gap-3 cursor-pointer border border-1 cursor-pointer rounded-md w-full flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px] w-[48%]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                            <input type="radio" id="daily" name="fav_language" checked onChange={(e) => setFineType("DAILY")}/>
                            <label for="daily">Daily</label><br />
                        </div>
                        <div className='flex gap-3 cursor-pointer border border-1 cursor-pointer rounded-md w-full flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px] w-[48%]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                            <input type="radio" id="hourly" name="fav_language" onChange={(e) => setFineType("HOURLY")} />
                            <label for="hourly">Hourly</label><br />
                        </div>
                    </div>

                    <label className='text-[14px]'>Grace Period (mins)
                    </label>
                    <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' placeholder='0' value={gracePeriodMins} onChange={(e) => setGracePeriodMins(e.target.value)}/>
                    <label className='text-[14px]'>Fine Amount (mins)
                    </label>
                    <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' placeholder='0' value={fineAmountMins} onChange={(e) => setFineAmountMins(e.target.value)}/>

                    <label className='text-[14px]'>Waive Off Days
                    </label>
                    <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' placeholder='0' value={waiveOffDays} onChange={(e) => setWaiveOffDays(e.target.value)}/>

                    <div className='text-center pt-4 pb-4'>
                        <button className='second-btn' onClick={submitEarlyLeavePolicy}>Save Early Leave Policy</button>
                    </div>


                </div>
            </Modal>
            {/* when onclick leave policies
             */}




            {/* when onclick leave policies
             */}

            <Modal
                isOpen={modalIsOpen13}
                onAfterOpen={afterOpenModal13}
                onRequestClose={closeModal13}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3     text-[14px]   rounded-t-lg rounded-r-lg rounded-b-none'>Late Coming Policy</h2>
                <button onClick={closeModal13} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2 pl-3 pr-3 pt-[20px]'>

                    <label className='text-[14px]'>Fine Type</label>
                    <div className=' flex justify-between gap-4'>
                        <div className='flex gap-3 cursor-pointer border border-1 cursor-pointer rounded-md w-full flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px] w-[48%]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                            <input type="radio" id="daily" name="fav_language" checked value="daily" onChange={(e) => setLateFineType("DAILY")}/>
                            <label for="daily">Daily</label><br />
                        </div>
                        <div className='flex gap-3 cursor-pointer border border-1 cursor-pointer rounded-md w-full flex items-center gap-[10px] p-[8px] pl-[15px] mt-1 mb-[10px] w-[48%]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                            <input type="radio" id="hourly" name="fav_language" value="hourly" onChange={(e) => setLateFineType("DAILY")}/>
                            <label for="hourly">Hourly</label><br />
                        </div>
                    </div>

                    <label className='text-[14px]'>Grace Period (mins)
                    </label>
                    <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' placeholder='0' value={lateGracePeriodMins} onChange={(e) => setLateGracePeriodMins(e.target.value)}/>
                    <label className='text-[14px]'>Fine Amount (mins)
                    </label>
                    <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' placeholder='0' value={lateFineAmountMins} onChange={(e) => setLateFineAmountMins(e.target.value)}/>

                    <label className='text-[14px]'>Waive Off Days
                    </label>
                    <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' placeholder='0' value={lateWaiveOffDays} onChange={(e) => setLateWaiveOffDays(e.target.value)}/>

                    <div className='text-center pt-4 pb-4'>
                        <button className='second-btn' onClick={submitLateComingPolicy}>Save Late Coming Policy</button>
                    </div>


                </div>
            </Modal>
            {/* when onclick leave policies
             */}

            {/* when onclick leave policies
             */}

            <Modal
                isOpen={modalIsOpen14}
                onAfterOpen={afterOpenModal14}
                onRequestClose={closeModal14}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3     text-[14px]   rounded-t-lg rounded-r-lg rounded-b-none'>Overtime Policy</h2>
                <button onClick={closeModal14} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='pb-2 pl-3 pr-3 pt-[20px]'>



                    <label className='text-[14px]'>Grace Period (mins)
                    </label>
                    <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' placeholder='0' value={overGracePeriodMins} onChange={(e) => setOverGracePeriodMins(e.target.value)}/>
                    <label className='text-[14px]'>Extra Hours Pay
                    </label>
                    <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' placeholder='0' value={extraHourPay} onChange={(e) => setExtraHourPay(e.target.value)}/>

                    <label className='text-[14px]'>Public Holiday Pay
                    </label>
                    <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' placeholder='0' value={publicHolidayPay} onChange={(e) => setPublicHolidayPay(e.target.value)}/>

                    <label className='text-[14px]'>Week Off Pay

                    </label>
                    <input type='number' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' placeholder='0' value={weekOffPay} onChange={(e) => setWeekOffPay(e.target.value)}/>


                    <div className='text-center pt-4 pb-4'>
                        <button className='second-btn' onClick={submitOvertimePolicy}>Save Overtime Policy</button>
                    </div>


                </div>
            </Modal>
            {/* when onclick leave policies
             */}



        </div>
    )
}

export default EditPenalty