import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMoviesCarouselComponent } from './trending-movies-carousel.component';

describe('TrendingMoviesCarouselComponent', () => {
  let component: TrendingMoviesCarouselComponent;
  let fixture: ComponentFixture<TrendingMoviesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingMoviesCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingMoviesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
