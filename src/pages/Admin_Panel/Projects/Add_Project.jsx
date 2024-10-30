import React, {useState, useRef, useEffect} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Project_Setting from "./Project_Setting";
import SellIcon from "@mui/icons-material/Sell";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PrintIcon from '@mui/icons-material/Print';
import { FaGalacticSenate } from "react-icons/fa6";
import { useNavigate } from "react-router";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill styling

const Add_Project = () => {

  const navigate = useNavigate()
  const [editorData, setEditorData] = useState('');
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['clean'] // Remove formatting button
    ]
  };

  const formats = [
    'header', 'font', 'list', 'bullet',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'script', 'align', 'link', 'image', 'video'
  ];
 
  const [formData, setformData] = useState({
    projectName: "",
    customer: "",
    calculateProgress: false,
    billingType: "",
    status: "",
    totalRate: "",
    startDate: "",
    deadline: "",
    members: "",
    tags: "",
    description: "",
    sendEmail: false,
  })

  function handleCloseForm() {
    navigate("/project_summary")
  }

  return (
    <Tabs className="m-5 shadow rounded-lg">
      <TabList className="flex p-5 pb-[10px] gap-4 text-[20px] font-medium border-b border-[#B1B1B1] cursor-pointer ">
        <Tab className="hover:text-[#2568EC] project-tab hover:border-b pb-2 border-[#2568EC]">
          Project
        </Tab>
        <Tab className="hover:text-[#2568EC] hover:border-b pb-2 border-[#2568EC]">
          Project Settings
        </Tab>
      </TabList>

      <TabPanel className="m-5">
       <div className="w-[100%] space-y-5">
          <div className="space-y-2">
            <h1 className="font-medium">* Project Name</h1>
            <input
              className="h-[46px] w-[100%] border border-[#DBDCDE] rounded-md pl-2"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <h1 className="font-medium">* Customer</h1>
            <select className="w-[100%] h-[46px] bg-white border border-[#DBDCDE] rounded-md pl-5 ">
              <option value="">Select and begin typing</option>
            </select>
          </div>

          <div className="font-medium flex gap-4 items-center">
            <input type="checkbox" />
            <h1>Calculate progress through tasks</h1>
          </div>

          <div className="space-y-2">
            <h1>Progress 0%</h1>
            <div className="h-7 bg-[#FBFBFB] border border-[#D9D9D9] rounded-md"></div>
          </div>

          <div className="flex w-[100%] gap-10">
            <div className="w-[50%] space-y-2">
              <h1>* Billing Type</h1>
              <select className="h-[46px] w-[100%] bg-white border border-[#DBDCDE] rounded-md pl-5">
                <option value="">Fixed rate</option>
              </select>
            </div>

            <div className="w-[50%] space-y-2">
              <h1>Status</h1>
              <select className="h-[46px] w-[100%] bg-white border border-[#DBDCDE] rounded-md pl-5">
                <option value="">In Progress</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="font-medium">Total Rate</h1>
            <input
              className="h-[46px] w-[100%] border border-[#DBDCDE] rounded-md pl-2"
              type="text"
            />
          </div>

          <div className="grid grid-rows-2 space-y-2">
            <div className="flex w-[100%] gap-10">
              <div className="w-[50%] space-y-2">
                <h1>Estimated Hours</h1>
                <input
                  className="h-[46px] w-[100%] border border-[#DBDCDE] rounded-md pl-2"
                  type="text"
                />
              </div>

              <div className="w-[50%] space-y-2">
                <h1>Department</h1>
                <select className="h-[46px] w-[100%] bg-white border border-[#DBDCDE] rounded-md pl-5">
                  <option value="">Select Member</option>
                </select>
              </div>
            </div>

            <div className="flex w-[100%] gap-10">
              <div className="w-[50%] space-y-2">
                <h1>* Start Date</h1>
                <input
                  className="h-[46px] w-[100%] border border-[#DBDCDE] rounded-md px-2"
                  type="date"
                />
              </div>

              <div className="w-[50%] space-y-2">
                <h1>Deadline</h1>
                <input
                  className="h-[46px] w-[100%] border border-[#DBDCDE] rounded-md px-2"
                  type="date"
                />
              </div>
            </div>
          </div>

          <div>
            <SellIcon />
            <span className="font-medium pl-2">Tags</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-[18px] font-semibold">Description</h1>
            <ReactQuill
        value={editorData}
        onChange={setEditorData}
        modules={modules}
        formats={formats}
      />
          </div>

          <div className="space-x-3 border-b border-t border-[#B1B1B1] py-4">
            <input type="checkbox" />
            <span className="font-medium">Send project created email</span>
          </div>

          <div className="flex justify-end gap-5 pb-10">
            <button onClick={handleCloseForm} className="bg-white text-[#511992] border border-[#511992] h-10 w-20 rounded-md">Cancel</button>
            <button className="bg-[#511992] text-white h-10 w-20 rounded-md">Save</button>
          </div>
        </div>
      </TabPanel>

      <TabPanel className="m-5">
        <Project_Setting closeform = {handleCloseForm} />
      </TabPanel>
    </Tabs>
  );
};

export default Add_Project;