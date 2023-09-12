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
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "@/features/audioPlayer/audioPlayerSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="col-start-2 col-end-4 row-start-1 row-end-2 flex content-center">
      <AiOutlineMenu
        onClick={() => dispatch(setShowSidebar(true))}
        className="text-2xl text-slate-700 mx-5 hidden max-[1100px]:block self-center cursor-pointer"
      />
      <NavHistoryRouter />
      <SearchInput />
      <NavUserProfile />
    </nav>
  );
};

export default Navbar;
