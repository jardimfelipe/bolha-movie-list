import genres from "../../data/genres.json";
import { useFilterByGenre } from "../../modules/movies/hooks";

import styles from "./styles.module.css";

const all = {
  id: 0,
  name: "All",
};

export default function GenderSelect() {
  const { filter } = useFilterByGenre();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenre = genres.find(
      (genre) => genre.id === Number(e.target.value)
    );
    if (!selectedGenre) {
      filter(all);
      return;
    }
    filter(selectedGenre);
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
