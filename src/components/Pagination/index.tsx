import React, { FC } from "react";
import cn from "classnames";
import { Item } from "./Item";

const ARR_NUMBERS = [1, 2, 3];

interface Props {
  activePage: number;
  setActivePage: (activePage: number) => void;
}

export const Pagination: FC<Props> = ({ activePage, setActivePage }) => (
  <ul className="pagination">
    {ARR_NUMBERS.map((item) => (
      <Item
        key={item}
        className={cn({ active: item === activePage })}
        onClick={() => setActivePage(item)}
      >
        {item}
      </Item>
    ))}
  </ul>
);
