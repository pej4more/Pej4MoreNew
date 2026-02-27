import * as React from "react";
import { Link } from "wouter";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Phone, Mail, Globe } from "lucide-react";

export function SiteHeader({ onJoinClick }: { onJoinClick: () => void }) {
  const [open, setOpen] = React.useState(false);

  const handleNav = (hash: string) => {
    setOpen(false);
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-[999] border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-3">
            <BrandMark size="sm" />
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight">NAMENAYOU™</div>
              <div className="text-[11px] font-semibold text-muted-foreground">× PEJ4MORE GLOBAL VENTURE LTD</div>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" onClick={() => handleNav("#vision")}>
              Vision
            </Button>
            <Button variant="ghost" onClick={() => handleNav("#opportunity")}>
              Opportunity
            </Button>
            <Button variant="ghost" onClick={() => handleNav("#solution")}>
              Platform
            </Button>
            <Button variant="ghost" onClick={() => handleNav("#investment")}>
              Investment
            </Button>
            <Button variant="ghost" onClick={() => handleNav("#impact")}>
              Impact
            </Button>
            <Separator orientation="vertical" className="mx-1 h-7" />
            <Button onClick={onJoinClick}>
              Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button variant="outline" size="icon" onClick={() => setOpen((v) => !v)} aria-label="Open menu">
              <span className="sr-only">Open menu</span>
              <div className="grid gap-1">
                <div className="h-0.5 w-4 rounded-full bg-foreground" />
                <div className="h-0.5 w-4 rounded-full bg-foreground" />
                <div className="h-0.5 w-4 rounded-full bg-foreground" />
              </div>
            </Button>
            <Button onClick={onJoinClick} size="sm">
              Join
            </Button>
          </div>
        </div>

        {open ? (
          <div className="pb-3 md:hidden">
            <div className="grid gap-2 rounded-md border bg-card p-3 shadow-premium">
              <Button variant="ghost" className="justify-start" onClick={() => handleNav("#vision")}>
                Vision
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => handleNav("#opportunity")}>
                Opportunity
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => handleNav("#solution")}>
                Platform
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => handleNav("#investment")}>
                Investment
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => handleNav("#impact")}>
                Impact
              </Button>
              <Separator />
              <div className="grid gap-2">
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Globe className="h-3.5 w-3.5" /> www.namenayou.com
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Mail className="h-3.5 w-3.5" /> pej4more@outlook.com
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Phone className="h-3.5 w-3.5" /> +44 7538 24326
                  </span>
                </div>
                <Link href="/privacy" className="text-xs font-semibold text-muted-foreground underline-offset-4 hover:underline">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
