import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { SharedModule } from '../../shared/shared.module';
import { SimilarMovieCardGroupComponent } from './similar-movie-card-group/similar-movie-card-group.component';
import { BackdropJumbotronComponent } from './backdrop-jumbotron/backdrop-jumbotron.component';


@NgModule({
  declarations: [
    MovieComponent,
    SimilarMovieCardGroupComponent,
    BackdropJumbotronComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule,
  ],
})
export class MovieModule { }
