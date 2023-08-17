/*
 * Navbar
 *  - history back button and forward button : done
 *  - search input : done
 *  - drop down filter (all | song | albums | artists | playlists)) : not done
 *  - user profile (avatar | name | logout) ? (logged out) || call to action login sign-up
 **/
import NavHistoryRouter from "./NavHistoryRouter";
import NavUserProfile from "./NavUserProfile";
import SearchInput from "./SearchInput";
const Navbar = () => {
  return (
    <nav className="bg-slate-100 col-start-2 col-end-3 row-start-1 row-end-2 flex align-middle">
      <NavHistoryRouter />
      <SearchInput />
      <NavUserProfile />
    </nav>
  );
};

export default Navbar;
