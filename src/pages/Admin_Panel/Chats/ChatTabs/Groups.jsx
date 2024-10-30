import { FaUserGroup } from "react-icons/fa6";
const Groups = () =>{
 return (
        <div className="flex flex-grow h-full justify-start space-x-5  p-1">
          <div className="flex flex-col flex-grow justify-between">
          <div className="flex items-center  justify-start space-x-5  space-y-2 hover:bg-slate-300 p-2 border border-gray-300 mb-2 rounded-lg shadow-lg bg-white">
        <div className="flex justify-center items-center rounded-full p-2  h-10 w-10">
        <FaUserGroup className="text-purple-600 text-[50px] h-10"/>
         </div>
      
        <div className="flex flex-col justify-center items-center mt-0">
          <h2 className="text-md font-medium text-black mt-0">Gyno</h2>
        </div>
        </div>
        <div className="bg-gray-300 p-2 rounded shadow-lg w-full">
          Create Group
        </div>
        </div>
  </div>
    )
}

export default Groups;