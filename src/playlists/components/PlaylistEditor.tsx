import React, { ChangeEventHandler } from "react";

type Props = {};

const PlaylistEditor = (props: Props) => {
  const playlist = {
    id: "123",
    name: "Playlist 123",
    public: true,
    description: "Cool playlist",
  };

  // const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => event.target.value;
  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => event.target.value;
  // const changeHandler = (event: 'lewy but') => event.target.value;
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => { 
    playlist.name = event.target.value
  };

  return (
    <div>
      <div className="grid gap-3">
        <div className="grid">
          <label>Name</label>
          <input type="text" value={playlist.name} onChange={changeHandler} />
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
