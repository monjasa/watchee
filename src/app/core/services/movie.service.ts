import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrendingMovie } from '../../shared/models/trending-movie.model';
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

  public getTrending(): Observable<TrendingMovie[]> {
    return this.http
      .get<Page<TrendingMovie>>(`${environment.apiUrl}/trending/movie/week`)
      .pipe(
        map(page => page.results),
        map(movies => movies.slice(0, 3)),
      );
  }
}
