import SongCard from "@/features/music/SongCard";
import PropTypes from "prop-types";
const ListTracks = ({ tracks }) => {
  return (
    <div
      aria-label="tracks container"
      className="col-start-1 col-span-1 row-span-1 max-h-[600px] overflow-y-auto max-[750px]:max-h-[none] max-[750px]:col-span-2"
    >
      {tracks.map((song, index) => {
        return (
          <SongCard
            key={"search-result-" + song.id}
            song={song}
            index={index + 1 < 10 ? `0${Number(index) + 1}` : index + 1}
          />
        );
      })}
    </div>
  );
};

ListTracks.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.PropTypes.object),
};

export default ListTracks;
