import { useGetSongsFromHistoryQuery } from "@/features/appData/appData";
import { userSelector } from "../../features/auth/authSlice";
import { useGetMultipleSongsByIdQuery } from "@/features/music/napsterApi";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SongCard from "@/features/music/SongCard";
// import { useQuery } from "react-query";

const HistoryPage = () => {
  //   const [songsData, setSongsData] = useState([]);
  const user = useSelector(userSelector);
  const {
    data: songs,
    isLoading: isSongsLoading,
    isError: isSongsError,
  } = useGetSongsFromHistoryQuery(user.uid);
  const {
    data: songsById,
    isLoading: isSongsByIdLoading,
    isError: isSongsByIdError,
  } = useGetMultipleSongsByIdQuery(songs, {
    enabled: !!songs && songs.length > 0, // Only enable the query if songs is defined and not empty
  });

  return (
    <div className="min-h-[82vh]">
      <p className="text-4xl font-bold text-slate-700 p-2">History</p>
      <div className="grid grid-cols-1 gap-1 px-2">
        {isSongsByIdLoading ? (
          <p>Loading songs...</p>
        ) : isSongsByIdError ? (
          <p>Error loading songs: {isSongsByIdError.message}</p>
        ) : (
          <>
            {songsById &&
              songsById.map((song, index) => {
                return (
                  <SongCard
                    key={song.id}
                    song={song}
                    index={
                      index + 1 < 10
                        ? `0${Number(index) + 1}`
                        : `${Number(index) + 1}`
                    }
                  />
                );
              })}
          </>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
