import { AiFillPlayCircle } from "react-icons/ai";
import { BiSolidAddToQueue } from "react-icons/bi";
import PropTypes from "prop-types";
import {
  selectIsPlaying,
  // selectCurrentTrack,
  play,
  pause,
  setCurrentTrack,
  addToSongQueue,
} from "@/features/audioPlayer/audioPlayerSlice";
import { useDispatch, useSelector } from "react-redux";
const SongCard = ({ song, index }) => {
  const dispatch = useDispatch();
  // const currentTrack = useSelector(selectCurrentTrack);
  // const isPlaying = useSelector(selectIsPlaying);
  function handleAddSongToQueue() {
    dispatch(addToSongQueue(song));
  }
  function handlePlaySong() {
    // if (isPlaying) {
    //   dispatch(pause());
    // } else {
    //   dispatch(setCurrentTrack(song));
    //   dispatch(play());
    // }
    dispatch(setCurrentTrack(song));
  }
  return (
    <div
      className={`flex-[1_1_100%] h-20 bg-slate-50 rounded-md flex items-center @container`}
    >
      <p className="font-bold text-[26px] text-slate-400 italic p-2 self-start">
        {index}.
      </p>
      <div className="self-start flex-[0_0_min-content] flex flex-col py-4 gap-2">
        <p className="truncate max-w-[12ch]">{song.name}</p>
        <p className="truncate max-w-[12ch]">{song.artistName}</p>
      </div>
      <p className="flex-auto text-center truncate">{song.albumName}</p>
      <p className="flex-[0_0_min-content] px-2">30s</p>
      <BiSolidAddToQueue
        onClick={handleAddSongToQueue}
        className="flex-[0_0_min-content] h-6 mx-2 cursor-pointer hover:scale-105 hover:text-yellow-400 transition-all ease-in-out duration-300"
      />
      <AiFillPlayCircle
        onClick={handlePlaySong}
        className="flex-[0_0_min-content] h-6 mx-2 cursor-pointer hover:scale-105 hover:text-yellow-400 transition-all ease-in-out duration-300"
      />
    </div>
  );
};

SongCard.propTypes = {
  song: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    // Add more prop types for other properties of the song object
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default SongCard;
