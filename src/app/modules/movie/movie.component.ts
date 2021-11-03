import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../core/services/movie.service';
import { switchMap } from 'rxjs/operators';
import { MovieDetails } from '../../shared/models/movie-details.model';
import { Movie } from '../../shared/models/movie.model';
import { of, zip } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  public movie: MovieDetails;

  public similarMovies: Movie[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => this.movieService.getById(Number(params.get('id')))),
        switchMap(movie => zip(of(movie), this.movieService.getAllSimilarById(movie.id))),
      ).subscribe(
      ([movie, similarMovies]) => {
        this.movie = movie;
        this.similarMovies = similarMovies;
      }, () => {
        this.router.navigate(['404'], { skipLocationChange: true });
      },
    );
  }
}
