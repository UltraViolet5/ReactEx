import React from "react";
import AlbumCard from "./AlbumCard";

type Props = {};

const ResultsGrid = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-3">
        {[1, 2, 3, 4, 5].map((album) => (
          <AlbumCard key={album} />
        ))}
      </div>
    </div>
  );
};

export default ResultsGrid;
