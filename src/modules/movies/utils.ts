import { Movie } from "./types";
import genres from "../../data/genres.json";

const getMovieGenres = (movie: Movie) => {
  const movieGenres = genres.filter((genre) =>
    movie.genre_ids.includes(genre.id)
  );
  return movieGenres;
};

export { getMovieGenres };
