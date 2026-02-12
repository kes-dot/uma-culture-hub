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
function getDepartment(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("behavior technician") || t.includes("rbt") || t.includes("registered behavior")) return "Behavior Technician";
  if (t.includes("bcba") || t.includes("behavior analyst")) return "BCBA";
  if (t.includes("clinical director")) return "Clinical Director";
  if (t.includes("speech language")) return "Speech Language Pathologist";
  if (t.includes("occupational therapist")) return "Occupational Therapist";
  if (t.includes("psychologist") || t.includes("diagnostician")) return "Psychologist";
  if (t.includes("case manager") || t.includes("level 1 provider")) return "Case Manager";
  return "Corporate & Operations";
}

function getRegion(state: string): string {
  const west = ["California", "Colorado"];
  const south = ["Texas", "Georgia", "Virginia"];
  const northeast = ["Massachusetts", "Pennsylvania", "Maryland", "Michigan"];
  const midwest = ["Minnesota", "Missouri"];
  if (west.includes(state)) return "West";
  if (south.includes(state)) return "South";
  if (northeast.includes(state)) return "Northeast";
  if (midwest.includes(state)) return "Midwest";
  return "Other";
}

export const jobListings: JobListing[] = [
  // BFHQ
  { id: "ocGEvfwL", title: "Billing Coordinator", city: "El Segundo", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/ocGEvfwL" },
  { id: "or9zzfws", title: "Human Resources Assistant", city: "El Segundo", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/or9zzfws" },
  { id: "oe7Uyfwx", title: "Intake Specialist | Customer Care", city: "Los Angeles", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oe7Uyfwx" },
  { id: "oAvEzfw2", title: "Onboarding Specialist", city: "El Segundo", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oAvEzfw2" },
  { id: "oG78xfwc", title: "Power BI Engineer", city: "Los Angeles", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oG78xfwc" },
  { id: "o2zayfw3", title: "Scheduling Coordinator | ABA", city: "El Segundo", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o2zayfw3" },
  { id: "oPtgzfwR", title: "Staff Accountant", city: "El Segundo", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oPtgzfwR" },
  { id: "oIUvzfwq", title: "Vice President of Clinical Operations", city: "Los Angeles", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oIUvzfwq" },

  // CA - LA Center
  { id: "oiOczfwB", title: "Behavior Technician", city: "Gardena", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oiOczfwB" },

  // CA - Bakersfield
  { id: "oGouzfwR", title: "Behavior Technician", city: "Bakersfield", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oGouzfwR" },
  { id: "oJMvzfwj", title: "Board Certified Behavior Analyst | BCBA", city: "Bakersfield", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oJMvzfwj" },

  // CA - Long Beach
  { id: "o7puzfwj", title: "Behavior Technician", city: "Long Beach", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o7puzfwj" },
  { id: "o9Iezfwo", title: "Board Certified Behavior Analyst | BCBA", city: "Long Beach", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o9Iezfwo" },

  // CA - Los Angeles
  { id: "opWhzfwV", title: "Behavior Technician", city: "Los Angeles", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/opWhzfwV" },

  // CA - Moreno Valley
  { id: "ohquzfwu", title: "Behavior Technician", city: "Beaumont", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/ohquzfwu" },
  { id: "oyMvzfw8", title: "Board Certified Behavior Analyst | BCBA", city: "Moreno Valley", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oyMvzfw8" },

  // CA - OC Central
  { id: "o9puzfwl", title: "Behavior Technician", city: "Santa Ana", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o9puzfwl" },
  { id: "odvbzfwc", title: "Business Development Manager", city: "Anaheim", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/odvbzfwc" },

  // CA - OC East
  { id: "o6sdzfw4", title: "Behavior Technician", city: "Fullerton", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o6sdzfw4" },
  { id: "oDPizfw3", title: "Board Certified Behavior Analyst | BCBA", city: "Fullerton", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oDPizfw3" },

  // CA - OC South
  { id: "obpuzfwn", title: "Behavior Technician", city: "Irvine", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/obpuzfwn" },
  { id: "oV2dzfwt", title: "Behavior Technician", city: "Irvine", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oV2dzfwt" },
  { id: "oqvQufwZ", title: "Occupational Therapist | Consultant", city: "Irvine", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oqvQufwZ" },
  { id: "oZXpnfws", title: "Speech Language Pathologist", city: "Mission Viejo", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oZXpnfws" },

  // CA - OC West
  { id: "ohpuzfwt", title: "Behavior Technician", city: "Anaheim", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/ohpuzfwt" },
  { id: "oBr5yfwp", title: "Behavior Technician | Part-Time", city: "Buena Park", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oBr5yfwp" },

  // CA - Palmdale
  { id: "oVOczfwe", title: "Behavior Technician", city: "Lancaster", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oVOczfwe" },
  { id: "oGMvzfwg", title: "Board Certified Behavior Analyst | BCBA", city: "Palmdale", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oGMvzfwg" },

  // CA - Pasadena
  { id: "ouCuzfwT", title: "Behavior Technician", city: "Glendale", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/ouCuzfwT" },
  { id: "o0Lvzfwz", title: "Board Certified Behavior Analyst | BCBA", city: "Glendale", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o0Lvzfwz" },

  // CA - Riverside
  { id: "o9oxzfwn", title: "Administrative Assistant", city: "Corona", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o9oxzfwn" },
  { id: "oiquzfwv", title: "Behavior Technician", city: "Riverside", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oiquzfwv" },
  { id: "oeLvzfwN", title: "Board Certified Behavior Analyst | BCBA", city: "Riverside", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oeLvzfwN" },

  // CA - Sacramento
  { id: "okouzfwv", title: "Behavior Technician", city: "Roseville", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/okouzfwv" },
  { id: "omouzfwx", title: "Behavior Technician | Part-Time", city: "Sacramento", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/omouzfwx" },
  { id: "oSQizfwj", title: "Board Certified Behavior Analyst | BCBA", city: "Roseville", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oSQizfwj" },
  { id: "osMvzfw2", title: "Board Certified Behavior Analyst | BCBA", city: "Citrus Heights", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/osMvzfw2" },
  { id: "olHezfwz", title: "Clinical Director | Board Certified Behavior Analyst | BCBA", city: "Citrus Heights", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/olHezfwz" },
  { id: "o7xbzfw8", title: "Territory Sales Manager", city: "Sacramento", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o7xbzfw8" },

  // CA - San Bernardino
  { id: "oyruzfwM", title: "Behavior Technician", city: "San Bernardino", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oyruzfwM" },
  { id: "oxruzfwL", title: "Behavior Technician", city: "Rancho Cucamonga", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oxruzfwL" },
  { id: "oBMvzfwb", title: "Board Certified Behavior Analyst | BCBA", city: "Upland", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oBMvzfwb" },
  { id: "oGGizfwX", title: "Board Certified Behavior Analyst | BCBA", city: "Fontana", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oGGizfwX" },

  // CA - San Diego
  { id: "olquzfwy", title: "Behavior Technician", city: "San Diego", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/olquzfwy" },
  { id: "o9vbzfw8", title: "Territory Sales Manager", city: "San Diego", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o9vbzfw8" },
  { id: "ofWAzfw4", title: "Administrative Assistant", city: "San Diego", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/ofWAzfw4" },
  { id: "ocOczfwv", title: "Behavior Technician", city: "Oceanside", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/ocOczfwv" },
  { id: "ooruzfwC", title: "Behavior Technician", city: "Oceanside", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/ooruzfwC" },
  { id: "orruzfwF", title: "Behavior Technician", city: "Chula Vista", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/orruzfwF" },

  // CA - San Fernando Valley
  { id: "osGXyfwn", title: "Behavior Technician", city: "North Hollywood", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/osGXyfwn" },

  // CA - San Gabriel Valley
  { id: "oqquzfwD", title: "Behavior Technician", city: "Arcadia", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oqquzfwD" },
  { id: "orquzfwE", title: "Behavior Technician", city: "Pomona", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/orquzfwE" },

  // CA - San Jose
  { id: "otruzfwH", title: "Behavior Technician", city: "San Jose", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/otruzfwH" },
  { id: "o6Iezfwl", title: "Board Certified Behavior Analyst | BCBA", city: "San Jose", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o6Iezfwl" },
  { id: "oWvOyfwx", title: "Case Manager | ABA", city: "San Jose", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oWvOyfwx" },

  // CA - South Bay
  { id: "okpuzfww", title: "Behavior Technician", city: "Torrance", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/okpuzfww" },
  { id: "osLvzfw1", title: "Board Certified Behavior Analyst | BCBA", city: "Torrance", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/osLvzfw1" },

  // CA - South East LA
  { id: "onquzfwA", title: "Behavior Technician", city: "Downey", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/onquzfwA" },
  { id: "ompuzfwy", title: "Behavior Technician", city: "Huntington Park", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/ompuzfwy" },
  { id: "oZkzzfwb", title: "Board Certified Behavior Analyst | BCBA", city: "Koreatown", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oZkzzfwb" },

  // CA - Temecula
  { id: "oDruzfwR", title: "Behavior Technician", city: "Temecula", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oDruzfwR" },
  { id: "o6dmzfwY", title: "Board Certified Behavior Analyst | BCBA", city: "Temecula", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o6dmzfwY" },

  // CA - Ventura
  { id: "oopuzfwA", title: "Behavior Technician", city: "Ventura", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oopuzfwA" },
  { id: "obLvzfwK", title: "Board Certified Behavior Analyst | BCBA", city: "Ventura", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/obLvzfwK" },
  { id: "otwAzfwS", title: "Case Manager | ABA", city: "Ventura", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/otwAzfwS" },

  // CA - West LA
  { id: "osquzfwF", title: "Behavior Technician", city: "Inglewood", state: "California", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/osquzfwF" },

  // CO - Denver
  { id: "oRLvzfwq", title: "Board Certified Behavior Analyst | BCBA", city: "Centennial", state: "Colorado", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oRLvzfwq" },
  { id: "oDLvzfwc", title: "Board Certified Behavior Analyst | BCBA", city: "Denver", state: "Colorado", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oDLvzfwc" },
  { id: "o5cdzfwN", title: "Board Certified Behavior Analyst | BCBA", city: "Boulder", state: "Colorado", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o5cdzfwN" },
  { id: "oAUvzfwi", title: "Regional Clinical Director | BCBA | Board Certified Behavior Analyst", city: "Denver", state: "Colorado", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oAUvzfwi" },
  { id: "o2puzfwe", title: "Registered Behavior Technician | RBT", city: "Centennial", state: "Colorado", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o2puzfwe" },
  { id: "o6puzfwi", title: "Registered Behavior Technician | RBT", city: "Denver", state: "Colorado", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o6puzfwi" },

  // GA - Atlanta
  { id: "oLMvzfwl", title: "Board Certified Behavior Analyst | BCBA", city: "Smyrna", state: "Georgia", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oLMvzfwl" },
  { id: "ogTvzfwX", title: "Regional Clinical Director | BCBA | Board Certified Behavior Analyst", city: "Atlanta", state: "Georgia", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/ogTvzfwX" },
  { id: "oDouzfwO", title: "Registered Behavior Technician (RBT)", city: "Smyrna", state: "Georgia", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oDouzfwO" },

  // MA - Boston
  { id: "oQouzfw1", title: "Behavior Technician", city: "Chelmsford", state: "Massachusetts", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oQouzfw1" },
  { id: "oVouzfw6", title: "Behavior Technician", city: "Boston", state: "Massachusetts", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oVouzfw6" },
  { id: "omNXyfwo", title: "Board Certified Behavior Analyst | BCBA", city: "Boston", state: "Massachusetts", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/omNXyfwo" },
  { id: "owMvzfw6", title: "Board Certified Behavior Analyst | BCBA", city: "Malden", state: "Massachusetts", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/owMvzfw6" },
  { id: "oqUvzfw8", title: "Regional Clinical Director | BCBA | Board Certified Behavior Analyst", city: "Boston", state: "Massachusetts", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oqUvzfw8" },

  // MD - Bethesda
  { id: "ocJcofwf", title: "Autism Psychologist || Clinical Diagnostician", city: "Bethesda", state: "Maryland", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/ocJcofwf" },
  { id: "oxUvzfwf", title: "Regional Clinical Director | BCBA | Board Certified Behavior Analyst", city: "Bethesda", state: "Maryland", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oxUvzfwf" },
  { id: "oPouzfw0", title: "Registered Behavior Technician (RBT- Spanish Speaking)", city: "Bethesda", state: "Maryland", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oPouzfw0" },

  // MI - Detroit
  { id: "oKkzzfwW", title: "Administrative Assistant", city: "Dearborn", state: "Michigan", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oKkzzfwW" },
  { id: "o1ouzfwc", title: "Behavior Technician", city: "Grosse Pointe", state: "Michigan", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o1ouzfwc" },
  { id: "o5ouzfwg", title: "Behavior Technician", city: "Canton", state: "Michigan", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o5ouzfwg" },
  { id: "oKLvzfwj", title: "Board Certified Behavior Analyst | BCBA", city: "Detroit", state: "Michigan", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oKLvzfwj" },
  { id: "ogcdzfwY", title: "Board Certified Behavior Analyst | BCBA", city: "Livonia", state: "Michigan", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/ogcdzfwY" },
  { id: "oWabzfwA", title: "Board Certified Behavior Analyst | BCBA", city: "Dearborn", state: "Michigan", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oWabzfwA" },

  // MN - Minneapolis
  { id: "oEkzzfwQ", title: "Administrative Assistant", city: "Maple Grove", state: "Minnesota", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oEkzzfwQ" },
  { id: "o8ouzfwj", title: "Behavior Technician", city: "Maple Grove", state: "Minnesota", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o8ouzfwj" },
  { id: "ofouzfwq", title: "Behavior Technician", city: "Minneapolis", state: "Minnesota", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/ofouzfwq" },
  { id: "o5LvzfwE", title: "Board Certified Behavior Analyst | BCBA", city: "Minneapolis", state: "Minnesota", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o5LvzfwE" },
  { id: "oyddzfwh", title: "Board Certified Behavior Analyst | BCBA", city: "Eagan", state: "Minnesota", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oyddzfwh" },
  { id: "owddzfwf", title: "Board Certified Behavior Analyst | BCBA", city: "Maple Grove", state: "Minnesota", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/owddzfwf" },
  { id: "oBddzfwk", title: "Level 1 Provider | ABA Case Manager", city: "Minneapolis", state: "Minnesota", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oBddzfwk" },

  // MO - St. Louis
  { id: "oEUvzfwm", title: "Regional Clinical Director | BCBA | Board Certified Behavior Analyst", city: "St. Louis", state: "Missouri", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oEUvzfwm" },

  // PA - Philadelphia
  { id: "o3LvzfwC", title: "Board Certified Behavior Analyst | BCBA", city: "Philadelphia", state: "Pennsylvania", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o3LvzfwC" },
  { id: "oyUvzfwg", title: "Regional Clinical Director | BCBA | Board Certified Behavior Analyst", city: "Philadelphia", state: "Pennsylvania", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oyUvzfwg" },

  // TX - Dallas
  { id: "o8quzfwl", title: "Behavior Technician", city: "Plano", state: "Texas", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o8quzfwl" },
  { id: "orddzfwa", title: "Board Certified Behavior Analyst | BCBA", city: "Plano", state: "Texas", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/orddzfwa" },
  { id: "oNLvzfwm", title: "Board Certified Behavior Analyst | BCBA", city: "Dallas", state: "Texas", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oNLvzfwm" },

  // TX - San Antonio
  { id: "ovruzfwJ", title: "Behavior Technician", city: "San Antonio", state: "Texas", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/ovruzfwJ" },
  { id: "oOMvzfwo", title: "Board Certified Behavior Analyst | BCBA", city: "San Antonio", state: "Texas", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oOMvzfwo" },
  { id: "oYhfzfwN", title: "Psychologist", city: "San Antonio", state: "Texas", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oYhfzfwN" },

  // VA - Chesapeake
  { id: "oZouzfwa", title: "Behavior Technician", city: "Chesapeake", state: "Virginia", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/oZouzfwa" },
  { id: "o8Hezfwm", title: "Clinical Director | Board Certified Behavior Analyst | BCBA", city: "Chesapeake", state: "Virginia", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/o8Hezfwm" },
  { id: "ouUvzfwc", title: "Regional Clinical Director | BCBA | Board Certified Behavior Analyst", city: "Chesapeake", state: "Virginia", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/ouUvzfwc" },

  // VA - Fairfax
  { id: "owUvzfwe", title: "Regional Clinical Director | BCBA | Board Certified Behavior Analyst", city: "Fairfax", state: "Virginia", applyUrl: "https://jobs.jobvite.com/behaviorfrontiers/job/owUvzfwe" },
].map((job) => ({
  ...job,
  department: getDepartment(job.title),
  region: getRegion(job.state),
}));

// Helper to get unique values for filters
export function getUniqueStates(): string[] {
  return [...new Set(jobListings.map((j) => j.state))].sort();
}

export function getUniqueDepartments(): string[] {
  return [...new Set(jobListings.map((j) => j.department))].sort();
}

export function getUniqueRegions(): string[] {
  return [...new Set(jobListings.map((j) => j.region))].sort();
}
