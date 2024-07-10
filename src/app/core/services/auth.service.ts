import { Injectable, NgZone } from '@angular/core';
import { User } from '../spacetrain.model';
import { environment } from '../../../environment';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: User | null = {} as User;
  private userEndpoints = environment.endpoints.user;

  constructor(
    private apiService: ApiService,
    private ngZone: NgZone
  ) {
  }

  public register(user: User): Observable<any> {
    return new Observable((observer) => {
      this.apiService.post<User>(this.userEndpoints.register, user).subscribe({
        next: (res: any) => {
          user.kundennr = res.id;
          user.password = '';
          this.setLoggedInUser(user);
          observer.next();
        }, error: (error) => observer.error(error)
      });
    });
  }

  public login(email: string, password: string): Observable<any> {
    return new Observable((observer) => {
      this.apiService.get<User>(`${this.userEndpoints.login}/${email}/${password}`).subscribe({
        next: (res: User) => {
          const user: User = new User(res.kundennr, res.name, res.vorname, res.adresse, res.email, '');
          this.setLoggedInUser(user);
          observer.next();
        }, error: (error) => observer.error(error)
      });
    });
  }

  public updateEmail(email: string): Observable<any> {
    return new Observable((observer) => {
      this.apiService.put<User>(`${this.userEndpoints.update}/${this.loggedInUser?.kundennr}`, {email}).subscribe({
        next: (res: any) => {
          observer.next();
        }, error: (error) => observer.error(error)
      });
    });
  }

  private setLoggedInUser(user: User) {
    this.ngZone.run(() => {
      this.loggedInUser = user;
    });
    localStorage.setItem('user', JSON.stringify(user));
    console.log(this.loggedInUser);
  }

  public getLoggedInUser() {
    const user = localStorage.getItem('user');
    this.ngZone.run(() => {
      if (user !== null) {
        this.loggedInUser = JSON.parse(user);
      } else {
        this.loggedInUser = null;
      }
    });
    console.log(this.loggedInUser);
  }

  public logout(): void {
    this.loggedInUser = null;
    localStorage.removeItem('user')
  }
}
