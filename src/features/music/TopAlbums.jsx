// This code gets the most popular albums from the Napster API and displays them on the screen.
import { useRef, useState } from "react";
import { useGetPopularAlbumsQuery } from "./napsterApi";
import TopAlbumsSkeleton from "@/components/Skeleton/TopAlbumsSkeleton";
import leftArrowIcon from "@/assets/icons/left-arrow.png";
import rightArrowIcon from "@/assets/icons/right-arrow.png";
import AlbumCard from "./AlbumCard";
const TopAlbums = () => {
  const albumContainerRef = useRef(null);
  const [disableScrollLeft, setDisableScrollLeft] = useState(true);
  const [disableScrollRight, setDisableScrollRight] = useState(false);
  const { data, error, isLoading } = useGetPopularAlbumsQuery();
  // console.log(data, error, isLoading);
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
  function disableScrollButtons() {
    if (albumContainerRef.current.scrollLeft === 0) {
      setDisableScrollLeft(true);
    } else {
      setDisableScrollLeft(false);
    }
    if (
      albumContainerRef.current.scrollLeft >=
      albumContainerRef.current.scrollWidth -
        albumContainerRef.current.clientWidth
    ) {
      setDisableScrollRight(true);
    } else {
      setDisableScrollRight(false);
    }
  }
  return (
    <>
      {isLoading && !data && !error ? (
        <TopAlbumsSkeleton />
      ) : (
        <div>
          <div className="flex justify-between">
            <div aria-label="section title">
              <p className="w-24 m-2 font-Karla text-sm font-semibold mx-2 text-slate-300">
                Featured
              </p>
              <h2 className="w-20 m-2 font-Karla text-3xl font-semibold mx-2 text-slate-500">
                Albums
              </h2>
            </div>
            <div
              className="flex gap-2 items-center mx-4"
              aria-label="slider buttons"
            >
              <button
                onClick={scrollLeft}
                disabled={disableScrollLeft}
                className={`w-8 h-8 flex justify-center items-center border-slate-600 border-[2px] rounded-full ${
                  disableScrollLeft && "opacity-50 cursor-not-allowed"
                }`}
              >
                <img
                  className="h-1/2 w-1/2 object-contain"
                  src={leftArrowIcon}
                  alt=""
                />
              </button>
              <button
                onClick={scrollRight}
                disabled={disableScrollRight}
                className={`w-8 h-8 flex justify-center items-center border-slate-600 border-[2px] rounded-full ${
                  disableScrollRight && "opacity-50 cursor-not-allowed"
                }`}
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
            onScroll={disableScrollButtons}
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
