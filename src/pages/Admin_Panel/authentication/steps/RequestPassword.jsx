
import React from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";
import flowchangerLogo from "../../../../Assets/Images/flowchangerAINew.jpeg"

const RequestPassword = ({ prevStep }) => {
  return (<>
    <div className='flex flex-start  mt-9 relative ml-9 '>
        <MdKeyboardArrowLeft className='absolute inset-y-0 top-3 left-4 mr-5'/>
        <button onClick={prevStep} className='rounded-full bg-purple-500 hover:bg-purple-400 py-2 px-9 '>
        Back
        </button>
        </div>
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-white text-4xl font-bold mb-8 flex justify-center">
          <img src={flowchangerLogo} alt="Flowchangers Logo" className="bg-black"/>
        </div>
        <div className="bg-white rounded-lg p-8 border border-gray-300 shadow-2xl">
          <div className="flex flex-col justify-center items-center gap-y-0">
            <h2 className="text-3xl font-medium mb-3 text-center mt-5">Forgot your password</h2>
          </div>
          <form>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                className="w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-4 px-4 hover:bg-purple-400 transition duration-300 rounded-full"
            >
              Request password reset
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default RequestPassword;
