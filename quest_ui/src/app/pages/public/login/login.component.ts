import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { APP_DASHBOARD_URL } from 'src/app/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  loginUser() {
    this.authService.loginUser(this.loginForm.value, () => {
      this.router.navigateByUrl(`/${APP_DASHBOARD_URL}`);
    }, (err) => {
      console.log(err);
      console.log("--------------", err.statusCode);
    })
  }
}
