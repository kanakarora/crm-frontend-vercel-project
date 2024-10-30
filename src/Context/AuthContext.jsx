import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useGlobalContext } from './GlobalContext';

export const FormContext = createContext();

export const useFormContext = ()=>{
    return useContext(FormContext)
}

export const AuthProvider = ({ children }) => {
  const {openToast} = useGlobalContext();
  console.log("hello");
  // new code added
  console.log(Cookies.get('flowChangerToken'));
  const [isAuthenticated , setIsAuthenticated] = useState(Cookies.get('flowChangerToken')?true:false);
  const [step, setStep] = useState(1);
  const [loginInfo , setLoginInfo] = useState({
    email:'',
    password:''
  });
  const [adminInfo, setAdminInfo] = useState(() => {
    const storedAdminInfo = sessionStorage.getItem('adminInfo');
    return storedAdminInfo ? JSON.parse(storedAdminInfo) : {
      email: '',
      first_name: '',
      last_name: '',
      mobile: '',
      password: '',
    };
  });
  const [extraInfo , setExtraInfo] = useState(() => {
    const storedExtraInfo = sessionStorage.getItem('extraInfo');
    return storedExtraInfo ? JSON.parse(storedExtraInfo) : {
      time_formate: '',
      time_zone: '',
      date_formate: '',
      week_formate: '',
      package_id: '',
      company_name: '',
      profile_image: '',
      company_logo: '',
    };
  });
 


  // useEffect(() => {
  //   const flowChangerToken = Cookies.get('flowChangerToken');
  //   console.log(flowChangerToken,flowChangerToken ? true : false)
  //   setIsAuthenticated(flowChangerToken ? true : false);
  // }, []);

  useEffect(() => {
    const storedAdminInfo = JSON.parse(sessionStorage.getItem('adminInfo'));
    const storedExtraInfo = JSON.parse(sessionStorage.getItem('extraInfo'));

    if (storedAdminInfo) {
      setAdminInfo(storedAdminInfo);
    }
    if (storedExtraInfo) {
      setExtraInfo(storedExtraInfo);
    }
  }, []);
  

  const updateExtraInfo = (data) =>{
    setExtraInfo(prev => {
      const newExtraInfo = { ...prev, ...data };
      sessionStorage.setItem('extraInfo', JSON.stringify(newExtraInfo)); 
      return newExtraInfo;
    });
}

const updateAdminInfo = (data) => {
    setAdminInfo(prev => {
      const newAdminInfo = { ...prev, ...data };
      sessionStorage.setItem('adminInfo', JSON.stringify(newAdminInfo)); 
      return newAdminInfo;
    });
  };

  useEffect(()=>{
    console.log(step);
    
  },[step])

  
  const updateLoginInfo = (data) =>{
    setLoginInfo({...loginInfo,...data})
  }

  const handleLoggedIn = async (loginInfo) => {
    console.log(loginInfo);
    try {
      const response = await fetch("https://fc-prod-test.onrender.com/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
  
      if (response.status === 200) {
        openToast('You have successfully logged in', "success");
        console.log("You have logged in");
        return true;
       
      } else {
        const result = await response.json();
        openToast(result.message || 'Login failed', "error");
        console.log("can't logged in")
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      openToast('An error occurred. Please try again.', "error");
      return false;
    }
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <FormContext.Provider value={{
      step,
      setStep,
      setIsAuthenticated,
      adminInfo,
      loginInfo,
      extraInfo,
      isAuthenticated,
      updateLoginInfo,
      updateAdminInfo,
      updateExtraInfo,
      handleLoggedIn,
       nextStep,
      prevStep
    }}>
      {children}
    </FormContext.Provider>
  );
};
export default AuthProvider;