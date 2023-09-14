const GenrePageSk = () => {
  return (
    <div>
      <div className="h-60 w-full animate-pulse bg-slate-700"></div>
      <div className="flex gap-3 flex-wrap bg-slate-200 p-4 ">
        {[...Array(10).keys()].map((key) => {
          return (
            <div
              key={key}
              className={`flex-[1_1_100%] h-20 animate-pulse bg-slate-600 rounded-md`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default GenrePageSk;
