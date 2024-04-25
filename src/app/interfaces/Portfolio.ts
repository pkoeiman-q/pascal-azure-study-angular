import { WorkExperience } from "./WorkExperience";

export interface Portfolio {
  id: string;
  portfolioId: string;
  experiences: WorkExperience[];
}
