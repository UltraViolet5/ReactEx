import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PlaylistsView from "./playlists/containers/PlaylistsView";

function App() {
  return (
    <>
      <div className="container">
        <h1>React App</h1>

        <PlaylistsView />
      </div>
    </>
  );
}

export default App;
