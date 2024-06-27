import { Injectable, NgZone } from '@angular/core';
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { Rocket } from "../spacetrain.model";
import { environment } from "../../../environment";

@Injectable({
  providedIn: 'root'
})
export class RocketsService {
  public rockets: Array<Rocket> = [];
  private rocketEndpoints = environment.endpoints.rockets;

  constructor(
    private apiService: ApiService,
    private ngZone: NgZone
  ) { }

  getRockets(): Observable<any> {
    return new Observable(observer => {
      this.apiService.get<Rocket[]>(`${this.rocketEndpoints.getAll}`).subscribe({
      next: (res: Array<Rocket>) => {
          this.ngZone.run(() => {
            this.rockets = res;
            observer.next(this.rockets);
          });
        },
        error: err => {
          console.error(err);
          observer.error(err);
        }
      });
    });
  }
}
