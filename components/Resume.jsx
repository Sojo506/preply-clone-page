"use client";

import { useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Resume = () => {
  const resume = {
    education: "",
    work: [
      {
        dateStart: 2014,
        dateEnd: 2016,
        entity: "SUN Trap Co., Ltd.",
        subject: "Excursion guide",
      },
    ],
  };
  const [show, setShow] = useState(false);
  const [userResume, setUserResume] = useState("education");

  return (
    <div className="rounded-md bg-white p-3 shadow-md mt-5 w-full max-w-[720px]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShow((prev) => !prev)}
      >
        <h2 className="font-bold py-5">Resume</h2>

        {show ? (
          <AiOutlineArrowUp className="text-gray-500" />
        ) : (
          <AiOutlineArrowDown className="text-gray-500" />
        )}
      </div>

      {show && (
        <select
          onChange={(event) => {
            setUserResume(event.target.value);
          }}
          className="w-full outline-none border pr-8 pl-3 py-2 text-sm"
          value={userResume}
        >
          {Object.keys(resume).map((r) => (
            <option key={r} value={r}>
              {r.slice(0, 1).toUpperCase() + r.slice(1)} resume
            </option>
          ))}
        </select>
      )}

      {show && resume[userResume] && (
        <table className="w-full mt-3 mb-4">
          <tbody className="flex justify-between">
            {resume[userResume].map((data) => (
              <tr
                key={data.entity}
                className="w-full flex flex-col border-t border-t-gray-200 pt-5"
              >
                <td className="">
                  <p>
                    {data.dateStart} — {data.dateEnd}
                  </p>
                </td>
                <td className="text-sm text-gray-400">
                  <p>{data.entity}</p>
                  <p>{data.subject}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Resume;
