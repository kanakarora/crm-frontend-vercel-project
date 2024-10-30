import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CachedIcon from '@mui/icons-material/Cached';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';
import { useGlobalContext } from "../../../Context/GlobalContext";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import Select from 'react-select';
import { MdOutlineDone } from "react-icons/md";
import CustomDialog from "./DialougeBox";


const Clients = () => {

    const { baseUrl } = useGlobalContext();
    const [openIndex, setOpenIndex] = useState(null);
    let subtitle;
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

    //Toggle swich off on btn
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    }

    //Toggle swich off on btn


    //Toggle swich off on btn
    const [isOn1, setIsOn1] = useState(false);

    const toggleSwitch1 = () => {
        setIsOn1(!isOn1);
    }

    //Toggle swich off on btn

    const [clientData, setClientData] = useState(null);

    const fetchDetail = async () => {
        const result = await fetch(baseUrl + "client");
        if (result.status == 200) {
            const res = await result.json();
            console.log(res)
            setClientData(res.data)
        }
        else {
            alert("An Error Occured")
        }
    }

    useEffect(() => {
        fetchDetail();
    }, [])

    const [modalIsOpen2, setIsOpen2] = React.useState(false);
    function openModal2() {
        setIsOpen2(true);
    }
    function afterOpenModal2() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';

    }

    function closeModal2() {
        setIsOpen2(false);
    }
    const [isOpen, setIsOpen] = useState(false);
    const [currency, setCurrency] = useState([]);
    const [defaultLanguages, setDefaultLanguages] = useState(["portuguese", "German", "indonesia", "catlan", "Spanish", "Turkish", "Slovak", "Vitnamese", "Swedish", "Portguese_br", "ukrainian", "polish"])
    const [language, setLanguage] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const groups = [
        'ASTROPITAH SMM PROJECT',
        'digital',
        'HONEY TOUR & TRAVELS',
        'vevge',
        'webs'
    ]
    const [selectedGroups, setSelectedGroups] = useState([]);
    const toggleGroupSelection = (group) => {
        setSelectedGroups((prevSelected) =>
            prevSelected.includes(group)
                ? prevSelected.filter(g => g !== group)
                : [...prevSelected, group]
        );
    };
    const handleGroupSelection = (selectAll) => {
        if (selectAll) {
            setSelectedGroups(groups);//select all group
            setSelectAll(true);
        }
        else {
            setSelectedGroups([]); //deselect all group
            setSelectAll(false);
        }
    };
    const [selectedClient, setSelectedClient] = useState(null);

    // Array of accordion items
    const accordionItems = [
        {
            title:
                <div className="bg-[white] rounded-lg ">
                    <table className="w-full">
                        <thead className=" bg-white border border-[#e5e7eb] rounded-lg">
                            <tr>

                                <th className="border-r p-[10px] w-[30px] font-medium   whitespace-nowrap"><input className="text-[12px] h-[12px] " type="checkbox" /></th>





                                <th className="text-[11px] border-r font-medium p-[10px] ">#</th>


                                <th className="text-[11px] p-[10px] border-r font-medium whitespace-nowrap">Company</th>


                                <th className="text-[11px] font-medium p-[10px] border-r whitespace-nowrap	">Primary Contact</th>


                                <th className="text-[11px] font-medium p-[10px] border-r whitespace-nowrap	">Primary Email</th>



                                <th className="text-[11px] font-medium p-[10px] border-r whitespace-nowrap	">Phone</th>
                                <th className="text-[11px] font-medium p-[10px] border-r whitespace-nowrap	">Active</th>

                                <th className="text-[11px] font-medium p-[10px] border-r whitespace-nowrap	">Groups</th>
                                <th className="text-[11px] font-medium p-[10px] border-r whitespace-nowrap	">Date Created</th>


                                <th className="text-[11px] font-medium p-[10px] border-r whitespace-nowrap	">
                                    Action
                                </th>







                            </tr>
                        </thead>
                    </table>
                </div>,
            content: (
                <table className="w-full " >
                    <tbody>
                        {
                            !clientData && <div className="flex w-full justify-center items-center py-6">
                                <div role="status">
                                    <svg
                                        aria-hidden="true"
                                        className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                        viewBox="0 0 100 101"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"
                                        />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>

                        }

                        {
                            clientData && clientData.map((item, index) => {
                                return <tr className="border-b border-[#e5e7eb]">

                                    <td className=" p-[10px]   font-medium   whitespace-nowrap"><input className="text-[12px] h-[12px] " type="checkbox" /></td>

                                    <td className="text-[11px]    font-medium p-[10px] ">{index + 1}</td>

                                    <td className="text-[11px] p-[10px]  font-medium whitespace-nowrap">{item.company}</td>

                                    <td className="text-[11px] font-medium p-[10px]  whitespace-nowrap	">{item.phone}</td>

                                    <td className="text-[11px] font-medium p-[10px] whitespace-nowrap	">N/A</td>

                                    <td className="text-[11px] font-medium p-[10px]   whitespace-nowrap	">{item.phone}</td>
                                    <td className="text-[11px] font-medium p-[10px]    whitespace-nowrap	">
                                        <div className="flex items-center justify-center gap-[6px]">
                                            {/* Toggle Switch */}
                                            <div
                                                className={`${item.status ? 'bg-[#8a25b0]' : 'bg-gray-300'
                                                    } relative inline-block w-12 h-6 rounded-full transition-colors duration-300 ease-in-out cursor-pointer`}
                                                onClick={toggleSwitch1}
                                            >
                                                <span
                                                    className={`${item.status == "active" ? 'translate-x-6' : 'translate-x-0'
                                                        } inline-block w-6 h-6 bg-[#f3ecec] rounded-full transform transition-transform duration-300 ease-in-out`}
                                                />
                                            </div>
                                        </div></td>
                                    <td className="text-[11px] font-medium p-[10px]  whitespace-nowrap	">{item.groups}</td>
                                    <td className="text-[11px] font-medium p-[10px]    whitespace-nowrap	">{new Date(item.created_at).toDateString()} </td>


                                    <td>
                                        <div className="flex gap-[5px]">
                                            <BorderColorIcon className="text-[#27004a]" onClick={() => { setSelectedClient(item) }} />
                                            <DeleteIcon onClick={()=>deleteData(item.id)} className="text-red-500"/>
                                            
                                        </div>
                                    </td>







                                </tr>
                            })
                        }



                    </tbody>





                </table>

            )
        },

        //   { title: "2", content: "This is the content for item 2" },
        //     { title: "3", content: "This is the content for item 3" },

    ];
    console.log("---",selectedClient?.company)

    useEffect(() => {
        if (selectedClient) {
            setCompany(selectedClient.company || "");
            setVatNumber(selectedClient.vat_number || "");
            setPhone(selectedClient.phone || "");
            setWebsite(selectedClient.website || "");
            setAddress(selectedClient.address || "");
            setCity(selectedClient.city || "");
            setState(selectedClient.state || "");
            setZipCode(selectedClient.zip_code || "");
            setCountry(selectedClient.country || "");
            setSelectedGroups(selectedClient.groups)
            setCurrency(selectedClient.currency)
            setLanguage(selectedClient.default_language)
            // Add any other fields like groups, language, etc.
        }
    }, [selectedClient]);

    const [company, setCompany] = useState(selectedClient?.company)
    const [vatNumber, setVatNumber] = useState(selectedClient?.vat_number);
    const [phone, setPhone] = useState(selectedClient?.phone);
    const [website, setWebsite] = useState(selectedClient?.website);
    const [address, setAddress] = useState(selectedClient?.address);
    const [city, setCity] = useState(selectedClient?.city);
    const [state, setState] = useState(selectedClient?.state);
    const [zipCode, setZipCode] = useState(selectedClient?.zip_code);
    const [country, setCountry] = useState(selectedClient?.country);


    const updateData = async (e) => {
        e.preventDefault();
        const result = await fetch(baseUrl + "/client/" + selectedClient.id, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ company: company, vat_number: vatNumber, phone: phone, website: website, groups: selectedGroups, currency: currency, default_language: language, address: address, country: country, state: state, city: city, zip_code: zipCode })
        })
        if (result.status == 200) {
            fetchDetail()
            alert("Details Update Successfully")
        }
        else (
            alert("An Error Occured")
        )
    }

    async function deleteData (id) {
        const result = await fetch(baseUrl + "/client/" + id, {
            method: "DELETE",
        });
        if (result.status === 200) {
            alert("Delete Record Successfully");
            fetchDetail();
        } else {
            alert("An Error Occurred");
        }
    };


    return (
        <div className=" w-full  top-[95px] right-[5px] ">

            <div className="bg-[#fff] p-[10px] ml-[10px]">
                <div className="mb-[14px] flex gap-[10px] items-center import-customers">

                    <Link to="/addnewclient" className="text-[#fff] client-add text-[14px] bg-[#8a25b0] newcustomers  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <AddIcon className="newadd" /> New Clients</Link>
                    <Link to="/" className="text-[#fff] text-[14px] client-add bg-[#8a25b0]   focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <AddIcon className="newadd" /> Import Clients</Link>
                    <Link to="/" className="text-[#000] text-[14px] client-add bg-[#f4f2f2]  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  p-[8px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <PersonIcon className="newadd mr-[5px]" />Contacts</Link>
                </div>

                <div className="p-[20px] summary-border w-full bg-white  rounded-lg">
                    <h2 className="font-medium mb-[10px] flex gap-[6px] items-center"> <LibraryBooksIcon />Clients</h2>


                    <div className="flex justify-between items-center mb-[14px] betwe-cent">
                        <div className="flex gap-[10px] client-add">
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
                            <p className="  p-[7px] text-[12px] w-[55px] font-medium summary-border rounded-md  "> Export </p>

                            <p className=" relative p-[7px] text-[12px] w-[116px] font-medium summary-border rounded-md  "> Bulk Actions <CachedIcon className="absolute cursor-pointer right-[5px] top-[9px] newadd2" /> </p>

                        </div>
                        <div className="relative client-add">
                            <input className="p-[6px] client-add rounded-2xl  summary-border text-[13px] " type="text" placeholder=" Search......." />
                            <SearchIcon className="absolute newadd2 right-[8px] top-[8px]" />
                        </div>
                    </div>

                    {accordionItems.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg  newsetup overflow-scroll">
                            {/* Accordion Header */}
                            <button
                                onClick={() => handleToggle(index)}
                                className=" w-full text-left  focus:outline-none p-[7px]"
                            >
                                {item.title}

                            </button>

                            {/* Accordion Content */}
                            {openIndex === index && (
                                <div className="mb-[10px] text-gray-700 p-[7px]">
                                    {item.content}

                                </div>
                            )}
                        </div>
                    ))}

                </div>





            </div>


                <Modal
                    isOpen={selectedClient ? true : false}
                    onAfterOpen={afterOpenModal2}
                    onRequestClose={closeModal2}
                    // style={customStyles}
                    contentLabel="Example Modal"
                    className="w-[96%] xl:w-[40%] absolute top-[50%] left-[50%] bottom-auto p-0 bg-[#fff] shadow shadow-md rounded-[10px] translate-x-[-50%] translate-y-[-50%]"

                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='border-b-1 p-3 text-[13px] xl:text-[15px] '>Update Clients</h2>
                    <button onClick={() => { setSelectedClient(null) }} className='absolute right-[5px] top-[3px] font-semibold	  bg-[#511992] rounded-full'><CloseIcon className='text-white' /></button>
                    <div className='pb-2 modal-field p-[10px] border border-t'>
                        <form>
                            <div className="grid grid-cols-1 gap-6">
                                {/* <!-- Company --> */}
                                <div>
                                    <label for="company" className="block text-sm font-medium text-gray-700">Company *</label>
                                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} id="company" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                                </div>

                                {/* <!-- VAT Number --> */}
                                <div>
                                    <label for="vat" className="block text-sm font-medium text-gray-700">VAT Number</label>
                                    <input type="text" value={vatNumber} onChange={(e) => setVatNumber(e.target.value)} id="vat" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                </div>

                                {/* <!-- Phone --> */}
                                <div>
                                    <label for="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input type="tel" value={phone} id="phone" onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                </div>

                                {/* <!-- Website --> */}
                                <div>
                                    <label for="website" className="block text-sm font-medium text-gray-700">Website</label>
                                    <input type="url" value={website} id="website" onChange={(e) => setWebsite(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                </div>

                                {/* <!-- Groups --> */}
                                <div className="relative">
                                    <label for="groups" className="block text-sm font-medium text-gray-700">Groups</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        isMulti
                                        defaultValue={groups?.filter((opt) => selectedClient?.groups.includes(opt)).map((opt) => ({ label: opt, value: opt }))

                                        }
                                        onChange={(selectedOptions) => {
                                            const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];
                                            setSelectedGroups(selectedValues);
                                        }}
                                        options={groups?.map((opt) => ({
                                            label: opt,
                                            value: opt,
                                        }))}
                                    />


                                </div>

                                {/* <!-- Currency and Default Language in one row --> */}
                                <div className="flex flex-row justify-between items-center space-x-2 w-full ">
                                    {/* <!-- Currency --> */}

                                    <div className="relative inline-block text-left w-1/2">
                                        <label htmlFor="" className="block text-sm font-medium text-gray-700 ">currency</label>
                                        <Select
                                            closeMenuOnSelect={false}
                                            isMulti
                                            defaultValue={[{ label: "USD", value: "$" }, { label: "INR", value: "₹" }].filter((opt) => selectedClient?.currency.includes(opt.value))}
                                            onChange={(o) => {
                                                const arr = o.map((op) => op.value)
                                                setCurrency(arr)
                                            }}
                                            options={[{ label: "USD", value: "$" }, { label: "INR", value: "₹" }]}
                                        />
                                    </div>


                                    {/* <!-- Default Language --> */}
                                    <div className="w-1/2">
                                        <label for="language" className="block text-sm font-medium text-gray-700">Default Language</label>
                                        <Select
                                            closeMenuOnSelect={false}
                                            isMulti
                                            onChange={(o) => {
                                                const arr = o.map((op) => op.value)
                                                setLanguage(arr)
                                            }}
                                            defaultValue={defaultLanguages.filter((lang) => (selectedClient?.default_language.includes(lang))).map((op) => {
                                                return { label: op, value: op }
                                            })}
                                            options={defaultLanguages.map((op) => {
                                                return { label: op, value: op }
                                            })}
                                        />
                                    </div>
                                </div>

                                {/* <!-- Address --> */}
                                <div>
                                    <label for="address" className="block text-sm font-medium text-gray-700">Address</label>
                                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} id="address" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                </div>

                                {/* <!-- City --> */}
                                <div>
                                    <label for="city" className="block text-sm font-medium text-gray-700">City</label>
                                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} id="city" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                </div>

                                {/* <!-- State --> */}
                                <div>
                                    <label for="state" className="block text-sm font-medium text-gray-700">State</label>
                                    <input type="text" id="state" onChange={(e) => setState(e.target.value)} value={state} className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                </div>

                                {/* <!-- Zip Code --> */}
                                <div>
                                    <label for="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
                                    <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} id="zip" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                </div>

                                {/* <!-- Country --> */}
                                <div>
                                    <label for="country" className="block text-sm font-medium text-gray-700">Country</label>
                                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} id="country" className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                </div>
                            </div>

                            {/* <!-- Submit Button --> */}
                            <div className="mt-6  w-full md:w-[45%] flex justify-between md:justify-end  md:float-right">
                                <button type="submit" className=" second-btn " onClick={updateData}>
                                    Update</button>
                            </div>
                        </form>

                    </div>
                </Modal>


        </div>
    );
};
export default Clients

