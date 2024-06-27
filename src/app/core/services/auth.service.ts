import { Injectable } from '@angular/core';
import { User } from '../spacetrain.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: User | null = null;

  constructor() { }
}
