import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineAddCircle } from "react-icons/md";
import { useState } from "react";
import {
  useCreatePlaylistMutation,
  useGetUserPlaylistsQuery,
  useAddSongToPlaylistMutation,
} from "@/features/appData/appData";
import { useSelector } from "react-redux";
import { userSelector } from "@/features/auth/authSlice";
import PlaylistOption from "@/components/General/PlaylistOption";
import PropTypes from "prop-types";

const PlaylistModal = ({ closeModal, songId }) => {
  const [playlistInput, setPlaylistInput] = useState("");
  const user = useSelector(userSelector);
  const { data: playlists = null } = useGetUserPlaylistsQuery(user.uid);
  const [createPlaylist] = useCreatePlaylistMutation();
  const [addSongToPlaylist] = useAddSongToPlaylistMutation();
  const handleCreatePlaylist = async (e) => {
    e.preventDefault();
    if (!playlistInput) {
      // notify the user that he needs to enter a playlist name

      return;
    }
    try {
      const { data: id } = await createPlaylist({
        name: playlistInput,
        userId: user.uid,
      });
      await addSongToPlaylist({
        playlistId: id,
        songId,
      });
      console.log(id, "playlist created successfully");
      setPlaylistInput("");
      // closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed m-auto inset-0 rounded-lg bg-white border-2 border-gray-500 h-max w-[min(90%,600px)] ">
      <AiFillCloseCircle
        className="text-2xl cursor-pointer absolute top-2 right-2"
        onClick={closeModal}
      />
      <div className="flex flex-wrap p-2 justify-center overflow-y-auto gap-2 ">
        {playlists &&
          playlists.map((playlist) => (
            <PlaylistOption
              songId={songId}
              playlist={playlist}
              key={playlist.id}
            />
          ))}
      </div>
      <form
        onSubmit={handleCreatePlaylist}
        className="flex justify-center relative"
      >
        <input
          type="text"
          value={playlistInput}
          onChange={(e) => setPlaylistInput(e.target.value)}
          placeholder="Create new playlist"
          className="rounded-full outline-slate-300 outline-2 border-slate-300 border-2 h-8 my-2 px-5 placeholder:text-center"
        />
        <MdOutlineAddCircle className="absolute text-gray-500" />
      </form>
    </div>
  );
};

const propTypes = {
  closeModal: PropTypes.func.isRequired,
  songId: PropTypes.string.isRequired,
};

PlaylistModal.propTypes = propTypes;

export default PlaylistModal;
