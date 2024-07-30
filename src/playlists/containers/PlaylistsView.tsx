import { useEffect, useState } from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";
import { mockPlaylists } from "../../core/model/mockPlaylists";
import { Playlist } from "../../core/model/Playlist";
import { Button } from "primereact/button";

const PlaylistsView = () => {
  const [mode, setMode] = useState<"details" | "editor" | "creator">("details");
  const [playlists, setPlaylists] = useState(mockPlaylists);
  // const [selected, setSelected] = useState<Playlist | undefined>(playlists[0]);

  const [selectedId, setSelectedId] = useState<Playlist["id"]>();
  const [selected, setSelected] = useState<Playlist>();

  const selectPlaylistById = (id: string) => {
    setSelectedId(id);
    // setSelected(playlists.find((p) => p.id === id));
  };

  const savePlaylist = (draft: Playlist) => {
    setPlaylists((playlists) =>
      playlists.map((p) => (p.id === draft.id ? draft : p))
    );
    setSelectedId(draft.id);
    // setSelected(draft);
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
    // setSelected(draft);
  };

  const showDetails = () => {
    setMode("details");
  };

  const showEditor = () => {
    setMode("editor");
  };

  // y = 2x + b
  useEffect(() => {
    console.log("effect");

    setSelected(playlists.find((p) => p.id === selectedId));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId, playlists]);

  // React Hook useEffect has a missing dependency: 'playlists'. 
  // Either include it or remove the dependency array. 
  // You can also replace multiple useState variables with useReducer if 'setSelected' needs the current value of 'playlists'
  // .eslintreact-hooks/exhaustive-deps

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

          <div className="flex justify-end mt-5">
            <Button
              label="Create New"
              severity="secondary"
              size="small"
              onClick={() => setMode("creator")}
            />
          </div>
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
            <PlaylistEditor onCancel={showDetails} onSave={createPlaylist} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
