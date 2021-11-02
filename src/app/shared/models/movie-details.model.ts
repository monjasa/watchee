import { Genre } from './genre.model';

export interface MovieDetails {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  runtime: number;
  status: string;
  release_date: Date;
  genres: Genre[];
  budget: number;
  revenue: number;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
}
