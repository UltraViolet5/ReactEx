import { useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import { Loader } from "./Loader";
import { fetchAlbumSearchResults } from "../../core/services/MusicAPI";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const AlbumSearchView = () => {
  const [searchParams, updateParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // const go = useNavigate();
  // go(`albums/search?q`, { replace: true });

  const {
    data: albums = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["albums/search:", query], // Cache KEY
    queryFn: ({ signal }) => fetchAlbumSearchResults(query, { signal }),
    select: (data) => data.albums.items,
    enabled: () => query !== "",
  });

  return (
    <div className="container">
      <h3 className="text-3xl leading-loose">Search</h3>

      <div className="grid gap-5">
        <div>
          <SearchForm query={query} onSearch={(q) => updateParams({ q })} />
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
