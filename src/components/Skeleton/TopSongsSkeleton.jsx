const TopSongsSkeleton = () => {
  return (
    <div>
      <div className="">
        <div>
          <div>
            <div className="h-max" aria-label="section title">
              <p className="h-8 w-24 animate-pulse bg-slate-600 rounded-md m-2"></p>
              <h2 className="h-6 w-20 animate-pulse bg-slate-600 rounded-md m-2"></h2>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap bg-slate-200 p-4 overflow-auto max-h-[400px] h-[400px] min-h-[400px]">
            {[...Array(20).keys()].map((key) => {
              return (
                <div
                  key={key}
                  className={`flex-[1_1_100%] h-20 animate-pulse bg-slate-600 rounded-md`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSongsSkeleton;
