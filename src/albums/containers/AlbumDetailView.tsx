import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AlbumResponse } from "../../core/model/Album";
import AlbumCard from "../components/AlbumCard";

type Props = {};

const AlbumDetailView = (props: Props) => {
  const params = useParams();
  const albumId = params["albumId"];

  const album = useLoaderData() as AlbumResponse;

  return (
    <div>
      <h3 className="text-5xl leading-loose">{album.name}</h3>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <AlbumCard album={album} />
        </div>
        <div>
          <dl className="space-y-3">
            <dt>Name</dt>
            <dd>{album.name}</dd>
            <dt>Artist</dt>
            <dd>{album.artists[0].name}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailView;
