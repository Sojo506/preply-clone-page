"use client";
import moment from "moment";

import { useEffect, useState } from "react";
import {
  AiOutlineQuestionCircle,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [timezones, setTimezones] = useState([]);
  const formatGmtOffset = (offset) => {
    const hours = Math.floor(offset / 3600);
    const minutes = Math.floor((offset % 3600) / 60);
    const sign = offset >= 0 ? "+" : "-";
    return `GMT ${sign}${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  /* THIS IS TO HANDLE THE DATES OF THE CALENDAR */
  const generateCalendarDates = () => {
    const calendarDates = [];
    const startDate = currentDate.clone();
    for (let i = 0; i < 7; i++) {
      calendarDates.push(startDate.clone().add(i, "days"));
    }
    return calendarDates;
  };
  const handleNextWeek = () => {
    setCurrentDate((prevDate) => prevDate.clone().add(7, "days"));
  };
  const handlePreviousWeek = () => {
    const previousDate = currentDate.clone().subtract(7, "days");
    if (previousDate.isSameOrAfter(moment(), "day")) {
      setCurrentDate(previousDate);
    }
  };
  const calendarDates = generateCalendarDates();
  /* END HERE */

  const schedule = [
    { hour: "8:00", type: "AM" },
    { hour: "9:00", type: "AM" },
    { hour: "10:00", type: "AM" },
    { hour: "1:00", type: "PM" },
    { hour: "2:00", type: "PM" },
    { hour: "3:00", type: "PM" },
  ];

  useEffect(() => {
    /* THIS IS TO GET THE TIME ZONES */
    const fetchTimezones = async () => {
      try {
        const response = await fetch(
          `https://api.timezonedb.com/v2.1/list-time-zone?key=${process.env.NEXT_PUBLIC_TIME_ZONE_KEY}&format=json`
        ).then((res) => res.json());

        setTimezones(response.zones);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchTimezones();
  }, []);
  return (
    <section className="rounded-md bg-white px-3 py-4 shadow-md mt-5 w-full max-w-[720px]">
      <h2 className="font-bold">Schedule</h2>

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
          <h2 className="text-sm">
            {currentDate.format("MMMM D")}-
            {currentDate.clone().add(6, "days").format("D")},{" "}
            {currentDate.format("YYYY")}
          </h2>
          <div
            onClick={handleNextWeek}
            className="p-3 border cursor-pointer group"
          >
            <AiOutlineArrowRight className="group-hover:text-cyan-400" />
          </div>
        </div>

        <div className="w-full max-w-xs mt-4 border p-1 mx-auto">
          <select className="w-full outline-none text-sm text-center">
            {timezones &&
              timezones?.map((timezone) => (
                <option key={timezone.zoneName} value={timezone.zoneName}>
                  {timezone.zoneName} {formatGmtOffset(timezone.gmtOffset)}
                </option>
              ))}
          </select>
        </div>

        <table className="w-full mt-3 mb-4">
          <tbody className="flex justify-between">
            {calendarDates.map((date) => (
              <tr
                key={date.format("YYYY-MM-DD")}
                className="border-cyan-600 border-t-4"
              >
                <td className="flex flex-col items-center">
                  <p>{date.format("dddd").slice(0, 3)}</p>
                  <p>{date.format("D")}</p>
                </td>
                <td className="flex flex-col text-center items-center mt-4 gap-2">
                  {schedule.map((sch) => (
                    <p
                      key={sch.hour}
                      className="text-cyan-500 text-xs"
                      onClick={() => alert("Booked it")}
                    >
                      {sch.hour}
                    </p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="w-full mx-auto rounded-2xl p-2 bg-[#3bb3bd] text-white text-sm font-bold">
        View full schedule
      </button>
    </section>
  );
};

export default Schedule;
