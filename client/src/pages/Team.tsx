import { motion } from "framer-motion";
import { Users, Globe, MapPin, Shield, Gavel, Briefcase, Truck, Droplets, Calendar, UserPlus } from "lucide-react";

const teamGroups = [
    {
        title: "Executive Leadership",
        description: "Driving the strategic vision and global expansion of Namenayou™.",
        members: [
            {
                name: "Group Director",
                role: "Group Director and Shareholder",
                location: "London",
                image: "/attached_assets/team-01-group-director.jpg",
                icon: Globe
            },
            {
                name: "Global Operations Director",
                role: "Director Global Operations",
                location: "London",
                image: "/attached_assets/team-02-global-ops.jpg",
                icon: Globe
            },
            {
                name: "Admin Director",
                role: "Admin Director",
                location: "Abuja",
                image: "/attached_assets/team-03-admin-director.jpg",
                icon: MapPin
            },
            {
                name: "Finance Director",
                role: "Finance Director",
                location: "Abuja",
                image: "/attached_assets/team-04-finance-director.jpg",
                icon: MapPin
            }
        ]
    },
    {
        title: "Management & Strategy",
        description: "Expert oversight in legal, sourcing, and technical implementation.",
        members: [
            {
                name: "Legal Team",
                role: "Legal",
                location: "Abuja",
                image: "/attached_assets/team-05-legal.jpg",
                icon: Gavel
            },
            {
                name: "Sourcing Director",
                role: "Global Sourcing Director",
                location: "Global",
                image: "/attached_assets/team-06-sourcing.jpg",
                icon: Briefcase
            },
            {
                name: "Consulting Director",
                role: "Consulting Director",
                location: "London",
                image: "/attached_assets/team-07-consulting.jpg",
                icon: Globe
            },
            {
                name: "Ops & Procurement",
                role: "Operation and Procurement Manager",
                location: "Lagos",
                image: "/attached_assets/team-08-ops-manager.jpg",
                icon: MapPin
            }
        ]
    },
    {
        title: "Technical & Safety",
        description: "Ensuring operational excellence and safety across our network.",
        members: [
            {
                name: "Technical Manager",
                role: "Technical Manager",
                location: "London",
                image: "/attached_assets/team-09-technical.jpg",
                icon: Globe
            },
            {
                name: "Safety Manager",
                role: "Safety Manager",
                location: "Abuja",
                image: "/attached_assets/team-10-safety.jpg",
                icon: Shield
            },
            {
                name: "Recruitment Team",
                role: "Drivers Recruitment Team",
                location: "Regional",
                image: "/attached_assets/team-11-recruitment.jpg",
                icon: UserPlus
            }
        ]
    },
    {
        title: "Support & Operations",
        description: "The backbone of our daily logistics and customer service.",
        members: [
            {
                name: "Booking Staff",
                role: "Booking Staff Office",
                location: "Abuja",
                image: "/attached_assets/team-12-booking.jpg",
                icon: Calendar
            },
            {
                name: "Carwash Center",
                role: "Namenayou Carwash Center 1",
                location: "Abuja",
                image: "/attached_assets/team-13-carwash.jpg",
                icon: Droplets
            },
            {
                name: "Transporter Lead",
                role: "Transporter / Senior Driver",
                location: "Regional",
                image: "/attached_assets/team-14-transporter.jpg",
                icon: Truck
            }
        ]
    }
];

export default function Team() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-slate-50/50">
            {/* Header */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6"
                >
                    <Users className="w-4 h-4" />
                    <span>Meet the Team</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-900 tracking-tight"
                >
                    The <span className="text-primary">Experts</span> Behind Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
                >
                    Our diverse, global team brings together decades of experience in logistics,
                    finance, and technology to power Africa's premier investment ecosystem.
                </motion.p>
            </section>

            {/* Team Groups */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
                {teamGroups.map((group, groupIdx) => (
                    <section key={groupIdx}>
                        <div className="mb-12 border-l-4 border-primary pl-6">
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">{group.title}</h2>
                            <p className="text-slate-500">{group.description}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {group.members.map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                                        {/* Placeholder Background with Icon */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center opacity-40">
                                            <member.icon className="w-20 h-20 text-slate-400/30" />
                                        </div>

                                        {/* Realistic Avatar Placeholder using SVG/Colored Backgrounds if Image Fails */}
                                        <div className="absolute inset-x-0 bottom-0 top-1/4 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />

                                        {/* The Image (Will be used when user uploads) */}
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                            }}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Content Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8 text-white">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="p-1.5 rounded-lg bg-primary/20 backdrop-blur-md border border-white/10 text-primary">
                                                    <member.icon className="w-3.5 h-3.5" />
                                                </span>
                                                <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                                                    {member.location}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-1 leading-tight text-secondary drop-shadow-md">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm text-white/90 font-medium leading-tight drop-shadow-sm">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* Join the Team CTA */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48">
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Want to be part of our success story?</h2>
                        <p className="text-xl text-slate-400 mb-10">
                            We are always looking for passionate people to join our global missions.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105"
                        >
                            Get in Touch
                            <Briefcase className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
