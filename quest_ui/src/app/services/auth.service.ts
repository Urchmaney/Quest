import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL, API_LOGIN_URL, API_REGISTER_URL, AUTH_TOKEN_KEY } from '../utils/constants';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  registerUser(registerModel: any, cb: () => void) {
    this.httpClient.post(`${API_BASE_URL}${API_REGISTER_URL}`, registerModel).subscribe(x => {
      cb();
      console.log(x);
    })
  }

  loginUser(loginModel: any, cb: () => void, errCb: (x: any) => void) {
    try {
      this.httpClient.post(`${API_BASE_URL}${API_LOGIN_URL}`, loginModel).subscribe((x: any)=> {
        cb();
        this.localStorageService.saveRecord(AUTH_TOKEN_KEY, x.token)
      }
      )
    } catch(err) {
      errCb(err);
    }

  }
}
