import { useParams } from "react-router-dom";
import { useGetAlbumTracksQuery } from "@/features/music/napsterApi";
import SongCard from "@/features/music/SongCard";
const Index = () => {
  const { albumId } = useParams();
  console.log(albumId);
  const { data, error, isLoading } = useGetAlbumTracksQuery(albumId);
  console.log(data, error, isLoading);

  return (
    <div className="min-h-[700px]">
      <div aria-label="album page">
        {!data && isLoading ? (
          <h1>loading</h1>
        ) : (
          <div>
            <div className="flex">
              <img
                className="w-60 h-60 object-cover rounded-lg flex-[0_0_min-content]]"
                src={`https://api.napster.com/imageserver/v2/albums/${albumId}/images/500x500.jpg
`}
                alt="some album"
              />
              <div aria-label="album info" className="flex-auto self-end">
                <h2 className="max-w-full m-2 font-Karla text-3xl font-semibold mx-2 text-slate-500">
                  {data[0].artistName}
                </h2>
                <p className="max-w-full m-2 font-Karla text-sm font-semibold mx-2 text-slate-300">
                  {data[0].albumName}
                </p>
              </div>
            </div>
            <div className="mr-10 grid grid-cols-1 gap-2">
              {data.map((song, index) => {
                return (
                  <SongCard
                    key={song.id}
                    song={song}
                    index={index + 1 < 10 ? `0${Number(index) + 1}` : index + 1}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
