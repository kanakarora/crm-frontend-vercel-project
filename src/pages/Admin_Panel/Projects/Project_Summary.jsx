import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Project_Summary = () => {
    const [openIndex, setOpenIndex] = useState(null);

    // Function to handle accordion toggling
    const handleToggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close the accordion if clicked again
        } else {
            setOpenIndex(index); // Open the accordion
        }
    };

    // Array of accordion items
    const accordionItems = [
        {
            title:
                <div>
                    <table className="w-full">
                        <thead className="bg-[white] tablehead">
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
                        <tr className="border-b border-text-[#ecedf0]">

                            <td className="text-[12px] font-medium p-[10px] w-[100px]  whitespace-nowrap"><Link className="text-[10px] p-[6px]  text-[#47cc00] " to="/">Complete</Link></td>


                            <td className="text-[12px]  w-[100px]  font-medium p-[8px] ">#</td>


                            <td className="text-[12px] w-[250px] p-[10px]  font-medium whitespace-nowrap"><Link className="text-[#8a25b0]">Soul relation intro</Link></td>


                            <td className="text-[12px] font-medium p-[10px] w-[200px]  whitespace-nowrap	">12-09-2024</td>


                            <td className="text-[12px] font-medium p-[10px] w-[200px]  whitespace-nowrap	">12-09-2024</td>



                            <td className="text-[12px] font-medium p-[10px] w-[200px]  whitespace-nowrap	">12-09-2024</td>










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
                    <h2 className="font-medium mb-[10px]">Project Summary</h2>

                    <div className="flex items-center gap-[14px] mb-[10px]">
                        <Link to="/" className="text-[#fff] text-[12px] bg-[#8a25b0]  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <AddIcon className="newadd" /> Add New</Link>
                        <input className="p-[6px] rounded-2xl summary-border text-[13px] w-[140px]" type="text" placeholder="Search......." />

                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-[10px]">
                            <p className="p-[8px] flex gap-[7px] items-center text-[12px] w-[54px] font-medium summary-border rounded-md">25 <KeyboardArrowDownIcon className="newadd2" /></p>
                            <p className="p-[8px] text-[12px] font-medium summary-border rounded-md  ">Export</p>

                        </div>
                        <div>
                            <input className="p-[6px] rounded-2xl summary-border text-[13px] " type="text" placeholder="Search......." />
                        </div>
                    </div>


                </div>


                {accordionItems.map((item, index) => (
                    <div key={index} className="">
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

export default Project_Summary