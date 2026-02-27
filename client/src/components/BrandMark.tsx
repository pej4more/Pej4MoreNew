import * as React from "react";
import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dims = size === "sm" ? "h-9 w-9" : size === "lg" ? "h-12 w-12" : "h-10 w-10";

  return (
    <div
      className={cn(
        "noise-overlay relative grid place-items-center rounded-md border bg-card shadow-premium",
        dims,
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-md bg-gradient-to-br from-primary/18 via-transparent to-accent/18" />
      <svg viewBox="0 0 48 48" className="relative h-6 w-6 text-foreground">
        <path
          d="M12 32c6-14 18-14 24 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M10 18c4 3 9 4 14 2 5-2 10-2 14 1"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.9"
        />
        <circle cx="14" cy="14" r="2.2" fill="currentColor" opacity="0.95" />
        <circle cx="34" cy="14" r="2.2" fill="currentColor" opacity="0.95" />
      </svg>
    </div>
  );
}
