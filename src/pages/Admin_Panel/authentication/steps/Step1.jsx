import React, { useContext, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { FormContext } from '../../../../Context/AuthContext';
import { useForm } from 'react-hook-form';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import flowChangerLogo from "../../../../Assets/Images/flowchangerAINew.jpeg";

const Step1 = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const { nextStep, updateAdminInfo } = useContext(FormContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  

  useEffect(() => {
    setSearchParams({ step: 1 });

    if (user) {
      updateAdminInfo({ email: user.email });
      setSearchParams({ step: 2, email: user.email });
      nextStep();
    }
  }, [user, updateAdminInfo, nextStep, setSearchParams]);

  const handleGoogleSignUp = async () => {
    try {
      await loginWithRedirect({
        authorizationParams: {
          redirect_uri: "http://localhost:3000"
        }
      });
    } catch (error) {
      console.error("Error during Google sign-up:", error);
   
    }
  };

  const onSubmit = async (data) => {
    try {
      await updateAdminInfo(data);
      setSearchParams({ step: 2, email: data.email });
      nextStep();
    } catch (error) {
      console.error("Error during email sign-up:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <Link to="/login" className="text-purple-500 hover:underline">Already have an account?</Link>
        <Link to="/authentication/login" className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-400 transition duration-300">Login</Link>
      </div>

      <div className="w-full max-w-md">
        <div className="text-white text-4xl font-bold mb-8 flex justify-center">
          <img src={flowChangerLogo} alt="Flowchangers Logo" className="h-[150px]" />
        </div>

        <div className="bg-white rounded-lg p-8 border border-gray-300 shadow-2xl">
          <div className="flex flex-col justify-center items-center gap-y-0">
            <h2 className="text-3xl font-medium mb-3 text-center mt-5">Try FlowChanger for free</h2>
            <p className="mb-5 text-gray-400 text-lg">No credit card required</p>
          </div>

          <div className='flex w-full justify-center items-center mb-4'>
            <button onClick={handleGoogleSignUp} className=" text-black border border-gray-400 py-2 px-4 rounded-md hover:bg-blue-400">
              Sign up with Google
            </button>
          </div>

          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-300 flex-grow mr-3"></div>
            <div className="text-center text-gray-500 px-4 py-2">or Sign Up with Email</div>
            <div className="border-t border-gray-300 flex-grow ml-3"></div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                className="w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100"
                {...register('email', {
                  required: "Email is required",
                  pattern: { value: emailPattern, message: "Invalid email format" }
                })}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-4 rounded-full hover:bg-purple-500 transition duration-300"
            >
              Sign Up For Free
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step1;
