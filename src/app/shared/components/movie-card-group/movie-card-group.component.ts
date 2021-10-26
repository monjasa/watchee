import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'shared-movie-card-group',
  templateUrl: './movie-card-group.component.html',
  styleUrls: ['./movie-card-group.component.scss']
})
export class MovieCardGroupComponent {

  @Input()
  public movies: Movie[] = [];

  constructor(private router: Router) {
  }

  public onMovieCardSelect(movie: Movie) {
    this.router.navigate(['movie', movie.id]);
  }
}
