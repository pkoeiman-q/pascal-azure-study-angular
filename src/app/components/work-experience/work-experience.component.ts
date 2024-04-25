import { Component, Input } from '@angular/core';
import { WorkExperience } from '../../interfaces/WorkExperience';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  @Input() workExperience: WorkExperience = {
    title: "",
    description: "",
    date: new Date(Date.now())
  }
  constructor() {}
  ngOnInit(): void {
  }
}
