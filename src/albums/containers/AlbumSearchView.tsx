import React from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import { fetchAlbumSearchResults } from "../../core/services/MusicAPI";

type Props = {};

const AlbumSearchView = (props: Props) => {
  const search = (query = "") => {
    const reusults = fetchAlbumSearchResults(query);
  };

  return (
    <div className="container">
      <h3 className="text-3xl leading-loose">Search</h3>

      <div className="grid gap-5">
        <div>
          <SearchForm onSearch={search} />
        </div>

        <div>
          <ResultsGrid />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
