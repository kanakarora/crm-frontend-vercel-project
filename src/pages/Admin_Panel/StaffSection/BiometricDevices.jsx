import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';

const BiometricDevices = () => {

    let subtitle;


    {/* // when click add biometric devices */ }

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

    {/* // when click add biometric devices */ }


    return (

        <div>
            <div className='biometric flex justify-between items-center'>
                <h2 className='font-medium'>Biometric Devices</h2>
                <button className='second-btn flex items-center' onClick={openModal6}><AddIcon className='add-icon' />Add Biometric Devices</button>
            </div>




            {/* // when click add biometric devices */}
            <Modal
                isOpen={modalIsOpen6}
                onAfterOpen={afterOpenModal6}
                onRequestClose={closeModal6}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b p-3    text-[14px]'>Add Biometric Device</h2>
                <button onClick={closeModal6} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className='p-3'>
                    <label className='text-[13px] xl:text-[14px] font-medium'>Device Name</label><br/>
                    <input type='text' placeholder='Device Name' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'/><br/>
                    <label className='text-[13px] xl:text-[14px] font-medium'>Serial Number</label><br/>
                    <input type='text' placeholder='Serial Number' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'/>


                    <div class="pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3">
                                <button className="first-btn" onClick={closeModal6}>Cancel</button>
                                <button className="second-btn">Add Device</button>
                            </div>
                    
                </div>
            </Modal>
        </div>
    )
}

export default BiometricDevices