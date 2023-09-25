import React, { useState } from "react";
import ArtistCard from "./ArtistCard";
import PropTypes from "prop-types";
import ArtistHomeDetail from "./ArtistHomeDetail";
const ArtistGrid = ({ artists }) => {
  const [selectedArtist, setSelectedArtist] = useState({});

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
          <div className="h-max @[768px]:col-span-2 min-w-0">
            {selectedArtist.id === artist.id && (
              <ArtistHomeDetail artist={selectedArtist} />
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

ArtistGrid.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArtistGrid;
