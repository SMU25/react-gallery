import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  onClick: VoidFunction;
}

export const Category: FC<Props> = ({ children, className, onClick }) => (
  <li className={className} onClick={onClick}>
    {children}
  </li>
);
