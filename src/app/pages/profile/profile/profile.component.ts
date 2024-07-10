import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TicketsService } from '../../../core/services/tickets.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  public userMessage = '';

  public changeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    public ticketsService: TicketsService
  ) { }

  ngOnInit(): void {
    this.ticketsService.getTickets().subscribe();
  }

  public handleLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  public saveChanges() {
    if (!this.changeForm.value.email) {
      return;
    }
    this.authService.updateEmail(this.changeForm.value.email).subscribe({
      next: () => {
        this.changeForm.reset(); {
          this.userMessage = 'Email erfolgreich aktualisiert!';
        }
      }
    });
  }

  public onRefund(ticketnr: number) {
    this.ticketsService.refundTicket(ticketnr).subscribe({
      next: () => {
        this.userMessage = 'Ticket erfolgreich storniert!';
      }
    });
  }

  public onClosePopup() {
    this.userMessage = '';
  }
}
