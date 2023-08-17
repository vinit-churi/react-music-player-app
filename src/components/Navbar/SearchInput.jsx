import searchIcon from "@/assets/icons/search-nav.png";
import dorpDownIcon from "@/assets/icons/drop-down.png";
const SearchInput = () => {
  function handleSearch(event) {
    event.preventDefault();
    console.log(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSearch} className="">
        <input
          className=""
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          aria-label="Search music input"
          aria-required="true"
        />
        <img src={searchIcon} alt="" />
      </form>
      <div className="" aria-label="search options">
        <p>Songs</p>
        <img src={dorpDownIcon} alt="drop down" />
      </div>
    </div>
  );
};

export default SearchInput;
