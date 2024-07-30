import React, {
  ChangeEventHandler,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { Playlist } from "../../core/model/Playlist";
import { Button } from "primereact/button";

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

const PlaylistEditor = ({
  playlist: initialPlaylist = EMPTY_PLAYLIST,
  onCancel,
  onSave,
}: Props) => {
  const [playlist, setPlaylist] = useState(initialPlaylist);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPlaylist({ ...playlist, name: event.target.value });
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(playlist);
  };

  const uuid = useId();
  const playlistNameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // document.getElementById(uuid + "playlistName")?.focus();
    playlistNameRef.current?.focus();
  }, []);

  return (
    <form onSubmit={submit}>
      <div className="grid gap-3">
        <div className="grid">
          <label>Name</label>
          <input
            type="text"
            value={playlist.name}
            onChange={changeHandler}
            id={uuid + "playlistName"}
            ref={playlistNameRef}
          />
          <div className="text-end">{playlist.name.length} / 100</div>
        </div>

        <div className="grid ">
          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={playlist.public}
              onChange={(e) =>
                setPlaylist({ ...playlist, public: e.target.checked })
              }
            />
            Public
          </label>
        </div>
        <div className="grid">
          <label>Description</label>
          <textarea
            value={playlist.description}
            onChange={(e) =>
              setPlaylist({ ...playlist, description: e.target.value })
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
};

export default PlaylistEditor;
