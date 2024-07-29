import React, { ChangeEventHandler, useState } from "react";

type Props = {};

const initialPlaylist = {
  id: "123",
  name: "Playlist 123",
  public: true,
  description: "Cool playlist",
};

const PlaylistEditor = (props: Props) => {

  // const [playlistName, setPlaylistName] = useState(playlist.name);
  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   setPlaylistName(event.target.value);
  //   setPlaylistName(event.target.value); // NoOP === 
  // };

  const [playlist, setPlaylist] = useState(initialPlaylist);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    playlist.name = event.target.value;
    setPlaylist(playlist); // Defensive copy!?
    setPlaylist({...playlist}); // Defensive copy!?
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
            <input type="checkbox" defaultChecked={playlist.public} /> Public
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
