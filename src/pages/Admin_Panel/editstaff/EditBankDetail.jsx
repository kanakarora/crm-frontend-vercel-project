import React, { useState } from 'react'
import { useGlobalContext } from '../../../Context/GlobalContext';
import { useParams } from 'react-router';


const PersonalDetail = () => {
    const {id}= useParams();
    console.log(id)

    const {baseUrl,selectedStaff} = useGlobalContext()
    const [isEditable, setIsEditable] = useState(false);
    const [inputValue, setInputValue] = useState(selectedStaff?.BankDetails?.bank_name);

    const [inputValue1, setInputValue1] = useState(selectedStaff?.BankDetails?.ifsc_code);

    const [inputValue2, setInputValue2] = useState("--");

    const [inputValue3, setInputValue3] = useState("--");

    const [inputValue4, setInputValue4] = useState(selectedStaff?.BankDetails?.account_number);

    const [inputValue5, setInputValue5] = useState(selectedStaff?.BankDetails?.branch_name);


    const [isEditable6, setIsEditable6] = useState(false);
    const [inputValue6, setInputValue6] = useState(selectedStaff?.UpiDetails?.UpiId);

    // Function to toggle between editable and readonly mode
    const handleEditClick =async () => {
        if(isEditable){
            const response= await fetch(baseUrl+"bank-details/"+selectedStaff.id, {
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({bank_name:inputValue,account_number:inputValue4,branch_name:inputValue5,ifsc_code:inputValue1})
            })
            if(response.status==201){
                alert("Bank Details Updated Successfully")
            }
            else{
                alert("An Error Accured")
            }



        }
        setIsEditable(!isEditable);
        console.log("bank detials", selectedStaff)
        // Toggle editable state
    };

    const handleEditClick2 = async () => {
        if(isEditable6){
            const response = await fetch(baseUrl+"upi-details",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({
                    staffId:selectedStaff.id,
                    UpiId:inputValue6
                })
            })
            if(response.status == 200){
                alert("UPI Details Added Successfully")
            }
            else{
                alert("Internal Server Error")
            }
        }
        setIsEditable6(!isEditable6);
    }



    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Update the value of input field
    };

    // second input value
    const handleInputChange1 = (e) => {
        setInputValue1(e.target.value); // Update the value of input field
    };
    //   second input value

    // third input value
    const handleInputChange2 = (e) => {
        setInputValue2(e.target.value); // Update the value of input field
    };

    // third input value

    // found input value
    const handleInputChange3 = (e) => {
        setInputValue3(e.target.value); // Update the value of input field
    };

    // four input value

    // five input value
    const handleInputChange4 = (e) => {
        setInputValue4(e.target.value); // Update the value of input field
    };
    // five input value

    // six input value
    const handleInputChange5 = (e) => {
        setInputValue5(e.target.value); // Update the value of input field
    };
    // six input value


    // upi details input value
    const handleInputChange6 = (e) => {
        setInputValue6(e.target.value); // Update the value of input field
    };
    // upi detals input value



    return (
        <div className='w-full p-[20px] pt-[80px] xl:p-[40px] relative xl:pt-[60px]    xl:pl-[320px] flex flex-col '>
            <div className='flex justify-between items-center  w-[100%] p-[20px] xl:pr-0 pr-0  pl-[0] top-0 bg-white'>
            <h3 className='font-medium'>Bank Details</h3>
                <button className='second-btn'>Update Details</button>
            </div>

            <h2 className='bg-[#f6f9fa] pt-[10px] pb-[10px] pl-[14px] rounded-md font-normal shadow'>Bank Details</h2>
            <form className=' w-[100%] xl:w-[100%] m-auto mt-[30px] shadow-md  xl:p-[24px] p-[12px] border rounded-md  border-1' >
                <div className='flex w-[100%] gap-[10px] justify-between  xl:mb-4 mb-[6px] xl:flex-row flex-col'>
                    <div className='w-[100%] xl:w-[48%] 2xl:w-[48%]  '>
                        <label className='text-[14px]'>Name of Bank</label><br />
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            readOnly={!isEditable} // Input readOnly rahega jab tak isEditable false hai
                            style={{
                                backgroundColor: isEditable ? "#f4f5f9" : "#fff", // Background color bhi change hoga
                                border: isEditable ? "1px solid #F4F5F9" : '#000'
                            }}
                            className=' rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'
                        />
                    </div>

                    <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%] '>
                        <label className='text-[14px]'>IFSC Code</label><br />
                        <input
                            type="text"
                            value={inputValue1}
                            onChange={handleInputChange1}
                            readOnly={!isEditable}
                            style={{
                                backgroundColor: isEditable ? "#f4f5f9" : "#fff",
                                border: isEditable ? "1px solid #F4F5F9" : '#000'
                            }}
                            className=' rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'
                        />
                    </div>




                </div>

                <div className='flex w-[100%] gap-[10px] justify-between  xl:mb-4 mb-[6px] xl:flex-row flex-col'>
                  
                    <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%] '>
                        <label className='text-[14px]'>Account Number</label><br />
                        <input
                            type="text"
                            value={inputValue4}
                            onChange={handleInputChange4}
                            readOnly={!isEditable}
                            style={{
                                backgroundColor: isEditable ? "#f4f5f9" : "#fff",
                                border: isEditable ? "1px solid #F4F5F9" : '#000'
                            }}
                            className=' rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'
                        />
                    </div>

                    <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%] '>
                        <label className='text-[14px]'>Branch Name</label><br />
                        <input
                            type="text"
                            value={inputValue5}
                            onChange={handleInputChange5}
                            readOnly={!isEditable}
                            style={{
                                backgroundColor: isEditable ? "#f4f5f9" : "#fff",
                                border: isEditable ? "1px solid #F4F5F9" : '#000'
                            }}
                            className=' rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'
                        />
                    </div>



                </div>





     



                <div className='flex justify-end mt-4 p-3'>

                    <div className='flex gap-[20px] items-center '>
                        <button type='button' className='second-btn' onClick={handleEditClick}>
                            {isEditable ? "Save" : "Edit"}
                        </button>

                    </div>

                </div>




            </form>



            <h2 className='bg-[#f6f9fa] pt-[10px] pb-[10px] pl-[14px] mt-7 rounded-md font-normal shadow'>Add UPI Details</h2>
            <form className=' w-[100%] xl:w-[100%] m-auto mt-[30px] shadow-md  xl:p-[24px] p-[12px] border rounded-md  border-1' >
                <div className='flex w-[100%] gap-[10px] justify-between  xl:mb-4 mb-[6px] xl:flex-row flex-col'>
                    <div className='w-[100%] xl:w-[48%] 2xl:w-[48%]  '>
                        <label className='text-[14px]'>UPI Details</label><br />
                        <input
                            type="text"
                            value={inputValue6}
                            onChange={handleInputChange6}
                            readOnly={!isEditable6} // Input readOnly rahega jab tak isEditable false hai
                            style={{
                                backgroundColor: isEditable6 ? "#f4f5f9" : "#fff", // Background color bhi change hoga
                                border: isEditable6 ? "1px solid #F4F5F9" : '#000'
                            }}
                            className=' rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'
                        />
                    </div>




                </div>

                <div className='flex justify-end mt-4 p-3'>

                    <div className='flex gap-[20px] items-center '>
                        <button type='button' className='second-btn' onClick={handleEditClick2}>
                            {isEditable6 ? "Save" : "Edit"}
                        </button>

                    </div>

                </div>
            </form>
        </div>
    )
}

export default PersonalDetail;

