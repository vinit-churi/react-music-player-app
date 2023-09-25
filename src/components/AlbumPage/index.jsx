import { useParams } from "react-router-dom";
import { useGetAlbumTracksQuery } from "@/features/music/napsterApi";
import SongCard from "@/features/music/SongCard";
import AlbumPageSk from "@/components/Skeleton/AlbumPage/AlbumPageSk";
const Index = () => {
  const { albumId } = useParams();
  console.log(albumId);
  const { data, error, isLoading } = useGetAlbumTracksQuery(albumId);
  console.log(data, error, isLoading);

  return (
    <div className="mx-3 my-1">
      <div aria-label="album page">
        {!data && isLoading ? (
          <AlbumPageSk />
        ) : (
          <div>
            <div className="flex max-[500px]:flex-wrap">
              <img
                className="w-60 h-60 object-cover max-[500px]:mx-auto rounded-lg flex-[0_1_min-content]"
                src={`https://api.napster.com/imageserver/v2/albums/${albumId}/images/500x500.jpg
`}
                alt="some album"
              />
              <div aria-label="album info" className="flex-auto self-end ">
                <h2 className="max-w-full m-2 font-Karla text-3xl font-semibold mx-2 text-slate-500 max-[500px]:text-center">
                  {data[0].artistName}
                </h2>
                <p className="max-w-full m-2 font-Karla text-sm font-semibold mx-2 text-slate-300 max-[500px]:text-center">
                  {data[0].albumName}
                </p>
              </div>
            </div>
            <div className="w-9/10 mx-auto grid grid-cols-1 gap-2 mt-4">
              {data.map((song, index) => {
                return (
                  <SongCard
                    key={song.id}
                    song={song}
                    index={
                      index + 1 < 10
                        ? `0${Number(index) + 1}`
                        : `${Number(index) + 1}`
                    }
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
