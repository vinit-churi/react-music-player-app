// This code gets the most popular albums from the Napster API and displays them on the screen.
import { useGetPopularAlbumsQuery } from "./napsterApi";
import TopAlbumsSkeleton from "@/components/Skeleton/TopAlbumsSkeleton";
import leftArrowIcon from "@/assets/icons/left-arrow.png";
import rightArrowIcon from "@/assets/icons/right-arrow.png";
// import AlbumCardSkeleton from "@/components/Skeleton/AlbumCard";
// TopAlbumsSkeleton
const TopAlbums = () => {
  const { data, error, isLoading } = useGetPopularAlbumsQuery();
  let showSkeleton = true;
  console.log(data, error, isLoading);
  return (
    <>
      {showSkeleton ? (
        <TopAlbumsSkeleton />
      ) : (
        <div>
          <div>
            <div aria-label="section title">
              <p>featured</p>
              <h2>Albums</h2>
            </div>
            <div aria-label="slider buttons">
              <button>
                <img src={leftArrowIcon} alt="" />
              </button>
              <button>
                <img src={rightArrowIcon} alt="" />
              </button>
            </div>
          </div>
          <div
            className="flex gap-2 overflow-y-auto hide-scrollbar"
            aria-label="albums container"
          ></div>
        </div>
      )}
    </>
  );
};

export default TopAlbums;
