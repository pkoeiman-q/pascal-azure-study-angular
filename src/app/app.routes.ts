import { Routes } from '@angular/router';
import { SearchPortfolioComponent } from './components/routes/search-portfolio/search-portfolio.component';
import { PortfolioComponent } from './components/routes/portfolio-view/portfolio/portfolio.component';

export const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'search-portfolio', component: SearchPortfolioComponent },
];
