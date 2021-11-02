import { Component, Input } from '@angular/core';
import { MovieDetails } from '../../../shared/models/movie-details.model';
import { BackdropSize } from '../../../shared/models/enums/backdrop-size.model';

@Component({
  selector: 'movie-backdrop-jumbotron',
  templateUrl: './backdrop-jumbotron.component.html',
  styleUrls: ['./backdrop-jumbotron.component.scss']
})
export class BackdropJumbotronComponent {

  @Input()
  public movie?: MovieDetails;

  get backdropSize(): typeof BackdropSize {
    return BackdropSize;
  }
}
