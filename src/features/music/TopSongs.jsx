// import { useGetTopTracksQuery } from "./napsterApi";
import TopSongsSkeleton from "@/components/Skeleton/TopSongsSkeleton";
const TopSongs = () => {
  // const { data, isLoading, isError } = useGetTopTracksQuery();
  return (
    <div className="flex-[1_1_50%]">
      <TopSongsSkeleton />
    </div>
  );
};

export default TopSongs;
