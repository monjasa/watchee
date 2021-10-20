import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../../shared/models/genre.model';
import { GenreList } from '../../shared/models/genre-list.model';
import { environment } from '../../../environments/environment';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GenreService {

  private genres$: Observable<Map<number, Genre>> | undefined;

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Map<number, Genre>> {
    if (!this.genres$) {
      this.genres$ = this.http
        .get<GenreList>(`${environment.apiUrl}/genre/movie/list`)
        .pipe(
          map(list => list.genres),
          map(genres => new Map(genres.map(genre => [genre.id, genre]))),
          shareReplay(1),
        );
    }

    return this.genres$;
  }
}
