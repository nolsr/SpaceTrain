import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sitzplatz } from '../../core/spacetrain.model';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrl: './seats.component.css'
})
export class SeatsComponent {
  @Input() seats: Sitzplatz[] = [];
  @Output() selectedSeatCahnged = new EventEmitter<Sitzplatz>();

  public onSelectSeat(seat: Sitzplatz): void {
    if (seat.belegt) {
      return;
    }
    this.seats[this.seats.findIndex(s => s.sitzplatznr === seat.sitzplatznr)].selected = !seat.selected;
    this.selectedSeatCahnged.emit(seat);
  }
}
