export interface Genre {
  id: number;
  name: string;
};

export interface ProductionCompany {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
};

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
};

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
};

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | object;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null; // minLength: 9, maxLength: 9, pattern: ^tt[0-9]{7}
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string; // Allowed Values: Rumored, Planned, In Production, Post Production, Relased, Canceled
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface Cast {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export interface Crew {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  department: string;
  job: string;
};

export interface ReleaseDate {
  certification: string;
  iso_639_1: string;
  release_date: string;
  type: number;
  note: string;
};

export interface ReleaseDates {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
};

export interface Video {
  iso_6391: string;
  iso_3166_1: String;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}