import { useState } from "react";

import { Movie } from "../../modules/movies/types";

import InfoIcon from "../icons/info";
import StarIcon from "../icons/star";

import MovieDetails from "../movie-details";

import styles from "./styles.module.css";
import { getMovieGenres } from "../../modules/movies/utils";

const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  const [open, setOpen] = useState(false);
  const movieGenres = getMovieGenres(movie);

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className={styles.container}>
        <img src={assetsUrl + movie.poster_path} alt={movie.title} />
        <span className={styles.badge}>
          <StarIcon />
          {movie.vote_average.toFixed(1)}
        </span>
        <button onClick={handleClick} className={styles.button}>
          <InfoIcon />
        </button>
      </div>

      <span className={styles.movieName}>{movie.title}</span>
      <ul className={styles.genres}>
        {movieGenres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <MovieDetails onClose={handleModalClose} open={open} movie={movie} />
    </div>
  );
}
