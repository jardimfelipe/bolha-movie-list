import Header from "./components/header";
import MovieFilters from "./components/movie-filters";
import MovieList from "./components/movie-list";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MovieFilters />
        <MovieList />
      </main>
    </div>
  );
}
