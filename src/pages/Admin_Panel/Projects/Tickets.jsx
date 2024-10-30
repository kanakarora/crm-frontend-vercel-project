import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

const Tickets = () => {
  return (
    <div>

      <Link
        to="/new-ticket"
        className="px-4 py-2 bg-[#27004a] text-white rounded-lg inline-block"
      >
        + New Ticket
      </Link>

      <div>
        <div className="p-4 shadow mt-8 rounded-xl">
          <div className="flex  justify-between items-center mb-4 max-[500px]:block">
            <div className="flex space-x-2 text-[#000]">
              <select className="border text-[14px] focus-visible:outline-none border-[#B1B1B1] rounded p-2 bg-white">
                <option>25</option>
              </select>
              <button className=" text-[#000] text-[14px] border border-[#B1B1B1] px-4 py-2 rounded">
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

          <div className="overflow-x-auto ">
            <table className="min-w-full bg-white shadow-cs border border-[#dbdbdb]">
              <thead>
                <tr>
                  <th className="p-[10px] whitespace-nowrap font-normal text-[#000] text-[14px]  border-b text-center border-t border-r border-[#DBDBDB]">
                    #
                  </th>
                  <th className="p-[10px] whitespace-nowrap font-normal text-[#000] text-[14px]  border-b text-center border border-[#DBDBDB]">
                    Subject
                  </th>
                  <th className="p-[10px] whitespace-nowrap font-normal text-[#000] text-[14px]  border-b text-center border border-[#DBDBDB]">
                    Tags{" "}
                  </th>
                  <th className="p-[10px] whitespace-nowrap font-normal text-[#000] text-[14px]  border-b text-center border border-[#DBDBDB]">
                    Department
                  </th>
                  <th className="p-[10px] whitespace-nowrap font-normal text-[#000] text-[14px]  border-b text-center border border-[#DBDBDB]">
                    Services{" "}
                  </th>
                  <th className="p-[10px]  whitespace-nowrap font-normal text-[#000] text-[14px]  border-b text-center border border-[#DBDBDB]">
                    Contact
                  </th>
                  <th className="p-[10px] whitespace-nowrap font-normal text-[#000] text-[14px]  border-b text-center border border-[#DBDBDB]">
                    Status
                  </th>
                  <th className="p-[10px] whitespace-nowrap font-normal text-[#000] text-[14px]  border-b text-center border border-[#DBDBDB]">
                    Last Reply
                  </th>
                  <th className="p-[10px] whitespace-nowrap font-normal text-[#000] text-[14px]  border-b text-center border border-[#DBDBDB]">
                    Created
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="p-[10px] text-[14px] text-start text-[#000]"
                    colspan="8"
                  >
                    No entries found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
