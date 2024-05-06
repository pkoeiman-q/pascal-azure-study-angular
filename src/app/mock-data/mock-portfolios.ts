import { Portfolio } from '../interfaces/Portfolio';
import { WorkExperience } from '../interfaces/WorkExperience';

export const PORTFOLIO: Portfolio = {
  id: "3",
  portfolioId: "3",
  experiences: [{
    title: "Work experience title 1",
    description: "Work experience description 1",
    date: new Date(Date.now())
  },
  {
    title: "Work experience title 2",
    description: "Work experience description 2",
    date: new Date(Date.now())
  }]
}
