import React, {  } from "react";
import { Playlist } from "../../core/model/Playlist";
import { Button } from "primereact/button";
import { Controller, useForm } from "react-hook-form";

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
    const { register, handleSubmit, watch, control } = useForm({
      values: playlistFromProps,
    });

    // const {name, ref, onBlur, onChange, disabled} = register('name')

    // const playlistName = watch("name");

    return (
      <form
        onSubmit={handleSubmit((data) => {
          onSave(data);
        })}
      >
        <div className="grid gap-3">
          <div className="grid">
            <label>Name</label>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <input type="text" {...field} />
                  <div className="text-end">{field.value.length} / 100</div>
                </>
              )}
            />
          </div>

          <div className="grid ">
            <label className="flex gap-2 items-center">
              <input type="checkbox" {...register("public")} />
              Public
            </label>
          </div>
          <div className="grid">
            <label>Description</label>
            <textarea {...register("description")} />
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

/*  const [playlistState, setPlaylistState] = useState(playlistFromProps);

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

    const {user} = useUserProfile() */
