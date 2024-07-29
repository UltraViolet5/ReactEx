import React, { SyntheticEvent, useState } from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";

type Props = {};

const PlaylistsView = (props: Props) => {
  // let mode2: "details" | "editor" = "details";
  // const [mode, setMode] = useState("details" as "details" | "editor");

  const [mode, setMode] = useState<"details" | "editor">("details");

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
          <PlaylistList />
        </div>
        <div className="grid gap-5">
          {mode === "details" && <PlaylistDetails />}
          {mode === "editor" && <PlaylistEditor />}

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
