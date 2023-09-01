import { useGetTopTracksQuery } from "./napsterApi";
const TopSongs = () => {
  const { data, isLoading, isError } = useGetTopTracksQuery();
  return <div className="flex-[1_1_50%]">TopSongs</div>;
};

export default TopSongs;
