import logo from "@/assets/images/logo3.svg";
import PageLink from "@/components/PageLink";
import homeIcon from "@/assets/icons/home.png";
import searchIcon from "@/assets/icons/search-1.png";
import libraryIcon from "@/assets/icons/playlist.png";
import recentIcon from "@/assets/icons/recent.png";
import favoriteIcon from "@/assets/icons/love-song.png";
import playlistIcon from "@/assets/icons/music-note.png";
import settingIcon from "@/assets/icons/setting.png";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowSidebar,
  selectShowSidebar,
} from "@/features/audioPlayer/audioPlayerSlice";
const Sidebar = () => {
  const dispatch = useDispatch();
  const showSidebar = useSelector(selectShowSidebar);
  return (
    <aside
      className={`col-start-1 col-end-2 row-start-1 row-end-4 bg-slate-50`}
    >
      {/* max-[110px]:translate-x-full   */}
      <div
        className={`w-full h-full max-[1100px]:fixed max-[1100px]:inset-0 max-[1100px]:bg-yellow-50 max-[1100px]:text-white z-[200] max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:content-center max-[1100px]:justify-center ${
          showSidebar
            ? "max-[1100px]:translate-x-0"
            : "max-[1100px]:translate-x-full"
        }`}
      >
        <AiOutlineClose
          onClick={() => dispatch(setShowSidebar(false))}
          className="text-black text-4xl hidden mx-auto mb-3 cursor-pointer max-[1100px]:block"
        />
        <Link
          onClick={() => dispatch(setShowSidebar(false))}
          className="max-[1100px]:w-full max-[1100px]:h-max"
          to="/"
        >
          <img
            className="mt-3 mb-5 cursor-pointer max-[1100px]:mx-auto max-[1100px]:block max-[1100px]:w-[min(90%,300px)] max-[1100px]:h-auto"
            src={logo}
            alt="logo"
          />
        </Link>
        <p className="text-slate-500 mx-5 font-semibold  mt-8 mb-4 max-[1100px]:hidden">
          Discover
        </p>
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer max-[1100px]:justify-center"
          linkText="Home"
          icon={homeIcon}
          to="/"
        />
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer max-[1100px]:justify-center"
          linkText="Search"
          icon={searchIcon}
          to="/search"
        />
        <p className="text-slate-500 mx-5 font-semibold  mt-8 mb-4 max-[1100px]:hidden">
          Collection
        </p>
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer max-[1100px]:justify-center"
          linkText="Library"
          icon={libraryIcon}
          to="/user/collection/library"
        />
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer max-[1100px]:justify-center"
          linkText="Recent"
          icon={recentIcon}
          to="/user/collection/recent"
        />
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer max-[1100px]:justify-center"
          linkText="Favorites"
          icon={favoriteIcon}
          to="/user/collection/favorites"
        />
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer max-[1100px]:justify-center"
          linkText="Playlists"
          icon={playlistIcon}
          to="/user/collection/playlists"
        />
        <p className="text-slate-500 mx-5 font-semibold mt-8 mb-4 max-[1100px]:hidden">
          General
        </p>
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer max-[1100px]:justify-center"
          linkText="Settings"
          icon={settingIcon}
          to="/user/settings"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
