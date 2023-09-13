import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import SongsQueue from "@/components/SongsQueue";
import MusicPlayer from "@/components/MusicPlayer";
import { Toaster } from "react-hot-toast";
const RootLayout = () => {
  return (
    <div className="h-[100svh] transition-height duration-300 ease-in grid grid-rows-[80px_auto_100px] max-[500px]:grid-rows-[max-content_auto_100px] grid-cols-[300px_1fr_min-content] max-[1100px]:grid-cols-[0px_1fr_min-content] max-[600px]:grid-cols-[0px_1fr_0px] overflow-y-hidden overflow-x-hidden">
      <Sidebar />
      <Navbar />
      <Main />
      <SongsQueue />
      <MusicPlayer />
      <Toaster />
    </div>
  );
};

export default RootLayout;
