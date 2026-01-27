import Image from "next/image";
import Link from "next/link";
import FadeInSection from "../../companents/FadeInSection";
import Head from "next/head";
import { useRouter } from "next/router";

type LocaleKey = "tr" | "en" | "de";

const translations = {
    tr: {
        pageTitle: "NutritionPocket | Proje Detayı",
        backToProjects: "← Projelere Dön",
        heroSubtitle: "Mobil Sağlık Uygulaması",
        mainTitle: "NutritionPocket",
        mainDesc: "Danışan-diyetisyen etkileşimini destekleyen, React Native ve Firebase ile geliştirilmiş kapsamlı bir sağlık uygulaması.",
        techStack: "Teknoloji Stack",
        keyFeatures: "Temel Özellikler",
        feature1: "Gerçek Zamanlı Mesajlaşma",
        feature2: "Kilo Takibi & Grafikler",
        feature3: "PDF Yükleme",
        feature4: "Randevu Sistemi",
        roleTitle: "Rol Seçimi ve Giriş Sistemi",
        roleDesc: "NutritionPocket, kullanıcılarına rol bazlı bir deneyim sunar. Danışanlar ve diyetisyenler farklı arayüzlerle giriş yapar. Giriş işlemleri Firebase Authentication üzerinden gerçekleştirilir ve e-posta/şifre ya da Google ile güvenli oturum desteği sağlanır.",
        weightTitle: "Kilo Takibi Modülü",
        weightDesc: "Danışanlar her gün kilo bilgilerini girebilir. Bu veriler Firestore'da kayıt altına alınır ve kullanıcıya özel olarak react-native-chart-kit ile grafiksel şekilde görselleştirilir. İlgili veriler zaman serisi biçiminde analiz edilebilir.",
        chatTitle: "Gerçek Zamanlı Mesajlaşma",
        chatDesc: "NutritionPocket, danışan ve diyetisyenler arasında uçtan uca sohbet imkânı sunar. Firestore üzerinde yapılandırılmış dizin yapısı sayesinde her konuşma zaman damgalıdır. Kullanıcılar metin ve görsel paylaşabilir.",
        pdfTitle: "PDF Yükleme & Takvim",
        pdfDesc: "Danışanlar tahlil sonuçlarını PDF olarak yükleyebilir. Bu dosyalar Firebase Storage üzerinde barındırılır. Diyetisyenler bu PDFleri görüp değerlendirir. Randevu sistemi haftalık programlara göre saat seçimi sağlar.",
        calcTitle: "BMH ve Makro Hesaplayıcılar",
        calcDesc: "WHO, Schofield ve IOM yöntemlerine göre bazal metabolizma hızı hesaplama imkânı sunar. Sonuçlar enerji, protein, karbonhidrat, yağ ve sıvı ihtiyaçlarını içerir.",
        mapTitle: "Klinik & Harita Entegrasyonu",
        mapDesc: "Ankara'daki özel klinikleri listeler. Kullanıcılar diyetisyen ofislerinin konumlarını Google Maps üzerinde görebilir.",
        appointmentTitle: "Randevu Sistemi",
        appointmentDesc: "Diyetisyenlerin haftalık uygunluklarını tanımlamasına ve danışanların bu zaman dilimlerinden randevu almasına imkân tanır.",
        premiumFeature: "Premium Özellik",
        firebaseIntegration: "Firebase Entegrasyonu",
        realtimeSync: "Gerçek Zamanlı Senkronizasyon",
        secureAuth: "Güvenli Kimlik Doğrulama",
        downloadCv: "CV'mi İndir",
        contactMe: "İletişime Geç",
    },
    en: {
        pageTitle: "NutritionPocket | Project Details",
        backToProjects: "← Back to Projects",
        heroSubtitle: "Mobile Health Application",
        mainTitle: "NutritionPocket",
        mainDesc: "A comprehensive health application supporting client-dietitian interaction, built with React Native and Firebase.",
        techStack: "Tech Stack",
        keyFeatures: "Key Features",
        feature1: "Real-Time Messaging",
        feature2: "Weight Tracking & Charts",
        feature3: "PDF Upload",
        feature4: "Appointment System",
        roleTitle: "Role Selection & Login System",
        roleDesc: "NutritionPocket offers a role-based experience. Clients and dietitians log in through different interfaces. Authentication is handled via Firebase, supporting secure login with email/password or Google accounts.",
        weightTitle: "Weight Tracking Module",
        weightDesc: "Clients can enter their daily weight data. These records are stored in Firestore and visualized using react-native-chart-kit. Data can be analyzed as a time series.",
        chatTitle: "Real-Time Messaging",
        chatDesc: "NutritionPocket enables end-to-end real-time messaging between clients and dietitians. Messages are timestamped and stored in Firestore. Users can send text and images.",
        pdfTitle: "PDF Upload & Calendar",
        pdfDesc: "Clients can upload lab results as PDFs, stored in Firebase Storage. Dietitians review these files. Appointment system allows scheduling based on weekly availability.",
        calcTitle: "BMR & Macro Calculators",
        calcDesc: "Offers BMR calculations based on WHO, Schofield, and IOM methods. Results include energy, protein, carbohydrate, fat, and fluid requirements.",
        mapTitle: "Clinic & Map Integration",
        mapDesc: "Lists private dietitian clinics in Ankara. Users can view clinic locations directly in Google Maps.",
        appointmentTitle: "Appointment System",
        appointmentDesc: "Allows dietitians to define their weekly availability and clients to book available slots.",
        premiumFeature: "Premium Feature",
        firebaseIntegration: "Firebase Integration",
        realtimeSync: "Real-Time Sync",
        secureAuth: "Secure Authentication",
        downloadCv: "Download CV",
        contactMe: "Contact Me",
    },
    de: {
        pageTitle: "NutritionPocket | Projektdetails",
        backToProjects: "← Zurück zu Projekten",
        heroSubtitle: "Mobile Gesundheitsanwendung",
        mainTitle: "NutritionPocket",
        mainDesc: "Eine umfassende Gesundheitsanwendung zur Unterstützung der Klient-Ernährungsberater-Interaktion, entwickelt mit React Native und Firebase.",
        techStack: "Tech Stack",
        keyFeatures: "Hauptfunktionen",
        feature1: "Echtzeit-Nachrichten",
        feature2: "Gewichtsverfolgung & Diagramme",
        feature3: "PDF-Upload",
        feature4: "Terminsystem",
        roleTitle: "Rollenauswahl & Anmeldesystem",
        roleDesc: "NutritionPocket bietet eine rollenbasierte Erfahrung. Klienten und Ernährungsberater melden sich über verschiedene Schnittstellen an. Die Authentifizierung erfolgt über Firebase mit sicherer Anmeldung.",
        weightTitle: "Gewichtsverfolgungsmodul",
        weightDesc: "Klienten können ihre täglichen Gewichtsdaten eingeben. Diese werden in Firestore gespeichert und mit react-native-chart-kit visualisiert.",
        chatTitle: "Echtzeit-Nachrichten",
        chatDesc: "NutritionPocket ermöglicht Ende-zu-Ende Echtzeit-Nachrichten zwischen Klienten und Ernährungsberatern. Nachrichten werden mit Zeitstempel in Firestore gespeichert.",
        pdfTitle: "PDF-Upload & Kalender",
        pdfDesc: "Klienten können Laborergebnisse als PDF hochladen, die in Firebase Storage gespeichert werden. Das Terminsystem ermöglicht Buchungen basierend auf der wöchentlichen Verfügbarkeit.",
        calcTitle: "BMR & Makronährstoff-Rechner",
        calcDesc: "Bietet BMR-Berechnungen nach WHO-, Schofield- und IOM-Methoden. Ergebnisse umfassen Energie, Protein, Kohlenhydrate, Fett und Flüssigkeitsbedarf.",
        mapTitle: "Klinik & Kartenintegration",
        mapDesc: "Listet private Ernährungsberater-Kliniken in Ankara auf. Benutzer können Standorte direkt in Google Maps öffnen.",
        appointmentTitle: "Terminbuchungssystem",
        appointmentDesc: "Ermöglicht Ernährungsberatern, ihre wöchentliche Verfügbarkeit festzulegen, und Klienten, verfügbare Zeitfenster zu buchen.",
        premiumFeature: "Premium-Funktion",
        firebaseIntegration: "Firebase-Integration",
        realtimeSync: "Echtzeit-Synchronisation",
        secureAuth: "Sichere Authentifizierung",
        downloadCv: "Lebenslauf herunterladen",
        contactMe: "Kontakt",
    },
};

