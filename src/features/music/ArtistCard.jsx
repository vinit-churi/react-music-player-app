import PropTypes from "prop-types"; // Import prop-types
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import striptags from "striptags";
const ArtistCard = ({
  artist,
  className,
  selectedArtist,
  setSelectedArtist,
}) => {
  function selectArtist(artist) {
    if (selectedArtist.id === artist.id) {
      setSelectedArtist({});
      return;
    }
    setSelectedArtist(artist);
  }
  let bio = "No bio available for this artist. Please check back later.";
  if (artist.bios) {
    // console.log(artist.bios[0].bio);
    bio = striptags(artist.bios[0].bio);
  }
  return (
    <div
      onClick={() => selectArtist(artist)}
      className={`${className} flex bg-slate-200 p-2 gap-1 mt-2 rounded-md hover:bg-slate-300 transition-colors duration-200 ease-in-out ${
        selectedArtist.id === artist.id && "bg-yellow-50 hover:bg-yellow-50"
      }`}
      aria-label={`artist ${artist.name} container`}
    >
      <img
        src={`https://api.napster.com/imageserver/v2/artists/${artist.id}/images/150x100.jpg`}
        alt={artist.name}
        className="flex-[0_0_200px] rounded-md"
      />
      <div className="flex-[1_1_auto] max-w-full">
        <h2 className=" font-bold rounded-md mx-2 text-ellipsis  whitespace-nowrap overflow-hidden text-slate-500">
          {artist.name}
        </h2>
        <p className="h-[50px] overflow-ellipsis overflow-clip whitespace-break-spaces p-2">
          {bio}
        </p>
      </div>
      <BsFillArrowDownCircleFill
        className={`flex-[0_0_40px] transition-all duration-200 ease-in-out  h-[40px] self-center justify-self-center cursor-pointer text-yellow-600 opacity-60 ${
          selectedArtist.id === artist.id && "rotate-180"
        }`}
      />
    </div>
  );
};

ArtistCard.propTypes = {
  selectedArtist: PropTypes.object.isRequired,
  setSelectedArtist: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
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
