import { Pipe, PipeTransform } from '@angular/core';
import { Tourtermin } from '../core/spacetrain.model';

@Pipe({
  name: 'tourdate',
  standalone: true
})
export class TourdatePipe implements PipeTransform {

  transform(value: { isoString: string, tourdates: Tourtermin[] },): unknown {
    const inputDate = new Date(value.isoString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate >= today && value.tourdates.some(t => t.datum == value.isoString);
  }
}
