import { useRouter } from "next/router";
import FadeInSection from "../companents/FadeInSection";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import TechBadge from "@/companents/TechBadge";

type LocaleKey = "tr" | "en" | "de";

const translations = {
    tr: {
        pageTitle: "Projeler | Yasir Bilir",
        metaDesc: "Muhammed Yasir Bilir tarafından geliştirilen projeleri keşfedin...",
        title: "Projelerim",
        subtitle: "Geliştirdiğim mobil uygulamalar ve yazılım projeleri",
        
        featured: "Öne Çıkan",
        allProjects: "Tüm Projeler",

        gurJobTitle: "GurJob",
        gurJobSubtitle: "Çok Taraflı İş Platformu",
        gurJobTag: "Mobil Ürün Case Study",
        gurJobDesc: "Avrupa'daki Türk işletmeler ile iş arayanları buluşturan çok taraflı mobil platform. Rol bazlı onboarding, sosyal giriş, veri tutarlılığı ve ödeme doğrulamalı yayın akışı ile gerçek ürün problemlerini çözer.",
        gurJobFeatures: [
            "İşveren / İş Arayan rol ayrımı",
            "Apple & Google sosyal giriş",
            "Supabase auth + role integrity",
            "Stripe webhook tabanlı yayınlama",
        ],

        nutriPocketTitle: "NutriPocket",
        nutriPocketSubtitle: "Diyetisyen Takip Uygulaması",
        nutriPocketDesc: "Diyetisyenler ve danışanları tek platformda buluşturan, kapsamlı bir mobil sağlık uygulaması. Kullanıcı arayüzünden veri yönetimine kadar tüm sistemler sıfırdan geliştirildi.",
        nutriPocketFeatures: [
            "React Native ile çapraz platform",
            "Firebase Authentication & Firestore",
            "Gerçek zamanlı bildirimler",
            "Material Design UI/UX",
        ],
        
        yolovTitle: "Araç Sınıflandırma",
        yolovSubtitle: "YOLOv5 Deep Learning Projesi",
        yolovDesc: "Gerçek zamanlı görüntü işleme ile araç tiplerini yüksek doğrulukla tespit eden yapay zeka projesi.",
        yolovFeatures: [
            "Python & OpenCV",
            "YOLOv5 modeli",
            "Flask REST API",
            "Docker & AWS EC2",
        ],
        
        viewDetails: "Detayları Gör",
        techStack: "Teknolojiler",
    },
    en: {
        pageTitle: "Projects | Yasir Bilir",
        metaDesc: "Explore projects developed by Muhammed Yasir Bilir...",
        title: "My Projects",
        subtitle: "Mobile applications and software projects I've developed",
        
        featured: "Featured",
        allProjects: "All Projects",

        gurJobTitle: "GurJob",
        gurJobSubtitle: "Multi-sided Hiring Platform",
        gurJobTag: "Mobile Product Case Study",
        gurJobDesc: "A multi-sided mobile platform connecting Turkish businesses across Europe with job seekers. It solves real product challenges with role-based onboarding, social auth integrity, data consistency, and payment-confirmed publishing.",
        gurJobFeatures: [
            "Employer / Job Seeker role split",
            "Apple & Google social login",
            "Supabase auth + role integrity",
            "Stripe webhook-based publication",
        ],

        nutriPocketTitle: "NutriPocket",
        nutriPocketSubtitle: "Dietitian Tracking App",
        nutriPocketDesc: "A comprehensive mobile health application that brings dietitians and clients together on one platform. All systems from UI to data management were built from scratch.",
        nutriPocketFeatures: [
            "Cross-platform with React Native",
            "Firebase Authentication & Firestore",
            "Real-time notifications",
            "Material Design UI/UX",
        ],
        
        yolovTitle: "Vehicle Classification",
        yolovSubtitle: "YOLOv5 Deep Learning Project",
        yolovDesc: "An AI project that detects vehicle types with high accuracy using real-time image processing.",
        yolovFeatures: [
            "Python & OpenCV",
            "YOLOv5 model",
            "Flask REST API",
            "Docker & AWS EC2",
        ],
        
        viewDetails: "View Details",
        techStack: "Technologies",
    },
    de: {
        pageTitle: "Projekte | Yasir Bilir",
        metaDesc: "Entdecken Sie die von Muhammed Yasir Bilir entwickelten Projekte...",
        title: "Meine Projekte",
        subtitle: "Mobile Anwendungen und Softwareprojekte, die ich entwickelt habe",
        
        featured: "Hervorgehoben",
        allProjects: "Alle Projekte",

        gurJobTitle: "GurJob",
        gurJobSubtitle: "Mehrseitige Jobplattform",
        gurJobTag: "Mobile Product Case Study",
        gurJobDesc: "Eine mehrseitige mobile Plattform, die türkische Unternehmen in Europa mit Jobsuchenden verbindet. Sie löst reale Produktprobleme mit rollenbasiertem Onboarding, Social-Login-Integrität, Datenkonsistenz und zahlungsbestätigter Veröffentlichung.",
        gurJobFeatures: [
            "Rollenaufteilung Arbeitgeber / Jobsuchende",
            "Apple & Google Social Login",
            "Supabase Auth + Rollenintegrität",
            "Stripe Webhook-basierte Veröffentlichung",
        ],

        nutriPocketTitle: "NutriPocket",
        nutriPocketSubtitle: "Ernährungsberater-Tracking-App",
        nutriPocketDesc: "Eine umfassende mobile Gesundheitsanwendung, die Ernährungsberater und Klienten auf einer Plattform zusammenbringt. Alle Systeme von UI bis Datenverwaltung wurden von Grund auf entwickelt.",
        nutriPocketFeatures: [
            "Plattformübergreifend mit React Native",
            "Firebase Authentication & Firestore",
            "Echtzeit-Benachrichtigungen",
            "Material Design UI/UX",
        ],
        
        yolovTitle: "Fahrzeugklassifizierung",
        yolovSubtitle: "YOLOv5 Deep Learning Projekt",
        yolovDesc: "Ein KI-Projekt, das Fahrzeugtypen mit hoher Genauigkeit durch Echtzeit-Bildverarbeitung erkennt.",
        yolovFeatures: [
            "Python & OpenCV",
            "YOLOv5 Modell",
            "Flask REST API",
            "Docker & AWS EC2",
        ],
        
        viewDetails: "Details ansehen",
        techStack: "Technologien",
    },
};

