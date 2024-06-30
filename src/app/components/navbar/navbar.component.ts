import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../../core/spacetrain.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  public subscription: Subscription | undefined;
  public user: User | null = null;

  constructor(
    public router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.subscription = this.authService.userChanged$.subscribe({next: (user) => {
      this.user = user;
    }, error: () => {
      console.log('asdadsasd');
    }, complete: () => {
      console.log('asdjoksdfhgjsd');
    }});
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
