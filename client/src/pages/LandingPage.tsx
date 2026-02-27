import * as React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Handshake,
  LineChart,
  MapPinned,
  Rocket,
  Route,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Section } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";
import { StatPill } from "@/components/StatPill";
import { WaitlistDialog } from "@/components/WaitlistDialog";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function scrollToWaitlist() {
  const el = document.querySelector("#waitlist");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function LandingPage() {
  const [joinOpen, setJoinOpen] = React.useState(false);
  const [defaultInterest, setDefaultInterest] = React.useState<
    "Investor" | "Logistics Operator" | "Student" | "Other" | undefined
  >(undefined);

  const openJoin = (interest?: "Investor" | "Logistics Operator" | "Student" | "Other") => {
    setDefaultInterest(interest);
    setJoinOpen(true);
  };

  return (
    <div className="min-h-screen">
      <SiteHeader onJoinClick={() => openJoin()} />
      <WaitlistDialog open={joinOpen} onOpenChange={setJoinOpen} defaultInterest={defaultInterest} />

      {/* HERO */}
      <div className="grid-fade">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="border">
                  NAMENAYOU™
                </Badge>
                <Badge variant="secondary" className="border">
                  PEJ4MORE GLOBAL VENTURE LTD
                </Badge>
                <Badge variant="outline" className="border">
                  Founded 2025 • Abuja, Nigeria
                </Badge>
              </div>

              <h1 className="mt-5 text-balance text-4xl leading-[1.02] sm:text-5xl md:text-6xl">
                Empowering Africa’s{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Logistics, Learning & Investment
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                <span className="font-semibold text-foreground">We Work for You — Namenayou™</span>. Connecting
                education, employment, and logistics financing into one transparent ecosystem—built for growth across
                regions and routes.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  onClick={() => {
                    openJoin();
                    scrollToWaitlist();
                  }}
                >
                  Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => document.querySelector("#investment")?.scrollIntoView({ behavior: "smooth" })}>
                  View Investment Highlights
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <StatPill label="Market size" value="$344B" hint="Sub‑Saharan Africa logistics" tone="primary" />
                <StatPill label="Annual growth" value="7.5%" hint="Projected growth rate" tone="accent" />
                <StatPill label="Phase I goal" value="$5–10M" hint="Capital raise target" tone="sun" />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 rounded-md border bg-card px-2 py-1 shadow-xs">
                  <ShieldCheck className="h-3.5 w-3.5" /> Technology + transparency
                </span>
                <span className="inline-flex items-center gap-1 rounded-md border bg-card px-2 py-1 shadow-xs">
                  <Route className="h-3.5 w-3.5" /> Route expansion roadmap
                </span>
                <span className="inline-flex items-center gap-1 rounded-md border bg-card px-2 py-1 shadow-xs">
                  <Users className="h-3.5 w-3.5" /> Jobs + workforce empowerment
                </span>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Card className="noise-overlay shadow-premium-lg">
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-md border bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground">
                      <Sparkles className="h-4 w-4 text-foreground/80" />
                      Platform components
                    </div>
                    <Button size="sm" variant="ghost" onClick={() => document.querySelector("#solution")?.scrollIntoView({ behavior: "smooth" })}>
                      Explore
                    </Button>
                  </div>

                  <div className="mt-5 grid gap-3">
                    <div className="rounded-md border bg-card p-4 shadow-xs">
                      <div className="flex items-start gap-3">
                        <div className="rounded-md border bg-muted/50 p-2">
                          <BriefcaseBusiness className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">Job Board</div>
                          <div className="mt-1 text-xs text-muted-foreground">
                            Connect operators with verified talent and growth opportunities.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border bg-card p-4 shadow-xs">
                      <div className="flex items-start gap-3">
                        <div className="rounded-md border bg-muted/50 p-2">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">Learning Hub</div>
                          <div className="mt-1 text-xs text-muted-foreground">
                            Practical training for logistics careers and entrepreneurship.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border bg-card p-4 shadow-xs">
                      <div className="flex items-start gap-3">
                        <div className="rounded-md border bg-muted/50 p-2">
                          <LineChart className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">Investor Channel</div>
                          <div className="mt-1 text-xs text-muted-foreground">
                            Transparent capital deployment into fleet + technology.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border bg-card p-4 shadow-xs">
                      <div className="flex items-start gap-3">
                        <div className="rounded-md border bg-muted/50 p-2">
                          <Building2 className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">Bank Partnerships</div>
                          <div className="mt-1 text-xs text-muted-foreground">
                            Partnerships with Zenith Bank and GTBank to power financing rails.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs text-muted-foreground">
                      Ready to partner, invest, or pilot routes?
                      <span className="ml-1 font-semibold text-foreground">Join early.</span>
                    </div>
                    <Button size="sm" onClick={() => openJoin()}>
                      Connect <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* VISION */}
      <Section
        id="vision"
        eyebrow="Vision"
        title="One ecosystem: learning → employment → logistics financing."
        description="Namenayou™ is an Africa-born innovation platform that connects learning, logistics, and investment into one ecosystem. By combining education, employment, and logistics financing, Namenayou™ empowers people and businesses to grow together — transforming Africa’s logistics landscape through technology, transparency, and opportunity."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <FeatureCard
            icon={<GraduationCap className="h-5 w-5" />}
            title="Learning that leads to work"
            description="Skill pathways aligned to real logistics roles—designed to raise quality, safety, and professionalism."
            footer={
              <Button variant="outline" size="sm" onClick={() => openJoin("Student")}>
                Join as Student <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            }
          />
          <FeatureCard
            icon={<Truck className="h-5 w-5" />}
            title="Logistics that scales"
            description="Fleet enablement, route planning, and operator growth—built for regional realities and expansion."
            footer={
              <Button variant="outline" size="sm" onClick={() => openJoin("Logistics Operator")}>
                Join as Operator <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            }
          />
          <FeatureCard
            icon={<LineChart className="h-5 w-5" />}
            title="Investment that’s transparent"
            description="Capital deployed into fleet + technology, with clear utilization and measurable outcomes."
            footer={
              <Button variant="outline" size="sm" onClick={() => openJoin("Investor")}>
                Join as Investor <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            }
          />
        </div>
      </Section>

      {/* OPPORTUNITY */}
      <Section
        id="opportunity"
        eyebrow="The Opportunity"
        title="Africa’s logistics is growing—routes are expanding."
        description="A market defined by real movement: people, goods, and opportunity. We’re building the rails to make it efficient, financeable, and inclusive."
      >
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card className="noise-overlay shadow-premium">
              <CardContent className="p-6 sm:p-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  <StatPill label="Sub‑Saharan logistics market" value="$344 Billion" hint="Scale of opportunity" />
                  <StatPill label="Annual growth rate" value="7.5%" hint="Momentum & demand" tone="accent" />
                </div>
                <Separator className="my-6" />
                <div className="flex items-start gap-3">
                  <div className="rounded-md border bg-muted/50 p-2 shadow-xs">
                    <MapPinned className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Expanding routes</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Lagos – Kano • Calabar – Abuja • Nigeria → Ghana → Côte d’Ivoire → Togo
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-md border bg-card p-4 shadow-xs">
                    <div className="text-xs font-semibold text-muted-foreground">Domestic</div>
                    <div className="mt-1 text-sm font-bold">High-frequency corridors</div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Optimize load matching & turnaround time.
                    </div>
                  </div>
                  <div className="rounded-md border bg-card p-4 shadow-xs">
                    <div className="text-xs font-semibold text-muted-foreground">Cross-border</div>
                    <div className="mt-1 text-sm font-bold">Regional trade growth</div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Improve visibility and trust across borders.
                    </div>
                  </div>
                  <div className="rounded-md border bg-card p-4 shadow-xs">
                    <div className="text-xs font-semibold text-muted-foreground">Financing</div>
                    <div className="mt-1 text-sm font-bold">Fleet expansion</div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Channel investment into productive assets.
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs text-muted-foreground">
                    Looking to pilot routes or explore partnerships?
                  </div>
                  <Button onClick={() => openJoin("Other")} variant="outline" size="sm">
                    Partner with Us <Handshake className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <FeatureCard
                icon={<Route className="h-5 w-5" />}
                title="Route visibility"
                description="Better transparency reduces waste, increases trust, and improves planning across the chain."
              />
              <FeatureCard
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Risk reduction"
                description="Structured processes and partner rails help reduce friction in operations and financing."
              />
            </div>
          </div>
        </div>
      </Section>

      {/* SOLUTION */}
      <Section
        id="solution"
        eyebrow="Our Solution"
        title="Platform components designed to work together."
        description="Namenayou™ aligns talent, operators, and capital—so value compounds across learning, logistics operations, and investment."
        rightSlot={
          <div className="flex flex-wrap gap-2">
            <Button size="sm" onClick={() => openJoin()}>
              Get early access <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" })}>
              Contact
            </Button>
          </div>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<BriefcaseBusiness className="h-5 w-5" />}
            title="Job Board"
            description="Match vetted candidates to operators and logistics employers. Build careers that move the economy."
          />
          <FeatureCard
            icon={<GraduationCap className="h-5 w-5" />}
            title="Learning Hub"
            description="Training programs with real-world relevance—safety, operations, entrepreneurship, and technology."
          />
          <FeatureCard
            icon={<LineChart className="h-5 w-5" />}
            title="Investor Channel"
            description="Clear fundraising goals, utilization plan, and outcome-focused deployment—built for trust."
          />
          <FeatureCard
            icon={<Building2 className="h-5 w-5" />}
            title="Bank Partnerships"
            description="Bank rails and partnerships (Zenith Bank and GTBank) to support lending and capital flow."
          />
        </div>
      </Section>

      {/* INVESTMENT */}
      <Section
        id="investment"
        eyebrow="Investment Highlights"
        title="A disciplined plan: capital → assets + technology → outcomes."
        description="Phase I targets a clear raise with measurable ROI and a transparent utilization strategy—built for scale."
      >
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Card className="noise-overlay shadow-premium">
              <CardContent className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="border bg-primary text-primary-foreground">Phase I</Badge>
                  <Badge variant="secondary" className="border">
                    USD $5–10 Million
                  </Badge>
                  <Badge variant="secondary" className="border">
                    ROI 12–18% annually
                  </Badge>
                </div>

                <h3 className="mt-5 text-2xl">Funds utilization</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Allocation designed to grow capacity responsibly while strengthening the platform foundation.
                </p>

                <div className="mt-5 grid gap-3">
                  {[
                    { label: "Fleet", value: "40%", icon: <Truck className="h-4 w-4" />, tone: "primary" as const },
                    { label: "Technology", value: "25%", icon: <Rocket className="h-4 w-4" />, tone: "accent" as const },
                    { label: "Workforce", value: "20%", icon: <Users className="h-4 w-4" />, tone: "sun" as const },
                    { label: "Admin", value: "15%", icon: <Banknote className="h-4 w-4" />, tone: "primary" as const },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between gap-3 rounded-md border bg-card p-4 shadow-xs">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md border bg-muted/50 p-2">{row.icon}</div>
                        <div className="text-sm font-bold">{row.label}</div>
                      </div>
                      <div className="text-sm font-extrabold">{row.value}</div>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs text-muted-foreground">Interested in Phase I participation?</div>
                  <Button size="sm" onClick={() => openJoin("Investor")}>
                    Connect as Investor <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard
                icon={<Route className="h-5 w-5" />}
                title="Expansion plan"
                description="Scale from Nigeria corridors to regional routes: Nigeria → Ghana → Côte d’Ivoire → Togo, building reliability and volume."
              />
              <FeatureCard
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Governance & transparency"
                description="Clear utilization, operational metrics, and ecosystem accountability—critical for scalable investment outcomes."
              />
              <FeatureCard
                icon={<Handshake className="h-5 w-5" />}
                title="Institutional partnerships"
                description="Bank partnerships (Zenith Bank and GTBank) to support capital flow and financing rails."
              />
              <FeatureCard
                icon={<BriefcaseBusiness className="h-5 w-5" />}
                title="Operator enablement"
                description="Empower regional operators with access to jobs, training, and investment-backed fleet capacity."
              />
            </div>
          </div>
        </div>
      </Section>

      {/* IMPACT */}
      <Section
        id="impact"
        eyebrow="Impact"
        title="Growth that creates real opportunity."
        description="Namenayou™ is designed to deliver measurable outcomes for people, businesses, and regional logistics infrastructure."
      >
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <StatPill
              label="Jobs created by 2027"
              value="10,000+"
              hint="Direct + ecosystem employment"
              tone="accent"
              className="h-full"
            />
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard
                icon={<Truck className="h-5 w-5" />}
                title="Sustainable fleet transition"
                description="Modernize operations with a long-term transition toward more sustainable fleets and practices."
              />
              <FeatureCard
                icon={<Users className="h-5 w-5" />}
                title="Empowering youth & women"
                description="Pathways and access designed to uplift youth, women, and regional operators through skills and opportunity."
              />
              <FeatureCard
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Transparency & trust"
                description="Reduce friction by making processes clearer—improving accountability and investment confidence."
              />
              <FeatureCard
                icon={<MapPinned className="h-5 w-5" />}
                title="Regional operator growth"
                description="Support operators across corridors with training and access to structured demand and financing."
              />
            </div>
          </div>
        </div>
      </Section>

      {/* LEADERSHIP */}
      <Section
        id="leadership"
        eyebrow="Leadership"
        title="Founder-led vision, built for execution."
        description="A platform mission requires both imagination and operational discipline."
      >
        <Card className="noise-overlay shadow-premium">
          <CardContent className="p-6 sm:p-7">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="border bg-accent text-accent-foreground">Founder & CEO</Badge>
                  <Badge variant="secondary" className="border">
                    PEJ4MORE GLOBAL VENTURE LTD
                  </Badge>
                </div>
                <h3 className="mt-4 text-3xl">Pej More</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Visionary entrepreneur driving innovation in logistics, education, and social investment through
                  Pej4more Global Venture Ltd.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button onClick={() => openJoin("Other")}>
                    Partner / Media <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" onClick={() => document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" })}>
                    Contact
                  </Button>
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="rounded-md border bg-gradient-to-br from-primary/18 via-transparent to-accent/18 p-5 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md border bg-card p-2 shadow-xs">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Execution mindset</div>
                      <div className="text-xs text-muted-foreground">Operations + partnerships</div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center gap-3">
                    <div className="rounded-md border bg-card p-2 shadow-xs">
                      <Handshake className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Ecosystem builder</div>
                      <div className="text-xs text-muted-foreground">Talent + capital alignment</div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center gap-3">
                    <div className="rounded-md border bg-card p-2 shadow-xs">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Technology-forward</div>
                      <div className="text-xs text-muted-foreground">Transparency at scale</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* WAITLIST ANCHOR SECTION */}
      <Section
        id="waitlist"
        eyebrow="Waitlist / Contact"
        title="Connect with NAMENAYOU™"
        description="Join the waitlist or send a message. We’ll reach out with updates, partnerships, and next steps."
        rightSlot={
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => openJoin()}>Open Form</Button>
            <Button variant="outline" onClick={() => openJoin("Investor")}>
              I’m an Investor
            </Button>
          </div>
        }
      >
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card className="noise-overlay shadow-premium">
              <CardContent className="p-6 sm:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl">Fast contact</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Prefer quick details? Click below and choose your interest—we’ll follow up.
                    </p>
                  </div>
                  <Button onClick={() => openJoin()} className="sm:mt-1">
                    Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <Separator className="my-6" />

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-md border bg-card p-4 shadow-xs">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      <div className="text-sm font-bold">Partnerships</div>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Operators, banks, training institutions—let’s build the ecosystem.
                    </p>
                    <Button variant="outline" size="sm" className="mt-3" onClick={() => openJoin("Other")}>
                      Partner <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="rounded-md border bg-card p-4 shadow-xs">
                    <div className="flex items-center gap-2">
                      <LineChart className="h-4 w-4" />
                      <div className="text-sm font-bold">Investment</div>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Phase I goal and ROI highlighted—request a brief and next steps.
                    </p>
                    <Button variant="outline" size="sm" className="mt-3" onClick={() => openJoin("Investor")}>
                      Invest <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="rounded-md border bg-card p-4 shadow-xs">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      <div className="text-sm font-bold">Learning</div>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Build skills that translate into logistics careers and operator success.
                    </p>
                    <Button variant="outline" size="sm" className="mt-3" onClick={() => openJoin("Student")}>
                      Learn <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="rounded-md border bg-card p-4 shadow-xs">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      <div className="text-sm font-bold">Logistics operations</div>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Explore route pilots, fleet enablement, and demand growth.
                    </p>
                    <Button variant="outline" size="sm" className="mt-3" onClick={() => openJoin("Logistics Operator")}>
                      Operate <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <p className="mt-5 text-xs text-muted-foreground">
                  Or use the dedicated form modal for full details. For policy pages, see{" "}
                  <Link href="/privacy" className="font-semibold underline-offset-4 hover:underline">
                    Privacy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" className="font-semibold underline-offset-4 hover:underline">
                    Terms
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-4">
              <FeatureCard
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Trust & professionalism"
                description="A clean operating model for logistics, with structured learning and transparent capital rails."
              />
              <FeatureCard
                icon={<Handshake className="h-5 w-5" />}
                title="Partnership-ready"
                description="We collaborate with banks, operators, and institutions to deliver measurable outcomes."
              />
              <FeatureCard
                icon={<Rocket className="h-5 w-5" />}
                title="Built to scale"
                description="Nigeria-first, region-ready—designed for expansion across corridors and borders."
              />
            </div>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}
