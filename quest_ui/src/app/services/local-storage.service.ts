import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveRecord(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getRecord(key: string) : any {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }

  deleteRecord(key: string) {
    localStorage.removeItem(key);
  }
}
