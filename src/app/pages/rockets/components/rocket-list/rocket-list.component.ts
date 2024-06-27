import { Component, OnInit } from '@angular/core';
import { RocketsService } from "../../../../core/services/rockets.service";
import { RocketInfoType } from '../../../../core/spacetrain.model';

@Component({
  selector: 'app-rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrl: './rocket-list.component.css'
})
export class RocketListComponent implements OnInit {
  public RocketInfoType = RocketInfoType;
  constructor(public rocketService: RocketsService) { }

  ngOnInit() {
    this.rocketService.getRockets().subscribe();
  }

  isLeft(index: number): boolean {
    return index % 2 === 0;
  }
}
