import { useState } from "react";

import SearchIcon from "../icons/search";
import styles from "./styles.module.css";

import { useFilterMovies } from "../../modules/movies/hooks";

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const { filter } = useFilterMovies();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filter(searchValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input
          value={searchValue}
          onChange={handleChange}
          className={styles.input}
          type="text"
          placeholder="Search for a movie"
        />
        <button className={styles.button}>
          <SearchIcon />
        </button>
      </div>
    </form>
  );
}
