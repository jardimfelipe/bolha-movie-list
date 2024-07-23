import { createContext, useReducer } from "react";

import moviesReducer, { initialState } from "./reducer";
import { MoviesAction, MoviesState } from "./types";

export const MoviesContext = createContext<
  MoviesState & { dispatch: (action: MoviesAction) => void }
>({
  ...initialState,
  dispatch: () => {},
});

const MoviesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  const value = { ...state, dispatch };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
