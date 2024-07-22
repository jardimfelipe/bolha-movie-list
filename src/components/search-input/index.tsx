import { useContext, useState } from "react";

import SearchIcon from "../icons/search";
import styles from "./styles.module.css";

import { MoviesContext } from "../../modules/movies/context";
import { Movie, MoviesContextType } from "../../modules/movies/types";

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const { movies, setMovies } = useContext(MoviesContext) as MoviesContextType;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredMovies = movies.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMovies(filteredMovies);
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
