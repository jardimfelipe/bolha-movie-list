import SearchInput from "../search-input";

import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Movie <span>LT</span>
        </h1>
        <SearchInput />
      </div>
    </header>
  );
}
