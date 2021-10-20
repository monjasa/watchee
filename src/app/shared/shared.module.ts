import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { BackdropPathUrlPipe } from './pipes/backdrop-path-url.pipe';
import { PosterPathUrlPipe } from './pipes/poster-path-url.pipe';


@NgModule({
  declarations: [
    MovieCardComponent,
    BackdropPathUrlPipe,
    PosterPathUrlPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MovieCardComponent,
    BackdropPathUrlPipe,
    PosterPathUrlPipe,
  ],
})
export class SharedModule {
}
