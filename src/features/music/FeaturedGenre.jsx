import FeaturedGenreSkeleton from "@/components/Skeleton/FeaturedGenreSkeleton";
import { useGetAllGenresQuery } from "./napsterApi";
const FeaturedGenre = () => {
  const { data, isLoading, isError } = useGetAllGenresQuery();
  console.log(data, isLoading, isError);
  return (
    <div className="flex-[1_1_50%]" aria-label="Featured Genre container">
      <FeaturedGenreSkeleton />
    </div>
  );
};

export default FeaturedGenre;
