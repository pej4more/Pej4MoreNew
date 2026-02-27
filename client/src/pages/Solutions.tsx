import { motion } from "framer-motion";
import { Truck, HandCoins, Users, Building2, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const solutions = [
  {
    id: "fleet-ops",
    icon: Truck,
    title: "Fleet Operations",
    desc: "Truck leasing & route management across major African corridors. Our digitalization and GPS tracking ensure efficiency and safety.",
    features: ["Lagos → Kano", "Cross-border visibility", "Maintenance management"]
  },
  {
    id: "investor-platform",
    icon: HandCoins,
    title: "Investor Platform",
    desc: "A transparent portal for capital pledge and ROI tracking. Connect with ethical, high-return opportunities in logistics.",
    features: ["15-25% Annual ROI", "Fleet-backed security", "Real-time dashboards"]
  },
  {
    id: "staffing-cv",
    icon: Users,
    title: "Staffing & CV Hub",
    desc: "Verified recruitment and workforce management. We connect logistics professionals, including school fleet operators, with top employers.",
    features: ["Verified operator profiles", "School fleet management", "Talent matching"]
  },
  {
    id: "importation",
    icon: Building2,
    title: "Building Material Import",
    desc: "Direct importation and supply of high-quality building materials. Serving construction projects in Abuja and across Nigeria.",
    features: ["Quality material sourcing", "Abuja-based supply chain", "Bulk delivery logistics"]
  },
  {
    id: "banking-wallet",
    icon: Building2,
    title: "Banking & Wallet",
    desc: "Seamless financial operations via Namenayou Wallet. Integrated with reputable local banks for secure processing.",
    features: ["Multi-currency support", "Instant disbursements", "Secure payment processing"]
  }
];

export default function Solutions() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50/50 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-900 tracking-tight text-balance"
          >
            Our <span className="text-primary">Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            An integrated platform bridging the gap between talent, capital, and operations in the African supply chain.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white p-10 rounded-[2.5rem] shadow-xl shadow-black/5 border border-slate-200 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <solution.icon className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-extrabold mb-4 text-slate-900 tracking-tight group-hover:text-primary transition-colors">{solution.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                {solution.desc}
              </p>
              <ul className="space-y-4">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-semibold text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Learning Hub Section */}
        <div className="bg-slate-900 text-white p-12 lg:p-16 rounded-[3.5rem] mb-20 relative overflow-hidden shadow-2xl shadow-slate-900/40">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6 uppercase tracking-widest border border-secondary/20">
                <BookOpen className="w-4 h-4" />
                EdTech & Staffing
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-white">Learning & Staffing Hub</h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Verified recruitment and upskilling for the logistics workforce. We connect drivers, mechanics, and managers with top employers while providing certification through our integrated learning platform.
              </p>
              <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-bold text-lg hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Enrol Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
                  alt="Education"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-foreground text-background font-bold text-lg hover:bg-primary transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
