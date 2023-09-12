import searchIcon from "@/assets/icons/search-nav.png";
import dorpDownIcon from "@/assets/icons/drop-down.png";
const SearchInput = () => {
  function handleSearch(event) {
    event.preventDefault();
    console.log(event.target.value);
  }
  return (
    <div className="flex gap-5 items-center flex-[1_1_auto] max-[500px]:order-4 max-[500px]:flex-[1_1_100%] max-[500px]:justify-center pb-2">
      <form
        onSubmit={handleSearch}
        className="flex border-[2px] border-solid border-slate-700 gap-2 flex-[1_1_auto] max-w-[325px] items-center bg-white rounded-full p-[0px_20px_0px_5px] h-10 focus-within:outline-2 focus-within:outline-slate-700 focus-within:ring-2 "
      >
        <img src={searchIcon} alt="" />
        <input
          className="border-none outline-none h-full flex-[1_1_auto] min-w-[60px]"
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          aria-label="Search music input"
          aria-required="true"
        />
      </form>
      {/* <div
        className="flex gap-2 items-center rounded-full h-10 border-2 border-slate-700 px-3 cursor-pointer"
        aria-label="search options"
      >
        <p>Songs</p>
        <img
          src={dorpDownIcon}
          alt="drop down"
          className="relative top-[2px]"
        />
      </div> */}
    </div>
  );
};

export default SearchInput;
