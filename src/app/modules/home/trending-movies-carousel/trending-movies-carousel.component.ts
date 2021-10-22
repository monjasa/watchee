import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';
import { BackdropSize } from '../../../shared/models/enums/backdrop-size.model';

@Component({
  selector: 'home-trending-movies-carousel',
  templateUrl: './trending-movies-carousel.component.html',
  styleUrls: ['./trending-movies-carousel.component.scss']
})
export class TrendingMoviesCarouselComponent {

  private _movies: Movie[] = [];

  @Input()
  public numberOfItems: number = 3;

  @Input()
  set movies(value: Movie[]) {
    this._movies = value.slice(0, this.numberOfItems);
  }

  get movies(): Movie[] {
    return this._movies;
  }

  get backdropSize(): typeof BackdropSize {
    return BackdropSize;
  }
}
