import AlbumCard from "./AlbumCard";
const SearchResultSk = () => {
  return (
    <div>
      <div className="grid grid-cols-[50%_50%] grid-rows-[max-content_max-content]">
        <div className="col-start-1 col-span-2">
          <div className="flex justify-between">
            <div
              className="flex gap-2 items-center mx-4 ml-auto mt-4"
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
        <div className="flex gap-3 flex-wrap bg-slate-200 p-4 overflow-auto max-h-[600px] min-h-[600px] max-[750px]:max-h-[none] max-[750px]:col-span-2">
          {[...Array(20).keys()].map((key) => {
            return (
              <div
                key={key}
                className={`flex-[1_1_100%] h-20 animate-pulse bg-slate-600 rounded-md`}
              ></div>
            );
          })}
        </div>
        <div className="flex gap-3 justify-around flex-wrap bg-slate-200 p-4 overflow-auto max-h-[600px] min-h-[600px] max-[750px]:max-h-[none] max-[750px]:col-span-2">
          {[...Array(20).keys()].map((key) => {
            return (
              <div
                key={key}
                className={`h-36 w-36 animate-pulse bg-slate-600 rounded-full`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResultSk;
