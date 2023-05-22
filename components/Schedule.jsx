"use client";
import moment from "moment";

import { useState } from "react";
import {
  AiOutlineQuestionCircle,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const generateCalendarDates = () => {
    const calendarDates = [];
    const startDate = currentDate.clone();
    for (let i = 0; i < 6; i++) {
      calendarDates.push(startDate.clone().add(i, "days"));
    }
    return calendarDates;
  };

  const handleNextWeek = () => {
    setCurrentDate((prevDate) => prevDate.clone().add(6, "days"));
  };
  const handlePreviousWeek = () => {
    const previousDate = currentDate.clone().subtract(6, "days");
    if (previousDate.isSameOrAfter(moment(), "day")) {
      setCurrentDate(previousDate);
    }
  };

  const calendarDates = generateCalendarDates();

  return (
    <section className="rounded-md bg-white p-3 shadow-md">
      <h3 className="font-bold">Schedule</h3>

      <div className="flex p-3 justify-center items-start bg-gray-100 rounded mt-7">
        <AiOutlineQuestionCircle className="text-gray-500 text-base basis-[30%]" />
        <p className="text-[13px] text-gray-500">
          Choose the time for your first lesson. The timings are displayed in
          your local timezone.
        </p>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center">
          <div
            onClick={handlePreviousWeek}
            className="p-3 border cursor-pointer group"
          >
            <AiOutlineArrowLeft className="group-hover:text-cyan-400" />
          </div>
          <h2>{currentDate.format("MMMM Do, YYYY")}</h2>
          <div
            onClick={handleNextWeek}
            className="p-3 border cursor-pointer group"
          >
            <AiOutlineArrowRight className="group-hover:text-cyan-400" />
          </div>
        </div>
        <ul className="flex justify-between mt-3">
          {calendarDates.map((date) => (
            <li
              key={date.format("YYYY-MM-DD")}
              className="flex flex-col items-center"
            >
              <p>{date.format("dddd").slice(0, 3)}</p>
              <p>{date.format("D")}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Schedule;
