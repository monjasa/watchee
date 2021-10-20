import { Pipe, PipeTransform } from '@angular/core';
import { PosterSize } from '../models/enums/poster-size.model';

@Pipe({
  name: 'posterUrl'
})
export class PosterUrlPipe implements PipeTransform {

  transform(path: string, size: PosterSize): string {
    return `https://image.tmdb.org/t/p/${size}/${path}`;
  }
}
