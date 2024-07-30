import AlbumSearchView from "./albums/containers/AlbumSearchView";
import PlaylistsView from "./playlists/containers/PlaylistsView";

function App() {
  return (
    <>
      <div className="container">
        <h1>React App</h1>

        {/* <PlaylistsView /> */}
        <AlbumSearchView/>
        
      </div>
    </>
  );
}

export default App;
