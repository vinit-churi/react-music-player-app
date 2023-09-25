import { useGetArtistAlbumsQuery } from "./napsterApi";
import PropTypes from "prop-types"; // Import prop-types
import striptags from "striptags";
import SkeletonAlbumCard from "@/components/Skeleton/AlbumCard";
import AlbumCard from "./AlbumCard";
const ArtistHomeDetail = ({ artist }) => {
  const { data, error, isLoading } = useGetArtistAlbumsQuery(artist.id);
  console.log(data, error, isLoading);
  let bio = "No bio available for this artist. Please check back later.";
  if (artist.bios) {
    console.log(artist.bios[0].bio);
    bio = striptags(artist.bios[0].bio);
  }
  return (
    <div className="bg-slate-300 @[768px]:flex">
      <div className="flex-1 @[768px]:flex-[1_2_50%] h-max @[768px]:h-[350px]">
        <h2 className="text-[24px] mx-2 font-bold">Artist info</h2>
        <p className="text-justify overflow-y-auto  px-2 mt-0 min-h-[300px] columns-2 max-h-[300px] @[768px]:min-h-[300px]">
          {bio}
        </p>
      </div>
      <div className="flex-1 @[768px]:flex-[1_1_50%] h-max overflow-x-auto flex gap-2  hide-scrollbar my-[15px]">
        {isLoading && !data && !error ? (
          <>
            {[...Array(10).keys()].map((index) => (
              <SkeletonAlbumCard key={index} />
            ))}
          </>
        ) : (
          <>
            {data.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
ArtistHomeDetail.propTypes = {
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
export default ArtistHomeDetail;
