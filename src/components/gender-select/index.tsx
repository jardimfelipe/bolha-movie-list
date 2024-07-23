import { useContext } from "react";

import { MoviesContext } from "../../modules/movies/context";
import { MoviesContextType } from "../../modules/movies/types";

import styles from "./styles.module.css";

export default function GenderSelect() {
  const { genres } = useContext(MoviesContext) as MoviesContextType;
  return (
    <div className={styles.container}>
      <select className={styles.select}>
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
