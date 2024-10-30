import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import profile from '../../../Assets/Images/profile.svg'
import { useGlobalContext } from '../../../Context/GlobalContext';
import { LinkOff } from '@mui/icons-material';
const AddOneStaff = () => {

    const { baseUrl} = useGlobalContext();
    const [departments, setDepartments] = useState([])
    const [roles,setRoles]=useState([])

    const[name, setName]= useState("");
    const[jobTitle, setJobTitle]= useState("");
    const[branch, setBranch]= useState("hello");
    const[mobile, setMobile]= useState("");
    const[otp, setOtp]= useState("");
    const[gender, setGender]= useState("0");
    const[email, setEmail]= useState("");
    const[date, setDate]= useState("");
    const[address, setAddress]= useState("");
    const[selectDepartment, setSelectDepartment]= useState("0");
    const[selectRole, setSelectRole]= useState("0");

    

    


    const fetchDepartments = async () => {
         const result = await fetch(baseUrl + "department")
         if (result.status == 200) {
          const res = await result.json();
          setDepartments(res.data)
        }
        else {
          alert("An Error Occured")
        }
      }


      const fetchRoles = async () => {
        const result = await fetch(baseUrl + "role")
        if (result.status == 200) {
          const res = await result.json();
          setRoles(res.data)
        }
        else {
          alert("An Error Occured")
        }
        console.log("result",result)

      }
      useEffect(() => {
        fetchDepartments()
        fetchRoles();
      }, [])

      async function handlesubmit(e){
        e.preventDefault();
        const data = {
            name:name,
            job_title:jobTitle,
            branch:branch,
            mobile:mobile,
            login_otp:otp,
            gender:gender,
            official_email:email,
            date_of_joining:date,
            current_address:address,
            departmentId:selectDepartment,
            roleId:selectRole
        };

        const response = await fetch(baseUrl + "staff", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data) // send the formatted data
        });
    
        console.log(response);
    
        if (response.status === 201) {
            alert("Add Staff Succesfully")
            setName("");
            setJobTitle("");
            setBranch(""); 
            setMobile("");
            setOtp("");
            setGender("");
            setEmail("");
            setDate("");
            setAddress("");
            setSelectDepartment(""); 
            setSelectRole("");
    
        } else {
            alert("An error occurred");
        }
      }

      

  return (
    <div className='add-one-staff'>
        <Link to="/" className='flex items-center gap-[10px] text-[20px] font-medium		'><KeyboardBackspaceIcon/>Add Staff</Link>
        <form className=' w-[100%] xl:w-[80%] m-auto mt-[60px] shadow-md  xl:p-[24px] p-[12px] border rounded-md  border-1' >
            <div className='flex w-[100%] gap-[10px] justify-between  xl:mb-4 mb-[6px] xl:flex-row flex-col'>
                <div className='w-[100%] xl:w-[48%] 2xl:w-[48%]  '>
                <label className='text-[14px]'>Name</label><br/>
                <input type='text' value={name} placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] 	  placeholder:font-font-normal text-[14px]'/>
                </div>
              
                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%]'>
                <label className='text-[14px]'>Job Tittle</label><br/>
                <input type='text' value={jobTitle} placeholder='Enter Job Title' onChange={(e)=>{setJobTitle(e.target.value)}} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'/>
                </div>


            </div>

            <div className='flex xl:flex-row flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>
                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%]'>
                <label className='text-[14px]'>Branch</label><br/>
                <select  className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                    <option>Please Select Branch</option>
                </select>
                </div>

                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%] '>
                <label className='text-[14px]'>Department</label><br/>
                <select value={selectDepartment} onChange={(e)=>setSelectDepartment(e.target.value)} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                <option value={"0"}>Select</option>
                {
                    departments?.map((dep,index)=>{
                        return <option key={dep.id} value={dep.id}>{dep.department_name}</option>
                    })
                }
                </select>

                    
                </div>

            </div>

            <div className='flex xl:flex-row flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>
                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%]'>
                <label className='text-[14px]'>Role</label><br/>
                <select value={selectRole}  onChange={(e)=>setSelectRole(e.target.value)} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>

                    <option value={"0"}> Select Role</option>
                {
                    roles?.map((role,index)=>{
                        return <option key={role.id} value={role.id}>{role.role_name}</option>
                    })

                }

                </select>
                </div>

                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%] '>
                <label className='text-[14px]'>Mobile</label><br/>
                <input type='number' value={mobile} placeholder='Enter Mobile ' onChange={(e)=>{setMobile(e.target.value)}} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'/>
                </div>


            </div>

            <div className='flex xl:flex-row flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>
                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%]'>
                <label className='text-[14px]'>Login OTP</label><br/>
                <input type='number' value={otp} placeholder='Enter OTP' onChange={(e)=>{setOtp(e.target.value)}} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'/>

                </div>

                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%] '>
                <label className='text-[14px]'>Gender</label><br/>
                <select value={gender} onChange={(e)=>{setGender(e.target.value)}} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                   <option value={"0"}>Select Gender</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                    
                </select>
                </div>


            </div>

            <div className='flex xl:flex-row flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>
                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%]'>
                <label className='text-[14px]'>Official Email ID</label><br/>
                <input type='email' value={email} placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'/>

                </div>

                <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%]'>
                <label className='text-[14px]'>Date of Joining</label><br/>
                <input type='date' value={date} placeholder='Select Date' onChange={(e)=>{setDate(e.target.value)}} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'/>

                
                </div>


            </div>


            <div className='flex xl:flex-row flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>
                <div className='w-[100%] xl:[48%] '>
                <label className='text-[14px]'>Address</label><br/>
                <input type='text' value={address} placeholder='Enter Address' onChange={(e)=>{setAddress(e.target.value)}} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'/>

                </div>

                


            </div>


            <div className='flex justify-end mt-4 p-3'>
           
            <div className='flex gap-[20px] items-center'>
                <Link to ="/" className='first-btn flex items-center'>Cancel</Link>
                <button className='second-btn' onClick={handlesubmit}>Save</button>
                
            </div>

        </div>
        </form>

    </div>
  )
}

export default AddOneStaff