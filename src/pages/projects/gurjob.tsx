import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import FadeInSection from "@/companents/FadeInSection";
import TechBadge from "@/companents/TechBadge";

type LocaleKey = "tr" | "en" | "de";

const screenshots = [
    "/images/gurjob/01_welcome.png",
    "/images/gurjob/02_login.png",
    "/images/gurjob/03_listings.png",
    "/images/gurjob/04_profile.png",
    "/images/gurjob/05_post.png",
    "/images/gurjob/06_manage.png",
];

const techGroupVisuals = [
    {
        icon: "/tech/swiftui.png",
        iconMode: "brand",
        accent: "from-orange-500/20 to-rose-500/5",
        label: {
            tr: "Mobil uygulama katmanı",
            en: "Mobile application layer",
            de: "Mobile Anwendungsschicht",
        },
    },
    {
        icon: "/tech/supabase.svg",
        iconMode: "brand",
        accent: "from-emerald-500/20 to-emerald-500/5",
        label: {
            tr: "Backend ve veri altyapısı",
            en: "Backend and data infrastructure",
            de: "Backend- und Dateninfrastruktur",
        },
    },
    {
        icon: "/tech/apple.svg",
        iconMode: "mono",
        accent: "from-slate-500/20 to-slate-500/5",
        label: {
            tr: "Kimlik bütünlüğü ve güven",
            en: "Identity integrity and trust",
            de: "Identitätsintegrität und Vertrauen",
        },
    },
    {
        icon: "/tech/stripe.svg",
        iconMode: "brand",
        accent: "from-indigo-500/20 to-violet-500/5",
        label: {
            tr: "Monetization ve yayınlama",
            en: "Monetization and publication",
            de: "Monetarisierung und Veröffentlichung",
        },
    },
    {
        icon: "/tech/nextdotjs.svg",
        iconMode: "mono",
        accent: "from-cyan-500/20 to-sky-500/5",
        label: {
            tr: "Portfolyo sunum katmanı",
            en: "Portfolio presentation layer",
            de: "Portfolio-Präsentationsschicht",
        },
    },
] as const;

