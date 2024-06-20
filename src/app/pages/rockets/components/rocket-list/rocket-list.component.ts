import { Component } from '@angular/core';
import {RocketsService} from "../../../../core/services/rockets.service";
import {Rocket} from "../../../../core/spacetrain.model";

@Component({
  selector: 'app-rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrl: './rocket-list.component.css'
})
export class RocketListComponent {
  protected rockets: Rocket[] = [
    new Rocket("Rakete 1", "8,1 m / 26,7 ft", "4 / 13 ft", " 9,3 m³ / 328 ft³",
    "37 m³ / 1300 ft³", "6.000 kg / 13.228 lbs", "3.000 kg / 6.614 lbs"),
    new Rocket("Rakete 2", "8,1 m / 26,7 ft", "4 m / 13 ft", "9,3 m³ / 328 ft³",
      "37 m³ / 1300 ft³", "6.000 kg / 13.228 lbs", "3.000 kg / 6.614 lbs"),
    new Rocket("Rakete 3", "8,1 m / 26,7 ft", "4 m / 13 ft", "9,3 m³ / 328 ft³",
      "37 m³ / 1300 ft³", "6.000 kg / 13.228 lbs", "3.000 kg / 6.614 lbs")
  ]



  constructor(private rocketService: RocketsService) {
  }

  isLeft(index: number): boolean {
    return index % 2 === 0;
  }

  getAll() {
    this.rocketService.getRockets().subscribe( {
        next: (rockets) => {
          this.rockets = rockets
        },
      error: (err) => console.error('Error loading Rockets:', err),
      }
    )
  }
}
