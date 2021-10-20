import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { GenreService } from '../../../core/services/genre.service';
import { Genre } from '../../models/genre.model';

@Component({
  selector: 'shared-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {

  public genres!: Genre[];

  private _movie!: Movie;

  constructor(private genreService: GenreService) {
  }

  get movie(): Movie {
    return this._movie;
  }

  @Input()
  set movie(movie: Movie) {
    this._movie = movie;
    this.genreService.getAll()
      .subscribe(genres => this.genres = movie.genre_ids.map(genreId => genres.get(genreId) as Genre));
  }
}
