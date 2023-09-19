import { useParams, useSearchParams } from "react-router-dom";
import { useGetMultipleSongsByIdQuery } from "@/features/music/napsterApi";
import SongCard from "@/features/music/SongCard";

const SinglePlaylistPage = () => {
  const { id } = useParams();
  console.log(id);
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const songsString = searchParams.get("songs");
  let songsArray;
  if (songsString) {
    if (songsString.includes(",")) {
      songsArray = songsString.split(",").map((song) => song.trim());
    } else {
      songsArray = [songsString];
    }
  } else {
    songsArray = [];
  }
  const { data, isLoading, error } = useGetMultipleSongsByIdQuery(songsArray);

  console.log(name, songsArray);
  console.log(data, isLoading, error);
  return (
    <div className="min-h-[81vh]">
      <p className="font-bold text-4xl p-4">{name}</p>
      <div>
        {data ? (
          data.map((song, index) => {
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
          })
        ) : (
          <div className="flex gap-3 flex-wrap bg-slate-200 p-4 ">
            {[...Array(10).keys()].map((key) => {
              return (
                <div
                  key={key}
                  className={`flex-[1_1_100%] h-20 animate-pulse bg-slate-600 rounded-md`}
                ></div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePlaylistPage;
