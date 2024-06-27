import { Pipe, PipeTransform } from '@angular/core';
import { Sitzplatz } from '../core/spacetrain.model';

@Pipe({
  name: 'seat',
  standalone: true
})
export class SeatPipe implements PipeTransform {

  transform(value: Sitzplatz[], vorne: boolean): Sitzplatz[] {
    return value.filter(s => s.bezeichnung.toLowerCase().startsWith(vorne ? 'v' : 'h'));
  }
}
