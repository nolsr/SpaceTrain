import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from '../../core/spacetrain.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input() ticket: Ticket = {} as Ticket;
  @Output() refund = new EventEmitter<any>();
}
