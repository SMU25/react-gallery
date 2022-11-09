import React, { FC, ReactNode, MouseEventHandler } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  onClick: MouseEventHandler;
}

export const Item: FC<Props> = ({ children, className, onClick }) => (
  <li className={className} onClick={onClick}>
    {children}
  </li>
);
