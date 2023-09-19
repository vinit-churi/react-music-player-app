import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdOutlineAddCircle } from "react-icons/md";
import PropTypes from "prop-types";
import {
  useAddSongToPlaylistMutation,
  useRemoveSongFromPlaylistMutation,
} from "@/features/appData/appData";
const PlaylistOption = ({ songId, playlist }) => {
  const [addSongToPlaylist] = useAddSongToPlaylistMutation();
  const [removeSongFromPlaylist] = useRemoveSongFromPlaylistMutation();
  let isSongInPlaylist = false;
  if (playlist.songs) {
    isSongInPlaylist = playlist.songs.includes(songId);
  }
  function handleAddSongToPlaylist() {
    console.log("add song to playlist");
    addSongToPlaylist({ songId, playlistId: playlist.id });
  }
  function handleRemoveSongFromPlaylist() {
    console.log("remove song from playlist");
    removeSongFromPlaylist({ songId, playlistId: playlist.id });
  }
  return (
    <div
      className={`flex justify-between items-center gap-2 cursor-pointer rounded-full ${
        isSongInPlaylist ? "bg-yellow-100" : "bg-slate-100"
      }  p-2 hover:bg-slate-300 transition-all ease-in-out duration-300`}
      onClick={() =>
        isSongInPlaylist
          ? handleRemoveSongFromPlaylist()
          : handleAddSongToPlaylist()
      }
    >
      <p>{playlist.name}</p>
      {isSongInPlaylist ? <BsFillCheckCircleFill /> : <MdOutlineAddCircle />}
    </div>
  );
};

PlaylistOption.propTypes = {
  songId: PropTypes.string,
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    songs: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PlaylistOption;
