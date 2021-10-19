import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TrendingMoviesCarouselComponent } from './trending-movies-carousel/trending-movies-carousel.component';


@NgModule({
  declarations: [
    HomeComponent,
    TrendingMoviesCarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
