import * as React from "react";
import { cn } from "@/lib/utils";

export function StatPill({
  label,
  value,
  hint,
  tone = "primary",
  className,
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "primary" | "accent" | "sun";
  className?: string;
}) {
  const toneClasses =
    tone === "accent"
      ? "bg-gradient-to-br from-accent/18 to-accent/6 border-accent/20"
      : tone === "sun"
        ? "bg-gradient-to-br from-[hsl(26_86%_52%/0.18)] to-[hsl(26_86%_52%/0.06)] border-[hsl(26_86%_52%/0.22)]"
        : "bg-gradient-to-br from-primary/18 to-primary/6 border-primary/20";

  return (
    <div
      className={cn(
        "noise-overlay rounded-md border p-4 shadow-premium transition-transform duration-300 ease-out hover:translate-y-[-1px]",
        toneClasses,
        className,
      )}
    >
      <div className="text-xs font-semibold tracking-wide text-muted-foreground">{label}</div>
      <div className="mt-1 text-2xl font-bold tracking-tight">{value}</div>
      {hint ? <div className="mt-1 text-xs text-muted-foreground">{hint}</div> : null}
    </div>
  );
}
