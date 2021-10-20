import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { BackdropUrlPipe } from './pipes/backdrop-url.pipe';
import { PosterUrlPipe } from './pipes/poster-url.pipe';


@NgModule({
  declarations: [
    MovieCardComponent,
    BackdropUrlPipe,
    PosterUrlPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MovieCardComponent,
    BackdropUrlPipe,
    PosterUrlPipe,
  ],
})
export class SharedModule {
}
