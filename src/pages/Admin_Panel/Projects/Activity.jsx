import React, { useState } from 'react';
import photo from "../../../Assets/Images/photo.png";

const Activity = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
      setIsOn(!isOn);
  }
  return (
    <div>
      <div className=" h-[auto] shadow-cs p-6 rounded-lg">
        <div className="p-[20px] border border-[#dbdbdb] shadow-cs rounded-lg ">
          <h1 className="text-[#B1B1B1] text-[13px]">18 hrs ago</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
            <img src={photo} alt="" />
            <div>
              <h1>Abhishek Verma - Task Status Changed</h1>
              <h1 className="text-[#B1B1B1] mt-2 text-[13px]">
                REEL COVER FREELANCER - BEROZGAR(WHITE) -
              </h1>
            </div>
            <button className="border border-[#5D5757] text-[#0E2040] text-[10px] px-2 py-1 mt-7 rounded-md bg-[#ECECEC]">
              In Review
            </button>
            </div>
            <div>
            <h1>Visible to Customer</h1>
            <div
            className={`${isOn ? 'bg-green-500' : 'bg-[#e6e0e0]'
              } relative inline-block w-12 h-6 rounded-full transition-colors duration-300 ease-in-out cursor-pointer`}
            onClick={toggleSwitch}
          >
            <span
              className={`${isOn ? 'translate-x-6' : 'translate-x-0'
                } inline-block w-6 h-6 bg-[#d5cdcd] rounded-full transform transition-transform duration-300 ease-in-out`}
            />
          </div>
          </div>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Activity;
