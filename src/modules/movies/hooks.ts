import { useContext } from "react";

import { Category, Genre, Movie, MoviesContextType } from "./types";
import { MoviesContext } from "./context";

import popular from "../../data/popular.json";
import topRated from "../../data/top-rated.json";
import upcoming from "../../data/upcoming.json";
import nowPlaying from "../../data/now-playing.json";

const movies = {
  top_rated: topRated,
  upcoming: upcoming,
  now_playing: nowPlaying,
  popular: popular,
};

export const useSearchMovies = () => {
  const { category, setSearch, setMovies } = useContext(
    MoviesContext
  ) as MoviesContextType;
  function filter(searchValue: string) {
    const filtered = movies[category].filter((movie: Movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMovies(filtered);
    setSearch(searchValue);
  }

  return { filter };
};

export const useFilterByGenre = () => {
  const { category, setGenre, setMovies } = useContext(
    MoviesContext
  ) as MoviesContextType;
  function filter(selectedGenre: Genre) {
    setGenre(selectedGenre);
    const filtered =
      selectedGenre.id === 0
        ? movies[category]
        : movies[category].filter((movie: Movie) =>
            movie.genre_ids.includes(selectedGenre.id)
          );
    setMovies(filtered);
  }

  return { filter };
};

export const useToggleCategory = () => {
  const { genre, search, setMovies, setCategory } = useContext(
    MoviesContext
  ) as MoviesContextType;
  function toggleCategory(selectedCategory: Category) {
    setCategory(selectedCategory);
    let selectedMovies = movies[selectedCategory];
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
    setMovies(selectedMovies);
  }

  return { toggleCategory };
};
