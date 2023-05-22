"use client";

import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(5);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="flex flex-col gap-2 mt-6">
      <div className="flex gap-2">
        <h3 className="font-bold text-xl">12 reviews</h3>

        <div className="flex gap-[1px] items-center">
          {[1, 2, 3, 4, 5].map((value) => (
            <svg
              key={value}
              xmlns="http://www.w3.org/2000/svg"
              /* className={`h-[20px] w-6 cursor-pointer ${
              value <= rating ? "text-[#fdc425]" : "text-[#f2f2f2]"
            }`} */
              /* fill={value <= rating ? "#fdc425" : "none"} */
              className="h-[15px] w-6 cursor-pointer text-[#fdc425]"
              fill="#fdc425"
              viewBox="0 0 24 24"
              stroke="currentColor"
              /* onClick={() => handleRating(value)} */
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M23.97 8.721a.597.597 0 0 0-.507-.413l-7.744-.822-3.172-7.16c-.192-.435-.903-.435-1.095 0l-3.17 7.16-7.745.822a.601.601 0 0 0-.508.413.606.606 0 0 0 .17.635l5.785 5.248-1.616 7.667a.605.605 0 0 0 .586.729.595.595 0 0 0 .3-.081L12 19.003l6.747 3.916c.204.119.46.105.652-.035a.606.606 0 0 0 .234-.613l-1.616-7.668 5.786-5.248a.606.606 0 0 0 .168-.634z"
              />
            </svg>
          ))}
          <span className="text-xl text-center text-[#fdc425] font-bold">
            {rating}
          </span>
        </div>
      </div>

      <ul className="mt-5">
        {[5, 4, 3, 2, 1].map((number) => (
          <li key={number} className="flex items-center justify-between gap-5">
            <p
              className={`min-w-[20%] ${
                number === 5 ? "font-medium" : "text-[#AEB5BC]"
              }`}
            >
              {number} stars
            </p>
            <div
              className={`w-full min-w-[40%] h-2 ${
                number === 5 ? "bg-[#fdc425]" : "bg-[#f2f2f2]"
              } rounded-full`}
            ></div>
            <span
              className={`min-w-[10%] ${
                number === 5 ? "font-medium" : "text-[#AEB5BC]"
              }`}
            >
              {number === 5 ? "(12)" : "(0)"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rating;
