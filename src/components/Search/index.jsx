import { useSearchParams } from "react-router-dom";
import NoResult from "./NoResult";
import SearchResult from "./SearchResult";
const Index = () => {
  const [searchParams] = useSearchParams();
  let query = searchParams.get("q");
  if (query) {
    return <SearchResult query={query} />;
  }
  return <NoResult />;
};
export default Index;
