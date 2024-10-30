import React, { useState } from "react";
import SellIcon from "@mui/icons-material/Sell";
import ReactQuill from 'react-quill';

const NewTicketForm = () => {
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

  return (
    <form className="overflow-x-auto">
      {/* -- Header Name --*/}
      <h1 className="text-[20px] font-medium">Ticket Information</h1>

      {/* -- Upper Input --*/}
      <div className="w-[100%] flex  mt-4 gap-[20px]">
        {/*--left Input--*/}
        <div className="w-[50%] border border-[#dbdbdb] p-[10px] rounded-lg shadow-cs ">
          <div>
            <label htmlFor="text" className="text-[14.22px] font-normal flex">
              Subject
            </label>
            <input
              className="h-auto w-[100%] text-[14.22px] focus-visible:outline-none  p-[10px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
              name=""
              id=""
            ></input>
          </div>

          <div className="mt-4">
            <label htmlFor="text" className="text-[14.22px] font-normal flex">
              Contact
            </label>
            <input
              className="h-auto w-[100%] text-[14.22px] focus-visible:outline-none p-[10px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
              name=""
              id=""
            ></input>
          </div>

          <div className="flex w-[100%] gap-4 mt-4 max-[1000px]:block max-[1000px]:w-[100%]  ">
            <div className="w-[50%] max-[1000px]:w-[100%]">
              <label htmlFor="text" className="text-[14.22px] font-normal flex">
                Name
              </label>
              <input
                className="h-auto p-[10px] w-[100%] focus-visible:outline-none  text-[14.22px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
                name=""
                id=""
              ></input>
            </div>

            <div className="max-[1000px]:mt-5 w-[50%] max-[1000px]:w-[100%]">
              <label htmlFor="text" className="text-[14.22px] font-normal flex">
                Email Address
              </label>
              <input
                className="h-auto w-[100%] text-[14.22px] focus-visible:outline-none p-[10px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
                name=""
                id=""
              ></input>
            </div>
          </div>

          <div className="flex w-[100%] items-center mt-4 gap-4 max-[1000px]:block max-[1000px]:mt-5 max-[1000px]:w-[100%] ">
            <div className="w-[50%] max-[1000px]:w-[100%]">
              <label htmlFor="text" className="text-[14.22px] font-normal flex">
                Department
              </label>
              <select
                name=""
                id=""
                className="h-auto w-[100%] p-[10px] text-[14.22px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1 max-[1000px]:w-[100%]"
              >
                <option value="">Nothing selected</option>
              </select>
            </div>

            <div className="max-[1000px]:mt-5 w-[50%] max-[1000px]:w-[100%]">
              <label htmlFor="text" className="text-[14.22px] font-normal flex">
                CC
              </label>
              <input
                className="h-auto w-[100%] text-[14.22px] focus-visible:outline-none p-[10px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1 max-[1000px]:w-[100%]"
                name=""
                id=""
              ></input>
            </div>
          </div>
        </div>

        {/*--Right Input--*/}
        <div className="w-[50%]  border border-[#dbdbdb] shadow-cs p-[10px] rounded-lg ">
          <div>
            <SellIcon />
            <span className="text-[14.22px] ml-2">Tags</span>
          </div>

          <div className="mt-[40px]">
            <label htmlFor="text" className="text-[14.22px] font-normal flex">
              Assign ticket (Default is current user)
            </label>
            <select
              name=""
              id=""
              className="h-auto w-[100%] p-[10px] text-[14.22px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
            >
              <option value="">Tarsem Singh</option>
            </select>
          </div>

          <div className="flex w-[100%] gap-10 mt-[17px] max-[1000px]:block">
            <div className="w-[50%] max-[1000px]:w-[43vw]">
              <label htmlFor="text" className="text-[14.22px] font-normal flex">
                Priority
              </label>
              <select
                name=""
                id=""
                className="h-auto w-[100%] p-[10px] text-[14.22px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
              >
                <option value="">Medium</option>
              </select>
            </div>

            <div className="w-[50%] max-[1000px]:w-[100%]">
              <label htmlFor="text" className="text-[14.22px] font-normal flex">
                Service
              </label>
              <select
                name=""
                id=""
                className="h-auto w-[100%] p-[10px] text-[14.22px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
              >
                <option value="">Medium</option>
              </select>
            </div>
          </div>

          <div className="mt-[15px]">
            <label htmlFor="text" className="text-[14.22px] font-normal flex">
              Project
            </label>
            <select
              name=""
              id=""
              className="h-auto w-[100%] p-[10px] text-[14.22px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
            >
              <option value="">Project name</option>
            </select>
          </div>
        </div>
      </div>

      {/* -- Lower Input --*/}
      <div className=" shadow-cs border border-[#dbdbdb] rounded-lg p-[14px] mt-10">
        <div className="flex items-center gap-[12px]">
          <div className="w-[100%]">
            <label htmlFor="text" className="text-[14.22px] font-normal flex">
              Ticket Body
            </label>
            <select
              name=""
              id=""
              className="h-auto w-[100%] p-[10px] text-[14.22px] text-[#2B2A2D] bg-[#F4F5F9] border border-[#DBDCDE] rounded-md mt-1"
            >
              <option value="">Insert predefined reply</option>
            </select>
          </div>

          <div className="w-[100%]">
          <label htmlFor="text" className="text-[14.22px] font-normal flex">
              Ticket Body
            </label>
            <select
              name=""
              id=""
              className="h-auto w-[100%] p-[10px] text-[14.22px] text-[#2B2A2D] mt-1 bg-[#F4F5F9] border border-[#DBDCDE] rounded-md"
            >
              <option value="">Insert knowledge base link</option>
            </select>
          </div>
        </div>
      </div>

      {/* -- Personal Notes --*/}

       <div className="space-y-2 shadow-cs mt-[20px] p-[10px] border border-[#dbdbdb] rounded-lg">
            <h1 className="text-[18px] font-semibold">Description</h1>
            <ReactQuill 
        value={editorData}
        onChange={setEditorData}
        modules={modules}
        formats={formats}
      />
          </div>

      <div className=" mt-4 bg-white border border-[#dbdbdb] p-[10px] rounded-lg shadow-cs flex items-center justify-between">
        <div className="flex  flex-col w-[65%]">
        <label htmlFor="file" className="text-[14.22px] font-normal">
          Insert knowledge base link
        </label>
        <input
          className="h-[auto] p-[8px] shadow-cs w-[50%] text-[14.22px] text-[#2B2A2D] border border-[#DBDCDE] rounded-md mt-1"
          type="file"
        ></input>
        </div>
        <div>
          <button className="bg-[#511992] text-white px-5 py-2 rounded-md ">Open Tickets</button>
          </div>
      </div>

    
    </form>
  );
};

export default NewTicketForm;
