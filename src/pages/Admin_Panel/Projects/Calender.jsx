import React, { useState } from "react";
import { MdAddTask } from "react-icons/md";
import { MdAddChart } from "react-icons/md";

// Helper function to generate the days for a specific month and year
const getDaysInMonth = (month, year) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get total days in the month
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // Get the day the month starts on (0 = Sunday, 1 = Monday, etc.)
  const daysArray = [];

  // Fill in the days from the previous month
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysArray.push(null);
  }

  // Fill in the days of the current month
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  return daysArray;
};

const Calender = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const days = getDaysInMonth(currentMonth, currentYear);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Function to move to the previous month
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Function to move to the next month
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Function to check if a day is today
  const isToday = (day) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  return (
    <div>
      <h1 className="text-[18px] text-[#585757] font-semibold">
        {monthNames[currentMonth]}, {currentYear}
      </h1>
      <div>
        <div className="flex justify-between mb-4 mt-4">
          <button
            onClick={prevMonth}
            className="bg-white border text-[13px] p-2 rounded"
          >
            Previous
          </button>
          <button
            onClick={nextMonth}
            className="bg-white border text-[13px] p-2 rounded"
          >
            Next
          </button>
        </div>
        <div className=" p-[0]">
          <table className="table-auto border-collapse border  w-full text-start ">
            <thead>
              <tr>
                <th className="border text-start  text-[#969696] font-normal border-[#E8E8E8] px-4 py-2">
                  SUN
                </th>
                <th className="border  text-start  text-[#969696] font-normal border-[#E8E8E8] px-4 py-2">
                  MON
                </th>
                <th className="border  text-start text-[#969696] font-normal border-[#E8E8E8] px-4 py-2">
                  TUE
                </th>
                <th className="border text-start  text-[#969696] font-normal border-[#E8E8E8] px-4 py-2">
                  WED
                </th>
                <th className="border text-start  text-[#969696] font-normal border-[#E8E8E8] px-4 py-2">
                  THU
                </th>
                <th className="border text-start  text-[#969696] font-normal border-[#E8E8E8] px-4 py-2">
                  FRI
                </th>
                <th className="border text-start  text-[#969696] font-normal border-[#E8E8E8] px-4 py-2">
                  SAT
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from(
                { length: Math.ceil(days.length / 7) },
                (_, weekIndex) => (
                  <tr key={weekIndex}>
                    {days
                      .slice(weekIndex * 7, weekIndex * 7 + 7)
                      .map((day, index) => (
                        <td
                          key={index}
                          className={`border border-[#E8E8E8] text-[#969696] px-4 py-10 ${
                            isToday(day) ? "bg-yellow-200" : ""
                          }`}
                        >
                          {day ? (
                            <>
                              {day}
                              <br />
                              {day === 1 && (
                                <div className="mt-4">
                                    <div  className="flex gap-3 text-[#969696] text-[11px]">
                                    <h1>Add Task</h1>
                                    <h1>Add event</h1>
                                    </div>

                                    <div className="flex gap-11">
                                    <button><MdAddTask /></button>
                                    <button><MdAddChart /></button>
                                    </div>
                                </div>
                              )}

                              {day === 8 && (
                                <span className="text-[#0085FF] text-[12px] rounded-md px-2 py-1 bg-[#0085FF1A]">
                                  Design
                                </span>
                              )}
                              {day === 9 && (
                                <span className="text-[#FF9F2D] text-[12px] rounded-md px-2 py-1 bg-[#FF961B1A]">
                                  Development
                                </span>
                              )}
                              {day === 10 && (
                                <span className="text-[#00BA34] text-[12px] rounded-md px-2 py-1 bg-[#00BA341A]">
                                  Green Tag
                                </span>
                              )}
                              {day === 13 && (
                                <span className="text-[#E92C2C] text-[12px] rounded-md px-2 py-1 bg-[#FF3B3B1A]">
                                  Edit file
                                </span>
                              )}
                              {day === 14 && (
                                <>
                                  <span className="text-[#FF9F2D] text-[12px] rounded-md px-2 py-1 bg-[#FF961B1A]">
                                    Design
                                  </span>{" "}
                                  <br />
                                  <span className="text-[#FF9F2D] text-[12px] rounded-md px-2 py-1 bg-[#FF961B1A]">
                                    Development
                                  </span>
                                </>
                              )}
                            </>
                          ) : null}
                        </td>
                      ))}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calender;
