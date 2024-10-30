import React,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useGlobalContext } from '../../../Context/GlobalContext';

const CustomDetail = () => {
    let subtitle;
    const {baseUrl,selectedStaff}=useGlobalContext();
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

    const [fieldName,setFieldName]=useState("");
    const [description,setDescription]=useState("");

    async function submitField() {
        const response = await fetch(baseUrl + "custom-details", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({field_name:fieldName, field_value:description,staffId:selectedStaff.id}) // send the formatted data
        });
    
        console.log(response);
    
        if (response.status === 201) {
            const result = await response.json()
            console.log(result);
            alert("Add Custom Field Successfully");
        } else {
            alert("An error occurred");
        }
     }
    

    return (
        <div className='w-full p-[20px] pt-[80px] xl:p-[40px] relative xl:pt-[60px]    xl:pl-[320px] flex flex-col set-z'>
        <div className='flex justify-between items-center  w-[100%] p-[20px] xl:pr-0 pr-0  pl-[0] top-0 bg-white'>

                <h3 className='font-medium'>Custom Details
                </h3>
                <button className='second-btn'>Update Details</button>
            </div>


            <button  onClick={openModal2}  className='text-[14px] flex items-center font-normal'><AddIcon className='bg-[#27004a] text-[10px] text-[#fff] rounded-full mr-3'/>Add Custom Field </button>




            <Modal
                isOpen={modalIsOpen2}
                onAfterOpen={afterOpenModal2}
                onRequestClose={closeModal2}
                // style={customStyles}
                contentLabel="Example Modal"
                className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"

            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b-1 p-3 text-[13px] xl:text-[15px] '>Add Custom Field</h2>
                <button onClick={closeModal2} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                <div className=''>
                    <div className='modal-field field-modal p-[10px] border border-t'>
                        <label className='text-[13px] xl:text-[14px] font-medium'>Custom Field Name
                        </label><br />
                        <input type='text' value={fieldName} onChange={(e)=>{setFieldName(e.target.value)}}  className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' /><br />
                       
                        <label className='text-[13px] xl:text-[14px] font-medium'>Description
                        </label><br />
                        <textarea type='text'  value={description} onChange={(e)=>{setDescription(e.target.value)}}  className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' /><br />
                       
                       
                    </div>
                    <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
                        <button className='first-btn' onClick={closeModal2}>Cancel</button>
                        <button className='second-btn' onClick={submitField}>Add Custom Field </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CustomDetail