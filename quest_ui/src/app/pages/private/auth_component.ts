import { HttpStatusCode } from "@angular/common/http";
import { Router } from "@angular/router";
import { APP_LOGIN_URL } from "src/app/utils/constants";

export class AuthComponent {

  constructor(private router: Router) {
  }
  errorHandler(err: any) {
    if (err.status === HttpStatusCode.Unauthorized) {
      this.router.navigate([APP_LOGIN_URL]);
    }
  }
}
