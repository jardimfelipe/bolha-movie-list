import { useState } from "react";

import SearchIcon from "../icons/search";
import styles from "./styles.module.css";

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const searchParams = new URLSearchParams(window.location.search);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchParams.set("search", searchValue);
    window.location.search = searchParams.toString();
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