const translations = {
    tr: {
        pageTitle: "GurJob | Proje Detayı",
        metaDescription:
            "GurJob case study: Avrupa'daki Türk işletmeler ile iş arayanları buluşturan çok taraflı mobil platformun ürün ve mühendislik yaklaşımı.",
        backToProjects: "← Projelere Dön",
        heroBadge: "Case Study",
        heroSubtitle: "Çok taraflı mobil işe alım platformu",
        heroTitle: "GurJob",
        heroDescription:
            "Avrupa'daki Türk işletmelerde iş fırsatlarını keşfet ve doğrudan başvur. GurJob, iş arayanlar ile işverenleri güven odaklı bir deneyimde buluşturan ürün odaklı mobil platformdur.",
        primaryCta: "Projeler Sayfasına Dön",
        secondaryCta: "Yakında App Store'da",
        statusLabel: "Ürün Durumu",
        statusValue: "MVP tamamlandı, canlı yayın ve ölçekleme hazırlığı devam ediyor.",
        sectionTitles: {
            overview: "Proje Genel Bakış",
            problem: "Çözülen Problem",
            solution: "Çözüm Yaklaşımı",
            vision: "Ürün Vizyonu",
            features: "Temel Ürün Özellikleri",
            architecture: "Teknik Mimari ve Kararlar",
            challenges: "Çözülen Kritik Zorluklar",
            techStack: "Kullanılan Teknolojiler",
            whyStrong: "Bu Proje Neden Güçlü Bir Portfolyo Çalışması?",
            showcase: "Ürün Ekranları",
        },
        overview:
            "GurJob, iki farklı kullanıcı tipini (işveren ve iş arayan) aynı ürün içinde yöneten, onboarding, ilan yayınlama, başvuru yönetimi ve ödeme akışlarını bir araya getiren gerçek bir ürün geliştirme çalışmasıdır.",
        problem:
            "Türk işletmelerin Avrupa'da doğru adaya hızlı ulaşması, iş arayanların ise güvenilir ilanlara doğrudan erişmesi zordu. Pazarda çok sayıda dağınık kanal ve düşük güven sinyali bulunuyordu.",
        solution:
            "Rol bazlı onboarding, doğrulanmış sosyal giriş, profil tabanlı ilan verme ve ödeme onayı ile ilanı yayınlama modelini birleştirdim. Böylece hem kullanıcı güveni hem de işveren tarafında yayın kalitesi arttı.",
        vision:
            "GurJob'ın vizyonu, sadece ilan listeleyen bir uygulama olmak değil; işveren güvenini, aday kalitesini ve dönüşüm oranını birlikte optimize eden çok taraflı bir istihdam ekosistemi kurmaktır.",
        features: [
            {
                title: "Rol Bazlı Onboarding",
                description:
                    "Kullanıcı yolculuğu ilk andan itibaren İşveren / İş Arayan olarak ayrılıyor. Her rol için farklı ekranlar, farklı veri gereksinimleri ve farklı aksiyon setleri yönetiliyor.",
            },
            {
                title: "Apple & Google ile Sosyal Giriş",
                description:
                    "Sosyal auth deneyimini hızlı tuttum; ancak rol kararlılığı için veri katmanında ekstra kontrol mekanizmaları ekledim.",
            },
            {
                title: "Profil Tabanlı İlan Akışı",
                description:
                    "İlan formunda tekrar veri istemek yerine profil verisi kaynak alındı. Bu sayede tekrar giriş azalırken, veri tutarlılığı arttı.",
            },
            {
                title: "İlan ve Başvuru Yönetimi",
                description:
                    "İşveren tarafında yayınlanan ilanları ve gelen başvuruları takip etmeyi kolaylaştıran temiz, karar odaklı bir yönetim deneyimi tasarlandı.",
            },
            {
                title: "Ödeme Sonrası Yayınlama",
                description:
                    "İlanın yayınlanmasını ödeme doğrulamasına bağlayarak iş modelini netleştirdim ve spam/kalitesiz ilan riskini düşürdüm.",
            },
            {
                title: "Responsive Mobil UX",
                description:
                    "Ekran hiyerarşisi, okunabilirlik ve akış sürekliliği gözetilerek farklı cihaz boyutlarında tutarlı bir mobil deneyim kurgulandı.",
            },
        ],
        architecture: [
            {
                title: "Kimlik ve Rol Bütünlüğü",
                description:
                    "Tek sosyal hesap = tek immutable rol kuralı uygulandı. Rol değişimi UI seviyesinde değil, veri kaynağında engellendi.",
                points: [
                    "DB'de saklanan rol tek doğruluk kaynağı (source of truth) olarak ele alındı.",
                    "Sosyal giriş sonrası mevcut kayıt kontrolü ile rol sapması engellendi.",
                    "Rol switching bug'larını önlemek için onboarding state değil persisted role referans alındı.",
                ],
            },
            {
                title: "Supabase Senkron ve Veri Tutarlılığı",
                description:
                    "Gerçek dünyada karşılaşılan auth.users trigger davranışları ve public.users senkron sorunları için korumalı senkron stratejisi geliştirildi.",
                points: [
                    "auth.users -> public.users senkronunda idempotent kontrol yaklaşımı benimsendi.",
                    "Eksik profil kayıtları için güvenli tamamlama adımları kurgulandı.",
                    "Profil tamamlanmadan ilan yayınlama akışı kilitlenerek kalite korundu.",
                ],
            },
            {
                title: "Monetization ve Yayınlama Akışı",
                description:
                    "Stripe ödeme süreci, webhook tabanlı yayın onayı ile bağlandı. UI tarafı ödeme sonucu yerine backend doğrulamasını referans alacak şekilde tasarlandı.",
                points: [
                    "Ödeme başarılı sinyali webhook üzerinden doğrulanarak ilan aktif edildi.",
                    "Başarısız/yarım kalan ödeme senaryoları için güvenli bekleme durumu tanımlandı.",
                    "Canlı ortama taşınabilir, audit edilebilir bir yayınlama mantığı kurgulandı.",
                ],
            },
        ],
        challenges: [
            {
                title: "Role Integrity Problemleri",
                description:
                    "Aynı sosyal hesabın farklı rollerde açılması veya rol değişimi denenmesi gibi edge-case'ler veri modelinde kesin kurallarla kapatıldı.",
            },
            {
                title: "Auth Trigger ve Kullanıcı Senkronu",
                description:
                    "Supabase tarafında auth.users ile public.users arasında oluşabilecek gecikme/eksik kayıt sorunları için senkron ve fallback akışları güçlendirildi.",
            },
            {
                title: "Profil Eksikliği Nedeniyle Bozulan Akışlar",
                description:
                    "İlan oluşturma sürecine profile completeness kontrolü eklendi; eksik profilde kullanıcı doğru adımlara yönlendirildi.",
            },
            {
                title: "UX ve Monetization Dengesini Kurmak",
                description:
                    "Kullanıcıyı gereksiz sürtünmeye sokmadan ödeme adımını güvenli şekilde yerleştiren, dönüşüm odaklı bir yayınlama deneyimi tasarlandı.",
            },
        ],
        techStack: [
            {
                title: "Mobil Ürün Geliştirme",
                items: ["Swift", "SwiftUI", "iOS odaklı akış tasarımı", "Responsive mobile UX"],
            },
            {
                title: "Backend ve Veri Katmanı",
                items: ["Supabase Auth", "PostgreSQL (public.users)", "Trigger & sync mantığı", "Rol bazlı veri modeli"],
            },
            {
                title: "Kimlik Doğrulama ve Güven",
                items: ["Sign in with Apple", "Google Sign-In", "Immutable role enforcement", "Source-of-truth role validation"],
            },
            {
                title: "Ödeme ve Yayınlama",
                items: ["Stripe ödeme akışı", "Webhook tabanlı yayın doğrulaması", "Production/live readiness"],
            },
            {
                title: "Portfolyo ve Sunum Katmanı",
                items: ["Next.js", "TypeScript", "Tailwind tabanlı tasarım sistemi", "Vercel dağıtım akışı"],
            },
        ],
        whyStrong: [
            "Sadece UI demo değil; auth, veri tutarlılığı, ödeme ve iş kuralı entegrasyonlarını birlikte çözen gerçek ürün geliştirme çalışmasıdır.",
            "Çok taraflı platform düşüncesi ile işveren ve iş arayan deneyimi aynı anda optimize edilmiştir.",
            "Gerçek üretim problemleri (rol bütünlüğü, senkronizasyon, edge-case auth davranışları) teknik olarak ele alınmıştır.",
            "Ürün kararları ve mühendislik kararları birlikte yürütülmüştür: güven, dönüşüm, ölçeklenebilirlik dengesi korunmuştur.",
        ],
        screenshotCaptions: [
            "Karşılama ve değer önerisi",
            "Sosyal giriş ve kimlik doğrulama",
            "Gerçek ilan keşfi",
            "Profil yönetimi",
            "İlan oluşturma akışı",
            "İlan ve başvuru yönetimi",
        ],
        showcaseDescription:
            "Aşağıdaki ekranlar onboarding'den ilan yönetimine kadar uçtan uca ürün akışını gösterir.",
        footerTitle: "GurJob ile ürün düşüncesi + mühendislik disiplini birlikte sunuldu.",
        footerDescription:
            "Bu çalışma, iş başvurularında gerçek ürün sorumluluğu alabileceğimi; sadece ekran geliştirmek değil, uçtan uca ürün güvenilirliği kurabildiğimi gösteriyor.",
        footerCta: "Projeler Sayfası",
    },
    en: {
        pageTitle: "GurJob | Project Case Study",
        metaDescription:
            "GurJob case study: a multi-sided mobile platform connecting Turkish businesses across Europe with job seekers through secure and conversion-focused flows.",
        backToProjects: "← Back to Projects",
        heroBadge: "Case Study",
        heroSubtitle: "Multi-sided mobile hiring platform",
        heroTitle: "GurJob",
        heroDescription:
            "Discover job opportunities in Turkish businesses across Europe and apply directly. GurJob is a product-driven mobile platform that connects employers and job seekers with trust-first flows.",
        primaryCta: "Back to Projects",
        secondaryCta: "Coming Soon to App Store",
        statusLabel: "Product Status",
        statusValue: "MVP is complete, launch and scaling preparation is in progress.",
        sectionTitles: {
            overview: "Project Overview",
            problem: "Problem",
            solution: "Solution",
            vision: "Product Vision",
            features: "Key Product Features",
            architecture: "Technical Architecture & Decisions",
            challenges: "Critical Challenges Solved",
            techStack: "Tech Stack",
            whyStrong: "Why This Is a Strong Portfolio Project",
            showcase: "Product Screens",
        },
        overview:
            "GurJob is a real product build that manages two user types (employers and job seekers) in one platform, combining onboarding, listing publication, application management, and payment flows.",
        problem:
            "Turkish businesses in Europe needed faster access to qualified candidates, while job seekers needed direct access to trustworthy listings. The market had fragmented channels and weak trust signals.",
        solution:
            "I combined role-based onboarding, verified social auth, profile-powered listing creation, and payment-gated publishing. This improved user trust and listing quality.",
        vision:
            "The vision is not another listing app, but a multi-sided employment ecosystem that optimizes employer trust, candidate quality, and conversion together.",
        features: [
            {
                title: "Role-Based Onboarding",
                description:
                    "The journey branches from the first step as Employer / Job Seeker, with dedicated interfaces, required data, and actions for each role.",
            },
            {
                title: "Apple & Google Social Login",
                description:
                    "I kept social auth friction low while adding data-layer controls to guarantee role integrity.",
            },
            {
                title: "Profile-Driven Listing Flow",
                description:
                    "Instead of re-entering repetitive data during listing creation, profile data is reused as source of truth.",
            },
            {
                title: "Listing & Application Management",
                description:
                    "Employer-side dashboards were designed for clear decision making over active listings and incoming applications.",
            },
            {
                title: "Payment-Confirmed Publishing",
                description:
                    "Listing publication is tied to verified payment confirmation, reducing spam and supporting a sustainable business model.",
            },
            {
                title: "Responsive Mobile UX",
                description:
                    "The UI flow is tuned for readability and continuity across mobile sizes without clutter.",
            },
        ],
        architecture: [
            {
                title: "Identity & Role Integrity",
                description:
                    "I enforced one social account = one immutable role. Role switching is blocked at the data source, not only in UI.",
                points: [
                    "Persisted DB role is treated as the single source of truth.",
                    "Post-auth account checks prevent role mismatches.",
                    "Onboarding state is never trusted over persisted role.",
                ],
            },
            {
                title: "Supabase Sync & Data Consistency",
                description:
                    "I handled real-world Supabase auth.users trigger behavior and public.users sync edge cases with safe sync logic.",
                points: [
                    "Idempotent sync strategy between auth.users and public.users.",
                    "Safe completion flows for missing or partial profile records.",
                    "Profile completeness is required before listing publication.",
                ],
            },
            {
                title: "Monetization & Publication Pipeline",
                description:
                    "Stripe payment is connected to webhook-verified listing publication. Backend verification drives publication state.",
                points: [
                    "Listings are activated only after webhook-verified payment success.",
                    "Failed/incomplete payment scenarios remain safely pending.",
                    "Launch-ready flow built for production reliability and auditability.",
                ],
            },
        ],
        challenges: [
            {
                title: "Role Integrity Failures",
                description:
                    "Edge cases such as trying to open the same social account with different roles were prevented with strict model rules.",
            },
            {
                title: "Auth Trigger & User Sync",
                description:
                    "Potential lag/missing record states between Supabase auth.users and public.users were handled with stronger sync and fallback behavior.",
            },
            {
                title: "Broken Flows from Incomplete Profiles",
                description:
                    "Listing flow now includes profile completeness checks and directs users to missing steps before publication.",
            },
            {
                title: "Balancing UX with Monetization",
                description:
                    "The payment step is integrated with minimal friction while keeping publication logic secure and conversion-focused.",
            },
        ],
        techStack: [
            {
                title: "Mobile Product Development",
                items: ["Swift", "SwiftUI", "iOS-first flow design", "Responsive mobile UX"],
            },
            {
                title: "Backend & Data Layer",
                items: ["Supabase Auth", "PostgreSQL (public.users)", "Trigger & sync logic", "Role-based data model"],
            },
            {
                title: "Authentication & Trust",
                items: ["Sign in with Apple", "Google Sign-In", "Immutable role enforcement", "Source-of-truth role validation"],
            },
            {
                title: "Payments & Publication",
                items: ["Stripe payment flow", "Webhook-driven publication confirmation", "Production/live readiness"],
            },
            {
                title: "Portfolio Presentation Layer",
                items: ["Next.js", "TypeScript", "Tailwind-based design system", "Vercel deployment flow"],
            },
        ],
        whyStrong: [
            "This is not a static UI demo; it combines auth, consistency rules, payments, and product logic in one real build.",
            "It solves multi-sided platform constraints by balancing employer and job seeker experiences.",
            "It addresses production-grade issues such as role integrity, sync failures, and auth edge cases.",
            "Product decisions and engineering decisions were aligned around trust, conversion, and scalability.",
        ],
        screenshotCaptions: [
            "Welcome and value proposition",
            "Social sign-in and authentication",
            "Real listing discovery",
            "Profile management",
            "Listing creation flow",
            "Listing and application management",
        ],
        showcaseDescription:
            "The following screens show the full product flow from onboarding to listing management.",
        footerTitle: "GurJob showcases product thinking and engineering discipline together.",
        footerDescription:
            "This case study demonstrates end-to-end product ownership: not only building screens, but building reliable product behavior.",
        footerCta: "Projects Page",
    },
    de: {
        pageTitle: "GurJob | Projekt Case Study",
        metaDescription:
            "GurJob Case Study: Eine mehrseitige mobile Plattform, die türkische Unternehmen in Europa mit Jobsuchenden durch sichere und konversionsstarke Abläufe verbindet.",
        backToProjects: "← Zurück zu Projekten",
        heroBadge: "Case Study",
        heroSubtitle: "Mehrseitige mobile Recruiting-Plattform",
        heroTitle: "GurJob",
        heroDescription:
            "Entdecke Jobchancen in türkischen Unternehmen in Europa und bewirb dich direkt. GurJob verbindet Arbeitgeber und Jobsuchende in einem vertrauensbasierten mobilen Produkt.",
        primaryCta: "Zurück zu Projekten",
        secondaryCta: "Bald im App Store",
        statusLabel: "Produktstatus",
        statusValue: "MVP ist abgeschlossen, Launch- und Skalierungsvorbereitung läuft.",
        sectionTitles: {
            overview: "Projektüberblick",
            problem: "Problem",
            solution: "Lösungsansatz",
            vision: "Produktvision",
            features: "Zentrale Produktfunktionen",
            architecture: "Technische Architektur & Entscheidungen",
            challenges: "Gelöste kritische Herausforderungen",
            techStack: "Tech Stack",
            whyStrong: "Warum dieses Projekt stark im Portfolio ist",
            showcase: "Produktansichten",
        },
        overview:
            "GurJob ist ein echtes Produktprojekt, das zwei Nutzergruppen (Arbeitgeber und Jobsuchende) in einer Plattform vereint und Onboarding, Veröffentlichungen, Bewerbungsmanagement sowie Bezahlfluss zusammenführt.",
        problem:
            "Türkische Unternehmen in Europa hatten Schwierigkeiten, schnell passende Kandidaten zu erreichen. Jobsuchende brauchten gleichzeitig direkten Zugang zu vertrauenswürdigen Stellenanzeigen.",
        solution:
            "Ich habe rollenbasiertes Onboarding, verifizierte Social-Logins, profilbasierte Veröffentlichung und zahlungsgebundene Aktivierung kombiniert. So wurden Vertrauen und Anzeigenqualität erhöht.",
        vision:
            "Die Vision ist keine einfache Jobbörse, sondern ein mehrseitiges Beschäftigungsökosystem, das Arbeitgebervertrauen, Kandidatenqualität und Conversion gemeinsam optimiert.",
        features: [
            {
                title: "Rollenbasiertes Onboarding",
                description:
                    "Ab dem ersten Schritt verzweigt der Flow in Arbeitgeber / Jobsuchende mit eigener Oberfläche, eigenen Datenanforderungen und Aktionen.",
            },
            {
                title: "Apple & Google Social Login",
                description:
                    "Der Login bleibt schnell, während zusätzliche Datenlogik die Rollenintegrität absichert.",
            },
            {
                title: "Profilgesteuerter Anzeigen-Flow",
                description:
                    "Statt redundanter Dateneingabe werden Profildaten als Quelle der Wahrheit wiederverwendet.",
            },
            {
                title: "Verwaltung von Anzeigen und Bewerbungen",
                description:
                    "Auf Arbeitgeberseite wurde ein klarer, entscheidungsorientierter Management-Flow umgesetzt.",
            },
            {
                title: "Veröffentlichung nach Zahlungsbestätigung",
                description:
                    "Die Anzeigenveröffentlichung ist an verifizierte Zahlung gekoppelt und reduziert Spam sowie Qualitätsrisiken.",
            },
            {
                title: "Responsive Mobile UX",
                description:
                    "Lesbarkeit, klare Hierarchie und ein durchgängiger Flow wurden für unterschiedliche Gerätegrößen optimiert.",
            },
        ],
        architecture: [
            {
                title: "Identität & Rollenintegrität",
                description:
                    "Regel: ein Social-Account = eine unveränderliche Rolle. Rollenwechsel wird auf Datenebene verhindert, nicht nur im UI.",
                points: [
                    "Persistierte DB-Rolle ist die einzige Source of Truth.",
                    "Post-Auth Prüfungen verhindern Rollenabweichungen.",
                    "Onboarding-State überschreibt niemals persistierte Rollendaten.",
                ],
            },
            {
                title: "Supabase-Sync & Datenkonsistenz",
                description:
                    "Reale Edge Cases bei auth.users Triggern und public.users Sync wurden mit robusten Sync-Strategien gelöst.",
                points: [
                    "Idempotente Sync-Logik zwischen auth.users und public.users.",
                    "Sichere Vervollständigung bei fehlenden Profil-Datensätzen.",
                    "Ohne vollständiges Profil keine Anzeigenveröffentlichung.",
                ],
            },
            {
                title: "Monetarisierung & Publishing-Pipeline",
                description:
                    "Stripe-Zahlung wurde mit webhook-verifizierter Veröffentlichung verbunden. Der Backend-Status steuert die Aktivierung.",
                points: [
                    "Aktivierung erst nach webhook-bestätigter Zahlung.",
                    "Fehlgeschlagene/abgebrochene Zahlungen bleiben in sicherem Pending-State.",
                    "Produktionsreifer Ablauf mit Fokus auf Verlässlichkeit und Nachvollziehbarkeit.",
                ],
            },
        ],
        challenges: [
            {
                title: "Probleme bei Rollenintegrität",
                description:
                    "Edge Cases wie derselbe Social-Account in unterschiedlichen Rollen wurden durch strikte Modellregeln geschlossen.",
            },
            {
                title: "Auth-Trigger und User-Synchronisierung",
                description:
                    "Mögliche Verzögerungen oder fehlende Datensätze zwischen auth.users und public.users wurden mit Fallback-Logik abgesichert.",
            },
            {
                title: "Instabile Flows bei unvollständigem Profil",
                description:
                    "Vor der Veröffentlichung wird Profilvollständigkeit geprüft und der Nutzer gezielt durch fehlende Schritte geführt.",
            },
            {
                title: "Balance zwischen UX und Monetarisierung",
                description:
                    "Der Bezahlfluss wurde so integriert, dass er konversionsfreundlich bleibt und zugleich Veröffentlichungslogik absichert.",
            },
        ],
        techStack: [
            {
                title: "Mobile Produktentwicklung",
                items: ["Swift", "SwiftUI", "iOS-orientiertes Flow-Design", "Responsive mobile UX"],
            },
            {
                title: "Backend & Datenebene",
                items: ["Supabase Auth", "PostgreSQL (public.users)", "Trigger- & Sync-Logik", "Rollenbasiertes Datenmodell"],
            },
            {
                title: "Authentifizierung & Vertrauen",
                items: ["Sign in with Apple", "Google Sign-In", "Immutable Role Enforcement", "Source-of-Truth Rollenprüfung"],
            },
            {
                title: "Zahlung & Veröffentlichung",
                items: ["Stripe-Zahlungsfluss", "Webhook-basierte Veröffentlichungsbestätigung", "Production/Live Readiness"],
            },
            {
                title: "Portfolio-Präsentationsschicht",
                items: ["Next.js", "TypeScript", "Tailwind-basiertes Designsystem", "Vercel Deployment-Flow"],
            },
        ],
        whyStrong: [
            "Kein statisches UI-Showcase, sondern ein reales Produkt mit Auth-, Konsistenz-, Zahlungs- und Business-Logik.",
            "Mehrseitige Plattformanforderungen wurden für Arbeitgeber und Jobsuchende gleichzeitig umgesetzt.",
            "Produktionsnahe Probleme wie Rollenintegrität, Synchronisierung und Auth-Edge-Cases wurden technisch gelöst.",
            "Produkt- und Engineering-Entscheidungen wurden gemeinsam auf Vertrauen, Conversion und Skalierbarkeit ausgerichtet.",
        ],
        screenshotCaptions: [
            "Willkommen und Value Proposition",
            "Social Login und Authentifizierung",
            "Echte Stellenangebote entdecken",
            "Profilverwaltung",
            "Anzeigen erstellen",
            "Anzeigen- und Bewerbungsmanagement",
        ],
        showcaseDescription:
            "Die folgenden Screens zeigen den kompletten Produktfluss vom Onboarding bis zum Anzeigenmanagement.",
        footerTitle: "GurJob verbindet Produktdenken und Engineering-Disziplin.",
        footerDescription:
            "Diese Case Study zeigt End-to-End Produktverantwortung: nicht nur Oberflächen bauen, sondern verlässliches Produktverhalten liefern.",
        footerCta: "Projektseite",
    },
};

