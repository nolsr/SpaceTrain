import { Injectable, NgZone } from '@angular/core';
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { Rocket, Sitzplatz } from "../spacetrain.model";
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
      this.getSeats().subscribe({
        next: (sitzplaetze: Array<Sitzplatz>) => {
          sitzplaetze = sitzplaetze.map(s => new Sitzplatz(s.sitzplatznr, s.raketennr, s.preis, s.bezeichnung, s.belegt ?? false));
          this.apiService.get<Rocket[]>(`${this.rocketEndpoints.getAll}`).subscribe({
            next: (res: Array<Rocket>) => {
              this.ngZone.run(() => {
                const rockets: Rocket[] = [];
                res.forEach((r: Rocket) => {
                  const rocket = new Rocket(r.raketennr, r.name, r.hoehe, r.durchmesser, r.schiffvolumen, r.traegervolumen, r.startnutzlastmasse, r.rueckkehrnutzlastmasse);
                  rocket.setSeats(sitzplaetze);
                  rockets.push(rocket);
                });
                this.rockets = rockets;
                observer.next(this.rockets);
              });
            },
            error: err => {
              console.error(err);
              observer.error(err);
            }
          });
        }
      });
    });
  }

  getSeats(): Observable<any> {
    return this.apiService.get<Sitzplatz[]>(`${this.rocketEndpoints.getSeats}`);
  }
}
