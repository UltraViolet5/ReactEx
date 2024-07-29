import React, { useState } from "react";
import { mockPlaylists } from "../../core/model/mockPlaylists";
import { Playlist } from "../../core/model/Playlist";

type Props = {
  playlists: Playlist[];
  selectedId: string;
  onSelect: (id: string) => void;
};

const PlaylistList = ({ playlists, selectedId, onSelect }: Props) => {
  return (
    <div className="grid divide-y divide-gray-300 divide-solid">
      {playlists.map((playlist, index) => (
        <div
          className={`px-5 py-2 ${
            playlist.id === selectedId
              ? "bg-blue-500 text-white"
              : "cursor-pointer hover:bg-blue-200"
          }`}
          onClick={() => onSelect(playlist.id)}
          key={playlist.id}
        >
          {index + 1}. {playlist.name}
        </div>
      ))}
    </div>
  );
};

export default PlaylistList;
