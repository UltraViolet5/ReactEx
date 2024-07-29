import React, { useState } from "react";
import { mockPlaylists } from "../../core/model/mockPlaylists";

type Props = {};

const PlaylistList = (props: Props) => {
  const [selectedId, setSelectedId] = useState("234");

  const selectPlaylistById = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div className="grid divide-y divide-gray-300 divide-solid">
      {mockPlaylists.map((playlist, index) => (
        <div
          className={`px-5 py-2 ${
            playlist.id === selectedId
              ? "bg-blue-500 text-white"
              : "cursor-pointer hover:bg-blue-200"
          }`}
          // Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
          // onClick={selectPlaylistById(playlist.id)}
          onClick={() => selectPlaylistById(playlist.id)}
          key={playlist.id}
        >
          {index + 1}. {playlist.name}
        </div>
      ))}
    </div>
  );
};

export default PlaylistList;
