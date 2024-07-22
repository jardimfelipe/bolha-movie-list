import { createContext, useState } from "react";

import { Movie, MoviesContextType } from "./types";

export const MoviesContext = createContext<MoviesContextType | null>(null);

const MoviesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
