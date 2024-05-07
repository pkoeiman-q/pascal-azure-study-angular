import { Component, Input } from '@angular/core';
import { WorkExperience } from '../../../../interfaces/WorkExperience';

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
    date: new Date(Date.now()),
    dateDisplay: ""
  }

  constructor() {}
  ngOnInit(): void {
    this.workExperience.dateDisplay = this.workExperience.date.toString().substring(0, 10)
  }
}
