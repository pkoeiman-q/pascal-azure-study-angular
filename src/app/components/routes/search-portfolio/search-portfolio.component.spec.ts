import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPortfolioComponent } from './search-portfolio.component';

describe('SearchPortfolioComponent', () => {
  let component: SearchPortfolioComponent;
  let fixture: ComponentFixture<SearchPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
