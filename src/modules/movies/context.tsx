import { createContext, useState } from "react";

import { Category, Genre, Movie, MoviesContextType } from "./types";

import topRated from "../../data/top-rated.json";

export const MoviesContext = createContext<MoviesContextType | null>(null);

const MoviesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>(topRated);
  const [genre, setGenre] = useState<Genre | null>(null);
  const [category, setCategory] = useState<Category>("top_rated");
  return (
    <MoviesContext.Provider
      value={{ movies, genre, category, setMovies, setGenre, setCategory }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
