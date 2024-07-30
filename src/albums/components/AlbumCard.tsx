import { Button, ButtonProps } from "primereact/button";
import { Card, CardProps } from "primereact/card";
import React, { PropsWithChildren } from "react";
import { SmallButton } from "../../core/components/SmallButton";
import { Album } from "../../core/model/Album";

type Props = {
  album: Album;
};

const AlbumCard = ({ children, album }: PropsWithChildren<Props>) => {
  return (
    <div>
      <Card
        header={() => <img src={album.images[0].url} />}
        footer={() => {
          return (
            <div className="flex justify-end">
              <SmallButton
                size="small"
                link={false}
                label="details"
                primary={true}
              />
            </div>
          );
        }}
      >
        <h3>{album.name}</h3>
        <p className="m-0">{children}</p>
      </Card>
    </div>
  );
};

export default AlbumCard;
