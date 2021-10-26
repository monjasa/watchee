import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../core/services/movie.service';
import { switchMap } from 'rxjs/operators';
import { Movie } from '../../shared/models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  public movie?: Movie;

  constructor(private router: Router, private route: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => this.movieService.getById(Number(params.get('id')))),
      )
      .subscribe(
        movie => this.movie = movie,
        // () => this.router.navigate([''])
      );
  }
}
