import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../shared/models/movie.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Page } from '../../shared/models/common/page.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  public getTrending(): Observable<Movie[]> {
    return this.http
      .get<Page<Movie>>(`${environment.apiUrl}/trending/movie/week`)
      .pipe(
        map(page => page.results)
      );
  }

  public getById(id: number): Observable<Movie> {
    return this.http
      .get<Movie>(`${environment.apiUrl}/movie/${id}`);
  }

  private static interpolateMovieImagePaths(movie: Movie): Movie {
    movie.poster_path = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`;
    movie.backdrop_path = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    return movie;
  }
}
