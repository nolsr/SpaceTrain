import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToursService } from '../../../core/services/tours.service';
import { StaffService } from '../../../core/services/staff.service';
import { RocketsService } from '../../../core/services/rockets.service';
import { Crewmember, Rocket, Sitzplatz, Tour, Tourtermin } from '../../../core/spacetrain.model';
import { AuthService } from '../../../core/services/auth.service';
import { BookingService } from '../../../core/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit, OnDestroy {
  public tour = 1;
  public selectedTourtermin: Tourtermin = {} as Tourtermin;
  public totalCost = '0.00 €';
  public showLoginError = false;
  public showSuccess = false;
  public selectedPayment = 'paypal';
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    public toursService: ToursService,
    private staffService: StaffService,
    private rocketsService: RocketsService,
    private authService: AuthService,
    private bookingService: BookingService,
    private router: Router
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
        this.toursService.getTours().subscribe({
          next: (tours: Array<Tour>) => {
            this.rocketsService.getRockets().subscribe({
              next: (rockets: Array<Rocket>) => {
                this.toursService.getToursdatesByTourId(this.tour, rockets, staff, tours, this.rocketsService.takenSeats).subscribe({
                  next: () => {
                    this.selectedTourterminChanged();
                  }
                });
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
    this.selectedTourtermin = tourtermin;
    this.calcTotalPrice();
  }

  public selectedSeatChanged(): void {
    this.calcTotalPrice();
  }

  private calcTotalPrice(): number {
    if (!this.selectedTourtermin.tour) {
      return -1;
    }
    const sum = this.selectedTourtermin.rocket.sitzplaetze.map(s => s.selected ? s.preis : 0).reduce((sum, current) => sum + current, 0);
    this.totalCost = this.addDots((this.selectedTourtermin.tour.preisklasse * sum).toFixed(2)) + ' €';
    return this.selectedTourtermin.tour.preisklasse * sum;
  }

  private addDots(x: string) {
    return x.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  }

  public bookTickets(): void {
    // TODO: Tickets buchen implementieren
    if (this.authService.loggedInUser == null) {
      this.showLoginError = true;
      return;
    }
    this.bookingService.book(this.selectedTourtermin, this.calcTotalPrice(), this.authService.loggedInUser.kundennr).subscribe({
      next: () => {
        this.showSuccess = true;
      }
    });
  }

  public onCloseBookingReceipt(): void {
    this.showSuccess = false;
    this.router.navigate(['mission']);
  }
}
