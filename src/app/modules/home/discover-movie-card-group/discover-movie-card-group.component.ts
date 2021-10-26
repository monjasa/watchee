import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';
import { MovieService } from '../../../core/services/movie.service';
import { Genre } from '../../../shared/models/genre.model';
import { GenreService } from '../../../core/services/genre.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'home-discover-movie-card-group',
  templateUrl: './discover-movie-card-group.component.html',
  styleUrls: ['./discover-movie-card-group.component.scss']
})
export class DiscoverMovieCardGroupComponent implements OnInit {

  public movies: Movie[] = [];

  public genres: Genre[] = [];

  constructor(private movieService: MovieService, private genreService: GenreService) { }

  ngOnInit(): void {
    this.getAllGenres();
    this.getAllDiscoverMovies();
  }

  private getAllGenres() {
    this.genreService.getAll()
      .pipe(
        take(1),
      ).subscribe(genres => this.genres = [...genres.values()]);
  }

  public onGenreToggleGroupChange(genres: Genre[]) {
    (genres && genres.length)
      ? this.getAllDiscoverMoviesByGenres(genres)
      : this.getAllDiscoverMovies();
  }

  private getAllDiscoverMovies() {
    this.movieService.getAllDiscover()
      .pipe(
        take(1),
      ).subscribe(movies => this.movies = movies);
  }

  private getAllDiscoverMoviesByGenres(genres: Genre[]) {
    const genreIds = genres.map(genre => genre.id);
    this.movieService.getAllDiscoverByGenreIds(genreIds)
      .pipe(
        take(1),
      ).subscribe(movies => this.movies = movies);
  }
}
