import AlbumCard from "./AlbumCard";
const TopAlbumsSkeleton = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div aria-label="section title">
          <p className="h-8 w-24 animate-pulse bg-slate-600 rounded-md m-2"></p>
          <h2 className="h-6 w-20 animate-pulse bg-slate-600 rounded-md m-2"></h2>
        </div>
        <div
          className="flex gap-2 items-center mx-4"
          aria-label="slider buttons"
        >
          <button className="w-12 h-12 rounded-full animate-pulse bg-slate-600"></button>
          <button className="w-12 h-12 rounded-full animate-pulse bg-slate-600"></button>
        </div>
      </div>
      <div
        className="flex gap-2 overflow-y-auto hide-scrollbar"
        aria-label="albums container"
      >
        {true &&
          [...Array(10).keys()].map((index) => <AlbumCard key={index} />)}
      </div>
    </div>
  );
};

export default TopAlbumsSkeleton;
