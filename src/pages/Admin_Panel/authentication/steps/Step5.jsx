import React, {  useState } from 'react';
import { useFormContext } from '../../../../Context/AuthContext';
import TimezoneSelect from 'react-timezone-select';
import flowChangerLogo from "../../../../Assets/Images/flowchangerAINew.jpeg";
import { useSearchParams } from 'react-router-dom';

const Step5 = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  const { nextStep, updateExtraInfo, extraInfo } = useFormContext();
  console.log(extraInfo);
  const email = searchParams.get('email');
  
  const [timeZone, setTimeZone] = useState(null); 
  const [timeFormate, setTimeFormate] = useState('');
  const [dateFormate, setDateFormate] = useState('');
  const [weekFormate, setWeekFormate] = useState('');

  const handleNextStep = () => {
    updateExtraInfo({
      time_zone: timeZone ? timeZone.value : '',
      time_formate: timeFormate,
      date_formate: dateFormate,
      week_formate: weekFormate
    });
    nextStep();
    setSearchParams({ step: 6, email: email });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-white text-4xl font-bold mb-8 flex justify-center">
        <img className="h-[150px]" src={flowChangerLogo} alt="Flowchangers Logo" />
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Set up your account</h1>
        
        <div className="space-y-6">
          {/* Time zone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time zone</label>
            <TimezoneSelect
              value={timeZone}
              onChange={setTimeZone}
              className="w-full p-2 border rounded-md bg-gray-50"
            />
          </div>

          {/* Time format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time format</label>
            <div className="flex gap-4">
              <button
                className={`flex-1 py-2 px-4 rounded-md ${timeFormate === '12 hours: 9:00PM' ? 'bg-purple-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setTimeFormate('12 hours: 9:00PM')}
              >
                12 hours: 9:00 PM
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-md ${timeFormate === '24 hours: 21:00' ? 'bg-purple-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setTimeFormate('24 hours: 21:00')}
              >
                24 hours: 21:00
              </button>
            </div>
          </div>

          {/* Date format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date format</label>
            <div className="flex gap-4">
              <button
                className={`flex-1 py-2 px-4 rounded-md ${dateFormate === '31 December 2022' ? 'bg-purple-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setDateFormate('31 December 2022')}
              >
                31 December 2022
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-md ${dateFormate === 'December 31,2022' ? 'bg-purple-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setDateFormate('December 31,2022')}
              >
                December 31, 2022
              </button>
            </div>
          </div>

          {/* Week format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Week format</label>
            <div className="flex gap-4 mb-4">
              <button
                className={`flex-1 py-2 px-4 rounded-md ${weekFormate === 'Monday' ? 'bg-purple-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setWeekFormate('Monday')}
              >
                Monday
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-md ${weekFormate === 'Sunday' ? 'bg-purple-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setWeekFormate('Sunday')}
              >
                Sunday
              </button>
            </div>
          </div>

          {/* Continue button */}
          <button onClick={handleNextStep} className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-600 transition-colors">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5;
