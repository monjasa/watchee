import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';

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
}
