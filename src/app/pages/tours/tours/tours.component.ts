import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToursService } from '../../../core/services/tours.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent implements OnInit {
  constructor(private router: Router, public toursService: ToursService) {
  }

  ngOnInit(): void {
    this.toursService.getTours();
  }

  public gotoTickets(tour: number) {
    this.router.navigate(['/booking', tour]);
  }
}
