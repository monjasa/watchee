import { Component, Input } from '@angular/core';
import { Genre } from '../../models/genre.model';

@Component({
  selector: 'shared-genre-toggle',
  templateUrl: './genre-toggle.component.html',
  styleUrls: ['./genre-toggle.component.scss']
})
export class GenreToggleComponent  {

  @Input()
  public genre: Genre;

  public isChecked: boolean;

}
