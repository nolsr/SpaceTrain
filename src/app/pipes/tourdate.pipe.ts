import { Pipe, PipeTransform } from '@angular/core';
import { Tourtermin } from '../core/spacetrain.model';

@Pipe({
  name: 'tourdate',
  standalone: true
})
export class TourdatePipe implements PipeTransform {

  transform(value: { isoString: string, tourdates: Tourtermin[] },): unknown {
    return value.tourdates.some(t => t.datum == value.isoString);
  }
}
