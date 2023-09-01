import { useGetTopTracksQuery } from "./napsterApi";
import TopSongsSkeleton from "@/components/Skeleton/TopSongsSkeleton";
import SongCard from "./SongCard";
const TopSongs = () => {
  const { data, isLoading, isError } = useGetTopTracksQuery();
  console.log(data);
  console.log("does TopSongs component have any error?", isError);
  return (
    <div className="flex-[1_1_100%] @[730px]:flex-[1_1_70%] @[1000px]:flex-[1_1_60%]">
      {!data && isLoading ? (
        <TopSongsSkeleton />
      ) : (
        <div>
          <div className="">
            <div>
              <div>
                <div className="h-max" aria-label="section title">
                  <p className="w-24 m-2 font-Karla text-sm font-semibold mx-2 text-slate-300">
                    Featured
                  </p>
                  <h2 className="w-20 m-2 font-Karla text-3xl font-semibold mx-2 text-slate-500">
                    Songs
                  </h2>
                </div>
              </div>
              <div className="flex gap-3 flex-wrap bg-white rounded-md border-[10px] border-slate-100 border-solid p-4 overflow-auto border-r-[15px] max-h-[400px] h-[400px] min-h-[400px]">
                {data.map((song, index) => {
                  return (
                    <SongCard
                      key={song.id}
                      song={song}
                      index={
                        index + 1 < 10 ? `0${Number(index) + 1}` : index + 1
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopSongs;
