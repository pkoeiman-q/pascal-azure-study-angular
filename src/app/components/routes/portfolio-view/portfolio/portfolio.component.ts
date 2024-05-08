import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Portfolio } from '../../../../interfaces/Portfolio';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioServiceService } from '../../../../services/portfolio-service.service';
import { RouterModule } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, WorkExperienceComponent, FontAwesomeModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})

export class PortfolioComponent {
  @Input() queryId = "";
  @Input() set id(portfolioId: string) {
    this.getPortfolioWithId(portfolioId);
  }

  ready = false;
  httpStatus = 200;
  portfolio: Portfolio = {
    experiences: [],
    id: "",
    name: "Untitled",
    portfolioId: "",
  };
  faSuitcase = faSuitcase;

  constructor(private portfolioService: PortfolioServiceService) {
    this.handleError = this.handleError.bind(this)
  }

  readyView() : void {
    this.ready = true;
  }

  unreadyView() : void {
    this.httpStatus = 200;
    this.ready = false;
  }

  getPortfolioWithId(portfolioId: string) : void {
    this.unreadyView();
    this.queryId = portfolioId;
    this.portfolioService.testCall(portfolioId)
    .pipe(
      catchError(this.handleError)
    )
    .subscribe(
      data => {
        this.portfolio = JSON.parse(data);
        this.readyView();
      }
    )
  }

  handleError(error: HttpErrorResponse) {
    this.httpStatus = error.status;
    this.readyView();

    if (error.status === 401) {
      return throwError(() => new Error("Portfolio was not found!"))
    }
    return throwError(() => new Error("Couldn't find portfolio!"))
  }

  refresh(portfolioId: string) : void {
    this.getPortfolioWithId(portfolioId);
  }
}