export default function Projects() {
    const { locale } = useRouter();
    const currentLocale = (locale || "tr") as LocaleKey;
    const t = translations[currentLocale] || translations.tr;

    return (
        <>
            <Head>
                <title>{t.pageTitle}</title>
                <meta name="description" content={t.metaDesc} />
                <meta property="og:title" content={t.pageTitle} />
                <meta property="og:description" content={t.metaDesc} />
                <meta property="og:type" content="website" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
                {/* Hero Header */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white py-20 sm:py-28">
                    {/* Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                    </div>
                    
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
                        <FadeInSection>
                            <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full text-sm mb-6">
                                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                                {t.allProjects}
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{t.title}</h1>
                            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
                        </FadeInSection>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto space-y-16">
                        
                        {/* GurJob - Featured Project */}
                        <FadeInSection>
                            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                                        ⭐ {t.featured}
                                    </span>
                                </div>

                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-1/2 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 p-8 sm:p-12 flex items-center justify-center">
                                        <div className="grid grid-cols-2 gap-3 max-w-sm w-full">
                                            <div className="rounded-2xl bg-slate-950/80 border border-white/10 p-1.5 shadow-lg">
                                                <Image
                                                    src="/images/gurjob/01_welcome.png"
                                                    alt="GurJob Welcome"
                                                    width={1290}
                                                    height={2796}
                                                    className="w-full h-auto rounded-xl"
                                                />
                                            </div>
                                            <div className="rounded-2xl bg-slate-950/80 border border-white/10 p-1.5 shadow-lg translate-y-3">
                                                <Image
                                                    src="/images/gurjob/03_listings.png"
                                                    alt="GurJob Listings"
                                                    width={1290}
                                                    height={2796}
                                                    className="w-full h-auto rounded-xl"
                                                />
                                            </div>
                                            <div className="rounded-2xl bg-slate-950/80 border border-white/10 p-1.5 shadow-lg">
                                                <Image
                                                    src="/images/gurjob/04_profile.png"
                                                    alt="GurJob Profile"
                                                    width={1290}
                                                    height={2796}
                                                    className="w-full h-auto rounded-xl"
                                                />
                                            </div>
                                            <div className="rounded-2xl bg-slate-950/80 border border-white/10 p-1.5 shadow-lg translate-y-3">
                                                <Image
                                                    src="/images/gurjob/06_manage.png"
                                                    alt="GurJob Manage"
                                                    width={1290}
                                                    height={2796}
                                                    className="w-full h-auto rounded-xl"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                                        <div className="mb-2">
                                            <span className="text-cyan-600 text-sm font-medium uppercase tracking-wider">{t.gurJobTag}</span>
                                        </div>
                                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                                            {t.gurJobTitle}
                                        </h2>
                                        <p className="text-lg text-cyan-600 font-medium mb-4">
                                            {t.gurJobSubtitle}
                                        </p>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {t.gurJobDesc}
                                        </p>

                                        <div className="mb-8">
                                            <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">{t.techStack}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {t.gurJobFeatures.map((feature, index) => (
                                                    <TechBadge key={index} label={feature} variant="light" />
                                                ))}
                                            </div>
                                        </div>

                                        <Link href="/projects/gurjob">
                                            <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-xl">
                                                {t.viewDetails}
                                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* NutriPocket */}
                        <FadeInSection>
                            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Image Section */}
                                    <div className="lg:w-1/2 bg-gradient-to-br from-cyan-500 to-blue-600 p-8 sm:p-12 flex items-center justify-center">
                                        <div className="relative">
                                            {/* Phone Frame */}
                                            <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                                                <div className="bg-slate-800 rounded-[2.5rem] overflow-hidden">
                                                    <Image
                                                        src="/screen/splashScreen2.png"
                                                        alt="NutriPocket Screenshot"
                                                        width={280}
                                                        height={560}
                                                        className="w-full h-auto"
                                                    />
                                                </div>
                                                {/* Notch */}
                                                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-full" />
                                            </div>
                                            
                                            {/* Floating Tech Badge - Hidden on mobile */}
                                            <div className="hidden sm:flex absolute -right-4 top-1/4 bg-white text-cyan-600 px-4 py-2.5 rounded-xl shadow-lg text-sm font-medium animate-float items-center gap-2">
                                                <div className="w-5 h-5 flex items-center justify-center">
                                                    <Image src="/reactnative.svg" alt="React Native" width={20} height={20} className="object-contain" />
                                                </div>
                                                React Native
                                            </div>
                                            <div className="hidden sm:flex absolute -left-4 bottom-1/4 bg-white text-orange-500 px-4 py-2.5 rounded-xl shadow-lg text-sm font-medium animate-float-delayed items-center gap-2">
                                                🔥 Firebase
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Content Section */}
                                    <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                                        <div className="mb-2">
                                            <span className="text-cyan-600 text-sm font-medium uppercase tracking-wider">Mobile App</span>
                                        </div>
                                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                                            {t.nutriPocketTitle}
                                        </h2>
                                        <p className="text-lg text-cyan-600 font-medium mb-4">
                                            {t.nutriPocketSubtitle}
                                        </p>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {t.nutriPocketDesc}
                                        </p>
                                        
                                        {/* Tech Stack */}
                                        <div className="mb-8">
                                            <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">{t.techStack}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {t.nutriPocketFeatures.map((feature, index) => (
                                                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <Link href="/projects/nutripocket">
                                            <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-xl">
                                                {t.viewDetails}
                                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* YOLOv Project */}
                        <FadeInSection>
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                                <div className="flex flex-col lg:flex-row-reverse">
                                    {/* Image Section */}
                                    <div className="lg:w-1/2 bg-gradient-to-br from-purple-500 to-indigo-600 p-8 sm:p-12 flex items-center justify-center">
                                        <div className="relative w-full max-w-md">
                                            <div className="bg-slate-900 rounded-2xl p-4 shadow-2xl">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                                    <span className="text-slate-400 text-xs ml-2">vehicle_detection.py</span>
                                                </div>
                                                <Image
                                                    src="/yolov.jpeg"
                                                    alt="YOLOv Vehicle Classification"
                                                    width={400}
                                                    height={300}
                                                    className="w-full h-auto rounded-lg"
                                                />
                                            </div>
                                            
                                            {/* Floating Elements - Hidden on mobile */}
                                            <div className="hidden sm:block absolute -right-4 top-8 bg-white text-purple-600 px-3 py-2 rounded-xl shadow-lg text-sm font-medium animate-float">
                                                🐍 Python
                                            </div>
                                            <div className="hidden sm:block absolute -left-4 bottom-8 bg-white text-indigo-600 px-3 py-2 rounded-xl shadow-lg text-sm font-medium animate-float-delayed">
                                                🤖 YOLOv5
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Content Section */}
                                    <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                                        <div className="mb-2">
                                            <span className="text-purple-600 text-sm font-medium uppercase tracking-wider">AI / Deep Learning</span>
                                        </div>
                                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                                            {t.yolovTitle}
                                        </h2>
                                        <p className="text-lg text-purple-600 font-medium mb-4">
                                            {t.yolovSubtitle}
                                        </p>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {t.yolovDesc}
                                        </p>
                                        
                                        {/* Tech Stack */}
                                        <div>
                                            <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">{t.techStack}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {t.yolovFeatures.map((feature, index) => (
                                                    <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1.5 rounded-lg text-sm border border-purple-100">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <FadeInSection>
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
                                <div className="absolute inset-0 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                                        {currentLocale === "de" ? "Haben Sie ein Projekt?" : currentLocale === "en" ? "Have a project in mind?" : "Bir projeniz mi var?"}
                                    </h3>
                                    <p className="text-white/80 mb-8 max-w-xl mx-auto">
                                        {currentLocale === "de" ? "Lassen Sie uns zusammenarbeiten!" : currentLocale === "en" ? "Let's work together!" : "Birlikte çalışalım!"}
                                    </p>
                                    <Link href="/contact">
                                        <button className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold hover:bg-cyan-50 transition-all shadow-lg inline-flex items-center gap-2">
                                            {currentLocale === "de" ? "Kontakt aufnehmen" : currentLocale === "en" ? "Get in Touch" : "İletişime Geç"}
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </section>
            </div>
        </>
    );
}
