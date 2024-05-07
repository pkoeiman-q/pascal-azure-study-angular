import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-portfolio',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './search-portfolio.component.html',
  styleUrl: './search-portfolio.component.scss'
})
export class SearchPortfolioComponent {
  searchForm = new FormGroup({
    query: new FormControl('')
  });

  constructor(private router: Router) {}
  onSubmit(value: any) {
    console.log(value.query)
    this.router.navigateByUrl(`portfolio/${value.query}`);
  }
}
