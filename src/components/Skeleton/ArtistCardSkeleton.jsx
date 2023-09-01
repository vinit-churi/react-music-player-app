const ArtistCardSkeleton = () => {
  return (
    <div className="flex bg-slate-200 p-2 gap-1 mt-2 rounded-md h-max">
      <div className="flex-[0_0_200px] rounded-md animate-pulse bg-slate-600 h-40"></div>
      <div className="flex-[1_1_auto] max-w-full">
        <h2 className=" font-bold rounded-md mx-2 text-ellipsis w-1/3 h-8 animate-pulse bg-slate-600 mb-2  whitespace-nowrap overflow-hidden text-slate-500"></h2>
        <p className="h-20 mx-2 rounded-md  overflow-ellipsis overflow-clip whitespace-break-spaces p-2 w-2/3 animate-pulse bg-slate-600"></p>
      </div>
      <div
        className={`flex-[0_0_40px] animate-pulse bg-slate-600  h-[40px] self-center justify-self-center cursor-pointer rounded-full`}
      ></div>
    </div>
  );
};

export default ArtistCardSkeleton;
