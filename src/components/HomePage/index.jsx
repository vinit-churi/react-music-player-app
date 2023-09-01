import TopAlbums from "@/features/music/TopAlbums";
import TopArtists from "@/features/music/TopArtists";
import FeaturedGenre from "@/features/music/FeaturedGenre";
import TopSongs from "@/features/music/TopSongs";
const HomePage = () => {
  return (
    <div>
      <TopAlbums />
      <TopArtists />
      <div className="flex gap-2 px-2 rounded-md">
        <FeaturedGenre />
        <TopSongs />
      </div>
    </div>
  );
};

export default HomePage;
