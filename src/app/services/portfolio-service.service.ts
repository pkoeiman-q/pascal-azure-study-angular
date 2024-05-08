import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

  constructor(private http: HttpClient) { }

  testCall(portfolioId: string) {
    return this.http.get(`https://pascalazurestudyapi20240405105805.azurewebsites.net/api/Portfolios/${portfolioId}`, {responseType: 'text'})
    .pipe(
      tap({
          error: e => console.log(e)
      })
    );
  }
}
