import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent {
  constructor(private router: Router) {}
  public gotoTickets() {
    this.router.navigate(['/booking']);
  }
}

