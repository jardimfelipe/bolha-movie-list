import { useContext } from "react";

import { MoviesContext } from "../../modules/movies/context";

import styles from "./styles.module.css";

import MovieCard from "../movie-card";

export default function MovieList() {
  const { movies } = useContext(MoviesContext);
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
