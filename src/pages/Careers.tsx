import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  ArrowRight,
  Search,
  Building2,
  Users,
  ExternalLink,
  X,
  Award,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team-celebration.jpg";
import {
  jobListings,
  getUniqueStates,
  getUniqueDepartments,
} from "@/data/jobListings";

const Careers = () => {
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  const states = useMemo(() => getUniqueStates(), []);
  const departments = useMemo(() => getUniqueDepartments(), []);

  const filtered = useMemo(() => {
    return jobListings.filter((job) => {
      const matchSearch =
        search === "" ||
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.city.toLowerCase().includes(search.toLowerCase()) ||
        job.state.toLowerCase().includes(search.toLowerCase());
      const matchState = selectedState === "" || job.state === selectedState;
      const matchDept =
        selectedDepartment === "" || job.department === selectedDepartment;
      return matchSearch && matchState && matchDept;
    });
  }, [search, selectedState, selectedDepartment]);

  const activeFilterCount = [selectedState, selectedDepartment].filter(Boolean).length;

  const clearFilters = () => {
    setSearch("");
    setSelectedState("");
    setSelectedDepartment("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[45vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={teamImage}
              alt="Behavior Frontiers team"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
          </div>
          <div className="relative container mx-auto px-6 py-28">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground leading-tight mb-4 animate-fade-in">
                Join Our Team
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-lg animate-fade-in" style={{ animationDelay: "0.15s" }}>
                We're searching for caring and talented individuals seeking to elevate their careers in ABA. With over 60 locations nationwide, find where you belong.
              </p>
            </div>
          </div>
        </section>

        {/* Why BF */}
        <section className="py-12 bg-muted/50 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: GraduationCap, title: "Paid Training", desc: "Nationally ranked RBT training" },
                { icon: Users, title: "Mentorship", desc: "Grow alongside talented clinicians" },
                { icon: Heart, title: "Meaningful Impact", desc: "Help children reach milestones" },
                { icon: Building2, title: "Career Growth", desc: "BT → Supervisor → Director" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4 bg-card rounded-lg p-4 border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters - Desktop */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-20 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-3">Search</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Role, city, or state..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-3">Department</h3>
                    <div className="space-y-1">
                      <button
                        onClick={() => setSelectedDepartment("")}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${
                          selectedDepartment === ""
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        All Departments
                      </button>
                      {departments.map((dept) => {
                        const count = jobListings.filter(
                          (j) => j.department === dept && (selectedState === "" || j.state === selectedState)
                        ).length;
                        return (
                          <button
                            key={dept}
                            onClick={() => setSelectedDepartment(dept)}
                            className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors flex items-center justify-between ${
                              selectedDepartment === dept
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                          >
                            <span>{dept}</span>
                            <span className="text-xs opacity-60">{count}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-3">State</h3>
                    <div className="space-y-1 max-h-64 overflow-y-auto">
                      <button
                        onClick={() => setSelectedState("")}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${
                          selectedState === ""
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        All States
                      </button>
                      {states.map((state) => {
                        const count = jobListings.filter(
                          (j) => j.state === state && (selectedDepartment === "" || j.department === selectedDepartment)
                        ).length;
                        return (
                          <button
                            key={state}
                            onClick={() => setSelectedState(state)}
                            className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors flex items-center justify-between ${
                              selectedState === state
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                          >
                            <span>{state}</span>
                            <span className="text-xs opacity-60">{count}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      <X className="h-3.5 w-3.5" />
                      Clear all filters
                    </button>
                  )}
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1">
                {/* Mobile filter bar */}
                <div className="lg:hidden mb-4 space-y-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search roles, cities, states..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium text-muted-foreground"
                    >
                      <Filter className="h-4 w-4" />
                      Filters
                      {activeFilterCount > 0 && (
                        <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {activeFilterCount}
                        </span>
                      )}
                    </button>
                    {activeFilterCount > 0 && (
                      <button
                        onClick={clearFilters}
                        className="px-3 py-2 rounded-lg text-sm text-primary hover:bg-primary/5"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  {showFilters && (
                    <div className="grid grid-cols-2 gap-3 animate-fade-in">
                      <select
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                        className="px-3 py-2 rounded-lg border border-border bg-card text-foreground text-sm"
                      >
                        <option value="">All Departments</option>
                        {departments.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                      <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="px-3 py-2 rounded-lg border border-border bg-card text-foreground text-sm"
                      >
                        <option value="">All States</option>
                        {states.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                {/* Results header */}
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
                    {filtered.length === 1 ? "position" : "positions"} found
                  </p>
                  {(selectedState || selectedDepartment) && (
                    <div className="hidden lg:flex items-center gap-2">
                      {selectedDepartment && (
                        <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {selectedDepartment}
                          <button onClick={() => setSelectedDepartment("")}>
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      )}
                      {selectedState && (
                        <span className="inline-flex items-center gap-1 text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                          {selectedState}
                          <button onClick={() => setSelectedState("")}>
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Job cards */}
                <div className="space-y-2">
                  {filtered.map((job) => (
                    <div
                      key={job.id}
                      className="group bg-card rounded-lg border border-border/50 px-5 py-4 flex items-center justify-between hover:border-primary/30 hover:shadow-card transition-all"
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base truncate">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.city}, {job.state}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                            {job.department}
                          </span>
                        </div>
                      </div>
                      <a
                        href={job.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 ml-4"
                      >
                        <Button
                          size="sm"
                          className="gradient-hero border-0 text-primary-foreground font-medium text-xs"
                        >
                          Apply
                          <ExternalLink className="ml-1.5 h-3 w-3" />
                        </Button>
                      </a>
                    </div>
                  ))}
                </div>

                {filtered.length === 0 && (
                  <div className="text-center py-16 text-muted-foreground">
                    <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-30" />
                    <p className="text-lg font-medium">No positions match your criteria</p>
                    <p className="text-sm mt-2">Try adjusting your filters or search terms</p>
                    <button
                      onClick={clearFilters}
                      className="text-primary text-sm font-medium mt-4 hover:underline"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Back to Culture CTA */}
        <section className="py-16 gradient-warm border-t border-primary/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Want to learn more about life at BF?
            </h2>
            <p className="text-muted-foreground mb-6">
              Explore our culture, values, and employee stories.
            </p>
            <Button asChild>
              <Link to="/">
                Explore Our Culture
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
