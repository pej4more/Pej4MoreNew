import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50/50 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-24">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight leading-tight">
              Let's build the future together.
            </h1>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Whether you are an investor looking for robust returns, a logistics operator seeking opportunities, or a student wanting to learn — join our waitlist today.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xl mb-1 tracking-tight">Email Us</h3>
                  <div className="flex flex-col gap-1.5 text-sm">
                    <a href="mailto:partnerships@namenayou.com" className="text-primary font-bold hover:underline transition-colors">
                      partnerships@namenayou.com
                    </a>
                    <a href="mailto:pej4more@outlook.com" className="text-slate-500 hover:text-primary transition-colors font-medium">
                      pej4more@outlook.com
                    </a>
                    <a href="mailto:pej4more@gmail.com" className="text-slate-500 hover:text-primary transition-colors font-medium">
                      pej4more@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xl mb-1 tracking-tight">Call Us</h3>
                  <div className="flex flex-col gap-1.5 text-sm">
                    <a href="https://wa.me/44753824326" className="text-slate-500 hover:text-primary transition-colors flex items-center gap-2">
                      <span className="font-bold text-slate-700">WhatsApp (UK):</span> +44 7538 24326
                    </a>
                    <a href="tel:+2349032665473" className="text-slate-500 hover:text-primary transition-colors flex items-center gap-2">
                      <span className="font-bold text-slate-700">Nigeria HQ:</span> +234 903 266 5473
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xl mb-1 tracking-tight">Headquarters</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Central Business District, Abuja — Nigeria
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-slate-200">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-widest border border-primary/20">
                Early Access
              </div>
              <h2 className="text-3xl font-extrabold mb-3 text-slate-900 tracking-tight">Join the Waitlist</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">Fill out the form below to register your interest in Namenayou™. Our team will be in touch shortly.</p>

              <WaitlistForm />
            </div>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
