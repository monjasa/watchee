import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { Genre } from '../../models/genre.model';
import { GenreToggleComponent } from '../genre-toggle/genre-toggle.component';

@Component({
  selector: 'shared-genre-toggle-group',
  templateUrl: './genre-toggle-group.component.html',
  styleUrls: ['./genre-toggle-group.component.scss'],
})
export class GenreToggleGroupComponent {

  @Input()
  public genres: Genre[] = [];

  @ViewChildren('toggle') genreToggles: QueryList<GenreToggleComponent>;

  @Output() genreToggleGroupChange = new EventEmitter<Genre[]>();

  groupChange() {
    this.genreToggleGroupChange.emit(
      this.genreToggles.toArray()
        .filter(toggle => toggle.isChecked)
        .map(toggle => toggle.genre)
    );
  }
}
