import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [

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
];

export default function ExperienceTimeline() {
    return (
        <section className="bg-cyan-400 py-16 px-6">
            <h2 className="text-2xl font-bold text-center mb-8">Deneyimlerim </h2>
            <div className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-cyan-400">
                {experiences.map((exp, i) => (
                    <ExperienceCard key={i} {...exp} />
                ))}
            </div>
        </section>
    );
}
