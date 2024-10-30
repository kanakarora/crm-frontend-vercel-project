import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Early_Leaving_Policy from './Early_Leaving_Policy'
import Late_Coming_Policy from './Late_Coming_Policy';
import OverTime_Pay_Policy from './OverTime_Pay_Policy';


const Penalty_Overtime = () => {



  return (
    <div className="Penalty-Overtime-Tab mt-[20px] ">
      <div className="tabs-attendance">
        <Tabs> 
        <TabList className="flex text-center flex-col gap-[10px] xl:flex-row lg:flex-row mb-[20px]">       
            <Tab><button>Early Leaving Policy</button></Tab>
            <Tab><button>Late Coming Policy</button></Tab>
            <Tab><button>Overtime Pay Policy</button></Tab>
        </TabList>

        <TabPanel><Early_Leaving_Policy/></TabPanel>
        <TabPanel><Late_Coming_Policy/></TabPanel>
        <TabPanel><OverTime_Pay_Policy/></TabPanel>
      </Tabs>
      </div>
    </div>
  )
}

export default Penalty_Overtime