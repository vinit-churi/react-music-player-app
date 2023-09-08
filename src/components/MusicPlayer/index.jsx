import { useRef, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";
import { BsCollectionPlayFill } from "react-icons/bs";
import { AiOutlineStepForward } from "react-icons/ai";
import { AiOutlineStepBackward } from "react-icons/ai";
import { TbRewindBackward5 } from "react-icons/tb";
import { TbRewindForward5 } from "react-icons/tb";
import { BsFillPauseCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  selectExpandedQueue,
  setExpandedQueue,
} from "@/features/audioPlayer/audioPlayerSlice";
const MusicPlayer = () => {
  const audioRef = useRef();
  const volumeRef = useRef();
  const [seekBeforeWidth, setSeekBeforeWidth] = useState(0);
  const dispatch = useDispatch();
  const expandedQueue = useSelector(selectExpandedQueue);
  function handleChange() {
    console.log("handle change");
    const audio = audioRef.current;
    let seekBeforeWidth = (audio.value / audio.max) * 100;
    console.log(seekBeforeWidth, "line 14");
    setSeekBeforeWidth(seekBeforeWidth);
  }
  console.log(expandedQueue, "line 20..");
  return (
    <div className="row-start-3 row-end-4 col-start-2 col-end-4 relative bg-slate-100">
      <input
        type="range"
        name="music time seekBar"
        id="playerTime"
        disabled={false}
        ref={audioRef}
        onChange={handleChange}
        min={0}
        max={100}
        defaultValue={0}
        className={`absolute top-0 left-0 right-0 mx-0 translate-y-[-50%] player-custom-range cursor-pointer disabled:cursor-not-allowed before:content-[' '] before:block before:absolute before:h-[6px] before:bg-green-500 before:rounded-full`}
        style={{ "--before-width": `${seekBeforeWidth}%` }}
      />
      <div className="flex justify-between px-2 py-2">
        {/* show initial and end time of audioRef */}
        <p>0:00</p>
        <p>0:00</p>
      </div>
      <div className="flex justify-center">
        <div className="grid ml-2 mr-auto gap-2 grid-rows-[min-content_min-content] grid-cols-[min-content_min-content] grid-flow-dense">
          <div className="bg-slate-200 h-12 w-12 rounded-md row-start-1 row-span-2">
            <img src="" alt="" />
          </div>
          <p className="w-16 rounded-md bg-slate-300"></p>
          <p className="w-24 rounded-md bg-slate-300"></p>
        </div>
        <div className="flex items-center">
          <TbRewindBackward5 className="flex-[0_0_min-content] h-6 mx-2 cursor-pointer hover:scale-125 hover:text-[#087e02] transition-all ease-in-out duration-300" />
          <AiOutlineStepBackward className="flex-[0_0_min-content] h-6 mx-2 cursor-pointer hover:scale-125 hover:text-[#087e02] transition-all ease-in-out duration-300" />
          {Math.random() > 0.5 ? (
            <BsFillPauseCircleFill className="flex-[0_0_min-content] h-8 mx-2 cursor-pointer hover:scale-125 hover:text-[#087e02] transition-all ease-in-out duration-300" />
          ) : (
            <AiFillPlayCircle className="flex-[0_0_min-content] h-8 mx-2 cursor-pointer hover:scale-125 hover:text-[#087e02] transition-all ease-in-out duration-300" />
          )}
          <AiOutlineStepForward className="flex-[0_0_min-content] h-6 mx-2 cursor-pointer hover:scale-125 hover:text-[#087e02] transition-all ease-in-out duration-300" />
          <TbRewindForward5 className="flex-[0_0_min-content] h-6 mx-2 cursor-pointer hover:scale-125 hover:text-[#087e02] transition-all ease-in-out duration-300" />
        </div>
        <div className="flex items-center mr-2 ml-auto flex-wrap justify-end flex-[0_0_130px]">
          <input
            type="range"
            name="music time seekBar"
            id="playerTime"
            disabled={false}
            ref={volumeRef}
            defaultValue={0}
            className="audio-custom-range cursor-pointer disabled:cursor-not-allowed flex-[1_1_100%]"
          />
          <MdPlaylistAdd className="flex-[0_0_max-content] h-6 mx-2 cursor-pointer hover:scale-105 hover:text-[#087e02] transition-all ease-in-out duration-300" />
          <BsCollectionPlayFill
            onClick={() => dispatch(setExpandedQueue(!expandedQueue))}
            className={`flex-[0_0_max-content] h-6 mx-2 cursor-pointer hover:scale-105  transition-all ease-in-out duration-300 ${
              expandedQueue
                ? "hover:caret-yellow-300 text-yellow-500"
                : "hover:text-[#087e02]"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
