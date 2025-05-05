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
            duration: "2025–Halen",
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
            duration: "2025–Present",
        },
    ],
};

export default function ExperienceTimeline() {
    const { locale } = useRouter();
    const t = locale === "en" ? experiences.en : experiences.tr;
    const sectionTitle = locale === "en" ? "My Experiences" : "Deneyimlerim";

    return (
        <section className="bg-cyan-400 py-16 px-6">
            <h2 className="text-2xl font-bold text-center mb-8">{sectionTitle}</h2>
            <div className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-cyan-400">
                {t.map((exp, i) => (
                    <ExperienceCard key={i} {...exp} />
                ))}
            </div>
        </section>
    );
}
