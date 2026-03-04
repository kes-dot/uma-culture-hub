import { useMemo, useState } from "react";
import { ExternalLink, MapPin, Briefcase, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandConfig } from "@/config/brandConfig";
import { jobListings } from "@/data/jobListings";

const Careers = () => {
  const [search, setSearch] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const departments = useMemo(
    () => Array.from(new Set(jobListings.map((job) => job.department))).sort(),
    [],
  );

  const filtered = useMemo(() => {
    return jobListings.filter((job) => {
      const term = search.trim().toLowerCase();
      const matchesSearch =
        term === "" ||
        job.title.toLowerCase().includes(term) ||
        job.department.toLowerCase().includes(term) ||
        job.location.toLowerCase().includes(term);
      const matchesDepartment = selectedDepartment === "" || job.department === selectedDepartment;
      return matchesSearch && matchesDepartment;
    });
  }, [search, selectedDepartment]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative min-h-[420px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={brandConfig.images.careersImage}
              alt={`${brandConfig.company.name} careers`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
          </div>
          <div className="relative container mx-auto px-6 py-24">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground leading-tight mb-4 animate-fade-in">
                Join UMA and Build Meaningful Impact
              </h1>
              <p
                className="text-lg text-primary-foreground/85 max-w-xl animate-fade-in"
                style={{ animationDelay: "0.15s" }}
              >
                Explore open opportunities and help transform lives through healthcare education.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[280px_1fr] gap-8">
              <aside className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Search Roles</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Title, department, or location"
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-border bg-card text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Department</label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-card text-sm"
                  >
                    <option value="">All Departments</option>
                    {departments.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </div>
              </aside>

              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
                  {filtered.length === 1 ? "position" : "positions"} found
                </p>

                <div className="space-y-3">
                  {filtered.map((job) => (
                    <article
                      key={job.id}
                      className="bg-card rounded-xl border border-border/50 p-5 flex items-start justify-between gap-4"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{job.title}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Briefcase className="h-3.5 w-3.5" />
                            {job.department}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {job.location}
                          </span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="shrink-0">
                        <Button size="sm" className="bg-primary text-primary-foreground hover:opacity-90">
                          Apply
                          <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                        </Button>
                      </a>
                    </article>
                  ))}
                </div>

                {filtered.length === 0 && (
                  <div className="text-center py-16 text-muted-foreground">
                    <p className="text-lg font-medium">No positions match your criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
