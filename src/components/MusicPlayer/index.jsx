import { useRef, useState, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";
import { BsCollectionPlayFill } from "react-icons/bs";
import { AiOutlineStepForward } from "react-icons/ai";
import { AiOutlineStepBackward } from "react-icons/ai";
import { TbRewindBackward5 } from "react-icons/tb";
import { TbRewindForward5 } from "react-icons/tb";
import { BsFillPauseCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import PlaylistModal from "@/components/PlaylistModal";
import notify from "@/components/notify";
import {
  selectExpandedQueue,
  setExpandedQueue,
  // setSongQueue,
  play,
  pause,
  // selectSongQueue,
  setCurrentTime,
  setDuration,
  // setCurrentTrack,
  selectIsPlaying,
  // selectVolume,
  selectCurrentTime,
  selectDuration,
  selectCurrentTrack,
  playNext,
  setShowPlaylistModal,
  selectShowPlaylistModal,
  addSongToHistory,
  playPrevious,
} from "@/features/audioPlayer/audioPlayerSlice";
import { useAddSongToHistoryMutation } from "@/features/appData/appData";
import { userSelector } from "@/features/auth/authSlice";
const MusicPlayer = () => {
  const user = useSelector(userSelector);
  const audioElement = useRef(new Audio());
  // const audioElement = new Audio();
  const [playable, setPlayable] = useState(false);
  const [seekBeforeWidth, setSeekBeforeWidth] = useState(0);
  const dispatch = useDispatch();
  const isPlaying = useSelector(selectIsPlaying);
  // const volume = useSelector(selectVolume);
  const currentTime = useSelector(selectCurrentTime);
  const duration = useSelector(selectDuration);
  const currentTrack = useSelector(selectCurrentTrack);
  const expandedQueue = useSelector(selectExpandedQueue);
  // const songQueue = useSelector(selectSongQueue);
  // console.log("do I have the latest value of songQueue?", songQueue);
  const [addSongToHistoryInCloud] = useAddSongToHistoryMutation();

  const showPlaylistModal = useSelector(selectShowPlaylistModal);

  function addToPlaylist() {
    if (user) {
      dispatch(setShowPlaylistModal(!showPlaylistModal));
    } else {
      console.log("please login to add to playlist");
      notify("Please login to add to playlist", "🔑");
    }
  }
  function handleInput(e) {
    console.log("handle input", e.target.value);
    audioElement.current.currentTime = e.target.value;
  }

  function handlePlay() {
    // audioElement.current.play();
    dispatch(play());
  }
  function handlePause() {
    // audioElement.current.pause();
    dispatch(pause());
  }
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying]);
  useEffect(() => {
    if (!currentTrack) return;
    const localAudioElement = audioElement.current;
    localAudioElement.src = currentTrack.previewURL;
    function handleCanPlayThrough() {
      setPlayable(true);
      localAudioElement.play();
      dispatch(setDuration(localAudioElement.duration ?? 0));
      dispatch(play());
      dispatch(addSongToHistory(currentTrack));
      if (!user) return;
      addSongToHistoryInCloud({
        songId: currentTrack.id,
        userId: user?.uid,
      });
    }
    function handleTimeUpdate() {
      dispatch(setCurrentTime(localAudioElement.currentTime));
      let seekBeforeWidth =
        (localAudioElement.currentTime / localAudioElement.duration) * 100;
      setSeekBeforeWidth(seekBeforeWidth);
    }
    function handleEnded() {
      // dispatch(addSongToHistory(currentTrack));
      setPlayable(false);
      dispatch(setCurrentTime(0));
      dispatch(setDuration(0));
      dispatch(pause());
      setSeekBeforeWidth(0);
      audioElement.current.src = "";
      dispatch(playNext());
    }
    localAudioElement.addEventListener("canplaythrough", handleCanPlayThrough);
    localAudioElement.addEventListener("ended", handleEnded);
    localAudioElement.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      localAudioElement.removeEventListener(
        "canplaythrough",
        handleCanPlayThrough
      );
      localAudioElement.removeEventListener("ended", handleEnded);
      localAudioElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [currentTrack]);
  return (
    <div className="row-start-3 row-end-4 col-start-2 col-end-4 relative bg-slate-100">
      {showPlaylistModal &&
        currentTrack &&
        document.getElementById("modalRoot") &&
        createPortal(
          <PlaylistModal
            songId={currentTrack.id}
            closeModal={() => dispatch(setShowPlaylistModal(false))}
          />,
          document.getElementById("modalRoot")
        )}
      <input
        type="range"
        name="music time seekBar"
        id="playerTime"
        disabled={false}
        // ref={audioRef}
        onInput={handleInput}
        value={currentTime}
        min={0}
        max={duration}
        step={0.1}
        className={`absolute top-0 left-0 right-0 mx-0 translate-y-[-50%] player-custom-range cursor-pointer disabled:cursor-not-allowed before:content-[' '] before:block before:absolute before:h-[6px] before:bg-green-500 before:rounded-full`}
        style={{ "--before-width": `${seekBeforeWidth}%` }}
      />
      <div className="flex justify-between px-2 py-2">
        {/* show initial and end time of audioRef */}
        <p>
          0:
          {currentTime > 10
            ? Number(currentTime).toFixed(0)
            : `0${Number(currentTime).toFixed(0)}`}
        </p>
        <p>
          0:
          {duration > 10
            ? Number(duration).toFixed(0)
            : `0${Number(duration).toFixed(0)}`}
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid ml-2 gap-2 grid-rows-[min-content_min-content] grid-cols-[min-content_min-content] grid-flow-dense max-[600px]:hidden">
          {currentTrack ? (
            <>
              <div className="h-12 w-12 rounded-md row-start-1 row-span-2">
                <img
                  className="h-full w-full object-cover rounded-md cursor-pointe"
                  src={`https://api.napster.com/imageserver/v2/albums/${currentTrack.albumId}/images/200x200.jpg`}
                  alt=""
                />
              </div>
              <p className="w-20 truncate text-[14px] font-bold m-0">
                {currentTrack.name}
              </p>
              <p className="w-20 truncate text-[14px] font-bold m-0">
                {currentTrack.artistName}
              </p>
            </>
          ) : (
            <>
              <div className="bg-slate-200 h-12 w-12 rounded-md row-start-1 row-span-2"></div>
              <p className="w-16 rounded-md bg-slate-300"></p>
              <p className="w-24 rounded-md bg-slate-300"></p>
            </>
          )}
        </div>
        <div className="flex mx-auto items-center">
          <TbRewindBackward5 className="flex-[0_0_min-content] h-6 mx-2 cursor-pointer hover:scale-125 hover:text-[#087e02] transition-all ease-in-out duration-300" />
          <AiOutlineStepBackward
            onClick={() => dispatch(playPrevious())}
            className="flex-[0_0_min-content] h-6 mx-2 cursor-pointer hover:scale-125 hover:text-[#087e02] transition-all ease-in-out duration-300"
          />
          {isPlaying ? (
            <button
              onClick={handlePause}
              disabled={!playable}
              className="flex-[0_0_40px] disabled:opacity-50 h-[40px] mx-2 cursor-pointer hover:scale-125 hover:text-[#087e02] transition-all ease-in-out duration-300"
            >
              <BsFillPauseCircleFill className="h-full w-full" />
            </button>
          ) : (
            <button
              onClick={handlePlay}
              disabled={!playable}
              className="flex-[0_0_40px] disabled:opacity-50 h-[40px] mx-2 cursor-pointer hover:scale-125 hover:text-[#087e02] transition-all ease-in-out duration-300"
            >
              <AiFillPlayCircle className="h-full w-full" />
            </button>
          )}
          <AiOutlineStepForward
            onClick={() => dispatch(playNext())}
            className="flex-[0_0_min-content] h-6 mx-2 cursor-pointer hover:scale-125 hover:text-[#087e02] transition-all ease-in-out duration-300"
          />
          <TbRewindForward5 className="flex-[0_0_min-content] h-6 mx-2 cursor-pointer hover:scale-125 hover:text-[#087e02] transition-all ease-in-out duration-300" />
        </div>
        <div className="flex items-center mr-2 flex-wrap justify-end flex-[0_0_130px] max-[600px]:flex-nowrap max-[600px]:flex-[0_0_min-content]">
          <input
            type="range"
            name="music time seekBar"
            id="playerTime"
            disabled={true}
            // defaultValue={0}
            className="audio-custom-range cursor-pointer disabled:cursor-not-allowed flex-[1_1_100%] max-[600px]:hidden"
          />
          <MdPlaylistAdd
            onClick={addToPlaylist}
            className="flex-[0_0_max-content] h-6 mx-2 cursor-pointer hover:scale-105 hover:text-[#087e02] transition-all ease-in-out duration-300"
          />
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
