import React from 'react';
import dayjs from 'dayjs';

const MonthlyCalendar = ({ year, month }) => {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // Get the first and last day of the month
  const firstDayOfMonth = dayjs(`${year}-${month}-01`).startOf('month');
  const lastDayOfMonth = dayjs(`${year}-${month}-01`).endOf('month');

  // Get the start of the calendar grid (start of the week of the first day of the month)
  const startOfCalendar = firstDayOfMonth.startOf('week');
  
  // Get the end of the calendar grid (end of the week of the last day of the month)
  const endOfCalendar = lastDayOfMonth.endOf('week');

  // Generate days to display in the calendar grid
  const days = [];
  let currentDay = startOfCalendar;

  while (currentDay.isBefore(endOfCalendar) || currentDay.isSame(endOfCalendar)) {
    days.push(currentDay);
    currentDay = currentDay.add(1, 'day');
  }

  return (
    <div className="p-2     ">
      <h3 className="text-[14px] font-medium text-left mb-0 pl-3 text-[#787575] mb-[5px]">
        {dayjs(`${year}-${month}-01`).format('MMMM YYYY')}
      </h3>
      
      {/* Render day labels */}
      <div className="grid grid-cols-7 text-center font-semibold text-gray-600">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="p-2 text-[12px]">{day}</div>
        ))}
      </div>

      {/* Render day grid */}
      <div className="grid grid-cols-7 text-center gap-[2px]">
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-1 rounded-lg ${
              day.month() + 1 === month ? 'text-black' : 'text-gray-400 ' 
            } hover:bg-[#9a29b9] hover:text-white text-[10px]`}
          >
            {day.date()}
          </div>
        ))}
      </div>
    </div>
  );
};

const YearlyCalendar = ({ year }) => {
  // Array of all 12 months (1 to 12)
  const months = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className="pt-[20px] xl:p-4 lg:p-4 md:p-4  w-full">
      {/* <h2 className="text-2xl font-bold text-center mb-6">Year {year}</h2> */}
      
      <div className="grid grid-cols-2 gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3">
        {months.map((month) => (
          <MonthlyCalendar key={month} year={year} month={month} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <YearlyCalendar year={2024} />
    </div>
  );
};

export default App;
