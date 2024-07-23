import { useContext } from "react";

import { Movie, MoviesContextType } from "./types";
import { MoviesContext } from "./context";

import popular from "../../data/popular.json";
import topRated from "../../data/top-rated.json";
import upcoming from "../../data/upcoming.json";
import nowPlaying from "../../data/now-playing.json";

const movies = {
    top_rated: topRated,
    upcoming: upcoming,
    now_playing: nowPlaying,
    popular: popular
}

export const useSearchMovies = () => {
    const {category, setMovies} = useContext(MoviesContext) as MoviesContextType;
  function filter(searchValue: string) {
    const filtered = movies[category].filter((movie: Movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMovies(filtered);
  }

  return {filter}
};

export const useFilterMovies = () => {

}