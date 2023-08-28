const AlbumCard = () => {
  return (
    <div
      className="bg-slate-400 flex-[0_0_240px] my-[0.75rem] mx-0 rounded-md"
      aria-label="skeleton-loader"
    >
      <div
        className="h-44 animate-pulse bg-slate-600 rounded-md m-2"
        aria-label="image skeleton loader"
      ></div>
      <div
        className="h-8 w-1/3 animate-pulse bg-slate-600 rounded-md m-2"
        aria-label="title skeleton loader"
      ></div>
      <div
        className="h-8 w-1/2 animate-pulse bg-slate-600 rounded-md m-2"
        aria-label="artist skeleton loader"
      ></div>
    </div>
  );
};

export default AlbumCard;
