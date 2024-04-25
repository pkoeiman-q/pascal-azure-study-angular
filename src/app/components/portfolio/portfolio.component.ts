import { Component } from '@angular/core';
import { PORTFOLIO } from '../../mock-data/mock-portfolios';
import { Portfolio } from '../../interfaces/Portfolio';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, WorkExperienceComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolio: Portfolio = PORTFOLIO;
  constructor() {}
  ngOnInit(): void {
  }
}
