import logo from "@/assets/images/logo3.svg";
import PageLink from "@/components/PageLink";
import homeIcon from "@/assets/icons/home.png";
import searchIcon from "@/assets/icons/search-1.png";
import libraryIcon from "@/assets/icons/playlist.png";
import recentIcon from "@/assets/icons/recent.png";
import favoriteIcon from "@/assets/icons/love-song.png";
import playlistIcon from "@/assets/icons/music-note.png";
import settingIcon from "@/assets/icons/setting.png";

const Sidebar = () => {
  return (
    <aside
      className={`col-start-1 col-end-2 row-start-1 row-end-4 bg-slate-50`}
    >
      <div className="w-full h-full">
        <img src={logo} alt="logo" className="mt-3 mb-5" />
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
          to="/user/:userId/library"
        />
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer"
          linkText="Recent"
          icon={recentIcon}
          to="/user/:userId/recent"
        />
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer"
          linkText="Favorites"
          icon={favoriteIcon}
          to="/user/:userId/favorites"
        />
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer"
          linkText="Playlists"
          icon={playlistIcon}
          to="/user/:userId/playlists"
        />
        <p className="text-slate-500 mx-5 font-semibold mt-8 mb-4">General</p>
        <PageLink
          className="mx-5 flex gap-2 align-middle my-4 cursor-pointer"
          linkText="Settings"
          icon={settingIcon}
          to="/settings"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
