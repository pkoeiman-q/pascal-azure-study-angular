import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  searchForm = new FormGroup({
    query: new FormControl('')
  });

  constructor(private router: Router) {}
  onSubmit(value: any) {
    if(this.searchForm.valid) {
      this.router.navigateByUrl(`portfolio/${value.query}`);
    }
  }
}
