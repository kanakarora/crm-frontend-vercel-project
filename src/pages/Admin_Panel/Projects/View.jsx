import React from "react";

const View = () => {
  return (
    <div>
      <div className="flex w-[100%] gap-[20px] max-[900px]:inline-grid">
        <div className=" bg-white  w-[50%] shadow-cs rounded-lg p-6 max-[900px]:w-[100%] ">
          {/*-- Progress Bar -*/}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-700 max-[1400px]:text-[14px]">
                Project Progress 100%
              </span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-green-500 h-2 rounded-full"></div>
            </div>
          </div>

          {/*-- Overview Section -*/}
          <div className="text-gray-600 space-y-2 max-[1400px]:text-[14px]">
            <span className="block font-semibold text-gray-700 ">Overview</span>
            <div className="grid grid-cols-2 gap-6 ">
              <div>
                <span className="block font-semibold text-gray-700 ">
                  Project #
                </span>
                <span className="text-[#B1B1B1]">29</span>
              </div>
              <div>
                <span className="block font-semibold text-gray-700">
                  Customer
                </span>
                <span className="text-[#B1B1B1]">Addodle</span>
              </div>
              <div>
                <span className="block font-semibold text-gray-700">
                  Status
                </span>
                <span className="text-[#B1B1B1]">Finished</span>
              </div>
              <div>
                <span className="block font-semibold text-gray-700">
                  Date Created
                </span>
                <span className="text-[#B1B1B1]">14-08-2024</span>
              </div>
              <div>
                <span className="block font-semibold text-gray-700">
                  Start Date
                </span>
                <span className="text-[#B1B1B1]">14-08-2024</span>
              </div>
              <div>
                <span className="block font-semibold text-gray-700">
                  Deadline
                </span>
                <span className="text-[#B1B1B1]">31-08-2024</span>
              </div>
              <div>
                <span className="block font-semibold text-gray-700">
                  Completed Date
                </span>
                <span className="text-[#81EF93]">02-09-2024 6:03 PM</span>
              </div>
              <div>
                <span className="block font-semibold text-gray-700">
                  Total Logged Hours
                </span>
                <span className="text-[#B1B1B1]">03:55</span>
              </div>
            </div>
          </div>

          {/*-- Tags Section -*/}
          <div className="mt-4">
            <span className="block font-semibold text-gray-700">Tags</span>
            <div className="flex space-x-2 mt-2">
              <span className="inline-block border text-xs px-2 py-1 rounded">
                Ads
              </span>
              <span className="inline-block border text-xs px-2 py-1 rounded">
                Graphic
              </span>
              <span className="inline-block border text-xs px-2 py-1 rounded">
                Reel
              </span>
            </div>
          </div>

          {/*-- Description Section --*/}
          <div className="mt-4 text-gray-700">
            <span className="font-semibold block mb-1">Description</span>
            <p className="text-[#B1B1B1] text-sm">
              SMM plan (12 Graphic + 10 Reels & Facebook ad management).
            </p>
          </div>
        </div>

        <div className="w-[50%] shadow-cs rounded-lg p-[20px]">
          <div className="flex w-[100%] gap-[3rem] max-[1100px]:inline-grid">
            {/*-- Open Tasks Card --*/}
            <div className="h-auto w-[50%] shadow-cs bg-white  rounded-lg p-4 max-[1100px]:w-[100%] max-[900px]:w-[200%] ">
              <div className=" flex items-center text-sm font-medium text-gray-600">
                0 / 0 Open Tasks
              </div>
              <div className=" text-xs font-medium text-gray-500 mt-1">0%</div>
              <div className="w-full bg-[#E4E4E4] rounded-full h-2.5 mt-2">
                <div className="bg-gray-400 h-2.5 rounded-full"></div>
              </div>
              <div className="mt-4"></div>
            </div>

            {/*- Days Left Card --*/}
            <div className=" h-auto w-[50%] bg-white shadow-cs rounded-lg p-4 max-[1100px]:w-[100%] max-[900px]:w-[200%]">
              <div className=" text-sm font-medium text-gray-600">
                0 / 17 Days Left
              </div>
              <div className=" text-xs font-medium text-gray-500 mt-1">0%</div>
              <div className="w-full bg-[#E4E4E4] rounded-full h-2.5 mt-2">
                <div className="bg-gray-400 h-2.5 rounded-full"></div>
              </div>
              <div className="mt-4"></div>
            </div>
          </div>

          <div className=" mt-12 h-auto   bg-white shadow-cs rounded-lg p-4 max-[900px]:w-[200%] ">
            <div className="flex justify-between items-center mb-4">
              <div></div>
              <div className="text-[#27004a] font-semibold">This week</div>
              
            </div>

            <div className="flex flex-col space-y-2 bg-[#D9D9D926]">
              <div className="flex items-center">
                <div className="text-sm text-black w-10">1000</div>
                <div className="flex-grow bg-gray-200 rounded-full h-2.5 relative">
                  <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r"></div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-sm text-black w-10">900</div>
                <div className="flex-grow bg-gray-200 rounded-full h-2.5 relative">
                  <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r"></div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-sm text-black w-10">800</div>
                <div className="flex-grow bg-gray-200 rounded-full h-2.5 relative">
                  <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r "></div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-sm text-black w-10">700</div>
                <div className="flex-grow bg-gray-200 rounded-full h-2.5 relative">
                  <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r "></div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-sm text-black w-10">600</div>
                <div className="flex-grow bg-gray-200 rounded-full h-2.5 relative">
                  <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r "></div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-sm text-black w-10">500</div>
                <div className="flex-grow bg-gray-200 rounded-full h-2.5 relative">
                  <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r"></div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-sm text-black w-10">400</div>
                <div className="flex-grow bg-gray-200 rounded-full h-2.5 relative">
                  <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r "></div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-sm text-black w-10">300</div>
                <div className="flex-grow bg-gray-200 rounded-full h-2.5 relative">
                  <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-evenly mt-4 text-black text-sm">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thur</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
