import React, { FC, ChangeEvent } from "react";

const SEARCH_PLACEHOLDER = "Пошук за назвою";

interface Props {
  value: string;
  updateSearchValue: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<Props> = ({ value, updateSearchValue }) => (
  <input
    value={value}
    className="search-input"
    placeholder={SEARCH_PLACEHOLDER}
    onChange={updateSearchValue}
  />
);
