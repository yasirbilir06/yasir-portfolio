import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import techAnimation from "../../public/animations/tech.json";
import { Typewriter } from "react-simple-typewriter";
import { useRouter } from "next/router";

export default function HeroSection() {
    const { locale } = useRouter();

    const content = {
        tr: {
            greeting: "Merhaba, Ben",
            name: "Yasir Bilir",
            role: "Mobile App Developer",
            description: "React Native, SwiftUI ve Supabase ile modern mobil ürünler geliştiriyorum. Kullanıcı deneyimi odaklı, performanslı ve ölçeklenebilir çözümler sunuyorum.",
            viewProjects: "Projelerimi Gör",
            contactMe: "İletişime Geç",
            available: "İş fırsatlarına açığım",
            stats: {
                experience: "Deneyim",
                projects: "Proje",
                technologies: "Teknoloji"
            },
            terminalWords: [
                "npm run dev",
                "Proje derleniyor...",
                "✅ Başarıyla başlatıldı",
                "console.log('Merhaba Dünya! 🚀')",
            ],
            scrollDown: "Aşağı Kaydır",
        },
        en: {
            greeting: "Hi, I'm",
            name: "Yasir Bilir",
            role: "Mobile App Developer",
            description: "I build modern mobile products with React Native, SwiftUI and Supabase. I deliver user-focused, performant and scalable solutions.",
            viewProjects: "View Projects",
            contactMe: "Contact Me",
            available: "Open to opportunities",
            stats: {
                experience: "Experience",
                projects: "Projects",
                technologies: "Technologies"
            },
            terminalWords: [
                "npm run dev",
                "Building project...",
                "✅ Successfully started",
                "console.log('Hello World! 🚀')",
            ],
            scrollDown: "Scroll Down",
        },
        de: {
            greeting: "Hallo, ich bin",
            name: "Yasir Bilir",
            role: "Mobile App Developer",
            description: "Ich entwickle moderne mobile Produkte mit React Native, SwiftUI und Supabase. Ich liefere benutzerzentrierte, performante und skalierbare Lösungen.",
            viewProjects: "Projekte ansehen",
            contactMe: "Kontakt",
            available: "Offen für Möglichkeiten",
            stats: {
                experience: "Erfahrung",
                projects: "Projekte",
                technologies: "Technologien"
            },
            terminalWords: [
                "npm run dev",
                "Projekt wird kompiliert...",
                "✅ Erfolgreich gestartet",
                "console.log('Hallo Welt! 🚀')",
            ],
            scrollDown: "Nach unten scrollen",
        },
    };

    type LocaleKey = "tr" | "en" | "de";
    const currentLocale = (locale || "tr") as LocaleKey;
    const t = content[currentLocale] || content.tr;

    const techStack = [
        { name: "React Native", icon: "/reactnative.svg", isImage: true },
        { name: "SwiftUI", icon: "/tech/swiftui.png", isImage: true },
        { name: "Python", icon: "/python.png", isImage: true },
        { name: "Supabase", icon: "/tech/supabase.svg", isImage: true },
    ];

    const socialLinks = [
        { name: "GitHub", url: "https://github.com/yasirbilir06", icon: "/github.png" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/yasir-bilir-22505b264/", icon: "/linkedin.png" },
    ];

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900" />
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Left: Text Content */}
                    <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                        {/* Available Badge */}
                        <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm mb-6">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            {t.available}
                        </div>

                        {/* Greeting */}
                        <p className="text-cyan-400 text-lg sm:text-xl mb-2">{t.greeting}</p>
                        
                        {/* Name */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                            {t.name}
                        </h1>
                        
                        {/* Role with gradient */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent mb-6">
                            {t.role}
                        </h2>
                        
                        {/* Description */}
                        <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                            {t.description}
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                            {techStack.map((tech, index) => (
                                <span key={index} className="bg-white/10 backdrop-blur-sm border border-white/10 text-white px-4 py-2.5 rounded-full text-sm flex items-center gap-2.5 hover:bg-white/20 transition-colors">
                                    {tech.isImage ? (
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <Image src={tech.icon} alt={tech.name} width={20} height={20} className="object-contain" />
                                        </div>
                                    ) : (
                                        <span className="text-base">{tech.icon}</span>
                                    )}
                                    {tech.name}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                            <Link href="/projects">
                                <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center gap-2">
                                    {t.viewProjects}
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                                    {t.contactMe}
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </button>
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start gap-4">
                            {socialLinks.map((social, index) => (
                                <Link key={index} href={social.url} target="_blank">
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10">
                                        <Image src={social.icon} alt={social.name} width={24} height={24} className="opacity-80 hover:opacity-100" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual Content */}
                    <div className="flex-1 order-1 lg:order-2">
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-30 scale-90" />
                            
                            {/* Profile Image Container */}
                            <div className="relative">
                                {/* Rotating Border */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 rounded-full opacity-75 blur-sm animate-spin-slow" />
                                
                                {/* Image */}
                                <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                                    <Image
                                        src="/yasir.jpg"
                                        alt="Yasir Bilir"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Floating Elements - Smaller on mobile */}
                            <div className="absolute -top-2 -right-2 sm:top-0 sm:right-0 bg-gradient-to-br from-cyan-500 to-blue-500 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl animate-float">
                                <div className="text-xl sm:text-2xl font-bold">3+</div>
                                <div className="text-[10px] sm:text-xs opacity-80">{t.stats.experience}</div>
                            </div>
                            
                            <div className="absolute -bottom-2 -left-2 sm:bottom-0 sm:left-0 bg-gradient-to-br from-blue-500 to-purple-500 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl animate-float-delayed">
                                <div className="text-xl sm:text-2xl font-bold">10+</div>
                                <div className="text-[10px] sm:text-xs opacity-80">{t.stats.projects}</div>
                            </div>

                            {/* Terminal - Hidden on very small screens */}
                            <div className="hidden sm:block absolute -bottom-8 right-0 sm:-bottom-4 sm:right-8 w-64 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border-b border-slate-700">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <span className="text-xs text-slate-400 ml-2">terminal</span>
                                </div>
                                <div className="p-4 font-mono text-sm text-green-400">
                                    <span className="text-slate-500">$ </span>
                                    <Typewriter
                                        words={t.terminalWords}
                                        loop={true}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={50}
                                        deleteSpeed={30}
                                        delaySpeed={2000}
                                    />
                                </div>
                            </div>

                            {/* Lottie Animation - Hidden on mobile */}
                            <div className="hidden md:block absolute -top-8 -left-8 w-32 h-32 opacity-80">
                                <Lottie animationData={techAnimation} loop={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-sm">{t.scrollDown}</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
