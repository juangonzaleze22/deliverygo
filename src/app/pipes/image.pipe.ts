import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(url: string): string {
    const defaultImage = 'https://placehold.it/100x100';
    return url ? environment.API_URL_IMAGE + url : defaultImage;
  }

}
