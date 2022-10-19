import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  type: string = 'password';
  icon: string = 'bi bi-eye';
  isAuthenticated: boolean = false;
  showErrors: boolean = false;

  changeVisibility() {
    if (this.type === 'password') {
      this.type = 'text';
      this.icon = 'bi bi-eye-slash';
    } else {
      this.type = 'password';
      this.icon = 'bi bi-eye';
    }
  }

  constructor(private router: Router) {}

  @ViewChild('loginForm') loginForm!: NgForm;
  signIn() {
    if (this.loginForm.form.invalid) this.showErrors = true;
    else this.router.navigateByUrl('/home');
    // console.log(this.loginForm.form);
  }
}
