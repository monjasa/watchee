import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMoviesCardDeckComponent } from './trending-movies-card-deck.component';

describe('TrendingMoviesCardDeckComponent', () => {
  let component: TrendingMoviesCardDeckComponent;
  let fixture: ComponentFixture<TrendingMoviesCardDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingMoviesCardDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingMoviesCardDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
