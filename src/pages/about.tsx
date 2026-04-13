import Link from "next/link";
import FadeInSection from "../companents/FadeInSection";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

type LocaleKey = "tr" | "en" | "de";

const translations = {
    tr: {
        pageTitle: "Hakkımda | Yasir Bilir",
        metaDesc: "Muhammed Yasir Bilir hakkında detaylı bilgiler. React Native, SwiftUI ve Supabase ile ürün odaklı mobil uygulamalar geliştiren yazılım mühendisi.",
        title: "Hakkımda",
        
        greeting: "Merhaba, Ben",
        name: "Muhammed Yasir Bilir",
        role: "Mobile App Developer",
        location: "Worms, Almanya",
        bio: "Mobil uygulama geliştirmeye tutkuyla bağlı bir Bilgisayar Mühendisiyim. Selçuk Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum. Çifte vatandaş olarak Avrupa odaklı kariyer hedefleriyle yoluma devam ediyorum.",
        
        journeyTitle: "Yazılım Yolculuğum",
        journeyText: "Yazılımla ilk tanışmam üniversite yıllarında C++ ile oldu. Başlangıçta merakla çıktığım bu yol, zamanla problem çözme, üretme ve sürekli gelişme motivasyonuna dönüştü. Kod yazmanın yalnızca teknik değil, aynı zamanda yaratıcı bir süreç olduğunu fark ettim.",
        
        skillsTitle: "Teknoloji Yığını",
        
        reactNative: "React Native",
        reactNativeDesc: "TypeScript ile ölçeklenebilir cross-platform uygulamalar",
        
        swift: "SwiftUI",
        swiftDesc: "Modern iOS arayüz geliştirme ve Apple ekosistemi",
        
        python: "Python",
        pythonDesc: "Otomasyon, scripting ve veri işleme çözümleri",
        
        backend: "Supabase",
        backendDesc: "Auth, PostgreSQL ve gerçek zamanlı veri akışları",
        
        projectTitle: "Öne Çıkan Proje",
        nutriPocket: "GurJob",
        nutriPocketDesc: "Avrupa'daki Türk işletmeler ile iş arayanları buluşturan çok taraflı mobil platform. Rol bazlı onboarding, sosyal giriş, ödeme doğrulaması ve veri tutarlılığı kurgulandı.",
        
        educationTitle: "Eğitim",
        university: "Selçuk Üniversitesi",
        degree: "Bilgisayar Mühendisliği",
        year: "2020 - 2025",
        
        experienceTitle: "Deneyim",
        expCompany: "On Elektronik",
        expRole: "Gömülü Sistemler & SPI Haberleşme",
        
        goalsTitle: "Kariyer Hedeflerim",
        goal1: "Swift/SwiftUI ile profesyonel iOS uygulamaları",
        goal2: "Supabase ile güvenli backend ve veri tutarlılığı",
        goal3: "Uluslararası projelerde aktif rol",
        
        hobbiesTitle: "İlgi Alanlarım",
        hobby1: "Tenis",
        hobby2: "Strateji Oyunları",
        hobby3: "Seyahat",
        
        downloadCV: "CV İndir",
        contactMe: "İletişime Geç",
    },
    en: {
        pageTitle: "About Me | Yasir Bilir",
        metaDesc: "Learn more about Muhammed Yasir Bilir, a product-focused mobile developer working with React Native, SwiftUI and Supabase.",
        title: "About Me",
        
        greeting: "Hi, I'm",
        name: "Muhammed Yasir Bilir",
        role: "Mobile App Developer",
        location: "Worms, Germany",
        bio: "I'm a Computer Engineer passionate about mobile app development. I graduated from Selçuk University with a degree in Computer Engineering. As a dual citizen, I continue my journey with Europe-focused career goals.",
        
        journeyTitle: "My Journey",
        journeyText: "My first encounter with software was through C++ during university. What started as curiosity gradually transformed into a motivation for problem-solving, creating, and continuous improvement. I realized that coding is not only a technical process but also a creative one.",
        
        skillsTitle: "Tech Stack",
        
        reactNative: "React Native",
        reactNativeDesc: "Scalable cross-platform apps with TypeScript",
        
        swift: "SwiftUI",
        swiftDesc: "Modern iOS interface development and Apple ecosystem",
        
        python: "Python",
        pythonDesc: "Automation, scripting and data processing solutions",
        
        backend: "Supabase",
        backendDesc: "Auth, PostgreSQL and real-time data workflows",
        
        projectTitle: "Featured Project",
        nutriPocket: "GurJob",
        nutriPocketDesc: "A multi-sided mobile platform connecting Turkish businesses across Europe with job seekers. Role-based onboarding, social auth, payment verification and data consistency are core parts.",
        
        educationTitle: "Education",
        university: "Selçuk University",
        degree: "Computer Engineering",
        year: "2020 - 2025",
        
        experienceTitle: "Experience",
        expCompany: "On Elektronik",
        expRole: "Embedded Systems & SPI Communication",
        
        goalsTitle: "Career Goals",
        goal1: "Professional iOS apps with Swift/SwiftUI",
        goal2: "Secure backend and data consistency with Supabase",
        goal3: "Active role in international projects",
        
        hobbiesTitle: "Interests",
        hobby1: "Tennis",
        hobby2: "Strategy Games",
        hobby3: "Travel",
        
        downloadCV: "Download CV",
        contactMe: "Contact Me",
    },
    de: {
        pageTitle: "Über mich | Yasir Bilir",
        metaDesc: "Erfahren Sie mehr über Muhammed Yasir Bilir, einen leidenschaftlichen Mobile App Entwickler mit europaorientierten Karrierezielen.",
        title: "Über mich",
        
        greeting: "Hallo, ich bin",
        name: "Muhammed Yasir Bilir",
        role: "Mobile App Developer",
        location: "Worms, Deutschland",
        bio: "Ich bin ein Informatiker mit Leidenschaft für Mobile App Entwicklung. Ich habe meinen Abschluss an der Selçuk Universität gemacht. Als Doppelstaatsbürger verfolge ich europaorientierte Karriereziele.",
        
        journeyTitle: "Mein Weg",
        journeyText: "Meine erste Begegnung mit Software war während meines Studiums mit C++. Was als Neugier begann, entwickelte sich zu einer Motivation für Problemlösung, Kreation und kontinuierliche Verbesserung.",
        
        skillsTitle: "Tech Stack",
        
        reactNative: "React Native",
        reactNativeDesc: "Skalierbare Cross-Platform Apps mit TypeScript",
        
        swift: "SwiftUI",
        swiftDesc: "Moderne iOS-Interface-Entwicklung und Apple-Ökosystem",
        
        python: "Python",
        pythonDesc: "Automatisierung, Scripting und Datenverarbeitung",
        
        backend: "Supabase",
        backendDesc: "Auth, PostgreSQL und Echtzeit-Datenflüsse",
        
        projectTitle: "Hauptprojekt",
        nutriPocket: "GurJob",
        nutriPocketDesc: "Eine mehrseitige mobile Plattform, die türkische Unternehmen in Europa mit Jobsuchenden verbindet. Rollenbasiertes Onboarding, Social Login, Zahlungsbestätigung und Datenkonsistenz wurden umgesetzt.",
        
        educationTitle: "Ausbildung",
        university: "Selçuk Universität",
        degree: "Informatik",
        year: "2020 - 2025",
        
        experienceTitle: "Erfahrung",
        expCompany: "On Elektronik",
        expRole: "Embedded Systems & SPI-Kommunikation",
        
        goalsTitle: "Karriereziele",
        goal1: "Professionelle iOS-Apps mit Swift/SwiftUI",
        goal2: "Sicheres Backend und Datenkonsistenz mit Supabase",
        goal3: "Aktive Rolle in internationalen Projekten",
        
        hobbiesTitle: "Interessen",
        hobby1: "Tennis",
        hobby2: "Strategiespiele",
        hobby3: "Reisen",
        
        downloadCV: "CV Herunterladen",
        contactMe: "Kontakt",
    },
};

