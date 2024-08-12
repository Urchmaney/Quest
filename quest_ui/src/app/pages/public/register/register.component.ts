import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { APP_LOGIN_URL } from 'src/app/utils/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    full_name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  }) 

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  registerUser() {
    this.authService.registerUser(this.registerForm.value, () => { this.router.navigate([APP_LOGIN_URL]) });
  }
}
