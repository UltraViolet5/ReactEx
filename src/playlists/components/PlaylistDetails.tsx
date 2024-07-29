//  tsrafce
import React from "react";

import styles from "./PlaylistDetails.module.css";
import { Playlist } from "../../core/model/Playlist";

type Props = {
  playlist: Playlist;
  onEdit: () => void;
};

const PlaylistDetails = ({ playlist,onEdit }: Props) => {
  return (
    <div>
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

      <div className="flex justify-between">
        <button onClick={onEdit}>Editor</button>
      </div>
    </div>
  );
};

export default PlaylistDetails;
