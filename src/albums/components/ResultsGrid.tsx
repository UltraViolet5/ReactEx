import React from "react";
import AlbumCard from "./AlbumCard";
import { Album } from "../../core/model/Album";

type Props = {
  results: Album[];
};

const ResultsGrid = ({results}: Props) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-3">
        {results.map((album) => (
          <AlbumCard key={album.id} album={album}>
          </AlbumCard>
        ))}
      </div>
    </div>
  );
};

export default ResultsGrid;
