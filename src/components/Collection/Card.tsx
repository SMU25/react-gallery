import React, { useCallback, FC } from "react";

interface Props {
  src: string;
  className?: string;
  alt?: string;
  setActivePhoto: (photo: string) => void;
}

export const Card: FC<Props> = ({
  src,
  className = "collection__mini",
  alt = "Item",
  setActivePhoto,
}) => {
  const onClick = useCallback(() => setActivePhoto(src), [src, setActivePhoto]);

  return (
    <img
      key={src}
      className={className}
      src={src}
      alt={alt}
      onClick={onClick}
    />
  );
};
