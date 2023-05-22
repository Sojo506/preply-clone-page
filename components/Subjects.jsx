"use client";

import subjects from "@/utils/subjects";
import { useState } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Subjects = () => {
  const [show, setShow] = useState(false);
  const [currentSubject, setCurrentSubject] = useState("english");
  const userSubjects = ["english"];

  return (
    <div className="rounded-md bg-white p-3 shadow-md w-full max-w-[720px] mt-5">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShow((prev) => !prev)}
      >
        <h2 className="font-bold py-5">Subjects</h2>

        {show ? (
          <AiOutlineArrowUp className="text-gray-500" />
        ) : (
          <AiOutlineArrowDown className="text-gray-500" />
        )}
      </div>

      {show && (
        <select
          onChange={(event) => {
            setCurrentSubject(event.target.value);
          }}
          className="w-full outline-none border pr-8 pl-3 py-2 text-sm"
          value={currentSubject}
        >
          {userSubjects.map((s) => (
            <option key={s} value={s}>
              {s.slice(0, 1).toUpperCase() + s.slice(1)}
            </option>
          ))}
        </select>
      )}

      {show && subjects[currentSubject] && (
        <table className="w-full mt-3 mb-4">
          <ul className="flex flex-col">
            {subjects[currentSubject].map((data) => (
              <li
                key={data.name}
                className="w-full border-t border-t-gray-200 py-4"
              >
                <dt className="text-sm">{data.name}</dt>
                <dd className="text-sm text-gray-500 mt-1">{data.description}</dd>
              </li>
            ))}
          </ul>
        </table>
      )}
    </div>
  );
};

export default Subjects;
