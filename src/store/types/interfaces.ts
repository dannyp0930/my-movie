export interface Genre {
  id: number;
  name: string;
};

export interface Movie {
  id: number;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  vote_average: number;
};