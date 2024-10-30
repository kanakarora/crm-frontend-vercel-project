
import { BsGraphUpArrow } from "react-icons/bs";
import { BiDownArrow } from "react-icons/bi";
import { SlReload } from "react-icons/sl";
import { GoProjectRoadmap } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
const ProjectData = () =>{

    const ProfileData = [
        {status:"complete" , series:10 , projectName : "soul relation intro" , projectContent : "#12-DEVINE healing Augest-2024 - DEVINE healing" ,startDate:"19-10-12", DeadLine:"25-10-12", ProficSrc:"./images/profile.png"},
        {status:"complete" , series:11 , projectName : "URBAN Khalsa Reel" , projectContent : "#12-DEVINE healing Augest-2024 - DEVINE healing" ,startDate:"19-10-12", DeadLine:"25-10-12", ProficSrc:"./images/profile.png"},
        {status:"complete" , series:12 , projectName : "soul relation intro" , projectContent : "#12-DEVINE healing Augest-2024 - DEVINE healing" ,startDate:"19-10-12", DeadLine:"25-10-12", ProficSrc:"./images/profile.png"},
        {status:"complete" , series:13 , projectName : "URBAN khalsa Reel" , projectContent : "#12-DEVINE healing Augest-2024 - DEVINE healing" ,startDate:"19-10-12", DeadLine:"25-10-12", ProficSrc:"./images/profile.png"},
        {status:"complete" , series:14 , projectName : "URBAN khalsa Reel" , projectContent : "#12-DEVINE healing Augest-2024 - DEVINE healing" ,startDate:"19-10-12", DeadLine:"25-10-12", ProficSrc:"./images/profile.png"},
        ]

     return (
      // container for all content
        <div className="container">
          {/* project summary header */}
        <div className="flex justify-evenly items-center w-[70%] md:w-[30%]   p-0 ">
         <button className="bg-purple-800  p-2.5 rounded mx-0.5 flex justify-start items-center px-8 text-white">
         <IoMdAdd className=" mr-3 text-2xl font-bold"/>
         New Project
         </button>
         <div className="bg-slate-300 p-1 rounded">
         <BsGraphUpArrow  className="text-4xl "/>
         </div>
        </div>
        <div className="container border border-gray-100 shadow-xl mt-4 py-1 rounded">
            <div className="flex flex-col">
             <div className="flex flex-row ml-4 justify-around items-center w-[70%] sm:w-[50%] md:w-[25%]">
              <GoProjectRoadmap className="ml-3 text-3xl"/>
               <h1 className="font-bold text-2xl leading-16">Project Summary</h1>
             </div>
             <div className="flex flex-wrap justify-evenly items-center w-[100%] md:w-[42%]  mt-3 ">
              <button className="bg-purple-700 p-3 rounded-full w-[40%]"><span></span>Add New</button>
              <div className="relative">
              <IoSearchOutline className="absolute inset-y-0 right-2 top-1.5 text-3xl flex items-center text-gray-300"/>
              <input type="text" placeholder = "search..." className="p-2 rounded-full  focus:outline-grey-500 mr-2 pr-10 border border-gray-400 shadow-sm"/>
              
              </div>
             </div>
             <div className="flex justify-between items-center mt-3 ">
                <div className="flex justify-between w-[17%]">
              <button className="border  rounded border-solid  border-gray-400 p-5 flex items-center h-[25px] ml-3 mr-2">
                <span className="ml-3 mr-3">
                    <BiDownArrow/>
                </span>
                25
                </button>
                <button className="flex items-center border border-gray-400 p-2 rounded">
                  Export
                  <span className="ml-2">
                   <SlReload/>
                  </span>
                </button>
                </div>
                  <div className="relative w-[20%] mr-8">
                 <input type="text" value="" className="w-full bg-white border border-gray-300 rounded py-2 pl-10 pr-4 focus:outline-grey-500" placeholder="search..."/>
                  <IoSearchOutline className="absolute inset-y-3 inset-x-4 left-0 flex items-center  text-gray-500 w-10 text-2xl "/>
                 </div>
                </div>
              {/* project summary container */}
             <div className="flex justify-between items-center overflow-x-auto whitespace-nowrap">
                <table className="w-[100%] mt-5">
                  {/* table header */}
                    <thead className="overflow-x-auto whitespace-nowrap">
                    <th className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                       status(01) 
                    </th>
                    <th className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Project Name
                    </th>
                    <th  className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     start date
                    </th>
                    <th className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     deadline
                    </th>
                    <th className="border px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     members
                    </th>
                    </thead>
                    {/* project summary table */}
                    <tbody className = "bg-white divide-y divide-gray-200">
                        {
                            ProfileData.map(profile =>{
                                return(
                                <tr className="h-14">
                                <td className="text-green-500 px-6 py-3">{profile.status}</td>
                                <td className="text-blue-700 px-6 py-3">{profile.series}</td>
                                <td className="flex flex-col px-6 py-3">
                                <span className="text-blue-500">{profile.projectName}</span>
                                <span>{profile.projectContent}</span>
                                </td>
                                <td className="px-6 py-3 ">{profile.startDate}</td>
                                <td className="px-6 py-3 ">{profile.DeadLine}</td>
                                <td className="px-6 py-3 ">
                             <div className="flex justify-center items-center h-full">
                             <img src={profile.ProficSrc} alt="" className="w-8 h-8 rounded-full mr-1" />
                            <img src={profile.ProficSrc} alt="" className="w-8 h-8 rounded-full" />
                          </div>
                        </td>
                                
                            </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
             </div>
            </div>
         </div>
         {/* previous next buttons */}
         <div className="flex  justify-between items-center w-[90%] mx-auto h-15 mt-5">
           <p>
            showing 1 to 2 of 2 enteries
           </p>
           <div>
            <button className="border border-grey-400 p-2 rounded">
                previous
            </button>
            <button className="border border-grey p-2 rounded bg-purple-500">1</button>
            <button className="border border-grey-400 py-2 px-2 rounded">next</button>
           </div>
         </div>
        </div>
     )


}

export default ProjectData;


