import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from '../../../environment';
import { Tourtermin } from '../spacetrain.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private apiService: ApiService
  ) { }

  public book(termin: Tourtermin, preis: number, kundennr: number): Observable<any> {
    console.log(termin);
    const data = {
      preis,
      kundennr,
      tourterminnr: termin.tourterminnr,
      sitze: termin.rocket.sitzplaetze?.filter(s => s.selected)?.map(s => s.sitzplatznr) || []
    };
    return new Observable(observer => {
      this.apiService.post<any>(`${environment.endpoints.booking.book}`, data).subscribe({
        next: (res: any) => {
          observer.next(res);
        },
        error: (error) => {
          observer.error(error);
        }
      });
    });
  }
}
