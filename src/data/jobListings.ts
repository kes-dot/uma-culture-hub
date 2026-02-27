export interface JobListing {
  id: string;
  title: string;
  department: string;
  city: string;
  state: string;
  region: string;
  applyUrl: string;
}

// Categorize role titles into departments
// Customize this function for your company's department structure
function getDepartment(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("engineer") || t.includes("developer")) return "Engineering";
  if (t.includes("designer") || t.includes("ux")) return "Design";
  if (t.includes("manager") || t.includes("director")) return "Management";
  if (t.includes("sales") || t.includes("account")) return "Sales";
  if (t.includes("marketing")) return "Marketing";
  if (t.includes("support") || t.includes("success")) return "Customer Success";
  return "General";
}

function getRegion(state: string): string {
  const west = ["California", "Colorado", "Washington", "Oregon"];
  const south = ["Texas", "Georgia", "Virginia", "Florida"];
  const northeast = ["Massachusetts", "Pennsylvania", "Maryland", "New York"];
  const midwest = ["Minnesota", "Missouri", "Michigan", "Illinois"];
  if (west.includes(state)) return "West";
  if (south.includes(state)) return "South";
  if (northeast.includes(state)) return "Northeast";
  if (midwest.includes(state)) return "Midwest";
  return "Other";
}

/**
 * Populate this array with your job listings.
 *
 * Example:
 * {
 *   id: "job-001",
 *   title: "Software Engineer",
 *   city: "San Francisco",
 *   state: "California",
 *   applyUrl: "https://your-ats.com/apply/job-001",
 * }
 */
export const jobListings: JobListing[] = [
  // Add your job listings here
].map((job: Omit<JobListing, "department" | "region"> & { department?: string; region?: string }) => ({
  ...job,
  department: job.department || getDepartment(job.title),
  region: job.region || getRegion(job.state),
}));

export function getUniqueStates(): string[] {
  return [...new Set(jobListings.map((j) => j.state))].sort();
}

export function getUniqueDepartments(): string[] {
  return [...new Set(jobListings.map((j) => j.department))].sort();
}
