import { Injectable, NgZone } from '@angular/core';
import { Tour } from '../spacetrain.model';
import { environment } from '../../../environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ToursService {
  public tours: Tour[] = [];
  private toursEndpoints = environment.endpoints.tours;

  constructor(private apiService: ApiService, private ngZone: NgZone) { }

  public getTours(): void {
    this.apiService.get<Tour[]>(`${this.toursEndpoints.getAll}`).subscribe({
      next: (res: Array<Tour>) => {
        this.ngZone.run(() => {
          console.log(res);
          this.tours = res;
        });
      },
      error: err => console.error(err)
    });
  }
}
