import { useGetArtistAlbumsQuery } from "./napsterApi";
import PropTypes from "prop-types"; // Import prop-types
import striptags from "striptags";
const ArtistCard = ({ artist }) => {
  const { data, error, isLoading } = useGetArtistAlbumsQuery(artist.id);
  console.log(data, error, isLoading);
  console.log(artist);
  let bio = "No bio available for this artist. Please check back later.";
  if (artist.bios) {
    console.log(artist.bios[0].bio);
    bio = striptags(artist.bios[0].bio);
  }
  return (
    <div aria-label={`artist ${artist.name} container`}>
      <img
        src={`https://api.napster.com/imageserver/v2/artists/${artist.id}/images/150x100.jpg`}
        alt={artist.name}
      />
      <h2>{artist.name}</h2>
      <p>Total albums {artist.albumGroups.main.length}</p>
      <p>{bio}</p>
    </div>
  );
};

// Define PropTypes for the 'artist' prop
ArtistCard.propTypes = {
  artist: PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bios: PropTypes.any,
    albumGroups: PropTypes.shape({
      main: PropTypes.arrayOf(PropTypes.string),
    }),
    links: PropTypes.shape({
      albums: PropTypes.shape({
        href: PropTypes.string,
      }),
      images: PropTypes.shape({
        href: PropTypes.string,
      }),
      posts: PropTypes.shape({
        href: PropTypes.string,
      }),
      topTracks: PropTypes.shape({
        href: PropTypes.string,
      }),
      genres: PropTypes.shape({
        ids: PropTypes.arrayOf(PropTypes.string),
        href: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default ArtistCard;
