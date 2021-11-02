import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';

@Component({
  selector: 'movie-similar-movie-card-group',
  templateUrl: './similar-movie-card-group.component.html',
  styleUrls: ['./similar-movie-card-group.component.scss']
})
export class SimilarMovieCardGroupComponent {

  @Input()
  public movies: Movie[] = [];

}
