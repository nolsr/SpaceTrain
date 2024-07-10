import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {
  @Input() countdownDate = '';
  endDate = new Date('2024-12-31T00:00:00');
  remainingTime: string = '';
  intervalId: any;

  ngOnInit() {
    this.updateRemainingTime();
    this.intervalId = setInterval(() => {
      this.updateRemainingTime();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateRemainingTime() {
    const now = new Date().getTime();
    console.log(this.countdownDate);
    const distance = new Date(this.countdownDate + 'T00:00:00').getTime() - now;

    if (distance < 0) {
      this.remainingTime = 'Countdown beendet!';
      clearInterval(this.intervalId);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.remainingTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}
