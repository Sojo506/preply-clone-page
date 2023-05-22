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
      <div className="w-full flex items-center justify-between pt-5 pb-3 px-3 ">
        <div>
          <Image
            src="logo.svg"
            width={130}
            height={60}
            alt="preply logo"
            className="object-contain"
          />
        </div>

        <div className="flex gap-2 items-center">
          <MdOutlineAccountBalanceWallet className="text-gray-500 text-2xl cursor-pointer hover:text-gray-400" />
          <FaRegCommentAlt className="text-gray-500 cursor-pointer hover:text-gray-400" />
          <AiOutlineQuestionCircle className="text-gray-500 text-2xl cursor-pointer hover:text-gray-400 hidden md:flex" />
          <AiOutlineHeart className="text-gray-500 text-2xl cursor-pointer hover:text-gray-400" />
          <IoMdNotificationsOutline className="text-gray-500 text-2xl cursor-pointer hover:text-gray-400" />
          <RxHamburgerMenu className="text-gray-500 text-2xl md:hidden cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      <Profile />
    </header>
  );
};

export default Header;
