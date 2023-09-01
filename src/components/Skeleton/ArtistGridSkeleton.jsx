import ArtistCardSkeleton from "./ArtistCardSkeleton";
const ArtistGrid = () => {
  return (
    <div className="grid gap-x-2  grid-cols-[1fr] @[768px]:grid-cols-[1fr_1fr] @[768px]:grid-flow-row-dense p-2">
      {[...Array(10).keys()].map((key) => (
        <ArtistCardSkeleton key={key} />
      ))}
    </div>
  );
};

export default ArtistGrid;
