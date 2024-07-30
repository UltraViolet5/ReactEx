import { useState, useCallback, useEffect } from "react";
import { mockPlaylists } from "../../core/model/mockPlaylists";
import { Playlist } from "../../core/model/Playlist";

export function usePlaylistsState() {
  const [mode, setMode] = useState<"details" | "editor" | "creator">("details");
  const [playlists, setPlaylists] = useState(mockPlaylists);

  const [selectedId, setSelectedId] = useState<Playlist["id"]>();
  const [selected, setSelected] = useState<Playlist>();

  const savePlaylist = useCallback((draft: Playlist) => {
    setPlaylists((playlists) =>
      playlists.map((p) => (p.id === draft.id ? draft : p))
    );
    setSelectedId(draft.id);
    setMode("details");
  }, []);

  const createPlaylist = useCallback((draft: Playlist) => {
    setPlaylists((playlists) => [
      ...playlists,
      { ...draft, id: crypto.randomUUID() },
    ]);
    setSelectedId(draft.id);
  }, []);

  const showDetails = useCallback(() => {
    setMode("details");
  }, []);

  const showEditor = useCallback(() => {
    setMode("editor");
  }, []);

  const selectPlaylistById = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  useEffect(() => {
    setSelected(playlists.find((p) => p.id === selectedId));
  }, [playlists, selectedId]);

  return {
    mode,
    selected,
    playlists,
    selectedId,
    savePlaylist,
    createPlaylist,
    showDetails,
    showEditor,
    selectPlaylistById,
    setMode,
  };
}
