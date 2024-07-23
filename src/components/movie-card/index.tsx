import { Movie } from "../../modules/movies/types";

import InfoIcon from "../icons/info";
import StarIcon from "../icons/star";

import genres from "../../data/genres.json";

import styles from "./styles.module.css";

const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  const movieGenres = genres.filter((genre) =>
    movie.genre_ids.includes(genre.id)
  );
  return (
    <div>
      <div className={styles.container}>
        <img src={assetsUrl + movie.poster_path} alt={movie.title} />
        <span className={styles.badge}>
          <StarIcon />
          {movie.vote_average.toFixed(1)}
        </span>
        <button className={styles.button}>
          <InfoIcon />
        </button>
      </div>

      <span className={styles.movieName}>{movie.title}</span>
      <ul className={styles.genres}>
        {movieGenres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}
