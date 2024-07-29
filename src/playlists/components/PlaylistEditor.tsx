import React, { ChangeEventHandler, useState } from "react";

type Props = {};

const initialPlaylist = {
  id: "123",
  name: "Playlist 123",
  public: true,
  description: "Cool playlist",
  // tracks: [{},{}]
};

const PlaylistEditor = (props: Props) => {
  const [playlist, setPlaylist] = useState(initialPlaylist);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPlaylist({ ...playlist, name: event.target.value });
  };

  return (
    <div>
      <div className="grid gap-3">
        <div className="grid">
          <label>Name</label>
          <input type="text" value={playlist.name} onChange={changeHandler} />
          <div className="text-end">{playlist.name.length} / 100</div>
        </div>

        <div className="grid ">
          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={playlist.public}
              onChange={(e) => setPlaylist({ ...playlist, public: e.target.checked }) }
            />
            Public
          </label>
        </div>
        <div className="grid">
          <label>Description</label>
          <textarea value={playlist.description} readOnly={true} />
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
