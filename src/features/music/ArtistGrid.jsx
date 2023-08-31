import React, { useState } from "react";
import ArtistCard from "./ArtistCard";
import PropTypes from "prop-types";
const ArtistGrid = ({ artists }) => {
  const [selectedArtist, setSelectedArtist] = useState({});
  console.log(artists, "artists");
  return (
    <div className="grid gap-x-2  grid-cols-[1fr] @[768px]:grid-cols-[1fr_1fr] @[768px]:grid-flow-row-dense p-2">
      {artists.map((artist) => (
        <React.Fragment key={artist.id}>
          <ArtistCard
            className={``}
            artist={artist}
            selectedArtist={selectedArtist}
            setSelectedArtist={setSelectedArtist}
          />
          <div className="h-max @[768px]:col-span-2"></div>
        </React.Fragment>
      ))}
    </div>
  );
};

/*
          {(index + 1) % 2 === 0 && (
            <>
              {console.log(`${artist.id}${index + 1}`)}
              <div
                key={`${artist.id}-${index + 1}`}
                className={`col-span-1 h-10 bg-slate-900 my-2 row-start-${index} row-end-${
                  index + 1
                }`}
              >
                this is some div
              </div>
              <div
                key={`${artist.id}-${index + 2}`}
                className={`col-span-1 h-10 bg-slate-900 my-2 row-start-${
                  index + 2
                } row-end-${index + 3}`}
              >
                this is some div
              </div>
            </>
          )}


          className={`@[760px]:bg-slate-600 ${
              (index + 1) % 2 === 0
                ? `col-start-2 row-end-3 row-start-[${Math.round(
                    (index + 1) / 2
                  )}] row-end-[${Math.round((index + 1) / 2 + 1)}]`
                : `row-start-1 row-end-2 row-start-[${Math.round(
                    (index + 2) / 2
                  )}] row-end-[${Math.round((index + 2) / 2 + 1)}]`
            }`}


            <ArtistCard
            className={`${
              (index + 1) % 2 === 0 &&
              "@[768px]:bg-slate-500 @[768px]:col-start-2 @[768px]:col-end-3"
            }`}
            artist={artist}
            key={artist.id}
          />
*/
ArtistGrid.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArtistGrid;
