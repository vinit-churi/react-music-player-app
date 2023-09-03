import { AiFillPlayCircle } from "react-icons/ai";
import { BiSolidAddToQueue } from "react-icons/bi";
import { MdPlaylistAdd } from "react-icons/md";
const SongCard = ({ song, index }) => {
  return (
    <div
      className={`flex-[1_1_100%] h-20 bg-slate-50 rounded-md flex items-center`}
    >
      <p className="font-bold text-[26px] text-slate-400 italic p-2 self-start">
        {index}.
      </p>
      <div className="self-start flex-auto flex flex-col py-4 gap-2">
        <p>{song.name}</p>
        <p>{song.artistName}</p>
      </div>
      <p className="flex-auto">{song.albumName}</p>
      <p className="flex-[0_0_min-content] px-2">30s</p>
      {/* <MdPlaylistAdd className="flex-[0_0_min-content] h-6 mx-2 cursor-pointer hover:h-8 hover:text-yellow-300 transition-all ease-in-out duration-300" /> */}
      {/* <BiSolidAddToQueue className="flex-[0_0_min-content] h-6 mx-2 cursor-pointer hover:h-8 hover:text-yellow-300 transition-all ease-in-out duration-300" /> */}
      <AiFillPlayCircle className="flex-[0_0_min-content] h-6 mx-4 cursor-pointer hover:h-8 hover:text-yellow-300 transition-all ease-in-out duration-300" />
    </div>
  );
};

export default SongCard;
