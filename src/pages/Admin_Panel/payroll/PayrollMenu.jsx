import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import group from "../../../Assets/Images/Group.svg";
import attendance from "../../../Assets/Images/attendance.svg";
import bank from "../../../Assets/Images/bank.svg";
import salary from "../../../Assets/Images/salary.svg";
import leave from "../../../Assets/Images/leave.svg";
import penalty from "../../../Assets/Images/penalty.svg";
import permission from "../../../Assets/Images/permission.svg";
import PayrollSummary from "./PayrollSummary";
import PayrollSalary from "./RunPayroll";
import RunPayroll from "./RunPayroll";
import AdvancePayroll from "./AdvancePayroll";
import PayrollIncentives from "./PayrollIncentives";
import PayrollReimbrusments from "./PayrollReimbrusments";
import PaymentHistory from "./PaymentHistory";
import { useGlobalContext } from "../../../Context/GlobalContext";

const PayrollMenu = () => {
  const {selectedTab,setSelectedTab} = useGlobalContext()
  return (
    <div className="staff-menu payroll-menus">
      <h3 className="text-[20px]  font-[Nunito]">Pay Roll</h3>

      <div className="tab-section mt-[30px]">
      <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
          <TabList className="flex   w-[100%] overflow-x-scroll bg-[#FFFFFF]  rounded-[12px]  p-[4px] pb-[4px]  set-shadow ">
            <Tab>
              <div className="flex items-center  whitespace-nowrap mr-[20px]">
                <h2 className="text-sm text-[#B1B1B1]  ml-[15px]">Payroll Summary</h2>
              </div>
            </Tab>
            <Tab>
              <div className="flex items-center  whitespace-nowrap mr-[20px]">
                <h2 className="text-sm text-[#B1B1B1]  ml-[15px]">
                  Run Payroll
                </h2>
              </div>
            </Tab>
            <Tab>
              <div className="flex items-center  whitespace-nowrap mr-[20px]">
                <h2 className="text-sm text-[#B1B1B1]  ml-[15px]">
                  Advance
                </h2>
              </div>
            </Tab>
            <Tab>
              <div className="flex items-center  whitespace-nowrap mr-[20px]">
                <h2 className="text-sm text-[#B1B1B1]  ml-[15px]">
                  Incentives
                </h2>
              </div>
            </Tab>
            <Tab>
              <div className="flex items-center whitespace-nowrap mr-[20px]">
                <h2 className="text-sm text-[#B1B1B1]  ml-[15px]">
                  Reimbrusments
                </h2>
              </div>
            </Tab>
 
            <Tab>
              <div className="flex items-center  whitespace-nowrap mr-[20px]">
                <h2 className="text-sm text-[#B1B1B1]  ml-[15px]">
                  Payment History
                </h2>
              </div>
            </Tab>
          </TabList>

          <TabPanel>
            <PayrollSummary />
          </TabPanel>

          <TabPanel>
            <RunPayroll />
          </TabPanel>

          <TabPanel>

            <AdvancePayroll />
          </TabPanel>

          <TabPanel>

            <PayrollIncentives />
          </TabPanel>

          
          <TabPanel>

            <PayrollReimbrusments />
          </TabPanel>

          <TabPanel>

            <PaymentHistory />
          </TabPanel>

        </Tabs>
      </div>
    </div>
  )
}

export default PayrollMenu