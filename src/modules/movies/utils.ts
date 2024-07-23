import { Genre, Movie } from "./types";
import genres from "../../data/genres.json";

const getMovieGenres = (movie: Movie) => {
  const movieGenres = genres.filter((genre) =>
    movie.genre_ids.includes(genre.id)
  );
  return movieGenres;
};

const filterMovies = (movies: Movie[], genre: Genre | null, search: string) => {
  let selectedMovies = movies;
  if (genre) {
    selectedMovies =
      genre.id === 0
        ? selectedMovies
        : selectedMovies.filter((movie: Movie) =>
            movie.genre_ids.includes(genre.id)
          );
  }
  if (search) {
    selectedMovies = selectedMovies.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  return selectedMovies;
};

export { getMovieGenres, filterMovies };
