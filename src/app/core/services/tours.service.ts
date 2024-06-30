import { Injectable, NgZone } from '@angular/core';
import { Crewmember, Rocket, Sitzplatz, Tour, Tourtermin } from '../spacetrain.model';
import { environment } from '../../../environment';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToursService {
  public tours: Tour[] = [];
  public tourdates: Tourtermin[] = [];
  private toursEndpoints = environment.endpoints.tours;

  constructor(private apiService: ApiService, private ngZone: NgZone) { }

  public getTours(): Observable<Tour[]> {
    return new Observable(observer => {
      this.apiService.get<Tour[]>(`${this.toursEndpoints.getAll}`).subscribe({
        next: (res: Array<Tour>) => {
          this.ngZone.run(() => {
            const tours: Array<Tour> = [];
            res.forEach((t: Tour) => {
              tours.push(new Tour(t.tournr, t.name, t.ort, t.preisklasse, t.beschreibung));
            })
            this.tours = tours;
            observer.next(this.tours);
          });
        },
        error: err => {
          console.error(err);
          observer.error(err);
        }
      });
    });
  }

  public getCountdownDate(): Observable<any> {
    return this.apiService.get<any>(`${this.toursEndpoints.getCountdown}`);
  }

  public getToursdatesByTourId(id: number, rockets: Rocket[], staff: Crewmember[], tours: Tour[], takenSeats: Sitzplatz[]): Observable<any> {
    return new Observable(observer => {
      this.apiService.get<Tourtermin[]>(`${this.toursEndpoints.getTourdatesByTournr}/${id}`).subscribe({
        next: (res: Array<Tourtermin>) => {
          this.ngZone.run(() => {
            const tourdates: Tourtermin[] = [];
            res.forEach(tour => {
              tourdates.push(new Tourtermin(tour.tourterminnr, tour.datum, tour.personalnr, tour.raketennr, tour.tournr, rockets, staff, tours, takenSeats));
            });
            this.tourdates = tourdates;
            observer.next(this.tourdates);
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
