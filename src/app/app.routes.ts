import { Routes } from '@angular/router';
import { PortfolioComponent } from './components/routes/portfolio-view/portfolio/portfolio.component';
import { LoginComponent } from './components/routes/authentication/login/login.component';

export const routes: Routes = [
  { path: 'portfolio/:id', component: PortfolioComponent },
  { path: 'login', component: LoginComponent }
];
