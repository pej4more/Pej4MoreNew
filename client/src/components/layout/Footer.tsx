import { Link } from "wouter";
import { Globe, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border pt-24 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-6 group">
              <span className="font-display font-extrabold text-2xl tracking-tight text-primary">
                NAMENAYO<span className="text-accent ml-[1px]">U</span>™
              </span>
            </Link>
            <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
              Empowering Africa’s Logistics, Learning & Investment. We connect
              education, employment, and logistics financing into one cohesive
              ecosystem.
            </p>
            <p className="font-display font-bold text-secondary text-lg">
              "We Work for You"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-slate-900 tracking-tight">
              Platform
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/investors"
                  className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
                >
                  Investors
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-6 text-slate-900 tracking-tight">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground/70 text-sm font-medium">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:pej4more@outlook.com" className="hover:text-primary transition-colors">pej4more@outlook.com</a>
                  <a href="mailto:pej4more@gmail.com" className="hover:text-primary transition-colors">pej4more@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-foreground/70 text-sm font-medium">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+44753824326" className="hover:text-primary transition-colors">+44 7538 24326 (UK)</a>
                  <a href="tel:+2349032665473" className="hover:text-primary transition-colors">+234 903 266 5473 (Nigeria)</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-foreground/70 text-sm font-medium">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>HQ Abuja — Nigeria</span>
              </li>
              <li className="flex items-center gap-4 mt-6">
                <a href="https://facebook.com/pej4more" className="text-primary hover:text-accent transition-colors font-medium text-sm">Facebook</a>
                <a href="https://linkedin.com/company/namenayou" className="text-primary hover:text-accent transition-colors font-medium text-sm">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/50 text-xs font-medium">
            © 2026 Namenayou™ — Powered by Pej4more Global Venture Ltd., HQ Abuja, Nigeria
          </p>
          <div className="flex gap-6 text-xs text-foreground/50 font-medium">
            <a href="https://www.namenayou.com" className="hover:text-primary transition-colors">www.namenayou.com</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
