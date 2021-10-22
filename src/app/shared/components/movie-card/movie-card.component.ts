import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { GenreService } from '../../../core/services/genre.service';
import { Genre } from '../../models/genre.model';
import { PosterSize } from '../../models/enums/poster-size.model';

@Component({
  selector: 'shared-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {

  public genres: Genre[] = [];

  private _movie: Movie;

  constructor(private genreService: GenreService) {
  }

  @Input()
  set movie(movie: Movie) {
    this._movie = movie;
    this.genreService.getAll()
      .subscribe(genres => this.genres = movie?.genre_ids.map(genreId => genres.get(genreId) as Genre));
  }

  get movie(): Movie {
    console.log(this._movie.release_date)
    return this._movie;
  }

  get posterSize(): typeof PosterSize {
    return PosterSize;
  }
}
