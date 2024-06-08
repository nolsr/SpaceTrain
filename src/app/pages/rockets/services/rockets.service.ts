import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {Observable} from "rxjs";
import {Rocket} from "../../../core/spacetrain.model";
import {environment} from "../../../../environment";

@Injectable({
  providedIn: 'root'
})
export class RocketsService {
  private rocketEndpoints = environment.endpoints.rockets;

  constructor(private apiService: ApiService) { }

  getRockets(): Observable<Rocket[]> {
    return this.apiService.get<Rocket[]>(`${this.rocketEndpoints.getAll}`);
  }
}
