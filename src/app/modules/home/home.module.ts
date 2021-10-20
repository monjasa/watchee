import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TrendingMoviesCarouselComponent } from './trending-movies-carousel/trending-movies-carousel.component';
import { TrendingMoviesCardDeckComponent } from './trending-movies-card-deck/trending-movies-card-deck.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    TrendingMoviesCarouselComponent,
    TrendingMoviesCardDeckComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
})
export class HomeModule {
}