export default function NutritionPocketPage() {
    const { locale } = useRouter();
    const currentLocale = (locale || "tr") as LocaleKey;
    const t = translations[currentLocale] || translations.tr;

    const techBadges = [
        { name: "React Native", color: "from-cyan-500 to-blue-500", icon: "/reactnative.svg" },
        { name: "Firebase", color: "from-orange-400 to-amber-500", icon: "🔥" },
        { name: "TypeScript", color: "from-blue-500 to-blue-700", icon: "📘" },
        { name: "Firestore", color: "from-yellow-500 to-orange-500", icon: "🗄️" },
    ];

    const features = [
        { name: t.feature1, icon: "💬", color: "bg-purple-100 text-purple-600" },
        { name: t.feature2, icon: "📊", color: "bg-green-100 text-green-600" },
        { name: t.feature3, icon: "📄", color: "bg-blue-100 text-blue-600" },
        { name: t.feature4, icon: "📅", color: "bg-orange-100 text-orange-600" },
    ];

    return (
        <>
            <Head>
                <title>{t.pageTitle}</title>
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-20">
                        {/* Back Button */}
                        <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group">
                            <span className="group-hover:-translate-x-1 transition-transform">{t.backToProjects}</span>
                        </Link>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left Content */}
                            <div className="text-center lg:text-left">
                                <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-6 border border-cyan-500/30">
                                    {t.heroSubtitle}
                                </span>

                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                                    {t.mainTitle}
                                </h1>

                                <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                                    {t.mainDesc}
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-10">
                                    <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">{t.techStack}</h3>
                                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                        {techBadges.map((tech, index) => (
                                            <span key={index} className={`px-4 py-2 bg-gradient-to-r ${tech.color} rounded-lg text-white text-sm font-medium flex items-center gap-2 shadow-lg`}>
                                                {tech.icon.startsWith('/') ? (
                                                    <Image src={tech.icon} alt={tech.name} width={18} height={18} className="object-contain" />
                                                ) : (
                                                    <span>{tech.icon}</span>
                                                )}
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div>
                                    <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">{t.keyFeatures}</h3>
                                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                        {features.map((feature, index) => (
                                            <span key={index} className={`px-4 py-2 ${feature.color} rounded-lg text-sm font-medium flex items-center gap-2`}>
                                                <span>{feature.icon}</span>
                                                {feature.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Content - Phone Mockup */}
                            <div className="relative flex justify-center">
                                <div className="relative">
                                    {/* Phone Frame */}
                                    <div className="relative bg-slate-800 rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border border-slate-700">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-5 sm:h-7 bg-slate-800 rounded-b-2xl z-10"></div>
                                        <div className="bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden w-[220px] sm:w-[280px] h-[460px] sm:h-[580px]">
                                            <Image
                                                src="/screen/splashScreen2.png"
                                                alt="NutriPocket App"
                                                width={280}
                                                height={580}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Floating Badges - Hidden on mobile */}
                                    <div className="hidden md:block absolute -left-8 top-20 bg-white px-4 py-3 rounded-xl shadow-xl animate-float">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl">🔥</span>
                                            <span className="text-sm font-semibold text-gray-800">{t.firebaseIntegration}</span>
                                        </div>
                                    </div>

                                    <div className="hidden md:block absolute -right-8 top-1/3 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 rounded-xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                        <div className="flex items-center gap-2 text-white">
                                            <span className="text-xl">⚡</span>
                                            <span className="text-sm font-semibold">{t.realtimeSync}</span>
                                        </div>
                                    </div>

                                    <div className="hidden md:block absolute -left-4 bottom-32 bg-green-500 px-4 py-3 rounded-xl shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                                        <div className="flex items-center gap-2 text-white">
                                            <span className="text-xl">🔒</span>
                                            <span className="text-sm font-semibold">{t.secureAuth}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Sections */}
                <section className="relative py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        {/* Section 1 - Role Selection */}
                        <FadeInSection>
                            <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-4 border border-slate-700">
                                        <Image
                                            src="/screen/profil.jpeg"
                                            alt="Role Selection"
                                            width={500}
                                            height={400}
                                            className="rounded-2xl w-full object-contain"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-4">
                                        <span>👤</span> 01
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t.roleTitle}</h2>
                                    <p className="text-gray-300 text-lg leading-relaxed">{t.roleDesc}</p>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* Section 2 - Weight Tracking */}
                        <FadeInSection>
                            <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
                                <div className="order-2 lg:order-1">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
                                        <span>📊</span> 02
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t.weightTitle}</h2>
                                    <p className="text-gray-300 text-lg leading-relaxed">{t.weightDesc}</p>
                                </div>
                                <div className="relative group order-1 lg:order-2">
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-4 border border-slate-700">
                                        <Image
                                            src="/screen/kilotakip.jpeg"
                                            alt="Weight Tracking"
                                            width={500}
                                            height={400}
                                            className="rounded-2xl w-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* Section 3 - Chat */}
                        <FadeInSection>
                            <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-4 border border-slate-700">
                                        <Image
                                            src="/screen/chat.png"
                                            alt="Chat Feature"
                                            width={500}
                                            height={400}
                                            className="rounded-2xl w-full object-contain"
                                        />
                                    </div>
                                    <div className="absolute -top-4 -right-4 bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                                        {t.premiumFeature} ⭐
                                    </div>
                                </div>
                                <div>
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-4">
                                        <span>💬</span> 03
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t.chatTitle}</h2>
                                    <p className="text-gray-300 text-lg leading-relaxed">{t.chatDesc}</p>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* Section 4 - PDF & Calendar */}
                        <FadeInSection>
                            <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
                                <div className="order-2 lg:order-1">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4">
                                        <span>📄</span> 04
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t.pdfTitle}</h2>
                                    <p className="text-gray-300 text-lg leading-relaxed">{t.pdfDesc}</p>
                                </div>
                                <div className="relative group order-1 lg:order-2">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-4 border border-slate-700">
                                        <Image
                                            src="/screen/takip.jpeg"
                                            alt="PDF & Calendar"
                                            width={500}
                                            height={400}
                                            className="rounded-2xl w-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* Section 5 - Calculator */}
                        <FadeInSection>
                            <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-4 border border-slate-700">
                                        <Image
                                            src="/screen/hesaplama.jpeg"
                                            alt="Calculator"
                                            width={500}
                                            height={400}
                                            className="rounded-2xl w-full object-contain"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
                                        <span>🧮</span> 05
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t.calcTitle}</h2>
                                    <p className="text-gray-300 text-lg leading-relaxed">{t.calcDesc}</p>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* Section 6 - Map */}
                        <FadeInSection>
                            <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
                                <div className="order-2 lg:order-1">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full text-sm font-medium mb-4">
                                        <span>📍</span> 06
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t.mapTitle}</h2>
                                    <p className="text-gray-300 text-lg leading-relaxed">{t.mapDesc}</p>
                                </div>
                                <div className="relative group order-1 lg:order-2">
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-4 border border-slate-700">
                                        <Image
                                            src="/screen/konum.png"
                                            alt="Map Integration"
                                            width={500}
                                            height={400}
                                            className="rounded-2xl w-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* Section 7 - Appointment */}
                        <FadeInSection>
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-4 border border-slate-700">
                                        <Image
                                            src="/screen/randevu.png"
                                            alt="Appointment System"
                                            width={500}
                                            height={400}
                                            className="rounded-2xl w-full object-contain"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/20 text-rose-400 rounded-full text-sm font-medium mb-4">
                                        <span>📅</span> 07
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t.appointmentTitle}</h2>
                                    <p className="text-gray-300 text-lg leading-relaxed">{t.appointmentDesc}</p>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-6">
                    <FadeInSection>
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                    {currentLocale === "tr" ? "Benimle Çalışmak İster Misiniz?" : currentLocale === "en" ? "Want to Work With Me?" : "Möchten Sie mit mir arbeiten?"}
                                </h2>
                                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                                    {currentLocale === "tr" ? "Projeleriniz için benimle iletişime geçebilirsiniz." : currentLocale === "en" ? "Feel free to contact me for your projects." : "Kontaktieren Sie mich gerne für Ihre Projekte."}
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <a
                                        href="/yasir-cv.pdf"
                                        download
                                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2"
                                    >
                                        📄 {t.downloadCv}
                                    </a>
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                                    >
                                        ✉️ {t.contactMe}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                </section>
            </div>
        </>
    );
}
