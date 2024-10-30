import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Plan = () => {
  return (
    <div className="buy-plans">
      <div className="text-center text-[#566a7f]">
        <h1 className="text-[35px]">Pricing Plans</h1>
        <p>
          All plans include advanced tools and features to boost your
          productivityChoose the best plan to fit your needs.
        </p>
      </div>

      <div className="tab-section ">
        <Tabs>
          <TabList className="flex items-center justify-center border border-[#8A25B0] mx-[42%]">
            <Tab className= "hover:bg-[#8A25B0] hover:text-white text-[#8A25B0] px-2 py-2 border-none">Monthly</Tab>
            <Tab className="hover:bg-[#8A25B0] hover:text-white text-[#8A25B0] px-2 py-2" >Yearly</Tab>
            <Tab className="hover:bg-[#8A25B0] hover:text-white text-[#8A25B0] px-2 py-2">Lifetime</Tab>
          </TabList>
          <TabPanel>
            
          </TabPanel>
          <TabPanel>
            
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Plan;