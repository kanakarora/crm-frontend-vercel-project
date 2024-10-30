import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export const MainContext = createContext();
export const GlobalContext = ({ children }) => {

  const [selectedTab, setSelectedTab] = useState(0);
  const baseUrl = "https://fc-prod-testing.onrender.com/api/"
  console.log(baseUrl)
  const [staffTab, setStaffTab] = useState(0);
  const [name, setName] = useState(""); 
  const [depId, setDepId] = useState("");
  const [editPermissions, setEditPermissions] = useState({
    clients_permissions: { view_global: false, create: false, edit: false, delete: false },
    projects_permissions: { view_global: false, create: false, edit: false, delete: false },
    report_permissions: { view_global: false, view_time_sheets: false },
    staff_role_permissions: { view_global: false, create: false, edit: false, delete: false },
    settings_permissions: { view_global: false, view_time_sheets: false },
    staff_permissions: { view_global: false, create: false, edit: false, delete: false },
    task_permissions: { view_global: false, create: false, edit: false, delete: false },
    sub_task_permissions: { view_global: false, create: false, edit: false, delete: false },
    chat_module_permissions: { grant_access: false },
    ai_permissions: { grant_access: false }
  });

  const [roleName, setRoleName] = useState("");
  const [roleId,setRoleId] = useState("");
  const [selectedStaff,setSelectedStaff] = useState(null);
  
  const fetchDetails= async()=>{
    const response =  await fetch(baseUrl+"/staff");

    if(response.status==200){
      const data=response.json();
      setSelectedStaff(data)
    }
  }

  const openToast = (msg, flag) => {
    toast(msg, { type: flag });
  };


  
  return (
    <MainContext.Provider value={{ selectedTab,setSelectedTab,staffTab,openToast, setStaffTab,baseUrl, name,setName ,depId,setDepId, roleName,setRoleName,roleId,setRoleId,editPermissions,setEditPermissions,selectedStaff,setSelectedStaff,fetchDetails}}>
      {children}
      <ToastContainer/>
    </MainContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(MainContext)
}

