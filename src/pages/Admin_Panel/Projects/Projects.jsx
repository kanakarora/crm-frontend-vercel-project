import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CachedIcon from '@mui/icons-material/Cached';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Projects = () => {
    const [openIndex, setOpenIndex] = useState(null);

    // Function to handle accordion toggling
    const handleToggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close the accordion if clicked again
        } else {
            setOpenIndex(index); // Open the accordion
        }
    };
    //salary dropdown
    const [isOpen1, setIsOpen1] = useState(false);



    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };

    //salary dropdown



    // Array of accordion items
    const accordionItems = [
        {
            title:
                <div>
                    <table className="w-full">
                        <thead className="tablehead">
                            <tr className="rounded-lg">

                            <th className="text-[12px] font-medium p-[8px] border-r whitespace-nowrap"><button className="p-[6px] rounded-lg bg-[orange]  mr-[7px] text-[white] ">To Do</button><span className="six-north">6</span></th>


                                <th className="text-[12px] border-r   font-medium p-[10px] ">#</th>


                                <th className="text-[12px] w-[250px] p-[12px] border-r font-medium whitespace-nowrap">Project Name</th>


                                <th className="text-[12px] font-medium p-[12px]  border-r whitespace-nowrap	">Start Date</th>


                                <th className="text-[12px] font-medium p-[12px]  border-r whitespace-nowrap	">Deadline</th>



                                <th className="text-[12px] font-medium p-[12px] border-r whitespace-nowrap	">Members</th>
                            </tr>
                        </thead>
                    </table>
                </div>,
            content: (
                <table className="w-full " >
                    <tbody>

                        <tr className="border-b border text-[#e5e7eb]">
                            

                                <td className="p-[10px] w-[100px]"><Link className="text-[10px]  text-[#47cc00] " to="/">Complete</Link></td>

                                <td className="text-[12px] w-[80px] font-medium p-[10px] text-[#8a25b0]">43</td>



                                <td className="flex flex-col w-[218px] p-[10px] break-words"><Link className="text-[11px] text-[#8a25b0]" to="/project-overview">soul relation intro</Link> <Link className="text-[9px] text-[#000]" to="/">#12 - DIVINE HEALING-AUG-2024 - DIVINE HEALING</Link></td>




                                <td className="text-[12px] p-[10px] text-[black] w-[173px] whitespace-nowrap	">13-08-2024</td>

                                <td className="text-[12px] p-[10px]  w-[173px] text-[black]   whitespace-nowrap	">13-08-2024</td>
                                <td className="text-[12px] p-[10px] w-[173px] whitespace-nowrap text-[black]	">19-08-2024</td>







                 


                        </tr>
                        <tr className="border-b border text-[#e5e7eb]">
                            

                                <td className="p-[10px] w-[100px]"><Link className="text-[10px]  text-[#47cc00] " to="/">Complete</Link></td>

                                <td className="text-[12px] w-[80px] font-medium p-[10px] text-[#8a25b0]">43</td>



                                <td className="flex flex-col w-[218px] p-[10px] break-words"><Link className="text-[11px] text-[#8a25b0]" to="/project-overview">soul relation intro</Link> <Link className="text-[9px] text-[#000]" to="/">#12 - DIVINE HEALING-AUG-2024 - DIVINE HEALING</Link></td>




                                <td className="text-[12px] p-[10px] text-[black] w-[173px] whitespace-nowrap	">13-08-2024</td>

                                <td className="text-[12px] p-[10px]  w-[173px] text-[black]   whitespace-nowrap	">13-08-2024</td>
                                <td className="text-[12px] p-[10px] w-[173px] whitespace-nowrap text-[black]	">19-08-2024</td>







                      


                        </tr>
                    </tbody>





                </table>

            )
        },

        //   { title: "2", content: "This is the content for item 2" },
        //     { title: "3", content: "This is the content for item 3" },

    ];
    return (
        <div className="">

            <div className="bg-[#fff] p-[10px] project-fear">
                <div className="mb-[14px]">

                    <Link to="/create-new-project " className="text-[#fff] text-[14px] bg-[#8a25b0] focus-visible:outline-none focus:shadow-none mb-[10px]  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <AddIcon className="newadd" /> New Project</Link>
                </div>

                <div className="p-[20px] summary-border rounded-lg w-full  bg-white shadow-cs">
                    <h2 className="font-medium mb-[10px] flex gap-[6px] items-center"> <LibraryBooksIcon />Projects</h2>

                  
                    <div className="flex justify-between items-center mb-[10px] project-export">
                        <div className="flex gap-[10px] system-project">
                            <div className="relative inline-block text-left">
                                {/* Button to open/close the dropdown */}
                                <button
                                    className=" items-center p-[6px] text-left text-[12px] text-sm font-normal text-[black] select-pe  rounded-md  focus:outline-none"
                                    onClick={toggleDropdown1}
                                >
                                    25 <KeyboardArrowDownIcon className="newadd" />
                                </button>

                                {/* Dropdown menu */}
                                {isOpen1 && (
                                    <div className="absolute right-0 w-[100%] z-10 mt-2  origin-top-right left-[0px] bg-white border border-gray-200 rounded-md shadow-cs">
                                        <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <a
                                                href="#"
                                                className="block p-[5px] text-center text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                30
                                            </a>
                                            <a
                                                href="#"
                                                className="block p-[5px] text-center text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                40
                                            </a>
                                            <a
                                                href="#"
                                                className="block p-[5px] text-center text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                50
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <p className=" relative p-[7px] text-[12px] w-[88px] font-medium summary-border rounded-md  "> Export <CachedIcon className="absolute cursor-pointer right-[5px] top-[9px] newadd2" /> </p>

                        </div>
                        <div className="relative summ-project">
                            <input className="p-[8px] pr-[24px] rounded-2xl outline-none  summary-border text-[13px] summ-project " type="text" placeholder=" Search......." />
                            <SearchIcon className="absolute newadd2 right-[8px] top-[11px]" />
                        </div>
                    </div>


                    {accordionItems.map((item, index) => (
                        <div key={index} className="bg-white shadow-cs rounded-lg all-setup">
                            {/* Accordion Header */}
                            <button
                                onClick={() => handleToggle(index)}
                                className="flex justify-between items-center w-full text-left text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                            >
                                <span className="w-full">{item.title}</span>

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
    );
    
};
export default Projects