import { useState } from "react";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import Groups from "./ChatTabs/Group";
import { FaUserGroup } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import { BsSendFill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import Staff from "./ChatTabs/Staff";
import profilePic from "../../Assets/Images/Profile.png";

const StaffChatInterface = () => {
  const [ chatTab , setChatTab] = useState("staff");
  const [showChatSection , setShowChatSection] = useState(false);
  const [selectedStaff , setSelectedStaff] = useState(null);

  const handleShowChatSection = () =>{
     setShowChatSection(!showChatSection);
  }

  const handleSelectedStaff = (staff) =>{
    setSelectedStaff(staff)
    setShowChatSection(true);
  }
  return (
    <div class=" p-4 min-h-screen h-screen ">
      {/* <!-- Container for Chat Section --> */}
      <div class="flex space-x-6  shadow-lg rounded-lg p-6 h-full parent-container bg-white">
        {/* <!-- Left Section: Members List --> */}
        <div class = {`w-full ${showChatSection?"hidden" : "block"} md:w-1/3 flex flex-col border-r-2 pr-4 h-full bg-white`}>
        <div className="flex flex-row justify-start items-center space-x-3 border-b  pb-5 mb-2">
          <div className="border rounded-full border-green-500">
          <img src={profilePic} alt="" className="w-9 h-9 rounded-full"/>
          </div>
           <p className="text-xl font-medium">Kanika Arora</p>
        </div>
          {/* <!-- Search Bar --> */}
          <div class="flex items-center bg-white rounded-full shadow-lg  mb-2 border border-gray-300 mt-5">
            <input
              type="text"
              placeholder="Search members..."
              class="bg-transparent outline-none w-full pl-2 py-1 text-sm font-normal   "
            />
            <IoSearch className="text-[30px] pr-2 mt-1 text-gray-400"/>
          </div>

          {/* <!-- Member List --> */}
          <div className="flex flex-col h-full flex-grow overflow-y-auto">
          <div class="mb-4 w-full md:w-[80%]   grid grid-cols-3  ">
           <div className="p-3 flex justify-start text-gray-400 items-center hover:text-black" onClick={()=>{setChatTab("staff")}}>Staff</div>
           <div className=" p-3 flex justify-start items-center text-gray-400 hover:text-black" onClick={()=>{setChatTab("groups")}}>Groups</div>
          </div>
          <div className="w-full h-full flex-grow flex flex-col justify-between space-y-2">
           {chatTab === "staff" ? <Staff handleShowChatSection={handleShowChatSection} handleSelectedStaff={handleSelectedStaff}/>  :  <Groups handleShowChatSection = {handleShowChatSection} />}
           </div>
           
           
          {/* member column in ChatSection */}
           </div>
        </div>

        {/* <!-- Right Section: Chat Window --> */}
        <div class={`w-2/3 h-full ${showChatSection?"block":"hidden"} md:flex flex-col flex-grow chat-section`}>
          {/* <!-- Chat Header --> */}
          {
  chatTab === "staff" ? (
    <>
    <div className="h-full flex flex-col">
    <div className="float-left" onClick = {()=>{setShowChatSection(false)}}><GoArrowLeft /></div>
      <div className="flex items-center justify-between mt-5 md:mt-0 mb-4 border-b pb-6">
        <div className="flex flex-row justify-start items-center w-[70%] md:w-[50%] space-x-3 relative rounded-[100%]">
          <img src={profilePic} alt="profile Picture" className="w-[45px] h-[45px] rounded-[100%]" />
        
          <div className="flex flex-col">
            <h2 className="text-md font-normal mt-2">FlowChanger Agency</h2>
            <p className="text-sm text-gray-300">last seen 3 hours ago</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <HiOutlineSpeakerWave className=" text-purple-600 h-[30px] w-[30px]" />
            <IoCall className="  text-purple-600 h-[30px] w-[25px]"/>
        </div>
      </div>
      <div className=" p-4 rounded-lg flex flex-col flex-grow overflow-y-scroll">
        <div className="mb-4  float-right flex flex-col justify-between space-y-3 mt-7">
          <div>
          <p className="text-gray-700 bg-purple-600 rounded-xl p-3 block max-w-max float-right mr-5">hiii</p>
          </div>
          
          <div>
          <p className="text-gray-700 bg-purple-600 rounded-xl p-3 block max-w-max float-right mr-5">i am working here</p>
          </div>
          <div>
          <p className="text-gray-700 bg-purple-600 rounded-xl p-3 block max-w-max float-right mr-5">work is going great</p>
          </div> 
        </div> 
        <div className="mb-4  float-left flex flex-col justify-between space-y-3 mt-7">
          <div className="float-left">
          <p className="text-black bg-gray-300 rounded-xl p-3 block max-w-max float-left mr-5">hiii</p>
          </div>
          
          <div>
          <p className="text-black bg-gray-300 rounded-xl p-3 block max-w-max  mr-5 float-left">i am working here</p>
          </div>
          <div>
          <p className="text-black bg-gray-300 rounded-xl p-3 block max-w-max float-left mr-5">work is going great</p>
          </div> 
        </div> 
      </div>
      <div className="mt-4 flex items-center space-x-2 rounded-xl">
      <div class="relative w-full">
  <input type="text" placeholder="Search members..." class="w-full border rounded-lg p-2 pr-10" />
  <div class="absolute inset-y-0 right-0 flex items-center pr-3">
  <IoSettingsOutline className="text-gray-500 text-2xl"/>
  </div>
</div>
 <button className="bg-blue-500 text-white p-2 rounded-xl"><BsSendFill /></button>
      </div>
      </div>
    </>
  ) : (
    <>
    <div className="flex flex-col h-full">
    <div className="float-left" onClick = {()=>{setShowChatSection(false)}}><GoArrowLeft /></div>
      <div className="flex items-center justify-between mt-5 md:mt-0 mb-4 border-b pb-6">
        <div className="flex flex-row justify-start items-center w-[50%] space-x-3 relative">
          <FaUserGroup className=" text-[40px] text-purple-500" />
        </div>
        <div className="flex space-x-2">
          
          <IoSettingsOutline className="text-purple-600 text-[30px]"/>
          
        </div>
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-2 rounded-xl bg-gray-200">
      <div class="relative w-full">
  <input type="text" placeholder="Search members..." class="w-full border rounded-lg p-2 pr-10" />
  <div class="absolute inset-y-0 right-0 flex items-center pr-3">
  <IoSettingsOutline className="text-gray-500 text-2xl"/>
  </div>
</div>
 <button className="bg-blue-500 text-white p-2 rounded-lg"><BsSendFill /></button>
      </div>
    </>
  )
}
</div>
</div>
</div>

  );
};

export default StaffChatInterface;



