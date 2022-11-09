import React, { useState, FC } from "react";
import { ICollection } from "src/types/types";
import { Card } from "./Card";

export const Collection: FC<ICollection> = ({ name, photos = [] }) => {
  const [activePhoto, setActivePhoto] = useState<string>(photos[0]);

  if (!photos?.length) return null;

  return (
    <div className="collection">
      <Card
        className="collection__big"
        src={activePhoto}
        setActivePhoto={setActivePhoto}
      />
      <div className="collection__bottom">
        {photos.map(
          (photo) =>
            photo !== activePhoto && (
              <Card key={photo} src={photo} setActivePhoto={setActivePhoto} />
            )
        )}
      </div>
      <h4>{name}</h4>
    </div>
  );
};
