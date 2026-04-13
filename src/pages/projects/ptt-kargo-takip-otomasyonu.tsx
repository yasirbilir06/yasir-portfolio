import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import FadeInSection from "@/companents/FadeInSection";

type LocaleKey = "tr" | "en" | "de";

type TranslationSchema = {
    pageTitle: string;
    metaDescription: string;
    backToProjects: string;
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    heroTags: string[];
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    statusLabel: string;
    statusText: string;
    sections: {
        overview: string;
        problem: string;
        solution: string;
        features: string;
        impact: string;
        technical: string;
        strength: string;
        gallery: string;
        cta: string;
    };
    overviewText: string;
    problemText: string;
    solutionText: string;
    features: string[];
    impactText: string;
    technicalItems: string[];
    strengthPoints: string[];
    galleryIntro: string;
    galleryCaptions: string[];
    galleryAlts: string[];
    finalCtaText: string;
    finalCtaButton: string;
    closeLabel: string;
};

const galleryAssets = [
    {
        src: "/images/ptt-automation/ptt_gui.png",
        width: 1170,
        height: 830,
        objectClass: "object-cover",
    },
    {
        src: "/images/ptt-automation/ptt_excel_output.png",
        width: 1170,
        height: 795,
        objectClass: "object-cover",
    },
    {
        src: "/images/ptt-automation/ptt_logo.png",
        width: 1158,
        height: 605,
        objectClass: "object-contain",
    },
    {
        src: "/images/ptt-automation/ptt_desktop_shortcut.png",
        width: 450,
        height: 450,
        objectClass: "object-contain",
    },
] as const;