export default function About() {
    const { locale } = useRouter();
    const currentLocale = (locale || "tr") as LocaleKey;
    const t = translations[currentLocale] || translations.tr;

    const skills = [
        { name: t.swift, desc: t.swiftDesc, icon: "/tech/swiftui.png", isImage: true },
        { name: t.reactNative, desc: t.reactNativeDesc, icon: "/reactnative.svg", isImage: true },
        { name: t.backend, desc: t.backendDesc, icon: "/tech/supabase.svg", isImage: true },
        { name: t.python, desc: t.pythonDesc, icon: "/python.png", isImage: true },
    ];

    const goals = [t.goal1, t.goal2, t.goal3];
    const hobbies = [
        { name: t.hobby1, icon: "🎾" },
        { name: t.hobby2, icon: "♟️" },
        { name: t.hobby3, icon: "✈️" },
    ];

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
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-500 to-blue-600 text-white">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
                    </div>
                    
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            {/* Profile Image */}
                            <FadeInSection>
                                <div className="relative">
                                    <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                                        <Image
                                            src="/yasir.jpg"
                                            alt="Yasir Bilir"
                                            width={224}
                                            height={224}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-white text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        📍 {t.location}
                                    </div>
                                </div>
                            </FadeInSection>
                            
                            {/* Info */}
                            <FadeInSection>
                                <div className="text-center md:text-left">
                                    <p className="text-cyan-100 text-lg mb-2">{t.greeting}</p>
                                    <h1 className="text-4xl sm:text-5xl font-bold mb-3">{t.name}</h1>
                                    <p className="text-xl sm:text-2xl text-cyan-100 font-medium mb-6">{t.role}</p>
                                    <p className="text-white/90 max-w-xl leading-relaxed mb-8">{t.bio}</p>
                                    
                                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                        <Link href="/yasir-cv.pdf" target="_blank">
                                            <button className="bg-white text-cyan-600 px-6 py-3 rounded-full font-semibold hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                {t.downloadCV}
                                            </button>
                                        </Link>
                                        <Link href="/contact">
                                            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-all flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                {t.contactMe}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </FadeInSection>
                        </div>
                    </div>
                </section>

                {/* Journey Section */}
                <section className="py-16 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <FadeInSection>
                            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-2xl">
                                        💻
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{t.journeyTitle}</h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-lg">{t.journeyText}</p>
                            </div>
                        </FadeInSection>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="py-16 px-4 sm:px-6 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <FadeInSection>
                            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-12">{t.skillsTitle}</h2>
                        </FadeInSection>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {skills.map((skill, index) => (
                                <FadeInSection key={index}>
                                    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                                        <div className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform">
                                            {skill.isImage ? (
                                                <Image src={skill.icon} alt={skill.name} width={56} height={56} className="object-contain rounded-xl" />
                                            ) : (
                                                <span className="text-4xl">{skill.icon}</span>
                                            )}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">{skill.name}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{skill.desc}</p>
                                    </div>
                                </FadeInSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Project */}
                <section className="py-16 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <FadeInSection>
                            <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 sm:p-12 text-white overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                <div className="relative">
                                    <p className="text-cyan-100 text-sm font-medium mb-2 uppercase tracking-wider">{t.projectTitle}</p>
                                    <h3 className="text-3xl sm:text-4xl font-bold mb-4">{t.nutriPocket}</h3>
                                    <p className="text-white/90 text-lg leading-relaxed mb-6 max-w-2xl">{t.nutriPocketDesc}</p>
                                    <Link href="/projects/gurjob">
                                        <button className="bg-white text-cyan-600 px-6 py-3 rounded-full font-semibold hover:bg-cyan-50 transition-all inline-flex items-center gap-2">
                                            {currentLocale === "de" ? "Mehr erfahren" : currentLocale === "en" ? "Learn More" : "Detayları Gör"}
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

                {/* Education & Experience */}
                <section className="py-16 px-4 sm:px-6 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            <FadeInSection>
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-xl">
                                            🎓
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">{t.educationTitle}</h3>
                                    </div>
                                    <div className="pl-2 border-l-2 border-purple-200">
                                        <p className="font-semibold text-gray-800">{t.university}</p>
                                        <p className="text-gray-600">{t.degree}</p>
                                        <p className="text-sm text-gray-500 mt-1">{t.year}</p>
                                    </div>
                                </div>
                            </FadeInSection>
                            
                            <FadeInSection>
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-xl">
                                            💼
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">{t.experienceTitle}</h3>
                                    </div>
                                    <div className="pl-2 border-l-2 border-green-200">
                                        <p className="font-semibold text-gray-800">{t.expCompany}</p>
                                        <p className="text-gray-600">{t.expRole}</p>
                                    </div>
                                </div>
                            </FadeInSection>
                        </div>
                    </div>
                </section>

                {/* Goals & Hobbies */}
                <section className="py-16 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            <FadeInSection>
                                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        🎯 {t.goalsTitle}
                                    </h3>
                                    <ul className="space-y-3">
                                        {goals.map((goal, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                                                    {index + 1}
                                                </span>
                                                <span className="text-gray-700">{goal}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeInSection>
                            
                            <FadeInSection>
                                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        ⭐ {t.hobbiesTitle}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {hobbies.map((hobby, index) => (
                                            <span key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-orange-100 flex items-center gap-2 text-gray-700">
                                                <span>{hobby.icon}</span>
                                                {hobby.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </FadeInSection>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
