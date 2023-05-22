"use client";

import data from "@/utils/data";
import { useEffect, useState } from "react";

const Comments = () => {
  const [show, setShow] = useState(false);
  const [reviews, setReviews] = useState([]);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    if (show) {
      setReviews(data);
    } else {
      setReviews(data.slice(0, Math.floor(data.length / 2)));
    }
  }, [show]);
  return (
    <div className="mt-6">
      <ul>
        {reviews &&
          reviews.map((user) => (
            <li
              key={user.name}
              className="flex gap-5 py-5 border-t border-t-gray-200"
            >
              <img
                src={user.img}
                alt={user.name}
                className="rounded-full w-20 h-20"
              />

              <div className="w-full flex flex-col gap-1">
                <div className="flex items-center gap-[1px]">
                  <h3 className="text-sm font-medium">{user.name}</h3>

                  <svg
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
                  <p className="text-[#fdc425] font-bold">{user.rate}</p>
                </div>

                <p className="text-sm text-[#8a959e]">{user.dateOfPublished}</p>
                <p className="text-sm">{user.comment}</p>
              </div>
            </li>
          ))}
      </ul>

      <button
        className="w-full mx-auto rounded-2xl p-2 bg-[#3bb3bd] text-white text-sm font-bold mt-5"
        onClick={handleClick}
      >
        {show ? "Hide reviews" : "More reviews"}
      </button>
    </div>
  );
};

export default Comments;
