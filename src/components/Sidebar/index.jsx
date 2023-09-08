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

const Sidebar = () => {
  return (
    <aside
      className={`col-start-1 col-end-2 row-start-1 row-end-4 bg-slate-50`}
    >
      <div className="w-full h-full">
        <Link to="/">
          <img className="mt-3 mb-5 cursor-pointer" src={logo} alt="logo" />
        </Link>
        <p className="text-slate-500 mx-5 font-semibold  mt-8 mb-4">Discover</p>
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer"
          linkText="Home"
          icon={homeIcon}
          to="/"
        />
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer"
          linkText="Search"
          icon={searchIcon}
          to="/search"
        />
        <p className="text-slate-500 mx-5 font-semibold  mt-8 mb-4">
          Collection
        </p>
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer"
          linkText="Library"
          icon={libraryIcon}
          to="/user/collection/library"
        />
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer"
          linkText="Recent"
          icon={recentIcon}
          to="/user/collection/recent"
        />
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer"
          linkText="Favorites"
          icon={favoriteIcon}
          to="/user/collection/favorites"
        />
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer"
          linkText="Playlists"
          icon={playlistIcon}
          to="/user/collection/playlists"
        />
        <p className="text-slate-500 mx-5 font-semibold mt-8 mb-4">General</p>
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer"
          linkText="Settings"
          icon={settingIcon}
          to="/user/settings"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
