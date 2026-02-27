import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function FeatureCard({
  icon,
  title,
  description,
  className,
  footer,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  footer?: React.ReactNode;
}) {
  return (
    <Card className={cn("noise-overlay shadow-premium transition-transform duration-300 ease-out hover:translate-y-[-1px]", className)}>
      <CardHeader className="flex flex-row items-start justify-between gap-3 space-y-0">
        <div className="rounded-md border bg-muted/50 p-2 shadow-xs">{icon}</div>
      </CardHeader>
      <CardContent className="pt-0">
        <h3 className="text-xl">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        {footer ? <div className="mt-4">{footer}</div> : null}
      </CardContent>
    </Card>
  );
}
