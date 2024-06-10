import { Component } from '@angular/core';
import {RocketsService} from "../../services/rockets.service";
import {Rocket} from "../../../../core/spacetrain.model";

@Component({
  selector: 'app-rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrl: './rocket-list.component.css'
})
export class RocketListComponent {
  protected rockets: Rocket[] = []

  constructor(private rocketService: RocketsService) {
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
