import { motion } from "framer-motion";
import { Target, Heart, Users, Map } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50/50">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-900 tracking-tight"
        >
          Our <span className="text-primary">Vision</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 leading-relaxed text-balance mx-auto"
        >
          Namenayou™ is building Africa’s first integrated logistics investment ecosystem — connecting investors, truck operators, and logistics professionals through a smart digital platform. Our goal is to enable anyone, anywhere to invest in or power Africa’s logistics network while creating jobs, transparency, and measurable economic growth.
        </motion.p>
      </section>

      {/* Impact Stats */}
      <section className="bg-slate-900 py-24 mb-24 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                stat: "1M+",
                label: "Verified Users",
                desc: "Local and international investors and professionals.",
              },
              {
                icon: Target,
                stat: "100k+",
                label: "Active Vehicles",
                desc: "Building a smart trucking network across the continent.",
              },
              {
                icon: Map,
                stat: "10",
                label: "African Countries",
                desc: "Targeted scaling within the next 5 years.",
              },
              {
                icon: Heart,
                stat: "Inclusive",
                label: "Economic Growth",
                desc: "Empowering skills, employment, and sustainability.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center group bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6 shadow-inner shadow-white/5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
                  {item.stat}
                </h3>
                <p className="text-lg font-bold text-slate-300 mb-2">
                  {item.label}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-slate-200 shadow-xl shadow-black/5">
          <div className="w-full md:w-1/3 aspect-square rounded-[2rem] overflow-hidden bg-slate-100 relative shadow-inner">
            <img
              src="https://shechampion-bbf.org/wp-content/uploads/2026/02/namenayou-logo.png.jpg"
              alt="Pej4More, Founder & CEO"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex items-center gap-3 mb-6 text-accent">
              <span className="w-8 h-[1px] bg-accent" />
              <span className="font-bold uppercase tracking-widest text-sm">Founder's Message</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">Pej4More</h2>
            <p className="text-xl text-secondary font-bold mb-8 italic">
              Founder & CEO, PEJ4MORE GLOBAL VENTURE LTD
            </p>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8">
              <p>
                “We Work for You — Namenayou™” is more than a slogan; it is a commitment. Every truck on the road, every skill gained, and every investor onboard represents our dedication to efficiency, transparency, and sustainable growth across borders.
              </p>
              <p>
                At Namenayou™, we believe the next decade of progress in Africa will be powered by connectivity — not just of roads and routes, but of people, ideas, and shared prosperity. With our headquarters in Abuja and partnerships reaching across Europe, Asia, and Africa, we invite the world to see Africa as a frontier of opportunity and innovation.
              </p>
            </div>
            <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-2xl text-primary font-bold">
              “We Work for You — Namenayou™”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Global Framework */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-10 rounded-[2.5rem] border-primary/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
            <h3 className="text-2xl font-extrabold mb-6 text-primary tracking-tight">Parent Company</h3>
            <div className="space-y-4 text-slate-600">
              <p className="font-bold text-slate-900 text-lg">Pej4more Global Venture Ltd.</p>
              <p className="flex items-center gap-3"><span className="text-xl">📍</span> Head Office: Central Business District, Abuja, Nigeria</p>
              <p className="flex items-center gap-3"><span className="text-xl">💼</span> Registered with CAC, Nigeria</p>
              <p className="flex items-center gap-3"><span className="text-xl">🌐</span> Corporate Website: <a href="https://www.pej4more.com" className="text-primary font-bold hover:underline" target="_blank" rel="noopener noreferrer">www.pej4more.com</a></p>
            </div>
          </div>
          <div className="glass p-10 rounded-[2.5rem] border-accent/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group">
            <h3 className="text-2xl font-extrabold mb-6 text-accent tracking-tight">Subsidiary Brand</h3>
            <div className="space-y-4 text-slate-600">
              <p className="font-bold text-slate-900 text-lg">Namenayou™</p>
              <p className="flex items-center gap-3"><span className="text-xl">🪪</span> Registered Trademark with UKIPO (United Kingdom)</p>
              <p className="flex items-center gap-3"><span className="text-xl">🏦</span> Banking Partners: Reputable Banks in Nigeria (Abuja HQ)</p>
              <p className="flex items-center gap-3"><span className="text-xl">📍</span> Tagline: Driving Investment, Jobs, and Growth in African Logistics.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
