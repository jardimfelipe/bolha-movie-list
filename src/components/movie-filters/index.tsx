import GenderSelect from "../gender-select";
import ToggleCategory from "../toggle-category";

import styles from "./styles.module.css";

export default function MovieFilters() {
  return (
    <div className={styles.container}>
      <GenderSelect />
      <ToggleCategory />
    </div>
  );
}
