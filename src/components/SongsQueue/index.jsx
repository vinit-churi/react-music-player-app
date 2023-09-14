import { FaExpandAlt } from "react-icons/fa";
// import { GiMusicSpell } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSongQueue,
  selectCurrentTrack,
} from "@/features/audioPlayer/audioPlayerSlice";
import {
  selectExpandedQueue,
  setExpandedQueue,
} from "@/features/audioPlayer/audioPlayerSlice";
const SongsQueue = () => {
  const expandedQueue = useSelector(selectExpandedQueue);
  const dispatch = useDispatch();
  const songsQueue = useSelector(selectSongQueue);
  const currentTrack = useSelector(selectCurrentTrack);
  console.log("songsQueue", songsQueue);
  console.log("currentTrack", currentTrack);

  return (
    <section className="col-start-3 col-end-4 row-start-2 row-end-3 w-min min-h-0">
      <div
        className={`overflow-hidden  h-full bg-slate-100 transition-all p-2 duration-300 ease-in-out grid ${
          expandedQueue ? "grid-rows-[100%]" : "grid-rows-[350px]"
        } justify-items-center content-center 
        w-max`}
      >
        <div
          className={`overflow-y-hidden hover:overflow-y-auto relative bg-white group rounded-md hover:w-[300px] transition-all ease-in-out duration-300  ${
            expandedQueue
              ? "w-[300px] max-[600px]:w-full z-50 max-[600px]:fixed max-[600px]:top-[0px] max-[600px]:left-0 max-[600px]:right-0 max-[600px]:hover:w-full max-[600px]:bottom-[103px]"
              : "w-[90px]"
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
            className={`group-hover:flex absolute z-50  items-center justify-center top-4 right-4 bg-slate-300  w-[25px] h-[25px] rounded-full cursor-pointer ${
              expandedQueue ? "flex bg-yellow-200" : "hidden"
            }`}
          >
            <FaExpandAlt className="h-2/3 w-2/3 object-contain" />
          </div>
          <div className="@container">
            {/* <p className="text-xl text-slate-400 font-bold mt-4 pl-4 hidden @[299px]:block">
              Currently Playing
            </p> */}
            <div>
              {currentTrack && (
                <div className="flex items-center justify-between px-4 pt-2">
                  <div className="flex items-center max-w-full overflow-hidden">
                    <div className="w-14 h-14 rounded-md relative flex-shrink-0 ">
                      <p className="absolute inset-0 m-0 h-full w-full bg-green-700 z-10 animate-pulse  rounded-md"></p>
                      <img
                        className="rounded-md object-cover w-12 h-12 m-auto inset-0 absolute z-20"
                        src={`https://api.napster.com/imageserver/v2/albums/${currentTrack.albumId}/images/500x500.jpg`}
                        alt={currentTrack.name}
                      />
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <p className="text-slate-700 font-bold">
                        {currentTrack.name}
                      </p>
                      <p className="text-slate-400">
                        {currentTrack.artistName}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* <p className="text-xl text-slate-400 font-bold pl-4 hidden @[299px]:block">
              Up next
            </p> */}
            <div>
              {songsQueue &&
                songsQueue.map((song) => (
                  <div
                    key={song.id + song.id}
                    className="flex items-center justify-between px-4"
                  >
                    <div className="flex items-center max-w-full overflow-hidden">
                      <div className="w-14 h-14 rounded-md relative flex-shrink-0 ">
                        <img
                          className="rounded-md object-cover w-12 h-12 m-auto inset-0 absolute z-20"
                          src={`https://api.napster.com/imageserver/v2/albums/${song.albumId}/images/500x500.jpg`}
                          alt={song.name}
                        />
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <p className="text-slate-700 font-bold">{song.name}</p>
                        <p className="text-slate-400">{song.artistName}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
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
