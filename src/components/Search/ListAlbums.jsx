// This code gets the most popular albums from the Napster API and displays them on the screen.
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import leftArrowIcon from "@/assets/icons/left-arrow.png";
import rightArrowIcon from "@/assets/icons/right-arrow.png";
import AlbumCard from "@/features/music/AlbumCard";
const ListAlbums = ({ albums = [] }) => {
  const albumContainerRef = useRef(null);
  const [disableScrollLeft, setDisableScrollLeft] = useState(true);
  const [disableScrollRight, setDisableScrollRight] = useState(false);
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
      <div aria-label="albums container" className="col-start-1 col-span-2">
        <div className="flex justify-between">
          <div
            className="flex gap-2 items-center mx-4 mt-4 ml-auto"
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
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>
    </>
  );
};

ListAlbums.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListAlbums;
