import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";


const Project_Progress = () => {

  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle accordion toggling
  const handleToggle = (index) => {
      if (openIndex === index) {
          setOpenIndex(null); // Close the accordion if clicked again
      } else {
          setOpenIndex(index); // Open the accordion
      }
  };
  const accordionItems = [
    {
      title:
        <div>
          <table className="w-full">
            <thead className="tablehead">
              <tr className="rounded-lg">

                <th className="text-[12px] font-medium p-[8px] w-[100px] border-r whitespace-nowrap"><button className="p-[6px] rounded-lg bg-[orange]  mr-[7px] text-[white] ">To Do</button><span className="six-north">6</span></th>


                <th className="text-[12px] border-r w-[60px]  font-medium p-[8px] ">#</th>


                <th className="text-[12px] w-[220px] p-[8px] border-r font-medium whitespace-nowrap">Task Name</th>


                <th className="text-[12px] font-medium p-[8px] w-[120px] border-r whitespace-nowrap	">Start Date</th>


                <th className="text-[12px] font-medium p-[8px] w-[120px] border-r whitespace-nowrap	">Due Date</th>



                <th className="text-[12px] font-medium p-[8px] w-[120px] border-r whitespace-nowrap	">End Date</th>
                <th className="text-[12px] font-medium p-[8px] w-[100px] border-r whitespace-nowrap	">Assigned to</th>
                <th className="text-[12px] font-medium p-[8px] w-[80px] border-r whitespace-nowrap	">Tags</th>
                <th className="text-[12px] font-medium p-[8px] w-[100px] border-r whitespace-nowrap	">Priority</th>










              </tr>
            </thead>
          </table>
        </div>,
      content: (
        <table className="w-full " >
          <tbody>

            <tr className="rounded-lg border-b border-[#e5e7eb]">

              <td className="text-[12px] font-medium p-[8px] w-[100px] text-left  whitespace-nowrap"><Link className="textcomplete">Complete</Link></td>


              <td className="text-[12px]  w-[60px]  font-medium p-[8px] text-left ">#</td>


              <td className="text-[12px] w-[220px] p-[8px]  text-left font-medium whitespace-nowrap"><Link className="textcomplete">Soul relation intro</Link></td>


              <td className="text-[12px] font-medium p-[8px] text-left w-[120px]  whitespace-nowrap	">13-08-2024</td>


              <td className="text-[12px] font-medium p-[8px] text-left w-[120px]  whitespace-nowrap	">13-08-2024</td>



              <td className="text-[12px] font-medium p-[8px] text-left w-[120px]  whitespace-nowrap	">13-08-2024</td>
              <td className="text-[12px] font-medium p-[8px] w-[100px] text-left  whitespace-nowrap	"><button className="bg-[#c4bfbf] text-white rounded-lg p-[6px]">Ads</button></td>
              <td className="text-[12px] font-medium p-[8px] w-[80px] text-left whitespace-nowrap	">-</td>
              <td className="text-[12px] font-medium p-[8px] w-[100px] text-left whitespace-nowrap	"><Link className="highred">High</Link></td>










            </tr>
            <tr className="rounded-lg border-b border-[#e5e7eb]">

<td className="text-[12px] font-medium p-[8px] w-[100px] text-left  whitespace-nowrap"><Link className="textcomplete">Complete</Link></td>


<td className="text-[12px]  w-[60px]  font-medium p-[8px] text-left ">#</td>


<td className="text-[12px] w-[220px] p-[8px]  text-left font-medium whitespace-nowrap"><Link className="textcomplete">Soul relation intro</Link></td>


<td className="text-[12px] font-medium p-[8px] text-left w-[120px]  whitespace-nowrap	">13-08-2024</td>


<td className="text-[12px] font-medium p-[8px] text-left w-[120px]  whitespace-nowrap	">13-08-2024</td>



<td className="text-[12px] font-medium p-[8px] text-left w-[120px]  whitespace-nowrap	">13-08-2024</td>
<td className="text-[12px] font-medium p-[8px] w-[100px] text-left  whitespace-nowrap	"><button className="bg-[#c4bfbf] text-white rounded-lg p-[6px]">Ads</button></td>
<td className="text-[12px] font-medium p-[8px] w-[80px] text-left whitespace-nowrap	">-</td>
<td className="text-[12px] font-medium p-[8px] w-[100px] text-left whitespace-nowrap	"><Link className="highred2">Medium</Link></td>










</tr>

          </tbody>





        </table>

      )
    },

    //   { title: "2", content: "This is the content for item 2" },
    //     { title: "3", content: "This is the content for item 3" },

  ];

  
  return (
    <div className='w-[100%] pl-[13px]'>
         <h2 className='text-[20px] p-[20px] font-medium'>Projects / Addoble</h2>
        <div className='p-[20px] flex w-[34%] justify-between items-center'>
           <p>img</p>
           <button className='finish-btn p-[8px] rounded-lg bg-[#dcfce7] font-medium text-[#58ae71] '>Finished</button>
        </div>

        <div className=" bg-white  w-[100%] shadow rounded-lg p-6 max-[900px]:w-[100%] ">
          {/*-- Progress Bar -*/}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-700 max-[1400px]:text-[14px]">
                Project Progress 100%
              </span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-green-500 h-2 rounded-full"></div>
            </div>
          </div>

          {/*-- Overview Section -*/}
          <div className="text-gray-600 space-y-2 max-[1400px]:text-[14px]">
            <span className="block font-semibold text-gray-700 ">Overview</span>
           
                <div className='flex customer-adoble '>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700 ">
                  Project #
                </span>
                <span className="text-[#B1B1B1]">29</span>
              </div>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700">
                  Customer
                </span>
                <span className="text-[#B1B1B1]">Addodle</span>
              </div>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700">
                  Status
                </span>
                <span className="text-[#B1B1B1]">Finished</span>
              </div>
              <div className='w-[235px]'>
                <span className="block font-semibold text-gray-700">
                  Date Created
                </span>
                <span className="text-[#B1B1B1]">14-08-2024</span>
              </div>
              </div>
               <div className='flex customer-adoble'>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700">
                  Start Date
                </span>
                <span className="text-[#B1B1B1]">14-08-2024</span>
              </div>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700">
                  Deadline
                </span>
                <span className="text-[#B1B1B1]">31-08-2024</span>
              </div>
              <div className='w-[250px]'>
                <span className="block font-semibold text-gray-700">
                  Completed Date
                </span>
                <span className="text-[#81EF93]">02-09-2024 6:03 PM</span>
              </div>
              <div className='w-[235px]'>
                <span className="block font-semibold text-gray-700">
                  Total Logged Hours
                </span>
                <span className="text-[#B1B1B1]">03:55</span>
              </div>
              </div>
         
          </div>

          {/*-- Tags Section -*/}
          <div className="mt-4">
            <span className="block font-semibold text-gray-700">Tags</span>
            <div className="flex space-x-2 mt-2">
              <span className="inline-block border text-xs px-2 py-1 rounded">
                Ads
              </span>
              <span className="inline-block border text-xs px-2 py-1 rounded">
                Graphic
              </span>
              <span className="inline-block border text-xs px-2 py-1 rounded">
                Reel
              </span>
            </div>
          </div>

          {/*-- Description Section --*/}
          <div className="mt-4 text-gray-700">
            <span className="font-semibold block mb-1">Description</span>
            <p className="text-[#B1B1B1] text-sm">
              SMM plan (12 Graphic + 10 Reels & Facebook ad management).
            </p>
          </div>

        {/* Task Section */}

        <div className=" w-full absolute pl-[145px] top-[630px] right-[5px] ">

<div className=" pl-[140px]">
    <div className="mb-[20px]">

        <h2 className="font-medium" >All Task</h2>
    </div>

     {accordionItems.map((item, index) => (
        <div key={index} className="bg-white shadow-cs rounded-lg keyframe1">
          {/* Accordion Header */}
          <button
            onClick={() => handleToggle(index)}
            className="flex justify-between items-center w-full text-left text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            <span>{item.title}</span>

          </button>

          {/* Accordion Content */}
          {openIndex === index && (
            <div className="mb-[10px] text-gray-700 bg-white">
              {item.content}

            </div>
          )}
        </div>
      ))}


</div>
</div>



          
        </div>
    </div>
  )
}

export default Project_Progress