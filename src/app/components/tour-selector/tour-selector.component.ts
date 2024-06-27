import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tour } from '../../core/spacetrain.model';

@Component({
  selector: 'app-tour-selector',
  templateUrl: './tour-selector.component.html',
  styleUrl: './tour-selector.component.css'
})
export class TourSelectorComponent {
  @Input() selectedTour = 1;
  @Input() tours: Array<Tour> = [];
  @Output() selectedTourChanged = new EventEmitter<number>();
}
