import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import { fetchAlbumSearchResults } from "../../core/services/MusicAPI";
import { Album } from "../../core/model/Album";

const AlbumSearchView = () => {
  const [query, setQuery] = useState("");

  const [albums, setAlbums] = useState<Album[]>([]);
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    setError(undefined);

    fetchAlbumSearchResults(query)
      .then((data) => setAlbums(data.albums.items))
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [query]);

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

export const Loader = () => (
  <div className="grid justify-center items-center">
    <svg
      className="animate-spin -ml-1 mr-3 h-8 w-8 text-black"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  </div>
);
