export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  applyUrl: string;
}

export const jobListings: JobListing[] = [
  {
    id: "1",
    title: "Admissions Representative",
    department: "Admissions",
    location: "Remote",
    type: "Full-time",
    applyUrl: "https://job-boards.greenhouse.io/umaeducationinc/jobs/4412936008",
  },
  {
    id: "2",
    title: "Student Finance Advisor",
    department: "Student Finance",
    location: "Remote",
    type: "Full-time",
    applyUrl: "https://job-boards.greenhouse.io/umaeducationinc/jobs/4413204008",
  },
  {
    id: "3",
    title: "Learner Services Advisor",
    department: "Student Success",
    location: "Remote",
    type: "Full-time",
    applyUrl: "https://job-boards.greenhouse.io/umaeducationinc/jobs/4413196008",
  },
  {
    id: "4",
    title: "Career Services Advisor",
    department: "Career Services",
    location: "Remote",
    type: "Full-time",
    applyUrl: "https://job-boards.greenhouse.io/umaeducationinc/jobs/4413133008",
  },
  {
    id: "5",
    title: "Business Development Advisor",
    department: "Business Development",
    location: "Remote",
    type: "Full-time",
    applyUrl: "https://job-boards.greenhouse.io/umaeducationinc/jobs/4413181008",
  },
  {
    id: "6",
    title: "Campus Education Manager",
    department: "Academic Operations",
    location: "Clearwater, FL",
    type: "Full-time",
    applyUrl: "https://job-boards.greenhouse.io/umaeducationinc/jobs/5115660008",
  },
  {
    id: "7",
    title: "Adjunct Instructor",
    department: "Academic",
    location: "Remote",
    type: "Part-time",
    applyUrl: "https://job-boards.greenhouse.io/umaeducationinc/jobs/4508554008",
  },
  {
    id: "8",
    title: "Manager, Career Services",
    department: "Career Services",
    location: "Remote",
    type: "Full-time",
    applyUrl: "https://job-boards.greenhouse.io/umaeducationinc/jobs/5117510008",
  },
];
