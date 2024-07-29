//  tsrafce
import React from "react";

import styles from './PlaylistDetails.module.css';

console.log(styles);


type Props = {};

const PlaylistDetails = (props: Props) => {
  const playlist = {
    id: "123",
    name: "Playlist 123",
    public: false,
    description: "Cool playlist",
  };

  return (
    <div>
      {/* .grid.gap-3>.grid*3>strong{Name}+div{Playlist Name} */}
      {false} {true} {null} {undefined}
      <div className="grid gap-3">
        <div className="grid">
          <strong>Name</strong>
          <div>{playlist.name}</div>
        </div>

        <div className="grid">
          <strong>Public</strong>
          {/* <div>{playlist.public? 'Yes' : 'No'}</div> */}
          {playlist.public && <div className={styles.isPublic}>Yes</div>}
          {playlist.public || <div className={styles.isPrivate}>No</div>}

        </div>
        <div className="grid">
          <strong>Description</strong>
          <div>{playlist.description}</div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
