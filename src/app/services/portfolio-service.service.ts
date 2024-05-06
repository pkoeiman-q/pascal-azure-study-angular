import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

  constructor(private http: HttpClient) { }

  testCall() {
    return this.http.get("https://pascalazurestudyapi20240405105805.azurewebsites.net/api/Portfolios/3", {responseType: 'text'});
  }
}
