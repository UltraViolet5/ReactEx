//  tsrafce
import React from "react";

type Props = {};

const PlaylistDetails = (props: Props) => {
  const playlist = {
    id: "123",
    name: "Playlist 123",
    public: true,
    description: "Cool playlist",
  };

  return (
    <div>
      {/* .grid.gap-3>.grid*3>strong{Name}+div{Playlist Name} */}

      <div className="grid gap-3">
        <div className="grid">
          <strong>Name</strong>
          <div>Playlist Name</div>
        </div>

        <div className="grid">
          <strong>Public</strong>
          <div>Yes</div>
        </div>
        <div className="grid">
          <strong>Description</strong>
          <div>Best Playlist</div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
