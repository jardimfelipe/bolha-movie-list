export type MoviesContextType = {
  movies: Movie[];
  genre: Genre | null;
  category: Category; 
  setMovies: (movies: Movie[]) => void;
  setGenre: (genre: Genre) => void;
  setCategory: (category: Category) => void;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Genre = {
  id: number;
  name: string;
}

export type Category = "top_rated" | "upcoming" | "now_playing" | "popular";