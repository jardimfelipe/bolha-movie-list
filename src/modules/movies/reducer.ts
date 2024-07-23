import { MoviesAction, MoviesState } from "./types";

import popular from "../../data/popular.json";
import topRated from "../../data/top-rated.json";
import upcoming from "../../data/upcoming.json";
import nowPlaying from "../../data/now-playing.json";
import { filterMovies } from "./utils";

const movies = {
  top_rated: topRated,
  upcoming: upcoming,
  now_playing: nowPlaying,
  popular: popular,
};

const moviesReducer = (state: MoviesState, action: MoviesAction) => {
  const newMovies = movies[state.category];
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        movies: filterMovies(newMovies, state.genre, state.search),
        category: action.payload,
      };
    case "SET_GENRE":
      return {
        ...state,
        genre: action.payload,
        movies: filterMovies(newMovies, action.payload, state.search),
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
        movies: filterMovies(newMovies, state.genre, action.payload),
      };
    default:
      return state;
  }
};

export const initialState: MoviesState = {
  movies: topRated,
  category: "top_rated",
  genre: null,
  search: "",
};

export default moviesReducer;
