import React, { createContext, useState } from 'react';

 export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    password: '',
    agreeToTerms: false,
  });

  const updateFormData = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
  };



  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <FormContext.Provider value={{
      step,
      formData,
      updateFormData,
      nextStep,
      prevStep
    }}>
      {children}
    </FormContext.Provider>
  );
};
export default FormProvider;