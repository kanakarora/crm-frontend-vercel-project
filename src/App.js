import React, { useEffect, useState } from "react";
import "./Assets/css/roledetail.css";
import "../src/Assets/css/new.css";
import "../src/Assets/css/customer.css";
import "../src/Assets/css/subscribe.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./components/Admin_Panel/NavBar";
import SideBar from "./components/Admin_Panel/SideBar";
import Project from "./pages/Admin_Panel/Projects/Project_Data";
import Role_Details from "./pages/Admin_Panel/Roles/RoleDetails";
// import Project_Progress from "../src/pages/Client_Panel/Project_Progress";
import AddRole from "./pages/Admin_Panel/Roles/Add_Role";
import AddDepartment from "../src/pages/Admin_Panel/Department/AddDepartment";
import EditRole from "./pages/Admin_Panel/Roles/EditRole";
import EditDepartment from "../src/pages/Admin_Panel/Department/EditDepartment";
import StaffMenu from "./pages/Admin_Panel/StaffSection/StaffMenu";
import AddOneStaff from "./pages/Admin_Panel/StaffSection/AddOneStaff";
import PersonalDetail from "../src/pages/Admin_Panel/editstaff/PersonalDetail";
import BankDetails from "../src/pages/Admin_Panel/editstaff/EditBankDetail";
import Editattendance from "../src/pages/Admin_Panel/editstaff/EditAttendanceDetail";
import EmployementDetail from "../src/pages/Admin_Panel/editstaff/EmployementDetail";
import UserPermission from "../src/pages/Admin_Panel/editstaff/UserPermission";
import EditLeavePolicies from "../src/pages/Admin_Panel/editstaff/EditLeavePolicies";
import CustomDetail from "../src/pages/Admin_Panel/editstaff/CustomDetail";
import BackgroundVerification from "../src/pages/Admin_Panel/editstaff/BackgroundVerification";
import VerifyAadhaar from "../src/pages/Admin_Panel/editstaff/VerifyAadhaar";
import VerifyPan from "../src/pages/Admin_Panel/editstaff/VerifyPan";
import DrivingLicense from "./pages/Admin_Panel/editstaff/VerifyDrivingLicense";
import VerifyUan from "../src/pages/Admin_Panel/editstaff/VerifyUan";
import VerifyFace from "../src/pages/Admin_Panel/editstaff/VerifyFace";
import VerifyAddress from "./pages/Admin_Panel/editstaff/VerifyAddress";
import UpperHeader from "../src/pages/Admin_Panel/editstaff/UpperHeader";
import SidebarEditStaff from "../src/pages/Admin_Panel/editstaff/SidebarEditStaff";
import Salary_Details from "./pages/Admin_Panel/StaffSection/Salary_Details";
import MultiStepForm from "../src/pages/Admin_Panel/authentication/steps/multistepform";
import Attendence_summary from "./pages/Admin_Panel/StaffSection/Attendance/Attendence_summary";
import Worktime from "./pages/Admin_Panel/StaffSection/Attendance/Worktime";
import Reviewfine from "./pages/Admin_Panel/StaffSection/Attendance/Reviewfine";
import Overtime from "./pages/Admin_Panel/StaffSection/Attendance/Overtime";
import Project_Summary from "./pages/Admin_Panel/Projects/Project_Summary";
import ProjectsOverview from "./pages/Admin_Panel/Projects/Project_overview";
import Projects from './pages/Admin_Panel/Projects/Projects';
import Taskview from "../src/pages/Admin_Panel/Tasks/Taskview";
import Clients from "../src/pages/Admin_Panel/Clients/Clients";
import NewTicket from "./pages/Admin_Panel/Projects/NewTicketForm";
import Add_Project from "./pages/Admin_Panel/Projects/Add_Project";
// import Customer_Navbar from "./Customer Panel/Components/Customer_Navbar";
// import Customer_Footer from "./Customer Panel/Components/Customer_Footer";
import EditSalaryDetails from "../src/pages/Admin_Panel/editstaff/EditSalaryDetails";
import EditPenalty from "../src/pages/Admin_Panel/editstaff/EditPenalty";
import SalaryOverview from "../src/pages/Admin_Panel/editstaff/SalaryOverview";
import StaffSalarySummry from "../src/pages/Admin_Panel/editstaff/StaffSalarySummry";
import Calender from "./pages/Admin_Panel/Calender/Calender";
import Editprofile from "../src/pages/Admin_Panel/profile/Editprofile";
import Task_Status from "./pages/Admin_Panel/Projects/Task_Status";
import Client_Project from "../src/pages/Client_Panel/Client_Project";
import Edit_Task_Status from "../src/pages/Admin_Panel/Tasks/Edit_Task_Status";
import Edit_Project from "./pages/Admin_Panel/Projects/Edit_Project";
import Project_Progress from "../src/pages/Client_Panel/Project_Progress";
import Meeting from "./pages/Admin_Panel/Calender/Meeting";
import RequestPassword from "./pages/Admin_Panel/authentication/steps/RequestPassword";
import CalenderDay from "./pages/Admin_Panel/Calender/CalenderDay";
import CalenderYear from "./pages/Admin_Panel/Calender/CalenderYear";
import Note from "../src/Notes/Note";
import ExpenseEdit from "./pages/Admin_Panel/ExpensesClient/ExpenseEdit";
import ExpensePage from "./pages/Admin_Panel/ExpensesClient/ExpensePage";
import AddNewClient from "../src/pages/Admin_Panel/Clients/AddNewClient";
import EditClient from "../src/pages/Admin_Panel/Clients/EditClient";
import Subscription from '../src/pages/Admin_Panel/Subscription Plan/Subscription'
import Buy_plan from '../src/pages/Admin_Panel/Subscription Plan/Pricing Plans/Plan'
import CalenderWeekly from './pages/Admin_Panel/Calender/CalenderWeekly'
// import Task from "./Admin/pages/Project/Task";
import Task from "./pages/Admin_Panel/Projects/Task";
import ClientHeader from "./components/Client_Panel/ClientHeader";
import SidebarClient from "./components/Client_Panel/SidebarClient";
// import AddNewTask from "./Admin/pages/Projects/AddNewTask";
import DepartmentDetail from "../src/pages/Admin_Panel/Department/DepartmentDetails";
import PayrollMenu from "../src/pages/Admin_Panel/payroll/PayrollMenu";
import CalenderHeader from "./pages/Admin_Panel/Calender/CalenderHeader";
import RunPayroll from "../src/pages/Admin_Panel/payroll/RunPayroll";
import StatusMainPage from "../src/pages/Admin_Panel/statustask/StatusMainPage";
import Login from "../src/pages/Admin_Panel/authentication/steps/login";
import Department_Details from '../src/pages/Admin_Panel/Department/DepartmentDetails';
import { useGlobalContext } from "./Context/GlobalContext";
import AdminChatInterface from "./pages/Admin_Panel/Chats/AdminChatInterFace";
import StaffChatInterface from "./pages/Staff_Panel/StaffChatInterface";
import ClientChatInterface from "./pages/Client_Panel/ClientChatInterFace";
import ResetPassword from "./pages/Admin_Panel/authentication/steps/ResetPassword";
import LoginPage from "../src/pages/Admin_Panel/authentication/steps/login";
import ProtectedRoute from './ProtectedRoute';
import DashBoard from "./pages/Admin_Panel/DashBoard";

