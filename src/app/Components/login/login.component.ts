import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  isSignup = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    });
  }

  toggleForm() {
    this.isSignup = !this.isSignup;
    this.errorMessage = '';
    this.loginForm.reset();
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill out all required fields correctly.';
      return;
    }

    if (this.isSignup && this.loginForm.value.password !== this.loginForm.value.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }

    console.log(this.isSignup ? 'Signing up...' : 'Logging in...', this.loginForm.value);
    this.errorMessage = '';
  }
}
