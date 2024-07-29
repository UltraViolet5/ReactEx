import React, { SyntheticEvent, useState } from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import { mockPlaylists } from "../../core/model/mockPlaylists";
import { Playlist } from "../../core/model/Playlist";

type Props = {};

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<"details" | "editor" | "creator">("creator");
  const [playlists, setPlaylists] = useState(mockPlaylists);
  const [selectedId, setSelectedId] = useState("123");
  const [selected, setSelected] = useState(playlists[0]);

  const selectPlaylistById = (id: string) => {
    setSelectedId(id);
    setSelected(playlists.find((p) => p.id === id)!);
  };

  const savePlaylist = (draft: Playlist) => {
    setPlaylists(playlists.map((p) => (p.id === draft.id ? draft : p)));

    // selectPlaylistById(draft.id);

    setSelectedId(draft.id);
    setSelected(draft);

    setMode("details");
  };

  const createPlaylist = (draft: Playlist) => {
    draft.id = crypto.randomUUID();
    // playlists.push(draft); // Mutable

    debugger;

    // 1
    setPlaylists([...playlists, draft]);
    setPlaylists([...playlists, draft]);

    setPlaylists((nextPlaylists) => /* 3 */ [...nextPlaylists, draft]);
    setPlaylists((nextPlaylists) => /* 4 */ [...nextPlaylists, draft]);

    // 2
    setSelectedId(draft.id);
    setSelected(draft);
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
          {mode === "details" && (
            <PlaylistDetails playlist={selected} onEdit={showEditor} />
          )}
          {mode === "editor" && (
            <PlaylistEditor
              playlist={selected}
              onCancel={showDetails}
              onSave={savePlaylist}
            />
          )}

          {mode === "creator" && (
            <PlaylistEditor
              playlist={{ id: "", name: "", description: "", public: false }}
              onCancel={showDetails}
              onSave={createPlaylist}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
