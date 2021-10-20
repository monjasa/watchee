import { Pipe, PipeTransform } from '@angular/core';
import { BackdropSize } from '../models/enums/backdrop-size.model';

@Pipe({
  name: 'backdropUrl'
})
export class BackdropUrlPipe implements PipeTransform {

  transform(path: string, size: BackdropSize): string {
    return `https://image.tmdb.org/t/p/${size}/${path}`;
  }
}
