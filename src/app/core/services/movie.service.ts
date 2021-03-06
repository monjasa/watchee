import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../shared/models/movie.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Page } from '../../shared/models/common/page.model';
import { map } from 'rxjs/operators';
import { MovieDetails } from '../../shared/models/movie-details.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  public getById(id: number): Observable<MovieDetails> {
    return this.http
      .get<MovieDetails>(`${environment.apiUrl}/movie/${id}`);
  }

  public getAllTrending(): Observable<Movie[]> {
    return this.http
      .get<Page<Movie>>(`${environment.apiUrl}/trending/movie/day`)
      .pipe(
        map(page => page.results),
      );
  }

  public getAllDiscover(): Observable<Movie[]> {
    return this.http
      .get<Page<Movie>>(`${environment.apiUrl}/discover/movie`)
      .pipe(
        map(page => page.results),
      );
  }

  public getAllDiscoverByGenreIds(genreIds: number[]): Observable<Movie[]> {
    return this.http
      .get<Page<Movie>>(`${environment.apiUrl}/discover/movie`, {params: {with_genres: genreIds.join(',')}})
      .pipe(
        map(page => page.results),
      );
  }

  public getAllSimilarById(id: number): Observable<Movie[]> {
    return this.http
      .get<Page<Movie>>(`${environment.apiUrl}/movie/${id}/similar`)
      .pipe(
        map(page => page.results),
      );
  }
}
