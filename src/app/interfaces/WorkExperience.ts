export interface WorkExperience {
  title: string;
  description: string;
  date: Date;

  // When trying to format the date within the view, the following error occurs:
  // NG9: Property 'Date' does not exist on type 'WorkExperienceComponent'.
  // For that reason, include a dateDisplay variable
  dateDisplay: string;
}