const translations: Record<LocaleKey, TranslationSchema> = {
    tr: {
        pageTitle: "PTT Kargo Takip Otomasyonu | Python & Selenium LegalTech Projesi",
        metaDescription:
            "Python ve Selenium ile geliştirilen PTT Kargo Takip Otomasyonu: PDF'den takip numarası okuma, otomatik PTT sorgulama, Excel'e sonuç aktarma ve operasyonel verimlilik sağlayan LegalTech çözümü.",
        backToProjects: "← Projelere Dön",
        heroBadge: "Case Study / Proje Detayı",
        heroTitle: "PTT Kargo Takip Otomasyonu",
        heroSubtitle:
            "Mia Hukuk'ta operasyonel süreçleri hızlandırmak için geliştirilen Python + Selenium tabanlı otomasyon sistemi",
        heroDescription:
            "Manuel yapılan kargo takip operasyonunu uçtan uca otomatikleştiren bu sistem; PDF verisini okuyup PTT sorgularını gerçekleştirir, sonuçları sınıflandırır ve ekip için Excel çıktısı üretir.",
        heroTags: ["Python", "Selenium", "Tkinter GUI", "Excel Automation", "PDF Processing", "LegalTech"],
        heroPrimaryCta: "Projelere Dön",
        heroSecondaryCta: "İletişime Geç",
        statusLabel: "Durum",
        statusText: "Sistem aktif kullanımda, operasyonel süreçte doğrudan değer üretiyor.",
        sections: {
            overview: "Proje Genel Bakış",
            problem: "Problem",
            solution: "Çözüm",
            features: "Temel Özellikler",
            impact: "Sonuç / Etki",
            technical: "Teknik Yapı",
            strength: "Neden Güçlü Bir Portfolyo Projesi?",
            gallery: "Ürün ve Çıktı Görselleri",
            cta: "İletişim",
        },
        overviewText:
            "PTT Kargo Takip Otomasyonu, Mia Hukuk'ta yüksek hacimli dosya süreçlerinde tekrar eden operasyonları ortadan kaldırmak için geliştirilen gerçek bir üretim otomasyonudur. Amaç sadece işlem hızını artırmak değil, aynı zamanda hatayı azaltmak, ekip verimliliğini yükseltmek ve süreci ölçülebilir hale getirmektir. LegalTech alanında süreçleri Python + Selenium otomasyonları ile geliştirmeye devam ediyorum.",
        problemText:
            "Mia Hukuk'ta çok sayıda dosya için kargo takip işlemleri manuel olarak yapılıyordu. Bu süreç zaman kaybına, tekrar eden operasyona ve insan hatasına açıktı. Amaç, PDF dosyalarından takip numaralarını otomatik okuyup PTT sistemi üzerinden sorgulama yaparak sonuçları tek bir akışta toplamak ve operasyonu hızlandırmaktı.",
        solutionText:
            "Python ve Selenium kullanılarak geliştirilen bu otomasyon sistemi, PDF'lerden takip numaralarını alıp PTT sisteminde otomatik sorgulama yapar. Teslim / iade gibi durumları sınıflandırır, sonuçları Excel'e işler ve daha önce işlenmiş dosyaları tekrar sorgulamayarak operasyonel verimlilik sağlar. Sistem ayrıca kullanıcı dostu bir masaüstü arayüz ile ekip tarafından kolayca kullanılabilir.",
        features: [
            "PDF'lerden takip numarası okuma",
            "Selenium ile otomatik PTT sorgulama",
            "Teslim / iade / durum sınıflandırma",
            "Excel'e otomatik sonuç aktarımı",
            "İşlenen dosyaları tekrar sorgulamama",
            "GUI ile kolay kullanım",
        ],
        impactText:
            "Bu proje sayesinde manuel yapılan yüzlerce kargo takip işlemi otomatik hale getirildi. Operasyonel süreç hızlandı, tekrar eden iş yükü azaldı ve ekip verimliliği artırıldı. LegalTech alanında doğrudan fayda sağlayan pratik bir otomasyon çözümü ortaya çıktı.",
        technicalItems: [
            "Python tabanlı otomasyon",
            "Selenium ile web etkileşimi",
            "PDF verisi işleme",
            "Excel çıktı üretimi",
            "Desktop GUI desteği",
            "Tekrar sorgu önleme mantığı",
        ],
        strengthPoints: [
            "Gerçek kullanım senaryosunda çalışan, operasyonel çıktısı ölçülebilir bir otomasyon projesi.",
            "Veri toplama, web otomasyonu, sınıflandırma ve raporlama adımlarını tek iş akışında birleştiriyor.",
            "Teknik çözümü ekip kullanımına uygun GUI ile ürünleştirerek benimsenmeyi kolaylaştırıyor.",
            "LegalTech bağlamında zaman tasarrufu ve hata azaltımını birlikte hedefleyen güçlü bir mühendislik yaklaşımı sunuyor.",
        ],
        galleryIntro:
            "Aşağıdaki görseller; otomasyon arayüzünü, logo entegrasyonunu, Excel çıktısını ve masaüstü kullanım akışını gösterir.",
        galleryCaptions: ["Uygulama arayüzü", "Excel sonuç çıktısı", "PTT logo entegrasyonu", "Masaüstü kısayol"],
        galleryAlts: [
            "PTT Kargo Takip Otomasyonu masaüstü arayüz ekran görüntüsü",
            "PTT otomasyonundan üretilen Excel sonuç tablosu",
            "PTT kargo takip sistemi için kullanılan logo görseli",
            "PTT sorgu otomasyon uygulamasının masaüstü kısayolu",
        ],
        finalCtaText: "Benzer otomasyonlar veya özel yazılım çözümleri için iletişime geçin.",
        finalCtaButton: "İletişime Geç",
        closeLabel: "Kapat",
    },
    en: {
        pageTitle: "PTT Cargo Tracking Automation | Python & Selenium LegalTech Case Study",
        metaDescription:
            "A production LegalTech automation built with Python and Selenium: extract tracking numbers from PDFs, automate PTT queries, classify outcomes, and export to Excel.",
        backToProjects: "← Back to Projects",
        heroBadge: "Case Study / Project Detail",
        heroTitle: "PTT Cargo Tracking Automation",
        heroSubtitle:
            "A Python + Selenium automation system built to accelerate operational workflows at Mia Hukuk",
        heroDescription:
            "This solution automates repetitive cargo tracking work end-to-end by reading tracking data from PDFs, querying PTT, classifying outcomes, and generating Excel-ready outputs for the team.",
        heroTags: ["Python", "Selenium", "Tkinter GUI", "Excel Automation", "PDF Processing", "LegalTech"],
        heroPrimaryCta: "Back to Projects",
        heroSecondaryCta: "Contact",
        statusLabel: "Status",
        statusText: "Actively used in operations and delivering measurable process improvements.",
        sections: {
            overview: "Project Overview",
            problem: "Problem",
            solution: "Solution",
            features: "Key Features",
            impact: "Outcome / Impact",
            technical: "Technical Structure",
            strength: "Why This Is a Strong Portfolio Project",
            gallery: "Product & Output Gallery",
            cta: "Contact",
        },
        overviewText:
            "PTT Cargo Tracking Automation is a real production workflow developed for Mia Hukuk to remove repetitive manual operations in high-volume file handling. The goal was to improve speed, reduce human error, and make process output consistent. I continue to improve LegalTech operations with practical Python + Selenium automation systems.",
        problemText:
            "At Mia Hukuk, cargo tracking for a high number of files was handled manually. This created time loss, repetitive operations, and an elevated risk of human error. The objective was to automatically read tracking numbers from PDF files, query the PTT system, and gather results in one flow.",
        solutionText:
            "Built with Python and Selenium, the automation reads tracking numbers from PDFs and runs automated PTT queries. It classifies delivery/return statuses, writes outcomes to Excel, and skips already processed files to protect operational efficiency. A user-friendly desktop GUI enables smooth team adoption.",
        features: [
            "Read tracking numbers from PDFs",
            "Automated PTT queries with Selenium",
            "Delivery / return / status classification",
            "Automatic Excel export",
            "No duplicate processing for completed files",
            "Easy-to-use GUI",
        ],
        impactText:
            "The project automated hundreds of previously manual tracking checks. Operational flow became faster, repetitive workload dropped, and team productivity increased. It produced direct value in a practical LegalTech context.",
        technicalItems: [
            "Python-based automation core",
            "Web interaction with Selenium",
            "PDF data parsing",
            "Excel output generation",
            "Desktop GUI support",
            "Duplicate-query prevention logic",
        ],
        strengthPoints: [
            "A production-used automation with measurable business impact.",
            "Combines parsing, web automation, classification, and reporting in one clean pipeline.",
            "Strong product thinking through team-focused GUI design, not just script-level output.",
            "Demonstrates practical engineering value in LegalTech operations.",
        ],
        galleryIntro: "The visuals below show the automation interface, Excel output, branding asset, and desktop usage context.",
        galleryCaptions: ["Application interface", "Excel output", "PTT logo asset", "Desktop shortcut"],
        galleryAlts: [
            "Desktop interface of the PTT cargo tracking automation",
            "Excel output produced by the PTT automation",
            "PTT logo used in the automation interface",
            "Desktop shortcut icon for the PTT query application",
        ],
        finalCtaText: "Contact me for similar automations or custom software solutions.",
        finalCtaButton: "Get in Touch",
        closeLabel: "Close",
    },
    de: {
        pageTitle: "PTT Sendungsverfolgungs-Automation | Python & Selenium LegalTech Fallstudie",
        metaDescription:
            "LegalTech-Automation mit Python und Selenium: Trackingnummern aus PDFs lesen, PTT-Abfragen automatisieren, Ergebnisse klassifizieren und in Excel exportieren.",
        backToProjects: "← Zurück zu Projekten",
        heroBadge: "Case Study / Projektdetail",
        heroTitle: "PTT Sendungsverfolgungs-Automation",
        heroSubtitle:
            "Ein Python + Selenium Automationssystem zur Beschleunigung operativer Prozesse bei Mia Hukuk",
        heroDescription:
            "Die Lösung automatisiert wiederkehrende Versandverfolgung vollständig: PDF-Daten lesen, PTT automatisch abfragen, Status klassifizieren und Excel-Ausgaben für das Team erzeugen.",
        heroTags: ["Python", "Selenium", "Tkinter GUI", "Excel Automation", "PDF Processing", "LegalTech"],
        heroPrimaryCta: "Zurück zu Projekten",
        heroSecondaryCta: "Kontakt",
        statusLabel: "Status",
        statusText: "Aktiv im Einsatz und mit messbarem operativem Mehrwert.",
        sections: {
            overview: "Projektüberblick",
            problem: "Problem",
            solution: "Lösung",
            features: "Kernfunktionen",
            impact: "Ergebnis / Wirkung",
            technical: "Technische Struktur",
            strength: "Warum dieses Projekt im Portfolio stark ist",
            gallery: "Produkt- und Ergebnisgalerie",
            cta: "Kontakt",
        },
        overviewText:
            "Die PTT Sendungsverfolgungs-Automation ist ein produktiv genutzter Workflow für Mia Hukuk, entwickelt zur Reduzierung repetitiver manueller Aufgaben in hochvolumigen Aktenprozessen. Ich entwickle LegalTech-Prozesse kontinuierlich mit praxisnahen Python- und Selenium-Automationen weiter.",
        problemText:
            "Bei Mia Hukuk wurde die Sendungsverfolgung für viele Akten manuell durchgeführt. Das führte zu Zeitverlust, wiederholten Arbeitsschritten und erhöhter Fehleranfälligkeit. Ziel war es, Trackingnummern aus PDF-Dateien automatisiert auszulesen und PTT-Abfragen in einem durchgängigen Ablauf zu bündeln.",
        solutionText:
            "Das mit Python und Selenium entwickelte System liest Trackingnummern aus PDFs und führt automatische PTT-Abfragen aus. Es klassifiziert Zustell-/Rücksendestatus, schreibt Ergebnisse nach Excel und vermeidet Doppelabfragen bereits verarbeiteter Dateien. Eine benutzerfreundliche Desktop-GUI erleichtert die Teamnutzung.",
        features: [
            "Trackingnummern aus PDFs lesen",
            "Automatische PTT-Abfragen mit Selenium",
            "Zustellung / Rücksendung / Status klassifizieren",
            "Automatischer Excel-Export",
            "Keine erneute Abfrage verarbeiteter Dateien",
            "Einfache Nutzung per GUI",
        ],
        impactText:
            "Durch das Projekt wurden Hunderte manuelle Tracking-Prüfungen automatisiert. Prozesse wurden schneller, repetitive Last sank, und die Teamproduktivität stieg deutlich. Eine praxisnahe LegalTech-Lösung mit direktem Nutzen.",
        technicalItems: [
            "Python-basierter Automationskern",
            "Web-Interaktion mit Selenium",
            "PDF-Datenverarbeitung",
            "Excel-Ausgabeerzeugung",
            "Desktop-GUI-Unterstützung",
            "Logik zur Vermeidung von Doppelabfragen",
        ],
        strengthPoints: [
            "Produktiv eingesetzte Automation mit klar messbarer Wirkung.",
            "Verbindet Parsing, Browser-Automation, Klassifikation und Reporting in einem Ablauf.",
            "Technische Lösung mit nutzerorientierter GUI statt reinem Script-Output.",
            "Zeigt praxisorientierte Engineering-Umsetzung im LegalTech-Umfeld.",
        ],
        galleryIntro:
            "Die folgenden Visuals zeigen die Benutzeroberfläche, Excel-Ausgabe, das Branding-Element und den Desktop-Einsatzkontext.",
        galleryCaptions: ["Anwendungsoberfläche", "Excel-Ausgabe", "PTT-Logo", "Desktop-Verknüpfung"],
        galleryAlts: [
            "Desktop-Oberfläche der PTT-Sendungsverfolgungs-Automation",
            "Excel-Ausgabe der PTT-Automation",
            "PTT-Logo im Kontext der Anwendung",
            "Desktop-Verknüpfung der PTT-Abfrage-Anwendung",
        ],
        finalCtaText: "Für ähnliche Automationen oder individuelle Softwarelösungen kontaktieren Sie mich.",
        finalCtaButton: "Kontakt aufnehmen",
        closeLabel: "Schließen",
    },
};

