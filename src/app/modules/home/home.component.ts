import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { TrendingMovie } from '../../shared/models/trending-movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public trendingMovies?: TrendingMovie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getTrending()
      .subscribe(movies => this.trendingMovies = movies);
  }
}
