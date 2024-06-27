import { Pipe, PipeTransform } from '@angular/core';
import { Tourtermin } from '../core/spacetrain.model';

@Pipe({
  name: 'tourdate',
  standalone: true
})
export class TourdatePipe implements PipeTransform {

  transform(value: { day: number, month: number, year: number, tourdates: Tourtermin[] },): unknown {
    return value.tourdates.some(t => t.datum == `${value.year}-${value.month < 10 ? '0' + value.month : value.month}-${value.day < 10 ? '0' + value.day : value.day}`);
  }

}
