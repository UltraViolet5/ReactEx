import { Button } from "primereact/button";
import { Card, CardProps } from "primereact/card";
import React, { PropsWithChildren } from "react";

type Props = {};

const AlbumCard = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Card
        header={() => (
          <img src="https://primefaces.org/cdn/primereact/images/usercard.png" />
        )}
        footer={() => {
          return (
            <div className="flex justify-end">
              <Button size="small" link={false} label="details" />
            </div>
          );
        }}
      >
        <p className="m-0">
          <h3>Header</h3>
          {children}
        </p>
      </Card>
    </div>
  );
};

export default AlbumCard;
