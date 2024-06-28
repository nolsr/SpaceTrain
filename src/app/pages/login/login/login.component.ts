import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public isLogin = true;

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required])
  });

  public registerForm = new FormGroup({
    vorname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    nachname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    adresse: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  public login() {
    console.log(this.loginForm.value);
  }

  public register() {
    console.log(this.registerForm.value);
  }

  public toggleLogin() {
    this.isLogin = !this.isLogin;
  }
}
