import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  rightSlot,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  rightSlot?: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-12 sm:py-16 md:py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            {eyebrow ? (
              <div className="inline-flex items-center gap-2 rounded-md border bg-card/60 px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{eyebrow}</span>
              </div>
            ) : null}
            <h2 className="mt-4 text-balance text-3xl sm:text-4xl md:text-5xl">{title}</h2>
            {description ? (
              <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
          {rightSlot ? <div className="w-full md:w-auto">{rightSlot}</div> : null}
        </div>

        <div className="mt-8 md:mt-10">{children}</div>
      </div>
    </section>
  );
}
