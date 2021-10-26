import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TrendingMovieCarouselComponent } from './trending-movie-carousel/trending-movie-carousel.component';
import { TrendingMovieCardGroupComponent } from './trending-movie-card-group/trending-movie-card-group.component';
import { SharedModule } from '../../shared/shared.module';
import { DiscoverMovieCardGroupComponent } from './discover-movie-card-group/discover-movie-card-group.component';


@NgModule({
  declarations: [
    HomeComponent,
    TrendingMovieCarouselComponent,
    TrendingMovieCardGroupComponent,
    DiscoverMovieCardGroupComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
})
export class HomeModule {
}
