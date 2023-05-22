import Image from "next/image";
import { GiGraduateCap } from "react-icons/gi";
import { BiCommentDots } from "react-icons/bi";
import { IoStopCircleOutline } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";

const Profile = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="w-full md:w-auto grid-profile p-1">
        <picture className="md:row-start-1 md:row-end-3">
          <source
            type="image/webp"
            srcSet="https://avatars.preply.com/i/logos/i/logos/avatar_clthp8nsseh.jpg?d=160x160&f=webp, https://avatars.preply.com/i/logos/i/logos/avatar_clthp8nsseh.jpg?d=320x320&f=webp 2x"
          />
          <img
            alt="Mio S."
            src="https://avatars.preply.com/i/logos/i/logos/avatar_clthp8nsseh.jpg?d=160x160&f=jpeg"
            className="rounded-md h-28"
          />
        </picture>

        <div className="col-span-1">
          <div className="flex items-center gap-1">
            <h3 className="font-bold">Mio S.</h3>

            <div className="">
              <img
                src="https://static.preply.com/groot/country_flags/4x3/jp.svg"
                alt="Japan"
                className="w-6 icon-red-after"
              />
            </div>

            <MdVerifiedUser className="text-cyan-600" />
          </div>
          <p className="text-sm">
            We offer flexible lessons according to your goals.
          </p>
        </div>

        <div className="col-span-2 md:col-auto flex flex-col gap-2 mt-5">
          <div className="flex gap-2 items-center">
            <GiGraduateCap className="text-gray-400" />
            <p className="text-sm">Teaches Japanese lessons</p>
          </div>
          <div className="flex gap-1 items-center">
            <BiCommentDots className="text-gray-400" />
            <p className="text-sm ">
              Speaks Japanese{" "}
              <span className="bg-[#eef7e9] text-[#50bf16] p-[1px]">Native</span>
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <IoStopCircleOutline className="text-gray-400" />
            <p className="text-sm">569 lessons taught</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
