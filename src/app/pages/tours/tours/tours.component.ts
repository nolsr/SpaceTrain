import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent {
  constructor(private router: Router) {
  }

  public gotoTickets(tour: string) {
    this.router.navigate(['/booking', tour]);
  }
}
