import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToursService } from '../../../../core/services/tours.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent implements OnInit {
  public countdownDate = '';
  constructor(
    private router: Router,
    private toursService: ToursService
  ) { }

  ngOnInit(): void {
    this.toursService.getCountdownDate().subscribe(res => {
      this.countdownDate = (res[0]?.datum ?? '2024-12-31').substring(0, 10);
    });
  }

  public gotoTickets() {
    this.router.navigate(['/booking']);
  }
}

