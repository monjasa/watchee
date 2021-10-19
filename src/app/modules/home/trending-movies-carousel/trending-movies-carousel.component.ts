import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';

@Component({
  selector: 'home-trending-movies-carousel',
  templateUrl: './trending-movies-carousel.component.html',
  styleUrls: ['./trending-movies-carousel.component.scss']
})
export class TrendingMoviesCarouselComponent {

  @Input()
  public movies?: Movie[];

}
