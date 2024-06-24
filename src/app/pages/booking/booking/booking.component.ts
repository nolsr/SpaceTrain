import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit, OnDestroy {
  public tour = '';
  private sub: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.tour = params['tour'];
      console.log(this.tour);
   });
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}
