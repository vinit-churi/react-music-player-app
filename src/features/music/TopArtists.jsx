import { useGetPopularArtistsQuery } from "./napsterApi";
import ArtistGrid from "./ArtistGrid";
const TopArtists = () => {
  const { data, error, isLoading } = useGetPopularArtistsQuery();
  console.log(error, "error");
  console.log(data, "look here");
  return (
    <div className="mt-4">
      {isLoading && !data ? (
        "data loading..."
      ) : (
        <div>
          <div aria-label="section title">
            <p className="w-24 m-2 font-Karla text-sm font-semibold mx-2 text-slate-300">
              Trending
            </p>
            <h2 className="w-20 m-2 font-Karla text-3xl font-semibold mx-2 text-slate-500">
              Artists
            </h2>
          </div>
          <div className="@container">
            <ArtistGrid artists={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopArtists;
