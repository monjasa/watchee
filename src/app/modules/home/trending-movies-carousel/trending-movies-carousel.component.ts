import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';
import { BackdropSize } from '../../../shared/models/enums/backdrop-size.model';

@Component({
  selector: 'home-trending-movies-carousel',
  templateUrl: './trending-movies-carousel.component.html',
  styleUrls: ['./trending-movies-carousel.component.scss']
})
export class TrendingMoviesCarouselComponent {

  public movies: Movie[] = [];

  @Input()
  public numberOfItems: number = 3;

  @Input()
  set moviesModel(value: Movie[]) {
    this.movies = value.slice(0, this.numberOfItems);
  }

  get backdropSize(): typeof BackdropSize {
    return BackdropSize;
  }
}