export default function GurJobProjectPage() {
    const { locale } = useRouter();
    const currentLocale = (locale || "tr") as LocaleKey;
    const t = translations[currentLocale] || translations.tr;

    return (
        <>
            <Head>
                <title>{t.pageTitle}</title>
                <meta name="description" content={t.metaDescription} />
                <meta property="og:title" content={t.pageTitle} />
                <meta property="og:description" content={t.metaDescription} />
                <meta property="og:type" content="article" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
                <section className="px-4 pt-8 pb-14 sm:px-6 sm:pt-12 sm:pb-20">
                    <div className="mx-auto max-w-6xl">
                        <Link
                            href="/projects"
                            className="mb-8 inline-flex items-center text-sm text-slate-300 transition-colors hover:text-white sm:mb-10"
                        >
                            {t.backToProjects}
                        </Link>

                        <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-[0_30px_80px_-45px_rgba(6,182,212,0.5)] sm:p-9">
                            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                                <div>
                                    <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-cyan-300 uppercase">
                                        {t.heroBadge}
                                    </span>
                                    <p className="mt-4 text-sm text-slate-300">{t.heroSubtitle}</p>
                                    <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">{t.heroTitle}</h1>
                                    <p className="mt-5 max-w-2xl text-slate-300 sm:text-lg">{t.heroDescription}</p>

                                    <div className="mt-7 flex flex-wrap gap-3">
                                        <Link
                                            href="/projects"
                                            className="inline-flex rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                                        >
                                            {t.primaryCta}
                                        </Link>
                                        <button
                                            type="button"
                                            disabled
                                            className="inline-flex cursor-not-allowed rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300"
                                        >
                                            {t.secondaryCta}
                                        </button>
                                    </div>

                                    <div className="mt-7 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                                        <p className="text-xs font-semibold tracking-[0.12em] text-slate-400 uppercase">{t.statusLabel}</p>
                                        <p className="mt-2 text-sm text-slate-200">{t.statusValue}</p>
                                    </div>
                                </div>

                                <div className="mx-auto w-full max-w-[280px] rounded-[2.2rem] border border-white/10 bg-slate-950 p-2 shadow-2xl">
                                    <Image
                                        src={screenshots[0]}
                                        alt={t.screenshotCaptions[0]}
                                        width={1290}
                                        height={2796}
                                        priority
                                        sizes="(max-width: 1024px) 60vw, 280px"
                                        className="h-auto w-full rounded-[1.8rem] object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-12 sm:px-6">
                    <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2">
                        <FadeInSection>
                            <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                                <h2 className="text-lg font-semibold text-white">{t.sectionTitles.overview}</h2>
                                <p className="mt-3 text-sm leading-relaxed text-slate-300">{t.overview}</p>
                            </article>
                        </FadeInSection>

                        <FadeInSection>
                            <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                                <h2 className="text-lg font-semibold text-white">{t.sectionTitles.problem}</h2>
                                <p className="mt-3 text-sm leading-relaxed text-slate-300">{t.problem}</p>
                            </article>
                        </FadeInSection>

                        <FadeInSection>
                            <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                                <h2 className="text-lg font-semibold text-white">{t.sectionTitles.solution}</h2>
                                <p className="mt-3 text-sm leading-relaxed text-slate-300">{t.solution}</p>
                            </article>
                        </FadeInSection>

                        <FadeInSection>
                            <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                                <h2 className="text-lg font-semibold text-white">{t.sectionTitles.vision}</h2>
                                <p className="mt-3 text-sm leading-relaxed text-slate-300">{t.vision}</p>
                            </article>
                        </FadeInSection>
                    </div>
                </section>

                <section className="px-4 py-12 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <FadeInSection>
                            <h2 className="text-2xl font-semibold text-white sm:text-3xl">{t.sectionTitles.features}</h2>
                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                                {t.features.map((feature) => (
                                    <article key={feature.title} className="rounded-2xl border border-white/10 bg-slate-900/65 p-5">
                                        <h3 className="text-base font-semibold text-cyan-300">{feature.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-300">{feature.description}</p>
                                    </article>
                                ))}
                            </div>
                        </FadeInSection>
                    </div>
                </section>

                <section className="px-4 py-12 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <FadeInSection>
                            <h2 className="text-2xl font-semibold text-white sm:text-3xl">{t.sectionTitles.architecture}</h2>
                            <div className="mt-6 grid gap-4 lg:grid-cols-3">
                                {t.architecture.map((block) => (
                                    <article key={block.title} className="rounded-2xl border border-cyan-400/15 bg-slate-900/75 p-5">
                                        <h3 className="text-base font-semibold text-cyan-300">{block.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-300">{block.description}</p>
                                        <ul className="mt-4 space-y-2">
                                            {block.points.map((point) => (
                                                <li key={point} className="flex items-start gap-2 text-sm text-slate-200">
                                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                ))}
                            </div>
                        </FadeInSection>
                    </div>
                </section>

                <section className="px-4 py-12 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <FadeInSection>
                            <h2 className="text-2xl font-semibold text-white sm:text-3xl">{t.sectionTitles.challenges}</h2>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                {t.challenges.map((challenge) => (
                                    <article key={challenge.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                                        <h3 className="text-base font-semibold text-white">{challenge.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-300">{challenge.description}</p>
                                    </article>
                                ))}
                            </div>
                        </FadeInSection>
                    </div>
                </section>

                <section className="px-4 py-12 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <FadeInSection>
                            <h2 className="text-2xl font-semibold text-white sm:text-3xl">{t.sectionTitles.techStack}</h2>
                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                                {t.techStack.map((group, index) => {
                                    const visual = techGroupVisuals[index];

                                    return (
                                        <article key={group.title} className="rounded-2xl border border-white/10 bg-slate-900/75 p-5 shadow-[0_12px_32px_-20px_rgba(6,182,212,0.5)]">
                                            <div className={`inline-flex items-center gap-2 rounded-xl border border-white/10 bg-gradient-to-r ${visual?.accent || "from-white/10 to-white/5"} px-3 py-1.5`}>
                                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-950/70">
                                                    {visual?.icon ? (
                                                        <Image
                                                            src={visual.icon}
                                                            alt={group.title}
                                                            width={16}
                                                            height={16}
                                                            className={visual.iconMode === "mono" ? "invert" : ""}
                                                        />
                                                    ) : (
                                                        <svg className="h-4 w-4 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                                            <path d="M12 3v18M3 12h18" />
                                                        </svg>
                                                    )}
                                                </span>
                                                <span className="text-[11px] tracking-[0.08em] text-slate-300 uppercase">
                                                    {visual?.label[currentLocale] || group.title}
                                                </span>
                                            </div>

                                            <h3 className="mt-4 text-base font-semibold text-cyan-300">{group.title}</h3>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {group.items.map((item) => (
                                                    <TechBadge key={item} label={item} variant="dark" />
                                                ))}
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </FadeInSection>
                    </div>
                </section>

                <section className="px-4 py-12 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <FadeInSection>
                            <article className="rounded-2xl border border-cyan-400/15 bg-slate-900/75 p-6">
                                <h2 className="text-2xl font-semibold text-white sm:text-3xl">{t.sectionTitles.whyStrong}</h2>
                                <ul className="mt-5 space-y-3">
                                    {t.whyStrong.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-200">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </FadeInSection>
                    </div>
                </section>

                <section className="px-4 py-12 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <FadeInSection>
                            <h2 className="text-2xl font-semibold text-white sm:text-3xl">{t.sectionTitles.showcase}</h2>
                            <p className="mt-3 text-sm text-slate-300">{t.showcaseDescription}</p>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {screenshots.map((src, index) => (
                                    <article key={src} className="rounded-2xl border border-white/10 bg-slate-900/75 p-3">
                                        <Image
                                            src={src}
                                            alt={t.screenshotCaptions[index]}
                                            width={1290}
                                            height={2796}
                                            sizes="(max-width: 640px) 86vw, (max-width: 1024px) 44vw, 30vw"
                                            className="h-auto w-full rounded-xl object-cover"
                                            quality={95}
                                        />
                                        <p className="mt-3 text-xs text-slate-300">{t.screenshotCaptions[index]}</p>
                                    </article>
                                ))}
                            </div>
                        </FadeInSection>
                    </div>
                </section>

                <section className="px-4 pt-10 pb-20 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <FadeInSection>
                            <div className="rounded-3xl border border-white/10 bg-cyan-500/10 p-7 text-center sm:p-10">
                                <h3 className="text-2xl font-semibold text-white sm:text-3xl">{t.footerTitle}</h3>
                                <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
                                    {t.footerDescription}
                                </p>
                                <Link
                                    href="/projects"
                                    className="mt-7 inline-flex rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                                >
                                    {t.footerCta}
                                </Link>
                            </div>
                        </FadeInSection>
                    </div>
                </section>
            </div>
        </>
    );
}
