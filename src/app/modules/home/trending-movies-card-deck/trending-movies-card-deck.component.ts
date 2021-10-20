import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';

@Component({
  selector: 'home-trending-movies-card-deck',
  templateUrl: './trending-movies-card-deck.component.html',
  styleUrls: ['./trending-movies-card-deck.component.scss']
})
export class TrendingMoviesCardDeckComponent {

  @Input()
  public movies: Movie[] = [];

}
