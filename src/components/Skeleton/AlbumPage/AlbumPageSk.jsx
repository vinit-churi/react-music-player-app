const AlbumPageSk = () => {
  return (
    <div>
      <div className="flex">
        <div
          className="w-60 h-60 object-cover rounded-lg animate-pulse bg-slate-600  flex-[0_0_min-content]]"
          alt="some album"
        ></div>
        <div aria-label="album info" className="flex-auto self-end">
          <h2 className="max-w-full w-24 h-5 m-2  mx-2 animate-pulse bg-slate-600 rounded-md"></h2>
          <p className="max-w-full m-2 w-28 h-5 mx-2 text-slate-300 animate-pulse bg-slate-600 rounded-md"></p>
        </div>
      </div>
      <div className="w-9/10 mx-auto grid grid-cols-1 gap-2 mt-4">
        {[...Array(20).keys()].map((key) => {
          return (
            <div
              key={key}
              className={`h-20 animate-pulse bg-slate-600 rounded-md`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default AlbumPageSk;
