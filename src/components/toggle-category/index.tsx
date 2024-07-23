import { useContext } from "react";
import { Category, categoryLabels } from "../../modules/movies/types";

import styles from "./styles.module.css";
import { MoviesContext } from "../../modules/movies/context";

const categoryOptions: Category[] = [
  "top_rated",
  "upcoming",
  "now_playing",
  "popular",
];

export default function ToggleCategory() {
  const { category: selectedCategory, dispatch } = useContext(MoviesContext);

  const handleChange = (selectedCategory: Category) => {
    if (!selectedCategory) {
      dispatch({ type: "SET_CATEGORY", payload: "top_rated" });
      return;
    }
    dispatch({ type: "SET_CATEGORY", payload: selectedCategory });
  };
  return (
    <div className={styles.container}>
      {categoryOptions.map((category, index) => (
        <>
          <input
            key={`${category}-${index}`}
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