// import StatusMainPage from "../src/pages/Admin_Panel/statustask/StatusMainPage";
const App = () => {
  const [toggleSideBar, setToggleSideBar] = useState(true);


  const handleToggleSideBar = () => {
    setToggleSideBar(!toggleSideBar);
  };

  function AuthLayout() {
    return (
      <>
        <Outlet />

      </>
    );
  }

  function AdminLayout() {
    return (
      <>
        <div className="flex ">
          <SideBar />
          <div className="w-[100%] xl:w-[80%] lg:w-[80%] admin-sidebar-set  ">
            <NavBar />
            <div className="p-[10px]  w-full ">
              <Outlet />
            </div>
          </div>
        </div>
      </>
    );
  }

  function Editstaff() {

    return (
      <>
        <div className="">
          <UpperHeader />
          <div className="flex">
            <SidebarEditStaff />
            <Outlet />
          </div>
        </div>
      </>
    );
  }

  // function CustomerPanel() {
  //   return (
  //     <>
  //       <Customer_Navbar />
  //       <Outlet />
  //       <Customer_Footer />
  //     </>
  //   );
  // }

  function Client_Panel() {
    return (
      <>
        <div className="flex">
          <div className="">
            {toggleSideBar && <SidebarClient toggleSideBar={toggleSideBar} />}
          </div>

          {/* container for navbar and outlet */}
          <div className={`flex flex-col  flex-grow overflow-hidden`}>
            <ClientHeader
              handleToggleSideBar={handleToggleSideBar}
              toggleSideBar={toggleSideBar}
            />
            <main className={`flex-1 z-[1]  m-[15px] xl:m-[30px]   `}>
              <div className="mx-auto px-4 pl-3 pr-3 py-8 lg:px-4 view-not">
                <Outlet />
              </div>
            </main>
            
          </div>
        </div>
      </>
    );
  }


  function Calender_Layout() {
    return (
      <>
        <div className="flex w-full  flex-row" >
          <div className="flex min-h-screen ">
            <SideBar />
          </div>
          <div className="w-full">
            <NavBar />
            <>
              <CalenderHeader />
              <Outlet />
            </>

          </div>
        </div>
      </>
    );
  }

  function Payroll_Summary() {
    return (
      <>
        <div className="flex w-full">
          <SideBar />
          <div className="w-full">
            <NavBar />
            <div className="p-[20px] pb-10 w-full h-lvh overflow-scroll">
              <PayrollMenu />
              {/* <Outlet /> */}
            </div>

          </div>
        </div>
      </>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/project-overview" element={<ProjectsOverview />} />
            <Route path="/new-ticket" element={<NewTicket />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/addnewclient" element={<AddNewClient />} />
            <Route path="/editclient" element={<EditClient />} />
            <Route path="/addrole" element={<AddRole />} />
            {/* <Route path="/role" element={<Role_Details />} /> */}
            <Route path="/editrole" element={<EditRole />} />
            <Route path="/role-detail" element={<Role_Details />} />
            <Route path="/editdepartment" element={<EditDepartment />} />
            <Route path="/" element={<StaffMenu />} />
            <Route path="/add-one-staff" element={<AddOneStaff />} />
            <Route path="/department-details" element={<DepartmentDetail />} />
            <Route path="/salary_Details" element={<Salary_Details />} />
            <Route path="/overtime" element={<Overtime />} />
            <Route path="/reviewfine" element={<Reviewfine />} />
            <Route path="/worktime" element={<Worktime />} />
            <Route path="/attendence_summary" element={<Attendence_summary />} />
            <Route path="/project_summary" element={<Project_Summary />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/overtime" element={<Overtime />} />
            <Route path="/taskview" element={<Taskview />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/projectprogress" element={<Project_Progress />} />
            {/* <Route path="/addnewtask" element={<AddNewTask />} /> */}
            {/* <Route path="/taskdata" element={<Task_Data />} /> */}
            <Route path="/task" element={<Task />} />
            <Route path="/adddepartment" element={<AddDepartment />} />
            <Route path="/create-new-project" element={<Add_Project />}></Route>
            <Route path="/department-details" element={<Department_Details />} />
            <Route path="/taskstatus" element={<Task_Status />} />
            <Route path="chats/admin" element={<AdminChatInterface />} />
            <Route path="chats/client" element={<ClientChatInterface />} />
            <Route path="chats/staff" element={<StaffChatInterface />} />
            <Route path="/status-main-page" element={<StatusMainPage />} />
            <Route path="/edittaskstatus" element={<Edit_Task_Status />} />
            <Route path="/edit-project" element={<Edit_Project />} />
            {/* <Route path="/task" element={<Task />} /> */}
            <Route path="/editprofile" element={<Editprofile />} />
            <Route path="/taskstatus" element={<Task_Status />} />
            {/* <Route path="/clientproject" element={<Client_Project />} /> */}
            {/* <Route path="/projectprogress" element={<Project_Progress />} /> */}
            <Route path="/note" element={<Note />} />
            <Route path="/expenseedit" element={<ExpenseEdit />} />
            <Route path="/expensepage" element={<ExpensePage />} />
            <Route path="/subscription-plan" element={<Subscription />} />
            <Route path="/subscription-plan/buy-plan" element={<Buy_plan />} />
          </Route>
         

        </Route>

        <Route element={<Editstaff />}>
          <Route path="/personal-detail/:id" element={<PersonalDetail />} />
          <Route path="/bank-detail/:id" element={<BankDetails />} />
          <Route path="/attendance-detail/:id" element={<Editattendance />} />
          <Route path="/employee-detail/:id" element={<EmployementDetail />} />
          <Route path="/user-permission/:id" element={<UserPermission />} />
          <Route path="/leavepolicy-detail/:id" element={<EditLeavePolicies />} />
          <Route path="/custom-detail/:id" element={<CustomDetail />} />
          <Route path="/salary-details-edit/:id" element={<EditSalaryDetails />} />
          <Route path="/edit-penalty/:id" element={<EditPenalty />} />
          <Route path="/salary-overview/:id" element={<SalaryOverview />} />
          <Route path="/staff-salary-summary" element={<StaffSalarySummry />} />

          <Route

            path="/background-verification/:id"
            element={<BackgroundVerification />}
          />
          <Route path="/verify-aadhar" element={<VerifyAadhaar />} />
          <Route path="/verify-pan" element={<VerifyPan />} />
          <Route path="/driving-license" element={<DrivingLicense />} />
          <Route path="/uan" element={<VerifyUan />} />
          <Route path="/face" element={<VerifyFace />} />
          <Route path="/address" element={<VerifyAddress />} />

        </Route>
        <Route element={<Client_Panel />}>
          {/* <Route path="/sidebarclient" element={<SidebarClient />} /> */}
          <Route path="/task" element={<Task />} />
          {/* <Route path="/sidebarclient" element={<SidebarClient />} /> */}

          <Route
            path="/background-verification"
            element={<BackgroundVerification />}
          />
          <Route path="/verify-aadhar" element={<VerifyAadhaar />} />

        </Route>

        <Route element={<Payroll_Summary />}>
          <Route path="/run-payroll" element={<RunPayroll />} />
          <Route path="/payroll-menu" element={<PayrollMenu />} />
        </Route>
        <Route element={<Calender_Layout />}>
          <Route path="/calender" element={<Calender />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/day-wise" element={<CalenderDay />} />
          <Route path="/year-wise" element={<CalenderYear />} />
          <Route path="/week-wise" element={<CalenderWeekly />} />
        </Route>

        <Route element={<AuthLayout />}>
        <Route path="/authentication" element={<MultiStepForm />} />
          <Route path="/authentication/login" element={<LoginPage />} />
          <Route path="/authentication/reset" element={<ResetPassword />} />
          <Route path="/authentication/request-password" element={<RequestPassword />} />
        </Route>

        {/* <Route element={<CustomerPanel />}>
          <Route path="/customer-panel"></Route>
        </Route> */}




      </Routes>
    </BrowserRouter>
  );
};

export default App;
