import { useContext } from "react";
import genres from "../../data/genres.json";

import styles from "./styles.module.css";
import { MoviesContext } from "../../modules/movies/context";

const all = {
  id: 0,
  name: "All",
};

export default function GenderSelect() {
  const { dispatch } = useContext(MoviesContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenre = genres.find(
      (genre) => genre.id === Number(e.target.value)
    );
    if (!selectedGenre) {
      dispatch({ type: "SET_GENRE", payload: all });
      return;
    }
    dispatch({ type: "SET_GENRE", payload: selectedGenre });
  };
  return (
    <div className={styles.container}>
      <select onChange={handleChange} className={styles.select}>
        <option value="all">All</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}
