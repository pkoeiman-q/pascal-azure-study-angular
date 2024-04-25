import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

  constructor(private http: HttpClient) { }
  testCall() {
    return this.http.get("https://httpbin.org/get");
  }
}
