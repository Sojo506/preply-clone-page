import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineQuestionCircle, AiOutlineHeart } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import Profile from "./Profile";

const Header = () => {
  return (
    <header>
      <div className="w-full flex items-center justify-between p-1 sm:p-2">
        <div>
          <Image
            src="logo.svg"
            width={120}
            height={40}
            alt="preply logo"
            className="object-contain"
          />
        </div>

        <div className="flex gap-2 items-center">
          <MdOutlineAccountBalanceWallet className="text-gray-500 text-xl sm:text-2xl cursor-pointer hover:text-gray-400" />
          <FaRegCommentAlt className="text-gray-500 sm:text-xl cursor-pointer hover:text-gray-400" />
          <AiOutlineQuestionCircle className="text-gray-500 text-xl sm:text-2xl cursor-pointer hover:text-gray-400 hidden md:flex" />
          <AiOutlineHeart className="text-gray-500 text-xl sm:text-2xl cursor-pointer hover:text-gray-400" />
          <IoMdNotificationsOutline className="text-gray-500 text-xl sm:text-2xl cursor-pointer hover:text-gray-400" />
          <RxHamburgerMenu className="text-gray-500 text-xl sm:text-2xl md:hidden cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      <Profile />
    </header>
  );
};

export default Header;
