import { useContext } from "react";
import { useToggleCategory } from "../../modules/movies/hooks";
import {
  Category,
  categoryLabels,
  MoviesContextType,
} from "../../modules/movies/types";

import styles from "./styles.module.css";
import { MoviesContext } from "../../modules/movies/context";

const categoryOptions: Category[] = [
  "top_rated",
  "upcoming",
  "now_playing",
  "popular",
];

export default function ToggleCategory() {
  const { toggleCategory } = useToggleCategory();
  const { category: selectedCategory } = useContext(
    MoviesContext
  ) as MoviesContextType;

  const handleChange = (selectedCategory: Category) => {
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
            onChange={() => handleChange(category)}
            checked={category === selectedCategory}
          />
          <label className={styles.label} htmlFor={category}>
            {categoryLabels[category]}
          </label>
        </>
      ))}
    </div>
  );
}
