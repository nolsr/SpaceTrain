import { Injectable, NgZone } from '@angular/core';
import { Crewmember, Rocket, Tour, Tourtermin } from '../spacetrain.model';
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

  public getTours(): void {
    this.apiService.get<Tour[]>(`${this.toursEndpoints.getAll}`).subscribe({
      next: (res: Array<Tour>) => {
        this.ngZone.run(() => {
          this.tours = res;
        });
      },
      error: err => console.error(err)
    });
  }

  public getToursdatesByTourId(id: number, rockets: Rocket[], staff: Crewmember[]): Observable<any> {
    return new Observable(observer => {
      this.apiService.get<Tourtermin[]>(`${this.toursEndpoints.getTourdatesByTournr}/${id}`).subscribe({
        next: (res: Array<Tourtermin>) => {
          this.ngZone.run(() => {
            const tourdates: Tourtermin[] = [];
            res.forEach(tour => {
              tourdates.push(new Tourtermin(tour.tourterminnr, tour.datum, tour.personalnr, tour.raketennr, rockets, staff));
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
