import ArtistGrid from "./ArtistGridSkeleton";
const TopArtistsSkeleton = () => {
  return (
    <div className="h-max">
      <div className="h-max" aria-label="section title">
        <p className="h-8 w-24 animate-pulse bg-slate-600 rounded-md m-2"></p>
        <h2 className="h-6 w-20 animate-pulse bg-slate-600 rounded-md m-2"></h2>
      </div>
      <div className="@container">
        <ArtistGrid />
      </div>
    </div>
  );
};

export default TopArtistsSkeleton;
