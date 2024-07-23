import { useContext } from "react";

import { Movie, MoviesContextType } from "./types";
import { MoviesContext } from "./context";

import movies from "../../data/popular.json";

export const useFilterMovies = () => {
    const {setMovies} = useContext(MoviesContext) as MoviesContextType;
  function filter(searchValue: string) {
    const filtered = movies.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMovies(filtered);
  }

  return {filter}
};