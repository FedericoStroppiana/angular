import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _formBuilder: FormBuilder, private router: Router) {}

  firstFormGroup = this._formBuilder.group({
    personType: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    addressType: ['', Validators.required],
    addressName: ['', Validators.required],
    houseNumber: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    businessName: ['', Validators.required],
  });

  isLinear = false;
  personType = this.firstFormGroup.get('personType');

  signIn() {
    if (this.personType?.value === 'natural') {
      if (this.secondFormGroup.valid) {
        this.router.navigateByUrl('/home');
      }
    } else if (this.personType?.value === 'legal') {
      if (this.thirdFormGroup.valid) {
        this.router.navigateByUrl('/home');
      }
    }
  }
}
