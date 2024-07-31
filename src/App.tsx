import { Button } from "primereact/button";
import AlbumSearchView from "./albums/containers/AlbumSearchView";
import PlaylistsView from "./playlists/containers/PlaylistsView";
import { SmallButton } from "./core/components/SmallButton";
import { checkLogin, initLogin } from "./core/services/Auth";
import { useMemo } from "react";

function App() {
  const loggedIn = useMemo(checkLogin, []);

  return (
    <>
      <div className="container">
        <SmallButton
          label="Login"
          severity="contrast"
          className="float-end"
          onClick={initLogin}
        />

        <h1>React App</h1>

        {/* <PlaylistsView /> */}
        <AlbumSearchView />
      </div>
    </>
  );
}

export default App;
