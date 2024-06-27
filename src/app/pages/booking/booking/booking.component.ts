import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToursService } from '../../../core/services/tours.service';
import { StaffService } from '../../../core/services/staff.service';
import { RocketsService } from '../../../core/services/rockets.service';
import { Crewmember, Rocket, Tourtermin } from '../../../core/spacetrain.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit, OnDestroy {
  public tour = 1;
  public slectedTourtermin: Tourtermin = {} as Tourtermin;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    public toursService: ToursService,
    private staffService: StaffService,
    private rocketsService: RocketsService,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.tour = params['tour'] || 1;
      this.refreshTourdates();
    });

    this.toursService.getTours();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private refreshTourdates(): void {
    this.staffService.getStaff().subscribe({
      next: (staff: Array<Crewmember>) => {
        this.rocketsService.getRockets().subscribe({
          next: (rockets: Array<Rocket>) => {
            this.toursService.getToursdatesByTourId(this.tour, rockets, staff).subscribe({
              next: () => {
                console.log(this.toursService.tourdates);
                this.selectedTourterminChanged();
              }
            });
          }
        });
      }
    });
  }

  public selectedTourChanged(tourNr: number): void {
    this.tour = tourNr;
    this.refreshTourdates();
  }

  public selectedTourterminChanged(tourtermin: Tourtermin | undefined = undefined): void {
    if (tourtermin === undefined) {
      tourtermin = {} as Tourtermin;
    }
    console.log(tourtermin);
    this.slectedTourtermin = tourtermin;
  }
}
