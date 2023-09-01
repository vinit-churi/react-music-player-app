const FeaturedGenreSkeleton = () => {
  return (
    <div className="">
      <div>
        <div>
          <div className="h-max" aria-label="section title">
            <p className="h-8 w-24 animate-pulse bg-slate-600 rounded-md m-2"></p>
            <h2 className="h-6 w-20 animate-pulse bg-slate-600 rounded-md m-2"></h2>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap bg-slate-200 p-4 max-h-[400px] h-[400px] min-h-[400px] overflow-auto">
          {[...Array(20).keys()].map((key) => {
            return (
              <div
                key={key}
                className={`flex-[0_0_0px] h-8 animate-pulse bg-slate-600 rounded-full`}
                style={{
                  flexBasis: `${100 + Math.round(Math.random() * 30)}px`,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedGenreSkeleton;
