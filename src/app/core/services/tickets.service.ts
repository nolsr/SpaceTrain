import { Injectable, NgZone } from '@angular/core';
import { Crewmember, Ticket } from '../spacetrain.model';
import { ApiService } from './api.service';
import { environment } from '../../../environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class TicketsService {
    public tickets: Ticket[] = [];
    private ticketsEndpoints = environment.endpoints.tickets;

    constructor(
        private apiService: ApiService,
        private ngZone: NgZone,
        private authService: AuthService
    ) { }

    public getTickets(): Observable<any> {
        const kundennr = this.authService.loggedInUser?.kundennr;
        return new Observable(observer => {
            this.apiService.get(`${this.ticketsEndpoints.getAll}/${kundennr}`).subscribe({
                next: (res: any) => {
                    this.tickets = [];
                    res.forEach((t: Ticket) => {
                        this.tickets.push(new Ticket(t.ticketnr, t.buchungsnr, t.sitzplatznr, t.tourterminnr, t.preis, t.bezeichnung, t.name, t.tourname, t.datum, t.ort));
                    });
                    observer.next();
                }, error: (error) => observer.error(error)
            })
        });
    }

    public refundTicket(ticketnr: number): Observable<any> {
        return new Observable(observer => {
            this.apiService.delete(`${this.ticketsEndpoints.delete}/${ticketnr}`).subscribe({
                next: (res: any) => {
                    console.log(res);
                    this.getTickets().subscribe();
                    observer.next();
                }, error: (error) => observer.error(error)
            });
        });
    }
}
