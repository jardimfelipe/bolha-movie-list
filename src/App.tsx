import Header from "./components/header";
import MovieList from "./components/movie-list";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MovieList />
      </main>
    </div>
  );
}
