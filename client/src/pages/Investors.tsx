import { motion } from "framer-motion";
import { PieChart, TrendingUp, Map, ArrowRight, DollarSign, Truck, Heart, LayoutDashboard, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function Investors() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50/50">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6 uppercase tracking-widest border border-secondary/20">
              <DollarSign className="w-4 h-4" />
              INVESTMENT OPPORTUNITY
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-900 tracking-tight leading-tight">
              Invest in the Engine of Africa's Economy.
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Sub-Saharan Africa’s logistics market is valued at <strong className="text-slate-900 font-extrabold">$344 Billion</strong> and growing at 7.5% annually. Join us in capturing this massive value while driving real social impact.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Request Investor Deck
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] flex flex-col justify-end min-h-[200px] shadow-2xl shadow-slate-900/40 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-sm text-slate-400 mb-2 font-medium uppercase tracking-widest">Phase I Funding Goal</p>
              <p className="text-5xl font-extrabold tracking-tight">$5M Seed</p>
            </div>
            <div className="bg-primary text-primary-foreground p-8 rounded-[2rem] flex flex-col justify-end min-h-[200px] translate-y-8 shadow-2xl shadow-primary/40 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-sm text-primary-foreground/80 mb-2 font-medium uppercase tracking-widest">Target Annual ROI</p>
              <p className="text-5xl font-extrabold tracking-tight">15-25%</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Participation Models */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">Investor Participation Models</h2>
            <p className="text-lg text-slate-600">Flexible ways to partner with Namenayou™.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Truck Purchase & Lease",
                desc: "Purchase a verified truck and lease it to our managed fleet. Asset ownership remains with you while we manage everything.",
                benefit: "8–12% monthly ROI depending on utilization",
                icon: Truck
              },
              {
                title: "Loan & Profit-Sharing",
                desc: "Provide capital to fund operational fleets. We deploy funds to vetted operators using smart contracts for transparency.",
                benefit: "Shared monthly profits (70% Operator / 30% Investor)",
                icon: TrendingUp
              },
              {
                title: "Truck Donation (CSR)",
                desc: "Philanthropic donation of trucks to be leased to SMEs or youth operators under low-interest terms.",
                benefit: "Impact recognition & CSR naming rights",
                icon: Heart
              }
            ].map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-black/5 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30 hover:shadow-primary/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <model.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold mb-4 text-slate-900 group-hover:text-primary transition-colors tracking-tight">{model.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{model.desc}</p>
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Key Benefit</p>
                  <p className="font-extrabold text-primary text-lg">{model.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Truck Categories */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Durable Fleet Categories</h2>
          <div className="overflow-x-auto rounded-[2rem] border border-border bg-white shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-6 font-bold">Brand</th>
                  <th className="p-6 font-bold">Model Focus</th>
                  <th className="p-6 font-bold">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { brand: "SINOTRUK (Howo)", model: "Tipper, Cargo, Tanker", features: "Heavy-duty, Nigeria-tested" },
                  { brand: "FAW / Dongfeng", model: "Haulage, Container", features: "High fuel efficiency" },
                  { brand: "Mercedes-Benz Actros", model: "Long-haul Logistics", features: "Reliable, Advanced telematics" },
                  { brand: "JAC Motors", model: "Mid-size Logistics", features: "Affordable, easy maintenance" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-primary/5 transition-colors">
                    <td className="p-6 font-bold text-primary">{row.brand}</td>
                    <td className="p-6">{row.model}</td>
                    <td className="p-6 text-muted-foreground">{row.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Funds Utilization */}
      <section className="bg-muted/30 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Funds Utilization</h2>
            <p className="text-lg text-muted-foreground">Transparent allocation of Phase I capital.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Fleet Acquisition & Upgrades", value: "40%", color: "bg-primary text-white" },
              { label: "Technology & Platform Dev", value: "25%", color: "bg-foreground text-white" },
              { label: "Workforce Training", value: "20%", color: "bg-secondary text-secondary-foreground" },
              { label: "Operations & Admin", value: "15%", color: "bg-white text-foreground border border-border" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${item.color} p-8 rounded-3xl flex flex-col items-center justify-center text-center aspect-square shadow-lg`}
              >
                <span className="text-5xl font-display font-bold mb-4">{item.value}</span>
                <span className="font-medium text-balance">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Plan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
          <Map className="w-8 h-8" />
        </div>
        <h2 className="text-4xl font-bold mb-12">National Operational Routes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { route: "Lagos → Kano", desc: "Consumer goods & industrial freight" },
            { route: "Port Harcourt → Kano", desc: "Oil, gas, and heavy cargo" },
            { route: "Calabar → Abuja", desc: "Food & agriculture logistics" },
            { route: "Warri → Abuja → Kano", desc: "Bulk and petrochemical logistics" },
            { route: "Lagos → Onitsha → Aba", desc: "FMCG, textiles, and fast-moving goods" }
          ].map((item, i) => (
            <div key={i} className="glass p-6 rounded-2xl text-left border border-primary/10">
              <p className="font-bold text-lg text-primary mb-2">{item.route}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investor Dashboard */}
      <section className="py-24 bg-slate-900 text-white rounded-[3.5rem] mx-4 sm:mx-6 lg:mx-8 mb-12 relative overflow-hidden shadow-2xl shadow-slate-900/50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 font-bold text-sm mb-6 uppercase tracking-widest border border-white/20 text-white shadow-inner">
                <LayoutDashboard className="w-4 h-4" />
                Platform Sneak Peek
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-white">Namenayou™ Investor Dashboard</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Full transparency at your fingertips. Track your fleet's health, ROI projections, and maintenance schedules in real-time.
              </p>
              <div className="space-y-6">
                {[
                  "Fleet health tracking (GPS, mileage, fuel)",
                  "Monthly ROI performance & projections",
                  "Blockchain-verified ownership ledger",
                  "Real-time route analytics"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-semibold text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-md shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
              <div className="aspect-[4/3] bg-slate-800/80 rounded-2xl flex items-center justify-center border border-dashed border-white/20 relative z-10 shadow-inner overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="text-center z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 blur-[2px] animate-pulse">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-white font-extrabold tracking-widest uppercase text-xl animate-pulse">Dashboard Preview Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
