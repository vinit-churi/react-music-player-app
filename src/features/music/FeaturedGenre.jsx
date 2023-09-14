import FeaturedGenreSkeleton from "@/components/Skeleton/FeaturedGenreSkeleton";
import { useGetAllGenresQuery } from "./napsterApi";
import { useNavigate } from "react-router-dom";
const FeaturedGenre = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetAllGenresQuery();
  console.log(data, isLoading, isError);
  return (
    <div
      className="flex-[1_1_100%] @[730px]:flex-[1_1_30%] @[1000px]:flex-[1_1_40%]"
      aria-label="Featured Genre container"
    >
      {isLoading && !data ? (
        <FeaturedGenreSkeleton />
      ) : (
        <div>
          <div>
            <div>
              <div className="h-max" aria-label="section title">
                <p className="w-24 m-2 font-Karla text-sm font-semibold mx-2 text-slate-300">
                  Featured
                </p>
                <h2 className="w-20 m-2 font-Karla text-3xl font-semibold mx-2 text-slate-500">
                  Genre
                </h2>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap  p-4 max-h-[400px] h-[400px] min-h-[400px] overflow-auto">
              {data.map((genre) => {
                return (
                  <div
                    key={genre.id}
                    onClick={() =>
                      navigate(
                        `/genre/${genre.id}/${genre.name.replace(/\//g, " ")}`
                      )
                    }
                    className={`flex-[0_0_max-content] transition-colors ease-in-out duration-300 hover:bg-yellow-100  flex 
                    justify-center items-center
                    max-h-[64px] cursor-pointer px-3 py-1 bg-slate-50  rounded-md`}
                  >
                    {genre.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedGenre;
