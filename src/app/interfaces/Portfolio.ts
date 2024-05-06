import { WorkExperience } from "./WorkExperience";

export interface Portfolio {
  id: string;
  portfolioId: string;
  name: string;
  experiences: WorkExperience[];
}
