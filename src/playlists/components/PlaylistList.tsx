import React from "react";

type Props = {};

const playlists = [
  {
    id: "123",
    name: "Playlist 123",
    public: false,
    description: "BEst playlist",
  },
  {
    id: "234",
    name: "Playlist 234",
    public: true,
    description: "Cool playlist",
  },
  {
    id: "345",
    name: "Playlist 345",
    public: false,
    description: "Awesome playlist",
  },
];

/* .grid.divide-y-2.divide-gray-500.divide-solid.px-5.py-2 */

const PlaylistList = (props: Props) => {
  return (
    <div className="grid divide-y divide-gray-300 divide-solid">
      {playlists.map((playlist, index) => (
        <div className="px-5 py-2">{index+1}. {playlist.name}</div>
      ))}
    </div>
  );
};

export default PlaylistList;
