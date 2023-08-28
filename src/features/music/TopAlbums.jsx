// This code gets the most popular albums from the Napster API and displays them on the screen.
import { useRef } from "react";
import { useGetPopularAlbumsQuery } from "./napsterApi";
import TopAlbumsSkeleton from "@/components/Skeleton/TopAlbumsSkeleton";
import leftArrowIcon from "@/assets/icons/left-arrow.png";
import rightArrowIcon from "@/assets/icons/right-arrow.png";
import AlbumCard from "./AlbumCard";
const TopAlbums = () => {
  const albumContainerRef = useRef(null);
  const { data, error, isLoading } = useGetPopularAlbumsQuery();
  console.log(data, error, isLoading);
  function scrollLeft() {
    if (albumContainerRef.current.scrollLeft > 0) {
      albumContainerRef.current.scrollLeft -= 400;
    }
  }
  function scrollRight() {
    if (
      albumContainerRef.current.scrollLeft <
      albumContainerRef.current.scrollWidth -
        albumContainerRef.current.clientWidth
    ) {
      albumContainerRef.current.scrollLeft += 400;
    }
  }
  return (
    <>
      {isLoading && !data ? (
        <TopAlbumsSkeleton />
      ) : (
        <div>
          <div className="flex justify-between">
            <div aria-label="section title">
              <p className="h-8 w-24m-2">Featured</p>
              <h2 className="h-6 w-20m-2">Albums</h2>
            </div>
            <div
              className="flex gap-2 items-center mx-4"
              aria-label="slider buttons"
            >
              <button
                onClick={scrollLeft}
                className="w-8 h-8 flex justify-center items-center border-slate-600 border-[2px] rounded-full"
              >
                <img
                  className="h-1/2 w-1/2 object-contain"
                  src={leftArrowIcon}
                  alt=""
                />
              </button>
              <button
                onClick={scrollRight}
                className="w-8 h-8 flex justify-center items-center border-slate-600 border-[2px] rounded-full"
              >
                <img
                  className="h-1/2 w-1/2 object-contain"
                  src={rightArrowIcon}
                  alt=""
                />
              </button>
            </div>
          </div>
          <div
            className="flex gap-2 overflow-y-auto hide-scrollbar scroll-smooth"
            aria-label="albums container"
            ref={albumContainerRef}
          >
            {data.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TopAlbums;
