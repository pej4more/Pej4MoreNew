import * as React from "react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { Scale } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <div className="border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="border">
              NAMENAYOU™
            </Badge>
            <Badge variant="outline" className="border">
              Terms
            </Badge>
          </div>
          <Link href="/" className="text-sm font-semibold text-muted-foreground underline-offset-4 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>

      <div className="grid-fade">
        <Section
          eyebrow="Terms"
          title="Simple terms for early access."
          description="This is a lightweight terms page for the landing experience. It can be expanded as the platform launches."
        >
          <Card className="noise-overlay shadow-premium">
            <CardContent className="p-6 sm:p-7">
              <div className="flex items-start gap-3">
                <div className="rounded-md border bg-muted/50 p-2 shadow-xs">
                  <Scale className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl">Informational only</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Content on this site is for informational purposes and does not constitute financial, legal, or
                    investment advice.
                  </p>

                  <h3 className="mt-6 text-2xl">Waitlist submissions</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Submitting the waitlist form indicates your interest in receiving updates and being contacted for
                    potential partnerships or participation. It does not create any binding obligation.
                  </p>

                  <h3 className="mt-6 text-2xl">Updates</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    The platform roadmap, metrics, and partnership details may evolve as we validate pilots and expand
                    operations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>
      </div>

      <SiteFooter />
    </div>
  );
}
