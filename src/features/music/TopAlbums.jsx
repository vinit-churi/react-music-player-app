// This code gets the most popular albums from the Napster API and displays them on the screen.
import { useGetPopularAlbumsQuery } from "./napsterApi";
import AlbumCardSkeleton from "@/components/Skeleton/AlbumCard";
const TopAlbums = () => {
  const { data, error, isLoading } = useGetPopularAlbumsQuery();
  console.log(data, error, isLoading);
  return (
    <div>
      <p>featured</p>
      <h2>Albums</h2>
      <div
        className="flex gap-2 overflow-y-auto hide-scrollbar"
        aria-label="albums container"
      >
        {true &&
          [...Array(10).keys()].map((index) => (
            <AlbumCardSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export default TopAlbums;
