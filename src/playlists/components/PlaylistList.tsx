import React from "react";
import { mockPlaylists } from "../../core/model/mockPlaylists";

type Props = {};

/* .grid.divide-y-2.divide-gray-500.divide-solid.px-5.py-2 */

const PlaylistList = (props: Props) => {
  return (
    <div className="grid divide-y divide-gray-300 divide-solid">
      {mockPlaylists.map((playlist, index) => (
        <div className="px-5 py-2">
          {index + 1}. {playlist.name}
        </div>
      ))}
    </div>
  );
};

export default PlaylistList;
