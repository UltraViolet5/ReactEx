import React, { useEffect, useId, useState } from "react";
import { Playlist } from "../../core/model/Playlist";
import { Button } from "primereact/button";
import { useFocus } from "../../core/hooks/useFocus";

type Props = {
  playlist?: Playlist;
  onCancel: () => void;
  onSave: (draft: Playlist) => void;
};

const EMPTY_PLAYLIST: Playlist = {
  id: "",
  name: "",
  description: "",
  public: false,
};

const PlaylistEditor = React.memo(
  ({
    playlist: playlistFromProps = EMPTY_PLAYLIST,
    onCancel,
    onSave,
  }: Props) => {
    const [playlistState, setPlaylistState] = useState(playlistFromProps);

    // Sync with parent props:
    useEffect(() => setPlaylistState(playlistFromProps), [playlistFromProps]);

    const uuid = useId();

    const { ref: playlistNameRef } = useFocus([playlistState.id]);

    const changeHandler = (
      event: React.ChangeEvent<HTMLInputElement>
    ): void => {
      setPlaylistState({ ...playlistState, name: event.target.value });
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSave(playlistState);
    };

    return (
      <form onSubmit={submit}>
        {/* <pre>{JSON.stringify(playlistFromProps, null, 2)}</pre>
        <pre>{JSON.stringify(playlist, null, 2)}</pre> */}

        <div className="grid gap-3">
          <div className="grid">
            <label>Name</label>
            <input
              type="text"
              value={playlistState.name}
              onChange={changeHandler}
              id={uuid + "playlistName"}
              ref={playlistNameRef}
            />
            <div className="text-end">{playlistState.name.length} / 100</div>
          </div>

          <div className="grid ">
            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                checked={playlistState.public}
                onChange={(e) =>
                  setPlaylistState({ ...playlistState, public: e.target.checked })
                }
              />
              Public
            </label>
          </div>
          <div className="grid">
            <label>Description</label>
            <textarea
              value={playlistState.description}
              onChange={(e) =>
                setPlaylistState({ ...playlistState, description: e.target.value })
              }
            />
          </div>

          <div className="flex justify-between">
            <Button
              type="button"
              onClick={onCancel}
              severity="danger"
              size="small"
            >
              Cancel
            </Button>
            <Button type="submit" severity="success" size="small">
              Save
            </Button>
          </div>
        </div>
      </form>
    );
  }
);

export default PlaylistEditor;
