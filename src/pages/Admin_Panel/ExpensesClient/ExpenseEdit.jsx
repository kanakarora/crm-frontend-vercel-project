import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpenseEdit = () => {
    const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="p-[20px]">
        <div className="flex items-center">
          <Link className="text-[#8a25b0] text-[14px] " to="/">
            Home
          </Link>
          <div className="flex items-center gap-[8px] ml-[8px]">
            <KeyboardArrowRightIcon />
            <p className="text-[14px]">Notes</p>
          </div>
          <div className="flex justify-end w-[100%]">
            <button
              className="px-4 py-2 bg-[#8a25b0] text-white rounded-md"
              onClick={handleOpen}
            >
              +
            </button>

            {isOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-cs w-96">
                  <h2 className="text-xl font-semibold mb-4">Create Note</h2>
                  <div className="mb-[24px]">
                    <div className="w-[100%] xl:[48%] mb-[10px] ">
                      <label className="text-[14px]">*Title</label>
                      <br />
                      <input
                        type="text"
                        placeholder=""
                        className="border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#fff] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                      />
                    </div>
                    <div className="w-[100%] xl:[48%] mb-[10px] ">
                      <label className="text-[14px]">*Description</label>
                      <br />
                      <textarea
                        placeholder="Please enter a description"
                        className="border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#fff] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]"
                      ></textarea>
                    </div>
                    <div className="w-[100%]  xl:[48%] mb-[26px]">
                      <label className="text-[14px]">*Color</label>
                      <br />
                      <select className='border border-1 rounded-md p-[5px] name="color" text-center mt-1 w-[100%] bg-[#F4F5F9] select-bg-label-success focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                        <option className="bg-label-success" value="info">
                          Green
                        </option>
                        <option className="bg-label-warning" value="warning">
                          Yellow
                        </option>
                        <option className="bg-label-danger" value="danger">
                          Red
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-[6px] items-center justify-end ">
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-md"
                      onClick={handleClose}
                    >
                      Close Modal
                    </button>
                    <button className="second-btn">Create</button>
                  </div>
                </div>
                <div className="p-[20px] mt-[20px] bg-white shadow-cs rounded-lg">

                    <div className="w-[100%] flex items-center gap-[10px]">
                        <input className="p-[8px] w-[33%] border text-[12px]  rounded-lg" type="date" />
                        <div className='w-[33%]  xl:[48%]'>

                            <select className='border border-1 rounded-md p-[8px]  w-[100%] bg-[#fff] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                <option>Select User</option>
                            </select>
                        </div>
                        <div className='w-[33%]  xl:[48%]'>

                            <select className='border border-1 rounded-md p-[8px]  w-[100%] bg-[#fff] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                <option>Select Type</option>
                            </select>
                        </div>
                    </div>

                    <div className='w-[100%] flex rounded-lg shadow-cs bg-white   border border-1 mt-4 pl-3 pr-3'>
                        <table className='table-section mt-4 edittable'>
                            <thead className='border border-1 '>
                                <th>#</th>
                                <th>ID</th>
                                <th className="w-[200px]">TITLE</th>
                                <th>EXPENSE TYPE</th>
                                <th>USER</th>
                                <th>AMOUNT</th>
                                <th>EXPENSE DATE</th>
                                <th className="w-[166px]">ACTIONS</th>


                            </thead>
                            <tbody>
                                <td><input type='checkbox' className='border border-1 rounded-md ' /></td>
                                <td>3</td>
                                <td className="w-[200px]">2+6</td>
                                <td>Fuel</td>
                                <td>King Lost</td>
                                <td>₹ 100.0	</td>
                                <td>27-06-2024</td>
                                <td className="w-[166px] flex justify-center gap-[10px]"><Link><EditNoteIcon className="edit-icon2" /></Link><Link><DeleteIcon className="del-icon2" /></Link></td>


                            </tbody>
                        </table>
                    </div>

                </div>


              </div>
            )}
          </div>
        </div>
        <div className="p-[20px] mt-[20px] bg-white shadow-cs">
          <div className="w-[100%] flex items-center gap-[10px]">
            <input
              className="p-[8px] w-[33%] border text-[12px]  rounded-lg"
              type="date"
            />
            <div className="w-[33%]  xl:[48%]">
              <select className="border border-1 rounded-md p-[8px]  w-[100%] bg-[#fff] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]">
                <option>Select User</option>
              </select>
            </div>
            <div className="w-[33%]  xl:[48%]">
              <select className="border border-1 rounded-md p-[8px]  w-[100%] bg-[#fff] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]">
                <option>Select Type</option>
              </select>
            </div>
          </div>

          <div className="w-[100%] flow-edit flex rounded-lg shadow-cs   border border-1 mt-4 pl-3 pr-3">
            <table className="table-section edittable mt-4">
              <thead className="border border-1 ">
                <th>#</th>
                <th>ID</th>
                <th className="w-[200px]">TITLE</th>
                <th>EXPENSE TYPE</th>
                <th>USER</th>
                <th>AMOUNT</th>
                <th>EXPENSE DATE</th>
                <th className="w-[166px]">ACTIONS</th>
              </thead>
              <tbody>
                <td>
                  <input
                    type="checkbox"
                    className="border border-1 rounded-md "
                  />
                </td>
                <td>3</td>
                <td className="w-[200px]">2+6</td>
                <td>Fuel</td>
                <td>King Lost</td>
                <td>₹ 100.0 </td>
                <td>27-06-2024</td>
                <td className="w-[166px] flex justify-center gap-[10px]">
                  <Link>
                    <EditNoteIcon className="edit-icon2" />
                  </Link>
                  <Link>
                    <DeleteIcon className="del-icon2" />
                  </Link>
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseEdit
