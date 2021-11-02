import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Genre } from '../../models/genre.model';

@Component({
  selector: 'shared-genre-toggle',
  templateUrl: './genre-toggle.component.html',
  styleUrls: ['./genre-toggle.component.scss']
})
export class GenreToggleComponent  {

  @Input()
  public genre: Genre;

  @Output()
  public genreToggleChange = new EventEmitter<GenreToggleComponent>();

  public isChecked: boolean;

  public toggleChange() {
    this.genreToggleChange.emit(this);
  }
}
