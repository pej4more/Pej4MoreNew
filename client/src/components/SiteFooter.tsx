import * as React from "react";
import { Link } from "wouter";
import { BrandMark } from "@/components/BrandMark";
import { Separator } from "@/components/ui/separator";
import { Globe, Mail, Phone, MapPin, Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <BrandMark size="md" />
              <div>
                <div className="text-base font-extrabold tracking-tight">NAMENAYOU™</div>
                <div className="text-xs font-semibold text-muted-foreground">We Work for You — Namenayou™</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              An Africa-born innovation platform connecting learning, logistics, and investment into one ecosystem—built
              for transparency, opportunity, and growth.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-md border bg-card px-3 py-2 text-xs font-semibold text-muted-foreground shadow-xs">
              <Sparkles className="h-4 w-4 text-foreground/80" />
              Founded 2025 • HQ Abuja — Nigeria
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div className="space-y-3">
              <div className="text-sm font-bold">Contact</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Globe className="mt-0.5 h-4 w-4 text-foreground/70" />
                  <span>www.namenayou.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 text-foreground/70" />
                  <span>pej4more@outlook.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-bold">Phone</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 text-foreground/70" />
                  <span>+44 7538 24326</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 text-foreground/70" />
                  <span>+234 903 266 5473</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-bold">Company</div>
              <div className="space-y-2 text-sm">
                <Link href="/about" className="block text-muted-foreground underline-offset-4 hover:underline">
                  About
                </Link>
                <Link href="/privacy" className="block text-muted-foreground underline-offset-4 hover:underline">
                  Privacy
                </Link>
                <Link href="/terms" className="block text-muted-foreground underline-offset-4 hover:underline">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            <span>Abuja, Nigeria</span>
          </div>
          <div>© {new Date().getFullYear()} NAMENAYOU™ × PEJ4MORE GLOBAL VENTURE LTD. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
