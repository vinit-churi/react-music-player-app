import { FaExpandAlt } from "react-icons/fa";
import { GiMusicSpell } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";

import {
  selectExpandedQueue,
  setExpandedQueue,
} from "@/features/audioPlayer/audioPlayerSlice";
const SongsQueue = () => {
  const expandedQueue = useSelector(selectExpandedQueue);
  const dispatch = useDispatch();

  return (
    <section className="col-start-3 col-end-4 row-start-2 row-end-3 w-min">
      <div
        className={`overflow-hidden h-full bg-slate-100 transition-all p-2 duration-300 ease-in-out grid ${
          expandedQueue ? "grid-rows-[100%]" : "grid-rows-[350px]"
        } justify-items-center content-center 
        w-max`}
      >
        <div
          className={` relative bg-white group rounded-md hover:w-[300px] transition-all ease-in-out duration-300 ${
            expandedQueue ? "w-[300px]" : "w-[90px]"
          }`}
        >
          {/* <GiMusicSpell/> */}
          <p
            className={`w-[90px] group-hover:hidden p-2 h-auto bg-slate-200 text-center font-bold text-lg text-slate-700 transition-all ease-in-out duration-300 rounded-tr-md rounded-tl-md ${
              expandedQueue ? "hidden" : "block"
            }`}
          >
            Queue
          </p>
          <div
            onClick={() => dispatch(setExpandedQueue(!expandedQueue))}
            className={`group-hover:flex absolute  items-center justify-center top-4 right-4 bg-slate-300  w-[25px] h-[25px] rounded-full cursor-pointer ${
              expandedQueue ? "flex bg-yellow-200" : "hidden"
            }`}
          >
            <FaExpandAlt className="h-2/3 w-2/3 object-contain" />
          </div>
          {/* <p>song queue section</p> */}
        </div>
      </div>
    </section>
  );
};

/*

<div
        className={`overflow-hidden bg-blue-100  transition-width ease-in-out duration-1000 ${
          !isExpanded ? "w-[0px]" : "w-[300px]"
        }`}
      >
        <div className={`w-[100%]`}>
          <p>song queue section</p>
        </div>
      </div>

*/

export default SongsQueue;
