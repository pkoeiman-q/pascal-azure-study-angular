import { Component } from '@angular/core';
import { PortfolioServiceService } from '../../services/portfolio-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private portfolioService: PortfolioServiceService) {}
  test() {
    this.portfolioService.testCall().subscribe(data =>
      console.log(data)
    )
  }
  ngOnInit(): void {
    this.test();
  }
}
