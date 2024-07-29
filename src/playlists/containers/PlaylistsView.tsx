import React from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails"; 
import PlaylistEditor from "../components/PlaylistEditor";

type Props = {};

const PlaylistsView = (props: Props) => {
  return (
    <div>
      {/* div>ul.placki>li.item*3{Item $} */}
      {/* .grid.grid-cols-2.gap-4>div*2 */}

      <h3 className="text-3xl leading-loose">
        Playlists
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <PlaylistList/>
        </div>
        <div className="grid gap-5">
          <PlaylistDetails/>
          
          {/* createElement(PlaylistEditor) */}
          <PlaylistEditor/>
        </div>
      </div>

    </div>
  );
};

export default PlaylistsView;