export default function PttCargoAutomationCaseStudy() {
    const { locale } = useRouter();
    const currentLocale = (locale || "tr") as LocaleKey;
    const t = translations[currentLocale] || translations.tr;
    const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

    const galleryItems = useMemo(
        () =>
            galleryAssets.map((asset, index) => ({
                ...asset,
                caption: t.galleryCaptions[index],
                alt: t.galleryAlts[index],
            })),
        [t.galleryAlts, t.galleryCaptions],
    );

    useEffect(() => {
        function onEscape(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActiveImageIndex(null);
            }
        }

        if (activeImageIndex !== null) {
            window.addEventListener("keydown", onEscape);
        }

        return () => {
            window.removeEventListener("keydown", onEscape);
        };
    }, [activeImageIndex]);

    return (
        <>
            <Head>
                <title>{t.pageTitle}</title>
                <meta name="description" content={t.metaDescription} />
                <meta property="og:title" content={t.pageTitle} />
                <meta property="og:description" content={t.metaDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="/images/ptt-automation/ptt_gui.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t.pageTitle} />
                <meta name="twitter:description" content={t.metaDescription} />
                <meta name="twitter:image" content="/images/ptt-automation/ptt_gui.png" />
            </Head>

            <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
                <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 py-14 text-slate-100 dark:border-slate-800 sm:py-20">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-20 top-24 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
                        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
                        <div className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-indigo-500/15 blur-3xl" />
                    </div>

                    <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                        <Link
                            href="/projects"
                            className="inline-flex items-center text-sm font-medium text-cyan-200 transition hover:text-white"
                        >
                            {t.backToProjects}
                        </Link>

                        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                            <FadeInSection>
                                <div>
                                    <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.11em] text-cyan-100">
                                        {t.heroBadge}
                                    </span>

                                    <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                                        {t.heroTitle}
                                    </h1>
                                    <p className="mt-4 text-lg text-cyan-200">{t.heroSubtitle}</p>
                                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                                        {t.heroDescription}
                                    </p>

                                    <div className="mt-7 flex flex-wrap gap-2.5">
                                        {t.heroTags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-100 backdrop-blur"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <Link
                                            href="/projects"
                                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-cyan-400 hover:to-blue-400"
                                        >
                                            {t.heroPrimaryCta}
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                                        >
                                            {t.heroSecondaryCta}
                                        </Link>
                                    </div>

                                    <div className="mt-8 rounded-2xl border border-cyan-200/20 bg-white/5 p-4 backdrop-blur-sm">
                                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100">{t.statusLabel}</p>
                                        <p className="mt-2 text-sm text-slate-200">{t.statusText}</p>
                                    </div>
                                </div>
                            </FadeInSection>

                            <FadeInSection>
                                <div className="space-y-4">
                                    <div className="hidden grid-cols-2 gap-4 sm:grid">
                                        {galleryItems.map((image, index) => (
                                            <button
                                                key={image.src}
                                                type="button"
                                                onClick={() => setActiveImageIndex(index)}
                                                className="group overflow-hidden rounded-2xl border border-white/15 bg-slate-900/70 p-2 text-left shadow-xl transition hover:-translate-y-1 hover:border-cyan-200/50"
                                            >
                                                <div className="overflow-hidden rounded-xl bg-slate-950/80">
                                                    <Image
                                                        src={image.src}
                                                        alt={image.alt}
                                                        width={image.width}
                                                        height={image.height}
                                                        className={`h-44 w-full ${image.objectClass} transition duration-300 group-hover:scale-[1.02]`}
                                                        priority={index === 0}
                                                        sizes="(max-width: 1024px) 45vw, 22vw"
                                                    />
                                                </div>
                                                <p className="mt-2 px-1 pb-1 text-xs font-medium text-slate-200">{image.caption}</p>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:hidden">
                                        {galleryItems.map((image, index) => (
                                            <button
                                                key={`${image.src}-mobile`}
                                                type="button"
                                                onClick={() => setActiveImageIndex(index)}
                                                className="min-w-[82%] snap-center overflow-hidden rounded-2xl border border-white/15 bg-slate-900/80 p-2 text-left shadow-lg"
                                            >
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    width={image.width}
                                                    height={image.height}
                                                    className={`h-52 w-full rounded-xl ${image.objectClass}`}
                                                    priority={index === 0}
                                                    sizes="80vw"
                                                />
                                                <p className="mt-2 px-1 pb-1 text-xs font-medium text-slate-200">{image.caption}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </FadeInSection>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-14 sm:px-6 sm:py-20">
                    <div className="mx-auto max-w-6xl space-y-8">
                        <FadeInSection>
                            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-8">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t.sections.overview}</h2>
                                <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">{t.overviewText}</p>
                            </article>
                        </FadeInSection>

                        <div className="grid gap-6 lg:grid-cols-2">
                            <FadeInSection>
                                <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-8">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t.sections.problem}</h2>
                                    <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">{t.problemText}</p>
                                </article>
                            </FadeInSection>

                            <FadeInSection>
                                <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-8">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t.sections.solution}</h2>
                                    <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">{t.solutionText}</p>
                                </article>
                            </FadeInSection>
                        </div>
                    </div>
                </section>

                <section className="px-4 pb-14 sm:px-6 sm:pb-20">
                    <div className="mx-auto max-w-6xl">
                        <FadeInSection>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">{t.sections.features}</h2>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {t.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
                                    >
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeInSection>
                    </div>
                </section>

                <section className="px-4 pb-14 sm:px-6 sm:pb-20">
                    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
                        <FadeInSection>
                            <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-8">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.sections.impact}</h2>
                                <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">{t.impactText}</p>
                            </article>
                        </FadeInSection>

                        <FadeInSection>
                            <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-8">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.sections.technical}</h2>
                                <ul className="mt-4 space-y-3">
                                    {t.technicalItems.map((item) => (
                                        <li
                                            key={item}
                                            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </FadeInSection>
                    </div>
                </section>

                <section className="px-4 pb-14 sm:px-6 sm:pb-20">
                    <div className="mx-auto max-w-6xl">
                        <FadeInSection>
                            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-8">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.sections.strength}</h2>
                                <ul className="mt-5 space-y-3">
                                    {t.strengthPoints.map((point) => (
                                        <li key={point} className="flex gap-3 text-slate-600 dark:text-slate-300">
                                            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-500" />
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </FadeInSection>
                    </div>
                </section>

                <section className="px-4 pb-14 sm:px-6 sm:pb-20">
                    <div className="mx-auto max-w-6xl">
                        <FadeInSection>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">{t.sections.gallery}</h2>
                            <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">{t.galleryIntro}</p>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                {galleryItems.map((image, index) => (
                                    <button
                                        key={`${image.src}-gallery`}
                                        type="button"
                                        onClick={() => setActiveImageIndex(index)}
                                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70"
                                    >
                                        <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800/70">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={image.width}
                                                height={image.height}
                                                className={`h-52 w-full ${image.objectClass} transition duration-300 group-hover:scale-[1.015]`}
                                                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                                            />
                                        </div>
                                        <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-200">{image.caption}</p>
                                    </button>
                                ))}
                            </div>
                        </FadeInSection>
                    </div>
                </section>

                <section className="px-4 pb-16 sm:px-6 sm:pb-24">
                    <div className="mx-auto max-w-5xl">
                        <FadeInSection>
                            <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white shadow-lg sm:p-10">
                                <p className="text-sm font-semibold uppercase tracking-[0.11em] text-cyan-100">{t.sections.cta}</p>
                                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{t.finalCtaText}</h2>
                                <Link
                                    href="/contact"
                                    className="mt-7 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-50"
                                >
                                    {t.finalCtaButton}
                                </Link>
                            </div>
                        </FadeInSection>
                    </div>
                </section>

                {activeImageIndex !== null && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
                        role="dialog"
                        aria-modal="true"
                        onClick={() => setActiveImageIndex(null)}
                    >
                        <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
                            <button
                                type="button"
                                onClick={() => setActiveImageIndex(null)}
                                className="absolute right-3 top-3 z-10 rounded-full border border-white/30 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-white"
                            >
                                {t.closeLabel}
                            </button>
                            <div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-900 p-2 shadow-2xl">
                                <Image
                                    src={galleryItems[activeImageIndex].src}
                                    alt={galleryItems[activeImageIndex].alt}
                                    width={galleryItems[activeImageIndex].width}
                                    height={galleryItems[activeImageIndex].height}
                                    className={`max-h-[80vh] w-full rounded-xl ${galleryItems[activeImageIndex].objectClass}`}
                                    sizes="90vw"
                                />
                            </div>
                            <p className="mt-3 text-center text-sm text-slate-200">{galleryItems[activeImageIndex].caption}</p>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}
