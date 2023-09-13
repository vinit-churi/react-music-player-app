import { useSearchSongsQuery } from "@/features/music/napsterApi";
import PropTypes from "prop-types";
import ListTracks from "./ListTracks";
import ListAlbums from "./ListAlbums";
import ListArtist from "./ListArtist";
import SearchResultSk from "@/components/Skeleton/SearchResultSk";
const SearchResult = ({ query }) => {
  const { data, error, isLoading } = useSearchSongsQuery(query);
  console.log(data, error, isLoading);
  return (
    <div>
      {isLoading && !data ? (
        <SearchResultSk />
      ) : (
        <div className="grid grid-cols-[50%_50%] grid-rows-[max-content_max-content]">
          <ListAlbums albums={data.data.albums} />
          <ListTracks tracks={data.data.tracks} />
          <ListArtist artists={data.data.artists} />
        </div>
      )}
    </div>
  );
};

SearchResult.propTypes = {
  query: PropTypes.string.isRequired,
};

export default SearchResult;
