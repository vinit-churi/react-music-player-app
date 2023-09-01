import TopAlbums from "@/features/music/TopAlbums";
import TopArtists from "@/features/music/TopArtists";
import FeaturedGenre from "@/features/music/FeaturedGenre";
import TopSongs from "@/features/music/TopSongs";
const HomePage = () => {
  return (
    <div>
      <TopAlbums />
      <div className="flex flex-wrap rounded-md @container">
        <FeaturedGenre />
        <TopSongs />
      </div>
      <TopArtists />
    </div>
  );
};

export default HomePage;
