import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import SongsQueue from "@/components/SongsQueue";
import MusicPlayer from "@/components/MusicPlayer";
const RootLayout = () => {
  return (
    <div className="h-screen grid grid-rows-[80px_auto_100px] grid-cols-[300px_auto_max-content] overflow-y-hidden">
      <Sidebar />
      <Navbar />
      <Main />
      <SongsQueue />
      <MusicPlayer />
    </div>
  );
};

export default RootLayout;
