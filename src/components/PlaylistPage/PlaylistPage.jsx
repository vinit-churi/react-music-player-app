import {
  useCreatePlaylistMutation,
  useGetUserPlaylistsQuery,
} from "@/features/appData/appData";
import { useSelector } from "react-redux";
import { userSelector } from "@/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
const PlaylistPage = () => {
  const navigate = useNavigate();
  const user = useSelector(userSelector);
  const { data: playlists = null } = useGetUserPlaylistsQuery(user.uid);
  const [createPlaylist] = useCreatePlaylistMutation();
  let hexString = "0123456789abcdef";
  let randomColor = () => {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
  };
  let randomAngle = () => {
    return Math.floor(Math.random() * 360);
  };
  return (
    <div className="min-h-[81vh]">
      {playlists ? (
        <div className="grid px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {playlists.map((playlist) => (
            <div
              onClick={() =>
                navigate(
                  `${playlist.id}?name=${
                    playlist.name
                  }&songs=${playlist.songs.join(",")}`
                )
              }
              style={{
                background: `linear-gradient(${randomAngle()}deg, ${randomColor()}, ${randomColor()})`,
              }}
              className="rounded-lg h-[200px] flex items-center justify-center backdrop:blur-xl cursor-pointer"
              key={playlist.id}
            >
              <p className="text-white">{playlist.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2 px-2 py-2">
          {[...Array(10).keys()].map((key) => {
            return (
              <div
                key={key}
                className={`rounded-lg h-[200px] w-[230px] flex items-center justify-center backdrop:blur-xl cursor-pointer animate-pulse bg-slate-600`}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PlaylistPage;
