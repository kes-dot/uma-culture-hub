export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  applyUrl: string;
}

// Last verified: 2026-03-03 from https://boards-api.greenhouse.io/v1/boards/umaeducationinc/jobs
export const jobListings: JobListing[] = [
  {
    id: "1",
    title: "Business Development Advisor",
    department: "Career Services",
    location: "Remote",
    type: "Full-time",
    applyUrl: "https://job-boards.greenhouse.io/umaeducationinc/jobs/4413181008",
  },
  {
    id: "2",
    title: "Campus Education Manager",
    department: "Academic Operations",
    location: "Clearwater, FL",
    type: "Full-time",
    applyUrl: "https://job-boards.greenhouse.io/umaeducationinc/jobs/5115660008",
  },
  {
    id: "3",
    title: "Career Services Advisor",
    department: "Career Services",
    location: "Remote",
    type: "Full-time",
    applyUrl: "https://job-boards.greenhouse.io/umaeducationinc/jobs/4413133008",
  },
  {
    id: "4",
    title: "Corporate Alliance Recruiter",
    department: "Human Resources",
    location: "Remote",
    type: "Full-time",
    applyUrl: "https://job-boards.greenhouse.io/umaeducationinc/jobs/5135745008",
  },
  {
    id: "5",
    title: "Graduate Success Processor",
    department: "Student Success",
    location: "Remote",
    type: "Full-time",
    applyUrl: "https://job-boards.greenhouse.io/umaeducationinc/jobs/5107067008",
  },
  {
    id: "6",
    title: "Instructor, Adjunct",
    department: "Academic",
    location: "Remote",
    type: "Part-time",
    applyUrl: "https://job-boards.greenhouse.io/umaeducationinc/jobs/4508554008",
  },
  {
    id: "7",
    title: "Manager, Career Services",
    department: "Career Services",
    location: "Remote",
    type: "Full-time",
    applyUrl: "https://job-boards.greenhouse.io/umaeducationinc/jobs/5117510008",
  },
];
