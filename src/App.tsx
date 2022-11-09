import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactElement,
  ChangeEvent,
} from "react";
import axios from "axios";
import { Categories } from "./components/Categories";
import { Search } from "./components/Search";
import { Collection } from "./components/Collection";
import { Pagination } from "./components/Pagination";
import {
  API_URL_COLLECTIONS,
  API_URL_COLLECTIONS_BY_CATEGORY_ID,
  GET_PAGE_BY_NUMBER,
} from "./constants/urls";
import { ICollection } from "./types/types";
import "./index.scss";

const DEFAULT_ACTIVE_CATEGORY = 0;
const DEFAULT_ACTIVE_PAGE = 1;

const HEADING = "Моя колеція фотографій";
const LOADING_TEXT = "Завантаження даних...";
const NOT_COLLECTIONS_TEXT = "Колекції відсутні або не знайдені!";

function App(): ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [collections, setCollections] = useState<ICollection[]>([]);
  const [activeCategory, setCategory] = useState<number>(
    DEFAULT_ACTIVE_CATEGORY
  );
  const [searchValue, setSearchValue] = useState<string>("");
  const [activePage, setActivePage] = useState<number>(DEFAULT_ACTIVE_PAGE);

  const setActiveCategory = useCallback((index) => {
    setActivePage(DEFAULT_ACTIVE_PAGE);
    setCategory(index);
  }, []);

  const updateSearchValue = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) =>
      setSearchValue(target.value.toLocaleLowerCase()),
    []
  );

  useEffect(() => {
    const fetchColections = async () => {
      try {
        setIsLoading(true);

        const paginationParam = GET_PAGE_BY_NUMBER(activePage, !activeCategory);
        const url = activeCategory
          ? API_URL_COLLECTIONS_BY_CATEGORY_ID(activeCategory)
          : API_URL_COLLECTIONS;

        const { data } = await axios.get(`${url}${paginationParam}`);

        setCollections(data);
      } catch (error) {
        alert("Помилка отримання колецій фото!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchColections();
  }, [activeCategory, activePage]);

  const renderedCollections = useMemo(() => {
    const arrayCollection =
      Boolean(collections?.length) &&
      collections
        .filter(({ name }) => name.toLocaleLowerCase().includes(searchValue))
        .map((collection, index) => (
          <Collection key={collection.name + index} {...collection} />
        ));

    return arrayCollection?.length ? arrayCollection : null;
  }, [collections, searchValue]);

  return (
    <div className="App">
      <h1>{HEADING}</h1>
      <div className="top">
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Search value={searchValue} updateSearchValue={updateSearchValue} />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>{LOADING_TEXT}</h2>
        ) : (
          renderedCollections || <h2>{NOT_COLLECTIONS_TEXT}</h2>
        )}
      </div>
      <Pagination activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
