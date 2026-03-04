import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { api, type WaitlistInput } from "@shared/routes";
import { useSubmitWaitlist } from "@/hooks/use-waitlist";
import { useToast } from "@/hooks/use-toast";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Loader2, ShieldCheck, Sparkles } from "lucide-react";

const interests = ["Investor", "Logistics Operator", "Student", "Other"] as const;

const formSchema = api.waitlist.create.input.extend({
  email: z.string().email("Please enter a valid email."),
  interest: z.enum(interests, { required_error: "Please select your interest." }),
  message: z.string().max(800, "Message is too long.").optional().or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

export function WaitlistDialog({
  open,
  onOpenChange,
  defaultInterest,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultInterest?: (typeof interests)[number];
}) {
  const { toast } = useToast();
  const submit = useSubmitWaitlist();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: defaultInterest ?? "Investor",
      message: "",
    },
  });

  React.useEffect(() => {
    if (open && defaultInterest) form.setValue("interest", defaultInterest);
  }, [open, defaultInterest, form]);

  const onSubmit = async (values: FormValues) => {
    const payload: WaitlistInput = {
      name: values.name.trim(),
      email: values.email.trim(),
      interest: values.interest,
      message: values.message?.trim() ? values.message.trim() : undefined,
    };

    submit.mutate(payload, {
      onSuccess: () => {
        toast({
          title: "You're on the list.",
          description: "Thanks for connecting. We’ll reach out with updates and next steps.",
        });
        form.reset({
          name: "",
          email: "",
          interest: defaultInterest ?? "Investor",
          message: "",
        });
        onOpenChange(false);
      },
      onError: (err) => {
        toast({
          title: "Couldn’t submit.",
          description: err instanceof Error ? err.message : "Please try again.",
          variant: "destructive",
        });
      },
    });
  };

  const error = (name: keyof FormValues) => form.formState.errors[name]?.message;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 sm:max-w-[780px]">
        <div className="grid gap-0 md:grid-cols-5">
          <div className="noise-overlay relative hidden md:col-span-2 md:block">
            <div className="absolute inset-0 rounded-l-lg bg-gradient-to-br from-primary/22 via-transparent to-accent/22" />
            <div className="relative h-full p-6">
              <div className="inline-flex items-center gap-2 rounded-md border bg-background/60 px-3 py-1 text-xs font-semibold text-muted-foreground">
                <Sparkles className="h-4 w-4 text-foreground/80" />
                Early Access
              </div>
              <h3 className="mt-4 text-2xl leading-tight">
                Join the future of <span className="italic">logistics</span>, <span className="italic">learning</span> &
                <span className="italic"> investment</span>.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Get product updates, partnership opportunities, and early access to the platform.
              </p>

              <Separator className="my-6" />

              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-foreground/75" />
                <div>
                  <div className="font-semibold text-foreground/90">Privacy-first</div>
                  <div className="mt-1">
                    Your details are used only to contact you about NAMENAYOU™ × PEJ4MORE updates.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <DialogHeader className="px-6 pb-2 pt-6">
              <DialogTitle className="text-2xl">Waitlist / Contact</DialogTitle>
              <DialogDescription className="text-sm">
                Tell us who you are and what you’re looking for—we’ll respond.
              </DialogDescription>
            </DialogHeader>

            <div className="px-6 pb-6">
              <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" {...form.register("name")} />
                  {error("name") ? <p className="text-xs text-destructive">{error("name")}</p> : null}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="you@company.com" type="email" {...form.register("email")} />
                  {error("email") ? <p className="text-xs text-destructive">{error("email")}</p> : null}
                </div>

                <div className="grid gap-2">
                  <Label>Interest</Label>
                  <Select value={form.watch("interest")} onValueChange={(v) => form.setValue("interest", v as any)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      {interests.map((i) => (
                        <SelectItem key={i} value={i}>
                          {i}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {error("interest") ? <p className="text-xs text-destructive">{error("interest")}</p> : null}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="What would you like to partner on? What region/routes are you interested in?"
                    rows={5}
                    {...form.register("message")}
                  />
                  {error("message") ? <p className="text-xs text-destructive">{error("message")}</p> : null}
                </div>

                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      form.reset({
                        name: "",
                        email: "",
                        interest: defaultInterest ?? "Investor",
                        message: "",
                      });
                    }}
                  >
                    Reset
                  </Button>

                  <Button type="submit" disabled={submit.isPending}>
                    {submit.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted about the platform. No spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
