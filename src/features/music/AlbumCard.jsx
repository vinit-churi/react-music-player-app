import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const AlbumCard = ({ album }) => {
  const { id, name, artistName } = album;
  return (
    <Link
      className="flex-[0_0_240px] my-[0.75rem] mx-0 rounded-lg"
      aria-label="skeleton-loader"
      to={`/album/${id}`}
    >
      <div className="h-60 rounded-lg m-2" aria-label="image">
        <img
          className="object-cover object-center h-full w-full rounded-lg"
          src={`https://api.napster.com/imageserver/v2/albums/${id}/images/200x200.jpg`}
          alt=""
        />
      </div>
      <div className="rounded-md m-2" aria-label="title">
        {name}
      </div>
      <div className="rounded-md m-2" aria-label="artist">
        {artistName}
      </div>
    </Link>
  );
};

AlbumCard.propTypes = {
  album: PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    copyright: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
    artistName: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlbumCard;
