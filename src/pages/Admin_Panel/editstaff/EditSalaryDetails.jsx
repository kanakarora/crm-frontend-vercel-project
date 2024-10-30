import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "@davzon/react-country-state-city";

const EditSalaryDetails = () => {
  const [stateid, setstateid] = useState(0);
  const [toggleButton, settoggleButton] = useState({
    addAllowances1: false,
    Employer_PF_Contribution: false,
    Employer_PF_Contribution2: false,
    Employer_ESI_Contribution: false,
    Employer_ESI_Contributio2: false,
    addAllowances2: false,
  });

  const handletoggleButton = (button) => {
    settoggleButton((prev) => ({
      ...prev,
      [button]: !prev[button], // Toggle the boolean value
    }));
  };
  return (
    <div className="salary-details layout   w-full xl:p-[20px] p-[10px] pt-[80px] xl:p-[40px] relative xl:pt-[100px]    xl:pl-[320px] flex flex-col">
      <div className="flex items-center justify-between  xl:pb-6  ">
        <h1 className="  font-medium ">
          Salary Details Import Settings
        </h1>
        <div className="mt-2 xl:mt-0">

          <button className="second-btn">
            Update
          </button>
        </div>
      </div>

      <div className="flex justify-between whitespace-normal flex-wrap gap-[10px]">
        <div className="xl:basis-1/5 lg:basis-5/12 md:basis-5/12 sm:basis-5/12 basis-full">
          <label className="text-[14px]">Effective Date of Change</label><br/>
          <input type='month' className="mt-[5px]   border border-[#D9D9D9] bg-white  p-1 rounded-md focus:outline-none w-full"/>
        </div>
        <div className="xl:basis-1/5 lg:basis-5/12 md:basis-5/12 sm:basis-5/12 basis-full	">
          <label className="text-[14px]">Salary Type</label><br/>
          <select className="mt-[5px]   border border-[#D9D9D9] bg-white p-1  rounded-md focus:outline-none w-full">
            <option>
              Per Month
            </option>
            <option>
              Per Day
            </option>
            <option>
              Per Hour
            </option>
          </select>
        </div>
        <div className="xl:basis-1/5 lg:basis-5/12 md:basis-5/12 sm:basis-5/12 basis-full">
          <label className="text-[14px]">Salary Structure
          </label><br/>
          <select className="mt-[5px]   border border-[#D9D9D9] bg-white p-1  rounded-md focus:outline-none w-full">
            <option>
              Salary Box Provided Breakdown
            </option>
            <option>
             Custom
            </option>
            
          </select>
        </div>
        <div className="xl:basis-1/5 lg:basis-5/12 md:basis-5/12 sm:basis-5/12 basis-full">
          <label className="text-[14px]">CTC Amount</label><br/>
          <div className="relative">
            <span className="absolute top-[10px] left-[4px]">₹</span>
            <input type="number" placeholder="Enter Amount"className="mt-[5px] pl-[20px]   border border-[#D9D9D9] bg-white p-1  rounded-md focus:outline-none w-full"/>
            </div>
        </div>


      </div>

      {/*--Earnings Part--*/}
      <div className="">
        <h1 className="    bg-[#F0F6FE] shadow-sm    text-[13px] xl:text-[14px] font-normal mt-[20px] p-[10px]">Earnings</h1>
        <div className="flex xl:mt-12 mt-[20px] xl:ml-16 ml-0 ">
          <div className="w-[100%] xl:w-[50%] space-y-5 ">
            <div className="flex items-center justify-between ">
              <span className="text-[16px] font-semibold">Heads</span>
              <h1 className="text-[16px] font-semibold">Calculation</h1>
            </div>

            <div className="flex items-center justify-between">
              <span className="        text-[13px] xl:text-[14px] font-normal
">BASIC</span>
              <select
                name=""
                id=""
                className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none"
              >
                <option value="On Attendance">On Attendance</option>
              </select>
            </div>

            <div className="flex items-center justify-between   ">
              <span className="        text-[13px] xl:text-[14px] font-normal
">HRA</span>
              <select
                name=""
                id=""
                className="h-[25px] w-[117px] border  border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none"
              >
                <option value="On Attendance">On Attendance</option>
              </select>
            </div>

            <div className="flex items-center justify-between   ">
              <span className="        text-[13px] xl:text-[14px] font-normal
">
                Dearness Allowance
              </span>
              <select
                name=""
                id=""
                className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none"
              >
                <option value="On Attendance">On Attendance</option>
              </select>
            </div>

            <div className="flex items-center  justify-between relative ">
              <button
                onClick={() => handletoggleButton("addAllowances1")}
                className="text-[#27004a]"
              >
                + Add Allowances
              </button>
              {toggleButton.addAllowances1 && (
                <>
                  <div className="w-[330px] h-auto border border-[#B1B1B1] absolute bg-white top-[50px] left-[0] rounded-md z-10">
                    <input
                      type="text"
                      className="w-[320px] h-[30px] text-[12px] border border-[#D9D9D9] rounded-sm m-1 pl-2"
                      placeholder="Search"
                    />
                    <ul className="m-1 text-[12px] space-y-2">
                      <li>Bouns and Incentives</li>
                      <li>Cash Allowance </li>
                      <li>CCA</li>
                      <li>Children Education Allowance </li>
                      <li>Conveyanle Allowance </li>
                      <li>Distance Allowance </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="w-[100%] xl:w-[50%] space-y-[18px] flex items-end justify-start flex-col">
            <div className="flex items-center justify-between ">
              <span className="text-[16px] font-semibold">Heads</span>

            </div>
            <div className="flex items-center justify-between">
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>

            </div>
            <div className="flex items-center justify-between">
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>

            </div>
            <div className="flex items-center justify-between">
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>

            </div>
          </div>
        </div>


      </div>

      {/*--Compliances Part--*/}

      <div className=" xl:mt-12 mt-[0px]" >
        <h1 className="     bg-[#F0F6FE] shadow-sm    text-[13px] xl:text-[14px] font-normal mt-[20px] p-[10px]">
          Compliances
        </h1>

        <div className="flex xl:mt-12 mt-[20px] xl:ml-16 ml-0 gap-[30px] flex-col xl:flex-row lg:flex-row md:flex-row ">
          <div className="xl:w-[50%] w-[100%] space-y-5 w-full">
            <div className="flex items-center  justify-between   ">
              <span className="text-[13px] xl:text-[13px] font-semibold">
                Employer Contributions
              </span>
              <h1 className="text-[13px] xl:text-[13px] font-semibold">Select Components</h1>
            </div>

            <div className="flex items-center justify-between  ">
              <span className="        text-[13px] xl:text-[14px] font-normal
">
                Employer PF
              </span>
              {/* <div className="relative">
                <button
                  onClick={() => handletoggleButton("Employer_PF_Contribution")}
                  name=""
                  id=""
                  className="h-[25px] w-[100%] text-[#27004a] border border-[#D9D9D9] bg-white text-[10px] pl-24 rounded-sm pr-[4px]"
                >
                  {" "}
                  + Add
                </button>

                {toggleButton.Employer_PF_Contribution && (
                  <>
                    <div className="w-[185px] h-[150px] absolute bg-white border right-[20px] top-[50px]  border-[#B1B1B1] rounded-md z-10">
                      <ul className="text-[12px] m-2 font-medium space-y-2">
                        <li>Basic</li>
                        <li>HRA</li>
                        <li>Dearness Allowance</li>
                        <li>Overtime</li>
                        <li>Incentive</li>
                      </ul>
                    </div>
                  </>
                )}
              </div> */}
              <select className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none">
                <option>None</option>
                <option>
                  ₹ 1800 Limit
                </option>
                <option>
                  12 % Variable
                </option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="        text-[13px] xl:text-[14px] font-normal
">
                PF EDLI & Admin Charges

              </span>
              {/* <div className="relative">
                <button
                  onClick={() => handletoggleButton("Employer_ESI_Contribution")}
                  name=""
                  id=""
                  className="h-[25px] w-[100%] text-[#27004a] border border-[#D9D9D9] bg-white text-[10px] pl-24 rounded-sm pr-[4px]"
                >
                  {" "}
                  + Add
                </button>

                {toggleButton.Employer_ESI_Contribution && (
                  <>
                    <div className="w-[185px] h-[150px] absolute bg-white border right-[20px] top-[50px]  border-[#B1B1B1] rounded-md z-10">
                      <ul className="text-[12px] m-2 font-medium space-y-2">
                        <li>Basic</li>
                        <li>HRA</li>
                        <li>Dearness Allowance</li>
                        <li>Overtime</li>
                        <li>Incentive</li>
                      </ul>
                    </div>
                  </>
                )}
              </div> */}
              <select className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none">
                <option>None</option>
                <option>
                  ₹ 1800 Limit
                </option>
                <option>
                  12 % Variable
                </option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="        text-[13px] xl:text-[14px] font-normal
">
                Employer ESI

              </span>
              <select className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none">
                <option>None</option>
                <option>
                  3.25 % Variable
                </option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="        text-[13px] xl:text-[14px] font-normal
">
                Employer LWF
              </span>
              {/* <select className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none">
                <option>None</option>
                <option>
                  3.25 % Variable
                </option>
              </select> */}

              <StateSelect
                className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none"
                countryid={101}
                onChange={(e) => {
                  setstateid(e.id);
                }}
                placeHolder="Select State"
              />
            </div>


          </div>
          <div className="xl:w-[50%] w-[100%] space-y-5 w-full">
            <div className="flex items-center  justify-between   ">
              <span className="text-[13px] xl:text-[13px] font-semibold">
                Included in CTC
              </span>
              <h1 className="text-[13px] xl:text-[13px] font-semibold">Amount</h1>
            </div>

            <div className="flex items-center justify-between  ">
              <input type="checkbox" />
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>

            <div className="flex items-center justify-between  ">
              <h3>N/A</h3>
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>


            <div className="flex items-center justify-between  ">
              <input type="checkbox" />
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>

            <div className="flex items-center justify-between  ">
              <input type="checkbox" />
              <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>
          </div>

        </div>

        <div className="flex xl:mt-12 mt-[20px] xl:ml-16 ml-0 gap-[30px]">
          <div className="xl:w-[50%] w-[100%] space-y-5    ml-0 gap-[30px] ">
            <div className="flex items-center  justify-between   ">
              <span className="text-[13px] xl:text-[13px] font-semibold">
                Employer Contributions
              </span>
              <h1 className="text-[13px] xl:text-[13px] font-semibold">Calculation</h1>
            </div>

            <div className="flex items-center justify-between  ">
              <span className="        text-[13px] xl:text-[14px] font-normal
">
                Employer PF
              </span>

              <select className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none">
                <option>None</option>
                <option>
                  ₹ 1800 Limit
                </option>
                <option>
                  12 % Variable
                </option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="        text-[13px] xl:text-[14px] font-normal">
                Professional Tax
              </span>
              <StateSelect
                className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none"
                countryid={101}
                onChange={(e) => {
                  setstateid(e.id);
                }}
                placeHolder="Select State"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="        text-[13px] xl:text-[14px] font-normal">
                Employer ESI
              </span>

              <select className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none">
                <option>None</option>
                <option>
                  3.25 % Variable
                </option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="        text-[13px] xl:text-[14px] font-normal
">
                Employer LWF
              </span>
              {/* <select className=" h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none">
                <option>None</option>
                <option>
                  3.25 % Variable
                </option>
              </select> */}

              <StateSelect
                className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md focus:outline-none"
                countryid={101}
                onChange={(e) => {
                  setstateid(e.id);
                }}
                placeHolder="Select State"
              />
            </div>


          </div>
          <div className="xl:w-[50%] w-[100%] space-y-5">
            <div className="flex items-center  justify-end   ">

              <h1 className="text-[13px] xl:text-[13px] font-semibold">Amount</h1>
            </div>

            <div className="flex items-center justify-end  ">
 
               <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>

            <div className="flex items-center justify-end  ">
               <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>


            <div className="flex items-center justify-end invisible ">
               <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>

            <div className="flex items-center justify-end  ">
               <div className="relative">
                <span className="absolute top-[2px] left-[4px]">₹</span>
                <input type="number" placeholder="Enter Amount" className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-md pr-2 focus:outline-none" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/*--Deductions Part--*/}
      <div className="xl:mt-12 mt-[0px]">

        <h1 className="      bg-[#F0F6FE] shadow-sm    text-[13px] xl:text-[14px] font-normal mt-[20px] p-[10px]">Deductions</h1>

        <div className="xl:mt-8 mt-[20px]">
          <div className="flex xl:mt-12 mt-[20px] ml-0 xl:ml-16">
            <div className="w-[100%] xl:w-[50%] space-y-5">
              <div className="flex items-center justify-between   ">
                <span className="text-[13px] xl:text-[13px] font-semibold">
                  Heads</span>
                <h1 className="text-[13px] xl:text-[13px] font-semibold">Calculation</h1>
              </div>

              <div className="flex items-center justify-between  ">
                <h1 className="text-[16px] text-[#B1B1B1]">
                  No Deductions Added
                </h1>
              </div>
              <div className="flex items-center justify-between relative ">
                <button onClick={() => handletoggleButton('addAllowances2')} className="text-[#27004a] text-[14px] font-medium">+ Add Allowances</button>

                {toggleButton.addAllowances2 && (
                  <>
                    <div className="w-[330px] h-auto border border-[#B1B1B1] absolute bg-white top-[50px] right-[0px] z-10 rounded-md">
                      <input
                        type="text"
                        className="w-[320px] h-[30px] text-[12px] border border-[#D9D9D9] rounded-sm m-1 pl-2"
                        placeholder="Search"
                      />
                      <ul className="m-1 text-[12px] space-y-2">
                        <li>Medical Insurance Premium</li>
                        <li>Food Deduction </li>
                        <li>Benevolent Fund</li>
                        <li>Term Insurance </li>
                        <li>Group Accidental Policy & WC</li>
                        <li>Statutory Bonus Deduction</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

                <div className="flex justify-between rounded-md bg-[#F0F6FE] shadow-sm    text-[13px] xl:text-[14px] font-normal mt-[20px] p-[10px]">
                  <h3 className="font-medium">Total CTC: -</h3>
                  <h3 className="font-medium">₹ 0.00 /Month</h3>
                </div>

      {/*--Scroll Pages--*/}
      <div className="xl:mt-14 mt-[20px]">
        <h1 className="text-center mb-[10px]">Showing 1-1 of 1 staff</h1>
        <div className="flex justify-center items-center gap-3">
          <button className="border border-[#27004a] rounded-mdtext-[#CFCFCF] p-[18px] text-center relative rounded-md  hover:bg-[#27004a] hover:text-white">
            <ArrowBackIosIcon className="absolute top-[6px] left-[10px]" />
          </button>
          <button className="border border-[#27004a] bg-[#27004a] rounded-mdtext-[#CFCFCF] p-[18px] text-center relative rounded-md">
            <span className="absolute top-[6px] left-[15px] text-white " >1</span>
          </button>
          <button className="border border-[#27004a] rounded-mdtext-[#CFCFCF] p-[18px] text-center relative rounded-md hover:bg-[#27004a] hover:text-white">
            <ArrowForwardIosIcon className="absolute top-[6px] left-[6px]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditSalaryDetails