import React, { useState } from "react";
import { motion } from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';
const Discussion = () => {
  const [createDiscussion, setCreateDiscussion] = useState(false);
  const [discussions, setDiscussions] = useState([]);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateDiscussion = () => {
    setCreateDiscussion(true); // Show form 
  };

  const handleCloseDiscussion = () => {
    setCreateDiscussion(false); // Hide form   
  };

  const handleSaveDiscussion = () => {
    // Create a new discussion object
    const newDiscussion = {
      subject,
      description,
      lastActivity: new Date().toLocaleString(),
      totalComments: 0, // You can update this dynamically later
      visibleToCustomer: "Yes", // Set default or allow this to be customized
    };

    // Add the new discussion to the state
    setDiscussions([...discussions, newDiscussion]);

    // Clear the form fields
    setSubject("");
    setDescription("");

    // Close the form
    handleCloseDiscussion();
  };

  return (
    <div className="relative ">
      <button
        onClick={handleCreateDiscussion}
        className="px-4 py-2 bg-[#27004a] text-[14px] text-white rounded-lg"
      >
        + Create Discussion
      </button>

      {/* Overlay to dim the background */}
      {createDiscussion && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>
      )}

      {/* Conditionally render the form with animation */}
      {createDiscussion && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex justify-center items-center"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg w-[40%]  max-[850px]:w-[80%]">
            <h2 className="text-xl  pb-6 border-[#D9D9D9] font-semibold mb-2">
              Create a Discussion
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-[#000] mb-2">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full border shadow-cs  border-[#B1B1B1] focus-visible:outline-none rounded-lg p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#000] mb-2">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full shadow-cs rounded-lg border border-[#B1B1B1] focus-visible:outline-none p-2"
                  rows="4"
                />
              </div>

              <div className="flex gap-6 justify-end">
                <div className="pt-5 space-x-8">
                  <button
                    type="button"
                    onClick={handleCloseDiscussion}
                    className="px-6 py-2 text-[#511992] border-[#511992] border rounded-lg"
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    onClick={handleSaveDiscussion}
                    className="px-5 py-2 bg-[#511992] border-[#511992] border text-white rounded-lg"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      )}

      {/* Conditionally render the table when it's visible */}
      <div className="p-4 mt-8 shadow-cs rounded-xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex space-x-2 text-[#000] mb-4 md:mb-0">
            <select className="border focus-visible:outline-none text-[14px] border-[#B1B1B1] rounded p-2 bg-white">
              <option>25</option>
            </select>
            <button className=" text-[14px] text-[#000] border border-[#B1B1B1] px-4 py-2 rounded">
              Export
            </button>
          </div>
          <div className='relative'>
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-lg shadow-cs focus-visible:outline-none p-2 w-64 max-[1050px]:mt-4"

              />
              <SearchIcon className='absolute right-[10px] top-[10px] text-[#b1b1b1]'/>
            </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-[#dbdbdb] shadow-cs">
            <thead>
              <tr>
                <th className="p-[10px] whitespace-nowrap font-normal text-[#000] text-[14px] border-b text-center border-t border-r border-[#DBDBDB]">
                  Subject
                </th>
                <th className="p-[10px] whitespace-nowrap font-normal text-[#000] text-[14px] border-b text-center border border-[#DBDBDB]">
                  Last Activity
                </th>
                <th className="p-[10px] whitespace-nowrap font-normal text-[#000] text-[14px] border-b text-center border border-[#DBDBDB]">
                  Total Comments
                </th>
                <th className="p-[10px] whitespace-nowrap font-normal text-[#000] text-[14px] border-b text-center border border-[#DBDBDB]">
                  Visible to Customer
                </th>
              </tr>
            </thead>
            <tbody>
              {discussions.length > 0 ? (
                discussions.map((discussion, index) => (
                  <tr key={index}>
                    <td className="p-[10px] text-center border text-[15px]   border-[#DBDBDB]">
                      {discussion.subject}
                    </td>
                    <td className="p-[10px] text-center border text-[15px]  border-[#DBDBDB]">
                      {discussion.lastActivity}
                    </td>
                    <td className="p-[10px] text-center border text-[15px]   border-[#DBDBDB]">
                      {discussion.totalComments}
                    </td>
                    <td className="p-[10px] text-center border text-[15px]   border-[#DBDBDB]">
                      {discussion.visibleToCustomer}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    className="p-[10px] text-start text-[14px] text-[#000]"
                    colSpan="8"
                  >
                    No entries found 
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
