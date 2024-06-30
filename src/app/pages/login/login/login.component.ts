import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/spacetrain.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public isLogin = true;
  public userMessage = '';

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required])
  });

  public registerForm = new FormGroup({
    vorname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    adresse: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, this.checkPasswords()])
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public login() {
    this.authService.login(String(this.loginForm.value.email), String(this.loginForm.value.password)).subscribe({
      next: () => {
        this.loginForm.reset();
        this.router.navigate(['mission'])
      },
      error: (error) => {
        console.log(error);
        this.handleError(error);
      }
    });
  }

  public register() {
    const user = new User(-1, String(this.registerForm.value.name),
      String(this.registerForm.value.vorname),
      String(this.registerForm.value.adresse),
      String(this.registerForm.value.email),
      String(this.registerForm.value.password));
    this.authService.register(user).subscribe({
      next: () => {
        this.registerForm.reset();
        this.router.navigate(['mission'])
      },
      error: (error) => {
        console.log(error);
        this.handleError(error);
      }
    });
  }

  public toggleLogin() {
    this.isLogin = !this.isLogin;
  }

  private checkPasswords(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!this.registerForm) {
        return null;
      }
      if (this.registerForm.controls['password'].value !== this.registerForm.controls['confirmPassword'].value) {
        return { 'passwordsNotMatch': true };
      }
      return null;
    };
  }

  private handleError(error: any) {
    if (error?.error?.message) {
      const m = error?.error?.message;
      switch (m) {
        case 'Wrong email or password':
          this.userMessage = 'Falsche Email-Adresse oder Passwort!';
          const email = this.loginForm.value.email;
          this.loginForm.reset({email});
          break;
        case 'User already exists!':
          this.userMessage = 'Diese Email-Adresse ist bereits vergeben!';
          break;
      }
      return;
    }
    this.userMessage = 'Unknown Error!';
  }

  public onClosePopup(): void {
    this.userMessage = '';
  }
}
