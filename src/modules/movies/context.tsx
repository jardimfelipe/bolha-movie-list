import { createContext, useState } from "react";

import { Genres, Movie, MoviesContextType } from "./types";

import popular from "../../data/popular.json";
import jGenres from "../../data/genres.json";

export const MoviesContext = createContext<MoviesContextType | null>(null);

const MoviesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>(popular);
  const [genres, setGenres] = useState<Genres[]>(jGenres);
  return (
    <MoviesContext.Provider value={{ movies, genres, setMovies, setGenres }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
