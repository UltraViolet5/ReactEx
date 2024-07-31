import { useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import { Loader } from "./Loader";
import { useAlbumSearchResults } from "./useAlbumSearchResults";

const AlbumSearchView = () => {
  const [query, setQuery] = useState("");

  const { isLoading, error, data: albums = [] } = useAlbumSearchResults(query);

  return (
    <div className="container">
      <h3 className="text-3xl leading-loose">Search</h3>

      <div className="grid gap-5">
        <div>
          <SearchForm onSearch={setQuery} />
        </div>

        <div>
          {isLoading && <Loader />}
          {error instanceof Error && (
            <p className="text-red-500 p-4">{error.message}</p>
          )}
          <ResultsGrid results={albums} />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
