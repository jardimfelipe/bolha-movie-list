import { Movie } from "../../modules/movies/types";
import { getMovieGenres } from "../../modules/movies/utils";
import StarIcon from "../icons/star";

import styles from "./styles.module.css";

type Props = {
  open: boolean;
  movie: Movie;
  onClose?: () => void;
};

export default function MovieDetails({ open, movie, onClose }: Props) {
  const movieGenres = getMovieGenres(movie);
  return (
    <div
      className={`${styles.container} ${open ? styles.show : ""}`}
      onClick={onClose}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>{movie.title}</h1>
          </div>
          <div className={styles.stats}>
            <div className={styles.rating}>
              <StarIcon />
              <span>{movie.vote_average.toFixed(1)}</span>
            </div>
            <span>{movie.release_date.split("-")[0]}</span>
          </div>
        </div>
        <div className={styles.body}>
          <p>{movie.overview}</p>
          <ul className={styles.genres}>
            {movieGenres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
        <div className={styles.footer}>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
