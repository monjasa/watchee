import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'home-trending-movie-card-group',
  templateUrl: './trending-movie-card-group.component.html',
  styleUrls: ['./trending-movie-card-group.component.scss'],
})
export class TrendingMovieCardGroupComponent {

  @Input()
  public movies: Movie[] = [];

}
