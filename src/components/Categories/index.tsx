import React, { FC } from "react";
import cn from "classnames";
import { Category } from "./Category";
import { CATEGORIES } from "./constants";

interface Props {
  activeCategory: number;
  setActiveCategory: (activeCategory: number) => void;
}

export const Categories: FC<Props> = ({
  activeCategory,
  setActiveCategory,
}) => (
  <ul className="tags">
    {CATEGORIES.map((category, index) => (
      <Category
        key={category}
        className={cn({ active: index === activeCategory })}
        onClick={() => setActiveCategory(index)}
      >
        {category}
      </Category>
    ))}
  </ul>
);
