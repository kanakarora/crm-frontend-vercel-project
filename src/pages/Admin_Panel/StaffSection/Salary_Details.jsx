import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Salary_Details = () => {
  const [toggleButton, settoggleButton] = useState({
    addAllowances1: "false",
    Employer_PF_Contribution: "false",
    Employer_PF_Contribution2: "false",
    Employer_ESI_Contribution: "false",
    Employer_ESI_Contributio2: "false",
    addAllowances2: "false",
  });

  const handletoggleButton = (button) => {
    settoggleButton((prev) => ({
      ...prev,
      [button]: !prev[button],
    }));
  };

  return (
    <div className="salary-details layout w-[100%]">
      <div className="flex items-center justify-between border-b border-[#DBDBDB] pb-6 max-[1050px]:block">
        <h1 className="text-[30px] flex gap-2 items-center font-medium max-[1050px]:text-[25px] max-[660px]:text-[20px]">
          <ArrowBackIcon />
          Salary Details Import Settings
        </h1>

        <div className="btn space-x-6 max-[1050px]:mt-7">
          <button className="h-[46px] w-[113px] text-[#8A25B0] border border-[#8A25B0] rounded-md">
            Cancel
          </button>
          <button className="h-[46px] w-[166px] text-white bg-[#8A25B0] border border-[#8A25B0] rounded-md">
            Save Settings
          </button>
        </div>
      </div>

      {/*--Earnings Part--*/}
      <div className="mt-8">
        <div className="bg-[#F0F6FE] h-[48px] shadow-sm">
          <h1 className="text-[16px] font-medium mt-3 pt-3 pl-8">Earnings</h1>
        </div>
        <div className="flex mt-12 ml-16 ">
          <div className="w-[100%] space-y-5 ">
            <div className="flex items-center justify-between xl:w-[50%] lg:w-[50%] sm:w-[50%]">
              <span className="text-[16px] font-semibold">Heads</span>
              <h1 className="text-[16px] font-semibold">Calculation</h1>
            </div>

            <div className="flex items-center justify-between xl:w-[51.5%] lg:w-[51.5%] sm:w-[51.5%]">
              <span className="text-[16px] font-medium">BASIC</span>
              <select
                name=""
                id=""
                className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-sm"
              >
                <option value="On Attendance">On Attendance</option>
              </select>
            </div>

            <div className="flex items-center justify-between  xl:w-[51.5%] lg:w-[51.5%] sm:w-[51.5%] ">
              <span className="text-[16px] font-medium">HRA</span>
              <select
                name=""
                id=""
                className="h-[25px] w-[117px] border  border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-sm"
              >
                <option value="On Attendance">On Attendance</option>
              </select>
            </div>

            <div className="flex items-center justify-between  xl:w-[51.5%] lg:w-[51.5%] sm:w-[51.5%] ">
              <span className="text-[16px] font-medium">
                Dearness Allowance
              </span>
              <select
                name=""
                id=""
                className="h-[25px] w-[117px] border border-[#D9D9D9] bg-white text-[10px] pl-4 rounded-sm"
              >
                <option value="On Attendance">On Attendance</option>
              </select>
            </div>

            <div className="flex items-center  justify-between  xl:w-[50%] lg:w-[50%] sm:w-[50%] ">
              <button
                onClick={() => handletoggleButton("addAllowances1")}
                className="text-[#8A25B0]"
              >
                + Add Allowances
              </button>
            </div>
          </div>
        </div>

        {toggleButton.addAllowances1 && (
          <>
            <div className="w-[330px] h-[500px] border border-[#B1B1B1] absolute bg-white top-[55vh] left-[16vw] rounded-md">
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

      {/*--Compliances Part--*/}

      <div className=" mt-12">
        <div className="bg-[#F0F6FE] h-[48px] shadow-sm">
          <h1 className="text-[16px] font-medium mt-3 pt-3 pl-8">
            Compliances
          </h1>
        </div>

        <div className="flex mt-12 ml-16 gap-[16rem]">
          <div className="w-[100%] space-y-5">
            <div className="flex items-center  justify-between  xl:w-[54%] lg:w-[54%] sm:w-[54%] ">
              <span className="text-[16px] font-semibold">
                Employer Contributions
              </span>
              <h1 className="text-[16px] font-semibold">Select Components</h1>
            </div>

            <div className="flex items-center justify-between xl:w-[55.5%] lg:w-[55.5%] sm:w-[55.5%] ">
              <span className="text-[16px] font-medium">
                Employer PF Contribution
              </span>
              <button
                onClick={() => handletoggleButton("Employer_PF_Contribution")}
                name=""
                id=""
                className="h-[25px] w-[185px] text-[#8A25B0] border border-[#D9D9D9] bg-white text-[10px] pl-24 rounded-sm"
              >
                {" "}
                + Add
              </button>

              {toggleButton.Employer_PF_Contribution && (
                <>
                  <div className="w-[185px] h-[150px] absolute bg-white border left-[996px] top-[720px]  border-[#B1B1B1]">
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
            </div>

            <div className="flex items-center justify-between xl:w-[55.5%] lg:w-[55.5%] sm:w-[55.5%]">
              <span className="text-[16px] font-medium">
                {" "}
                Employer ESI Contribution
              </span>
              <button
                onClick={() => handletoggleButton("Employer_ESI_Contribution")}
                name=""
                id=""
                className="h-[25px] w-[185px] text-[#8A25B0] border border-[#D9D9D9] bg-white text-[10px] pl-24 rounded-sm"
              >
                {" "}
                + Add
              </button>

              {toggleButton.Employer_ESI_Contribution && (
                <>
                  <div className="w-[185px] h-[150px] absolute bg-white border left-[996px] top-[760px]  border-[#B1B1B1]">
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
            </div>

            <div className="flex items-center  justify-between  xl:w-[57%] lg:w-[57%] sm:w-[57%]">
              <span className="text-[16px] font-medium">Employer LWF</span>
              <h1 className="text-[14px] text-[#B1B1B1]">
                You can set this at staff level
              </h1>
            </div>
          </div>
        </div>

        <div className="flex mt-12 ml-16 gap-[16rem] max-[660px]:gap-[5rem]">
          <div className="w-[100%] space-y-5">
            <div className="flex items-center  justify-between xl:w-[54%] lg:w-[54%] sm:w-[54%]">
              <span className="text-[16px] font-semibold">
                Employer Contributions
              </span>
              <h1 className="text-[16px] font-semibold">Select Components</h1>
            </div>

            <div className="flex items-center justify-between xl:w-[55.5%] lg:w-[55.5%] sm:w-[55.5%] ">
              <span className="text-[16px] font-medium">
                Employer PF Contribution
              </span>

              <button
                onClick={() => handletoggleButton("Employer_PF_Contribution2")}
                name=""
                id=""
                className="h-[25px] w-[185px] text-[#8A25B0] border border-[#D9D9D9] bg-white text-[10px] pl-24 rounded-sm"
              >
                {" "}
                + Add
              </button>
              {toggleButton.Employer_PF_Contribution2 && (
                <>
                  <div className="w-[185px] h-[150px] absolute bg-white border left-[996px] top-[920px]  border-[#B1B1B1]">
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
            </div>

            <div className="flex items-center  justify-between xl:w-[55.5%] lg:w-[55.5%] sm:w-[55.5%]   ">
              <span className="text-[16px] font-medium">
                {" "}
                Employer ESI Contribution
              </span>
              <button
                onClick={() => handletoggleButton("Employer_ESI_Contribution2")}
                name=""
                id=""
                className="h-[25px] w-[185px] text-[#8A25B0] border border-[#D9D9D9] bg-white text-[10px] pl-24 rounded-sm"
              >
                {" "}
                + Add
              </button>

              {toggleButton.Employer_ESI_Contribution2 && (
                <>
                  <div className="w-[185px] h-[150px] absolute bg-white border left-[996px] top-[970px]  border-[#B1B1B1]">
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
            </div>

            <div className="flex items-center justify-between xl:w-[56.5%] lg:w-[56.5%] sm:w-[56.5%] ">
              <span className="text-[16px] font-medium">Professional Tax</span>
              <h1 className="text-[14px] text-[#B1B1B1]">
                You can set this at staff level
              </h1>
            </div>

            <div className="flex items-center justify-between xl:w-[56.5%] lg:w-[56.5%] sm:w-[56.5%] ">
              <span className="text-[16px] font-medium">Employer LWF</span>
              <h1 className="text-[14px] text-[#B1B1B1]">
                You can set this at staff level
              </h1>
            </div>

            <div className="flex items-center  justify-between xl:w-[52.5%] lg:w-[52.5%] sm:w-[52.5%]  ">
              <span className="text-[16px] font-medium">TDS</span>
              <h1 className="text-[14px] text-[#B1B1B1]">System Calculated</h1>
            </div>
          </div>
        </div>
      </div>

      {/*--Deductions Part--*/}
      <div className="mt-12">
        <div className="bg-[#F0F6FE] h-[48px] shadow-sm">
          <h1 className="text-[16px] font-medium mt-3 pt-3 pl-8">Deductions</h1>
        </div>

        <div className="mt-8">
          <div className="flex mt-12 ml-16">
            <div className="w-[100%] space-y-5">
              <div className="flex items-center justify-between xl:w-[50%] lg:w-[50%] sm:w-[50%]  ">
                <span className="text-[16px] font-semibold">Heads</span>
                <h1 className="text-[16px] font-semibold">Calculation</h1>
              </div>

              <div className="flex items-center justify-between xl:w-[50%] lg:w-[50%] sm:w-[50%] ">
                <h1 className="text-[16px] text-[#B1B1B1]">
                  No Deductions Added
                </h1>
              </div>
              <div className="flex items-center justify-between xl:w-[50%] lg:w-[50%] sm:w-[50%] ">
                <button onClick={() => handletoggleButton('addAllowances2')} className="text-[#8A25B0]">+ Add Allowances</button>

                {toggleButton.addAllowances2 && (
                  <>
                    <div className="w-[330px] h-[500px] border border-[#B1B1B1] absolute bg-white top-[89vh] left-[290px] rounded-md">
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

      {/*--Scroll Pages--*/}
      <div className="mt-14">
        <h1>Showing 1-1 of 1 staff</h1>
        <div className="flex justify-center items-center gap-3">
          <button className="border border-[#CFCFCF] rounded-md h-[38px] w-[39px] text-[#CFCFCF] pl-2">
            <ArrowBackIosIcon />
          </button>
          <button className="rounded-md h-[38px] w-[39px] bg-[#8A25B0] text-white">
            1
          </button>
          <button className="border border-[#CFCFCF] rounded-md h-[38px] w-[39px] text-[#CFCFCF]">
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Salary_Details;
