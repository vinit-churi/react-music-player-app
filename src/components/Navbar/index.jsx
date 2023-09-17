import NavHistoryRouter from "./NavHistoryRouter";
import NavUserProfile from "./NavUserProfile";
import SearchInput from "./SearchInput";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "@/features/audioPlayer/audioPlayerSlice";
import logo from "@/assets/images/logo3.svg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <nav className="col-start-2 col-end-4 row-start-1 row-end-2 flex content-center max-[500px]:flex-wrap">
      <AiOutlineMenu
        onClick={() => dispatch(setShowSidebar(true))}
        className="text-2xl text-slate-700 mx-5 hidden max-[1100px]:block self-center cursor-pointer max-[500px]:order-1 max-[365px]:w-min"
      />
      <img
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
        className="hidden max-[500px]:block max-[500px]:order-2 w-[300px] max-[365px]:w-2/3 cursor-pointer"
      />
      <NavHistoryRouter />
      <SearchInput />
      <NavUserProfile />
    </nav>
  );
};

export default Navbar;
