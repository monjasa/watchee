import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../../shared/models/movie.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Page } from '../../shared/models/page.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  public getTrending(): Observable<Movie[]> {
    const options = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${environment.apiKey}` }),
    };

    return this.http
      .get<Page<Movie>>(`${environment.apiUrl}/trending/movie/week`, options)
      .pipe(
        map(page => page.results),
        map(movies => movies.slice(0, 3))
      );
  }
}
