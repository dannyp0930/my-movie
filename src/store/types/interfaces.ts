export interface Genre {
  id: number;
  name: string;
};

export interface ProductionCompany {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

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