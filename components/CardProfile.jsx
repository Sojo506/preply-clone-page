import { AiOutlineMail, AiOutlineHeart } from "react-icons/ai";

const CardProfile = () => {
  return (
    <div className="flex flex-col gap-2 translate-y-7">
      <button className="w-[90%] mx-auto flex items-center justify-center gap-2 p-2 border border-cyan-500 rounded-xl text-cyan-500 font-medium">
        <AiOutlineMail />
        Send message
      </button>
      <button className="w-[90%] mx-auto flex items-center justify-center gap-2 p-2 border border-cyan-500 rounded-xl text-cyan-500 font-medium">
        <AiOutlineHeart />
        Save to my list
      </button>
      <iframe
        src="https://player.vimeo.com/video/651454592"
        frameborder="0"
        allowfullscreen
        className="h-40"
      ></iframe>
    </div>
  );
};

export default CardProfile;
