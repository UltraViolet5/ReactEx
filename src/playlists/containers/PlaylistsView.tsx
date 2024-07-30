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

    // const found = playlists.find((p) => p.id === id) as any
    // const found = playlists.find((p) => p.id === id) as Playlist;
    // const found = {} as Playlist;
    // const found = playlists.find((p) => p.id === id)!;

    const found = playlists.find((p) => p.id === id) as Playlist | undefined; // | null

    // Type Narrowing
    if (found !== undefined) {
      setSelected(found); // Playlist
    } else if (found === undefined) {
      found; //  undefined
    } else {
      found; //  never
      throw new Error("Unexpected result found");
    }
  };

  const savePlaylist = (draft: Playlist) => {
    setPlaylists((playlists) =>
      playlists.map((p) => (p.id === draft.id ? draft : p))
    );
    setSelectedId(draft.id);
    setSelected(draft);
    setMode("details");
  };

  const createPlaylist = (draft: Playlist) => {
    setPlaylists((prevPlaylists) => [
      ...prevPlaylists,
      {
        ...draft,
        id: crypto.randomUUID(),
      },
    ]);

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
