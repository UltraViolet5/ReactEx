import React, { SyntheticEvent, useState } from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import { mockPlaylists } from "../../core/model/mockPlaylists";

type Props = {};

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<"details" | "editor">("details");
  const playlists = mockPlaylists;
  
  const [selectedId, setSelectedId] = useState("123");
  const [selected, setSelected] = useState(playlists[0]);

  const selectPlaylistById = (id: string) => {
    setSelectedId(id);
    setSelected(playlists.find((p) => p.id === id)!);
  };

  const showDetails = () => {
    setMode("details");
  };

  const showEditor = () => {
    setMode("editor");
  };

  return (
    <div>
      <h3 className="text-3xl leading-loose">Playlists</h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <PlaylistList
            playlists={playlists}
            selectedId={selectedId}
            onSelect={selectPlaylistById}
          />
        </div>
        <div className="grid gap-5">

          {mode === "details" && <PlaylistDetails playlist={selected} />}
          {mode === "editor" && <PlaylistEditor  playlist={selected} />}

          <div className="flex justify-between">
            <button onClick={showDetails}>Details</button>
            <button onClick={showEditor}>Editor</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
