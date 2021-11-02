export interface Movie {
  id: number;
  title: string;
  release_date: Date;
  genre_ids: number[];
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
}
