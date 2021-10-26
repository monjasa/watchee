import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { BackdropUrlPipe } from './pipes/backdrop-url.pipe';
import { PosterUrlPipe } from './pipes/poster-url.pipe';
import { MovieCardGroupComponent } from './components/movie-card-group/movie-card-group.component';
import { GenreToggleComponent } from './components/genre-toggle/genre-toggle.component';
import { GenreToggleGroupComponent } from './components/genre-toggle-group/genre-toggle-group.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MovieCardComponent,
    BackdropUrlPipe,
    PosterUrlPipe,
    MovieCardGroupComponent,
    GenreToggleComponent,
    GenreToggleGroupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MovieCardComponent,
    BackdropUrlPipe,
    PosterUrlPipe,
    MovieCardGroupComponent,
    GenreToggleGroupComponent,
  ],
})
export class SharedModule {
}
