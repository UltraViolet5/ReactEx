import React from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";

type Props = {};

const PlaylistsView = (props: Props) => {
  let mode: "details" | "editor" = "details";

  const showDetails = () => {};
  const showEditor = () => {};

  return (
    <div>
      <h3 className="text-3xl leading-loose">Playlists</h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <PlaylistList />
        </div>
        <div className="grid gap-5">
          <PlaylistDetails />

          {false && <PlaylistEditor />}

          <div className="flex justify-between">
            <button>Details</button>
            <button>Editor</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
