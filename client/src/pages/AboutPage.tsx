import * as React from "react";
import { Link } from "wouter";
import { ArrowRight, Building2, GraduationCap, LineChart, Truck } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { Section } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="border">
              NAMENAYOU™
            </Badge>
            <Badge variant="outline" className="border">
              About
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/" className="text-sm font-semibold text-muted-foreground underline-offset-4 hover:underline">
              Back to Home
            </Link>
            <Button onClick={() => (window.location.href = "/#waitlist")}>
              Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid-fade">
        <Section
          eyebrow="Who we are"
          title="Africa-born. Execution-focused. Opportunity-driven."
          description="NAMENAYOU™ × PEJ4MORE GLOBAL VENTURE LTD is building a single ecosystem for learning, jobs, and logistics investment—designed to grow trust and outcomes across routes and regions."
        >
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Card className="noise-overlay shadow-premium">
                <CardContent className="p-6 sm:p-7">
                  <h3 className="text-2xl">Our thesis</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Real growth requires aligned incentives: a trained workforce, capable operators, and transparent
                    capital deployment. We believe logistics can be a powerful lever for jobs and regional commerce when
                    backed by modern technology and financial rails.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-md border bg-card p-4 shadow-xs">
                      <div className="text-xs font-semibold text-muted-foreground">Learning</div>
                      <div className="mt-1 text-sm font-bold">Skill pathways</div>
                    </div>
                    <div className="rounded-md border bg-card p-4 shadow-xs">
                      <div className="text-xs font-semibold text-muted-foreground">Work</div>
                      <div className="mt-1 text-sm font-bold">Job matching</div>
                    </div>
                    <div className="rounded-md border bg-card p-4 shadow-xs">
                      <div className="text-xs font-semibold text-muted-foreground">Capital</div>
                      <div className="mt-1 text-sm font-bold">Fleet + tech</div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Button variant="outline" onClick={() => (window.location.href = "/#investment")}>
                      Investment highlights
                    </Button>
                    <Button variant="outline" onClick={() => (window.location.href = "/#impact")}>
                      Impact goals
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <FeatureCard
                  icon={<Truck className="h-5 w-5" />}
                  title="Logistics-first"
                  description="Route realities, turnaround time, and fleet enablement come first—tech follows operations."
                />
                <FeatureCard
                  icon={<LineChart className="h-5 w-5" />}
                  title="Investor clarity"
                  description="Transparent utilization and outcomes—built to earn trust."
                />
              </div>
            </div>
          </div>
        </Section>

        <Section
          eyebrow="What we’re building"
          title="Four components that compound."
          description="Each component strengthens the others: talent feeds operators, operators generate outcomes, outcomes justify investment, and investment scales the system."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Building2 className="h-5 w-5" />}
              title="Partnership rails"
              description="Bank and institutional partnerships to enable credible financing and growth."
            />
            <FeatureCard
              icon={<GraduationCap className="h-5 w-5" />}
              title="Learning hub"
              description="Training designed for employability and operator excellence."
            />
            <FeatureCard
              icon={<Truck className="h-5 w-5" />}
              title="Logistics enablement"
              description="Operator support and route scalability across corridors."
            />
            <FeatureCard
              icon={<LineChart className="h-5 w-5" />}
              title="Investor channel"
              description="A transparent pathway for capital to fund productive assets."
            />
          </div>
        </Section>
      </div>

      <SiteFooter />
    </div>
  );
}
