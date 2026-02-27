import * as React from "react";
import { Link } from "wouter";
import { ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <div className="border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="border">
              NAMENAYOU™
            </Badge>
            <Badge variant="outline" className="border">
              Privacy
            </Badge>
          </div>
          <Link href="/" className="text-sm font-semibold text-muted-foreground underline-offset-4 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>

      <div className="grid-fade">
        <Section
          eyebrow="Privacy"
          title="Respectful, minimal data collection."
          description="This page is a simple, plain-language overview of how we treat contact information submitted via the waitlist form."
        >
          <Card className="noise-overlay shadow-premium">
            <CardContent className="p-6 sm:p-7">
              <div className="flex items-start gap-3">
                <div className="rounded-md border bg-muted/50 p-2 shadow-xs">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl">What we collect</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    When you submit the waitlist/contact form, we collect your name, email, interest category, and any
                    optional message you choose to provide.
                  </p>

                  <h3 className="mt-6 text-2xl">How we use it</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    We use your information only to respond to your inquiry and share updates about NAMENAYOU™ × PEJ4MORE
                    GLOBAL VENTURE LTD, including partnership or investment conversations.
                  </p>

                  <h3 className="mt-6 text-2xl">Retention</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    We retain submissions only as long as necessary for follow-up and relationship management.
                  </p>

                  <h3 className="mt-6 text-2xl">Contact</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    If you’d like your submission removed, email <span className="font-semibold text-foreground">pej4more@outlook.com</span>.
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
