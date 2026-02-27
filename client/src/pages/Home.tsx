import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Truck,
  GraduationCap,
  ShieldCheck,
  Building2,
  Bus,
} from "lucide-react";
import truckGreen from "@assets/WhatsApp_Image_2026-02-25_at_22.18.50_1772116991049.jpeg";
import truckRed from "@assets/WhatsApp_Image_2026-02-25_at_22.18.50_(1)_1772116991047.jpeg";
import galleryGrid from "@assets/WhatsApp_Image_2026-02-25_at_22.18.50_(2)_1772116991049.jpeg";
import specializedTransport from "@assets/638514756_1565114221380567_6426059065932073854_n_1772122266025.jpg";
import buildingMaterials from "@assets/WhatsApp_Image_2026-02-25_at_22.27.22_(12)_1772122364431.jpeg";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden light-sweep">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C8A43]/10 via-[#FFD700]/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Pej4more Global Venture Ltd.
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-balance mb-6 leading-tight text-slate-900 tracking-tight">
                Empowering Africa's{" "}
                <span className="text-accent italic">Logistics</span>, Learning
                & Investment
              </h1>
              <p className="text-xl text-primary font-medium mb-8 leading-relaxed text-balance italic">
                “We Work for You — Namenayou™”
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed text-balance">
                Namenayou™ is an Africa-born, globally focused innovation
                platform dedicated to transforming how people learn, work, and
                invest in logistics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
                >
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-bold text-lg hover:border-primary hover:text-primary transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              {/* official logo truck image */}
              <img
                src={truckGreen}
                alt="Namenayou Logistics Operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

              {/* Floating Stats Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-primary/20 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-primary/60 text-xs font-bold uppercase tracking-wider mb-1">
                      Target Network
                    </p>
                    <p className="text-3xl font-bold text-primary">100k+</p>
                    <p className="text-[10px] text-muted-foreground uppercase">
                      Active Vehicles
                    </p>
                  </div>
                  <div>
                    <p className="text-primary/60 text-xs font-bold uppercase tracking-wider mb-1">
                      Global Users
                    </p>
                    <p className="text-3xl font-bold text-accent">1M+</p>
                    <p className="text-[10px] text-muted-foreground uppercase">
                      Investors & Pros
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">
                Join Us in Building Africa’s Connected Future.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Namenayou™, we’re creating a collaborative ecosystem where
                logistics, learning, and investment intersect to drive inclusive
                economic growth.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Investors",
                    desc: "Seeking ethical, high-return opportunities in logistics.",
                  },
                  {
                    title: "Corporate Organizations",
                    desc: "Exploring regional transport or workforce collaborations.",
                  },
                  {
                    title: "Development Agencies",
                    desc: "Empowering skills and sustainability through smart logistics.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-5 p-5 rounded-2xl border border-slate-200 bg-white hover:border-primary/30 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 group cursor-default"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://shechampion-bbf.org/wp-content/uploads/2026/02/Gemini_Generated_Image_gsjai7gsjai7gsja.png"
                  alt="Partnership"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-8 rounded-3xl shadow-xl">
                <p className="text-sm font-bold uppercase tracking-widest mb-1">
                  Headquarters
                </p>
                <p className="text-xl font-bold">Abuja, Nigeria</p>
                <p className="text-white/80 text-sm mt-2">
                  Central Business District
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-50/50 relative overflow-hidden">
        {/* Decorative gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">Our Operations & Assets</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">A glimpse into our premier trucking fleet and high-quality imported building materials.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Logistics Fleet",
                category: "Trucks & Trailers",
                img: truckRed,
                desc: "Heavy-duty Sinotruk and Mercedes-Benz Actros units."
              },
              {
                title: "Specialized Transport",
                category: "School & Corporate",
                img: specializedTransport,
                desc: "Safe and reliable transport solutions for schools and organizations."
              },
              {
                title: "Building Materials",
                category: "Import & Supply",
                img: buildingMaterials,
                desc: "High-quality construction materials imported for Abuja projects."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-[2rem] bg-white border border-slate-200 shadow-xl shadow-black/5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent z-10 transition-colors duration-500" />
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-[1px] bg-accent" />
                    <p className="text-accent text-xs font-bold uppercase tracking-widest">{item.category}</p>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-slate-900 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 px-4 sm:px-12 lg:px-24 text-white my-12 relative overflow-hidden shadow-2xl shadow-slate-900/50">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />

        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            One Platform. Three Pillars.
          </h2>
          <p className="text-lg text-slate-300">
            Namenayou™ transforms the logistics landscape through technology,
            transparency, and opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              icon: Truck,
              title: "Logistics Excellence",
              desc: "Sustainable fleet transition and transparent supply chain management across Sub-Saharan routes.",
              color: "text-primary",
              bgPattern: "from-primary/10 to-transparent"
            },
            {
              icon: GraduationCap,
              title: "Learning & Growth",
              desc: "Empowering youth and women through targeted education and direct pathways to employment.",
              color: "text-secondary",
              bgPattern: "from-secondary/10 to-transparent"
            },
            {
              icon: TrendingUp,
              title: "Smart Investment",
              desc: "Secure funding channels delivering 15-25% annual ROI backed by tangible logistics assets.",
              color: "text-accent",
              bgPattern: "from-accent/10 to-transparent"
            },
          ].map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.bgPattern} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div
                className={`relative z-10 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 ${pillar.color} shadow-inner shadow-white/5 transition-transform group-hover:scale-110 duration-300`}
              >
                <pillar.icon className="w-8 h-8" />
              </div>
              <h3 className="relative z-10 text-2xl font-extrabold mb-4 text-white tracking-tight">
                {pillar.title}
              </h3>
              <p className="relative z-10 text-slate-300 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 shadow-inner shadow-primary/5">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
              Backed by Reputable Institutions
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We operate with full transparency and security. Our financial
              infrastructure is supported by strategic partnerships with major
              reputable local banks in Nigeria, ensuring your operations and
              payments are always protected.
            </p>
            <Link
              href="/investors"
              className="group inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              View Investor Opportunities
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6 w-full">
            <div className="aspect-[4/3] glass rounded-[2rem] flex flex-col items-center justify-center p-8 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-slate-400">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-xl text-slate-900">
                Local Bank Partner
              </span>
              <span className="text-sm text-slate-500 mt-2 font-medium">
                Strategic Banking
              </span>
            </div>
            <div className="aspect-[4/3] glass rounded-[2rem] flex flex-col items-center justify-center p-8 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 mt-12">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-slate-400">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-xl text-slate-900">
                Reputable Bank
              </span>
              <span className="text-sm text-slate-500 mt-2 font-medium">
                Payroll & Operations
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
