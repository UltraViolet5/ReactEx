import { Button } from "primereact/button";
import AlbumSearchView from "./albums/containers/AlbumSearchView";
import PlaylistsView from "./playlists/containers/PlaylistsView";
import { SmallButton } from "./core/components/SmallButton";
import { checkLogin, initLogin } from "./core/services/Auth";
import { useMemo } from "react";
import { NavLink, Outlet } from "react-router-dom";

function App() { 

  return (
    <>
      <div className="container">
        <div className="flex justify-between items-center gap-5">
          <h1>React App</h1>

          <NavLink to={"/music/search"}>Search</NavLink>
          <NavLink to={"/playlists"}>Playlists</NavLink>

          <div className="flex-1"></div>

          <SmallButton
            label="Login"
            severity="contrast"
            className="float-end"
            onClick={initLogin}
          />
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default App;
