import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import ResultsGrid from "../components/ResultsGrid";
import { fetchAlbumSearchResults } from "../../core/services/MusicAPI";
import { Album } from "../../core/model/Album";

type Props = {};

const AlbumSearchView = (props: Props) => {
  const [albums, setAlbums] = useState<Album[]>([]);

  const search = (query = "") => {
    fetchAlbumSearchResults(query)
      .then(setAlbums);
  };

  return (
    <div className="container">
      <h3 className="text-3xl leading-loose">Search</h3>

      <div className="grid gap-5">
        <div>
          <SearchForm onSearch={search} />
        </div>

        <div>
          <ResultsGrid results={albums} />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
