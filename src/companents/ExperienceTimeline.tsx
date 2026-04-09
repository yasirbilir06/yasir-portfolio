import React from "react";
import ExperienceCard from "./ExperienceCard";
import { useRouter } from "next/router";

const experiences = {
    tr: [
        {
            logoSrc: "/experience/university.png",
            position: "Öğrenci",
            company: "Selçuk Üniversitesi",
            description: "Bilgisayar Mühendisliği Lisans Mezunu.",
            duration: "2020–2025",
        },
        {
            logoSrc: "/experience/logalarm.png",
            position: "Yaz Stajyer",
            company: "Anka Bilişim",
            description: "Network temelleri ve teknik destek.",
            duration: "2023 Yaz",
        },
        {
            logoSrc: "/experience/ayyazılım.png",
            position: "Yaz Stajyer",
            company: "Ay Yazılım",
            description: "Mobil uygulama geliştirme deneyimi.",
            duration: "2023 Yaz",
        },
        {
            logoSrc: "/experience/onelektronik.png",
            position: "Yazılım Geliştirme",
            company: "Ön Elektronik",
            description: "Donanım odaklı projelerde yer aldım.",
            duration: "2024–2025",
        },
        {
            logoSrc: "/experience/zenam.jpeg",
            position: "Uzun Dönem Stajyer",
            company: "Zenam Bilişim",
            description: "Web geliştirme ve proje dokümantasyonu.",
            duration: "Ocak 2025 – Mayıs 2025",
        },
        {
            logoSrc: "",
            position: "IT Uzmanı",
            company: "Mia Hukuk Bürosu",
            description: "Hukuk bürosu için özel otomasyon yazılımları geliştirme.",
            duration: "Haziran 2025 – Kasım 2025",
        },
    ],
    en: [
        {
            logoSrc: "/experience/university.png",
            position: "Student",
            company: "Selçuk University",
            description: "Bachelor's Degree in Computer Engineering.",
            duration: "2020–2025",
        },
        {
            logoSrc: "/experience/logalarm.png",
            position: "Summer Intern",
            company: "Anka Bilişim",
            description: "Fundamentals of networking and technical support.",
            duration: "Summer 2023",
        },
        {
            logoSrc: "/experience/ayyazılım.png",
            position: "Summer Intern",
            company: "Ay Yazılım",
            description: "Experience in mobile application development.",
            duration: "Summer 2023",
        },
        {
            logoSrc: "/experience/onelektronik.png",
            position: "Software Developer",
            company: "Ön Elektronik",
            description: "Worked on hardware-focused projects.",
            duration: "2024–2025",
        },
        {
            logoSrc: "/experience/zenam.jpeg",
            position: "Long-Term Intern",
            company: "Zenam Bilişim",
            description: "Web development and project documentation.",
            duration: "Jan 2025 – May 2025",
        },
        {
            logoSrc: "",
            position: "IT Specialist",
            company: "Mia Law Office",
            description: "Developing custom automation software for the law firm.",
            duration: "Jun 2025 – Nov 2025",
        },
    ],
    de: [
        {
            logoSrc: "/experience/university.png",
            position: "Student",
            company: "Selçuk Universität",
            description: "Bachelor-Abschluss in Informatik.",
            duration: "2020–2025",
        },
        {
            logoSrc: "/experience/logalarm.png",
            position: "Sommer-Praktikant",
            company: "Anka Bilişim",
            description: "Netzwerk-Grundlagen und technischer Support.",
            duration: "Sommer 2023",
        },
        {
            logoSrc: "/experience/ayyazılım.png",
            position: "Sommer-Praktikant",
            company: "Ay Yazılım",
            description: "Erfahrung in der Mobile App Entwicklung.",
            duration: "Sommer 2023",
        },
        {
            logoSrc: "/experience/onelektronik.png",
            position: "Software-Entwickler",
            company: "Ön Elektronik",
            description: "Arbeit an hardwareorientierten Projekten.",
            duration: "2024–2025",
        },
        {
            logoSrc: "/experience/zenam.jpeg",
            position: "Langzeit-Praktikant",
            company: "Zenam Bilişim",
            description: "Webentwicklung und Projektdokumentation.",
            duration: "Jan 2025 – Mai 2025",
        },
        {
            logoSrc: "",
            position: "IT-Spezialist",
            company: "Mia Rechtsanwaltskanzlei",
            description: "Entwicklung von individueller Automatisierungssoftware für die Kanzlei.",
            duration: "Jun 2025 – Nov 2025",
        },
    ],
};

export default function ExperienceTimeline() {
    const { locale } = useRouter();
    type LocaleKey = "tr" | "en" | "de";
    const currentLocale = (locale || "tr") as LocaleKey;
    const t = experiences[currentLocale] || experiences.tr;
    const sectionTitles = { tr: "Deneyimlerim", en: "My Experiences", de: "Meine Erfahrungen" };
    const sectionSubtitles = {
        tr: "Eğitimden profesyonel ürün geliştirmeye uzanan yolculuk",
        en: "Journey from education to professional product development",
        de: "Weg von Ausbildung zu professioneller Produktentwicklung",
    };
    const swipeHint = { tr: "Daha fazlası için kaydırın", en: "Swipe for more", de: "Wischen für mehr" };
    const sectionTitle = sectionTitles[currentLocale] || sectionTitles.tr;
    const sectionSubtitle = sectionSubtitles[currentLocale] || sectionSubtitles.tr;

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-4 sm:px-6">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* Başlık */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{sectionTitle}</h2>
                    <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-300">{sectionSubtitle}</p>
                    <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-6 shadow-[0_24px_55px_-35px_rgba(6,182,212,0.45)] backdrop-blur-sm">
                    {/* Kartlar */}
                    <div className="flex gap-5 overflow-x-auto pb-4 px-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-cyan-500/70 scrollbar-track-transparent">
                        {t.map((exp, i) => (
                            <div key={i} className="snap-start">
                                <ExperienceCard {...exp} />
                            </div>
                        ))}
                    </div>

                    {/* Scroll göstergesi */}
                    <p className="text-center text-cyan-100/90 text-sm mt-2 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        {swipeHint[currentLocale]}
                    </p>
                </div>
            </div>
        </section>
    );
}
