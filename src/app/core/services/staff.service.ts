import { Injectable, NgZone } from '@angular/core';
import { Crewmember } from '../spacetrain.model';
import { ApiService } from './api.service';
import { environment } from '../../../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  public staff: Crewmember[] = [];
  private toursEndpoints = environment.endpoints.staff;

  constructor(
    private apiService: ApiService,
    private ngZone: NgZone
  ) { }

  public getStaff(): Observable<any> {
    return new Observable(observer => {
      this.apiService.get<Array<Crewmember>>(`${this.toursEndpoints.getAll}`).subscribe({
        next: (res: Array<Crewmember>) => {
          this.ngZone.run(() => {
            this.staff = res;
            observer.next(this.staff);
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
