import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSongsByGenreQuery } from "@/features/music/napsterApi";
import getGenreImage from "@/utils/getGenreImage";
import SongCard from "@/features/music/SongCard";
import GenrePageSk from "@/components/Skeleton/GenrePageSk";
const Index = () => {
  const { id, name } = useParams();
  const [imgLoaded, setImageLoaded] = useState(false);
  const [genreImage, setGenreImage] = useState(null);
  console.log(id, name, genreImage, "look here");
  const { data, error, isLoading } = useGetSongsByGenreQuery(id);
  console.log(data, error, isLoading);
  useEffect(() => {
    (async () => {
      const image = await getGenreImage(name);
      console.log("image fetched", image);
      setGenreImage(image);
    })();
  }, []);
  return (
    <div>
      {!data && isLoading ? (
        <GenrePageSk />
      ) : (
        <div>
          <div
            className={`w-full h-60 before:content relative before:absolute before:margin-auto before:inset-0 before:bg-gradient-to-tr before:from-[rgba(255,255,255,1)] before:via-[#ffffffca] before:to-[rgba(255,255,255,0.42200630252100846)] before:z-20 ${
              !imgLoaded && "animate-pulse bg-slate-700"
            }`}
          >
            {genreImage && (
              <img
                src={genreImage.full}
                onLoad={() => setImageLoaded(true)}
                className={`h-full w-full object-cover object-center ${
                  imgLoaded ? "block" : "hidden"
                }`}
                alt={name}
              />
            )}
            <h2 className="absolute inset-0 m-auto w-max h-max z-50 font-bold text-2xl ">
              {name}
            </h2>
          </div>
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
      )}
    </div>
  );
};

export default Index;
