import genres from "../../data/genres.json";

import styles from "./styles.module.css";

export default function GenderSelect() {
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
