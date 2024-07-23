import { useToggleCategory } from "../../modules/movies/hooks";
import { Category, categoryLabels } from "../../modules/movies/types";

import styles from "./styles.module.css";

const categoryOptions: Category[] = [
  "top_rated",
  "upcoming",
  "now_playing",
  "popular",
];

export default function ToggleCategory() {
  const { toggleCategory } = useToggleCategory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = e.target.value;
    if (!selectedCategory) {
      toggleCategory("top_rated");
      return;
    }
    toggleCategory(selectedCategory as Category);
  };
  return (
    <div className={styles.container}>
      {categoryOptions.map((category) => (
        <>
          <input
            key={category}
            className={styles.input}
            type="radio"
            name="category"
            id={category}
            onChange={handleChange}
          />
          <label className={styles.label} htmlFor={category}>
            {categoryLabels[category]}
          </label>
        </>
      ))}
    </div>
  );
}
