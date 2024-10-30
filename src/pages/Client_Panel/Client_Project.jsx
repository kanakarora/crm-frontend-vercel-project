import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Client_Project = () => {
    const [openIndex, setOpenIndex] = useState(null);

    // Function to handle accordion toggling
    const handleToggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close the accordion if clicked again
        } else {
            setOpenIndex(index); // Open the accordion
        }
    };

    // Array of accordion itwems
    const accordionItems = [
        {
            title:
                <div>
                    <table className="w-full">
                        <thead>
                            <tr>

                                <th className="text-[12px] font-medium p-[10px] w-[100px] border-r whitespace-nowrap">Status(01)</th>


                                <th className="text-[12px] border-r w-[100px]  font-medium p-[8px] ">#</th>


                                <th className="text-[12px] w-[250px] p-[10px] border-r font-medium whitespace-nowrap">Project Name</th>








                                <th className="text-[12px] font-medium p-[10px] w-[200px] border-r whitespace-nowrap	">Start Date</th>


                                <th className="text-[12px] font-medium p-[10px] w-[200px] border-r whitespace-nowrap	">Deadline</th>



                                <th className="text-[12px] font-medium p-[10px] w-[200px] border-r whitespace-nowrap	">Members</th>










                            </tr>
                        </thead>
                    </table>
                </div>,
            content: (
                <table className="w-full " >
                    <tbody>

                        <tr>
                            <td className="flex p-[0]">

                                <td className="p-[10px] w-[100px]"><Link className="text-[10px]  text-[#47cc00] " to="/">Complete</Link></td>

                                <td className="text-[12px] w-[100px] font-medium p-[10px] text-[#2563eb] hover:text-blue-950">43</td>



                                <td className="flex flex-col w-[250px] p-[10px] break-words"><Link className="text-[11px] text-[#2563eb]" to="/">soul relation intro</Link> <Link className="text-[9px] text-[#000]" to="/">#12 - DIVINE HEALING-AUG-2024 - DIVINE HEALING</Link></td>




                                <td className="text-[12px] p-[10px] w-[200px] whitespace-nowrap	">13-08-2024</td>

                                <td className="text-[12px] p-[10px]  w-[200px]   whitespace-nowrap	">13-08-2024</td>
                                <td className="text-[12px] p-[10px] w-[100px] whitespace-nowrap	">19-08-2024</td>







                            </td>


                        </tr>
                    </tbody>





                </table>

            )
        },

        //   { title: "2", content: "This is the content for item 2" },
        //     { title: "3", content: "This is the content for item 3" },

    ];
    return (
        <div className=" w-full absolute pl-[145px] top-[95px] right-[5px] ">

            <div className="bg-[#fff] p-[10px] ml-[140px]">
                <div className="mb-[14px]">

                    <Link to="/" className="text-[#fff] text-[14px] bg-[#8a25b0] mb-[10px]  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <AddIcon className="newadd" /> New Project</Link>
                </div>

                <div className="p-[20px] summary-border w-full">
                    <h2 className="font-medium mb-[10px]">Client Project</h2>

                    <div className="flex items-center gap-[14px] mb-[10px]">
                <Link to="/" className="text-[#fff] text-[12px] bg-[#8a25b0]  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <AddIcon className="newadd" /> Add New</Link>
                <input className="p-[6px] rounded-2xl summary-border text-[13px] w-[140px]" type="text" placeholder="Search......." />

                </div>
                <div className="flex justify-between items-center">
                <div className="flex gap-[10px]">
                    <p className="p-[8px] flex gap-[7px] items-center text-[12px] w-[54px] font-medium summary-border rounded-md">25 <KeyboardArrowDownIcon className="newadd2"/></p>
                    <p className="p-[8px] text-[12px] font-medium summary-border rounded-md  ">Export</p>
               
                </div>
                <div>
                <input className="p-[6px] rounded-2xl summary-border text-[13px] " type="text" placeholder="Search......." />
                </div>
                </div>
              
                    
                </div>
              

                {accordionItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200">
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
    );
};

export default Client_Project