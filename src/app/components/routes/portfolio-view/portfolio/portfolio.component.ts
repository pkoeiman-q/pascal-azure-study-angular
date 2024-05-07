import { Component, Input } from '@angular/core';
import { Portfolio } from '../../../../interfaces/Portfolio';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioServiceService } from '../../../../services/portfolio-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, WorkExperienceComponent, FontAwesomeModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})

export class PortfolioComponent {
  portfolio: Portfolio = {
    experiences: [],
    id: "",
    name: "Untitled",
    portfolioId: "",
  };
  faSuitcase = faSuitcase;

  @Input() set id(portfolioId: string) {
    this.getPortfolioWithId(portfolioId);
  }

  constructor(private portfolioService: PortfolioServiceService) {}

  getPortfolioWithId(portfolioId: string) : void {
    this.portfolioService.testCall(portfolioId).subscribe(data => {
      this.portfolio = JSON.parse(data);
    })
  }

  ngOnInit(): void {
  }
}
