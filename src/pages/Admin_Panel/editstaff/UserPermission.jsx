import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../Context/GlobalContext';

const UserPermission = () => {
    const [allRoles, setAllRoles] = useState([]);
    const [allDepartments, setAllDepartments] = useState([]);
    const { selectedStaff } = useGlobalContext();

    const { baseUrl } = useGlobalContext();
    const [role, setRole] = useState("");
    const [department, setDepartment] = useState("");
    const [departmentID, setDepartmentID] = useState("");
    const [roleID, setRoleID] = useState("");
    console.log(selectedStaff);
    const fetchDepartments = async () => {
        const result = await fetch(baseUrl + "department")
        if (result.status == 200) {
            const res = await result.json();
            setAllDepartments(res.data)
        }
        else {
            alert("An Error Occured")
        }
    }
    useEffect(() => {
        console.log(selectedStaff);
    }, [])

    const fetchRoles = async () => {
        const result = await fetch(baseUrl + "role")
        if (result.status == 200) {
            const res = await result.json();
            setAllRoles(res.data)
        }
        else {
            alert("An Error Occured")
        }
        console.log("result", result)

    }

    useEffect(() => {
        fetchDepartments();
        fetchRoles();
        setRoleID(selectedStaff?.roleId);
        setDepartmentID(selectedStaff?.departmentId);
    }, [])
    async function handlesubmit(e) {
        e.preventDefault();
        const data = {
            roleId: roleID,
            departmentId: departmentID
        };

        const response = await fetch(baseUrl + "staff/" + selectedStaff.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data) // send the formatted data
        });
        const result = await response.json();
        if (response.status === 200) {
            console.log(result);
            alert("Staff role and department updated successfully ");
        } else {
            console.log(result);
            alert("An error occurred during update staff role and department");
        }
    }
    return (
        <div className='w-full p-[20px] pt-[80px] xl:p-[40px] relative xl:pt-[60px]    xl:pl-[320px] flex flex-col '>
            <div className='flex justify-between items-center  w-[100%] p-[20px] xl:pr-0 pr-0  pl-[0] top-0 bg-white'>

                <h3 className='font-medium'>User Permission</h3>
                <button onClick={(e) => handlesubmit(e)} className='second-btn'>Update Details</button>
            </div>

            <h2 className='bg-[#f6f9fa] pt-[10px] pb-[10px] pl-[14px] rounded-md font-normal shadow'>Select Roles</h2>
            <form className=' w-[100%] xl:w-[100%] m-auto mt-[30px] shadow-md  xl:p-[24px] p-[12px] border rounded-md  border-1' >

                <div className='flex xl:flex-row flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>
                    <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%]'>
                        <label className='text-[14px]'>Roles</label><br />
                        <select defaultValue={roleID} value={roleID} onChange={(e) => {
                            const selectedRole = allRoles.find(
                                (role) => role.id === e.target.value
                            );
                            if (selectedRole) {
                                setRole(selectedRole.role_name);
                                setRoleID(selectedRole.id);
                            }
                        }} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                            {allRoles.map((roleValue) => (
                                <option key={roleValue.id} value={roleValue.id}>
                                    {roleValue.role_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='w-[100%]  xl:w-[48%] 2xl:w-[48%] '>
                        <label className='text-[14px]'>Departments</label><br />
                        <select defaultValue={departmentID} value={departmentID} onChange={(e) => {
                            const selectedDepartment = allDepartments.find(
                                (dept) => dept.id === e.target.value
                            );
                            if (selectedDepartment) {
                                setDepartment(selectedDepartment.department_name);
                                setDepartmentID(selectedDepartment.id);
                            }
                        }} className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                            {allDepartments.map((departmentValue) => (
                                <option key={departmentValue.id} value={departmentValue.id}>
                                    {departmentValue.department_name}
                                </option>
                            ))}
                        </select>
                    </div>


                </div>









            </form>
        </div>
    )
}

export default UserPermission