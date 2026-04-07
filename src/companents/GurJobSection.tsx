import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type LocaleKey = "tr" | "en" | "de";

const screenshotCards = [
    {
        src: "/images/gurjob/01_welcome.png",
        alt: "GurJob karşılama ekranı",
    },
    {
        src: "/images/gurjob/02_login.png",
        alt: "GurJob giriş ekranı",
    },
    {
        src: "/images/gurjob/03_listings.png",
        alt: "GurJob ilanlar ekranı",
    },
    {
        src: "/images/gurjob/04_profile.png",
        alt: "GurJob profil ekranı",
    },
    {
        src: "/images/gurjob/05_post.png",
        alt: "GurJob ilan oluşturma ekranı",
    },
    {
        src: "/images/gurjob/06_manage.png",
        alt: "GurJob ilan ve başvuru yönetimi ekranı",
    },
];

const featureItems = [
    {
        tr: "Apple ve Google ile hızlı giriş",
        en: "Fast sign in with Apple and Google",
        de: "Schneller Login mit Apple und Google",
    },
    {
        tr: "Gerçek iş ilanlarını keşfet",
        en: "Discover real job listings",
        de: "Echte Stellenanzeigen entdecken",
    },
    {
        tr: "Profilini oluştur, öne çık",
        en: "Build your profile and stand out",
        de: "Profil erstellen und hervorstechen",
    },
    {
        tr: "Dakikalar içinde ilan ver",
        en: "Publish listings in minutes",
        de: "Anzeigen in Minuten veröffentlichen",
    },
    {
        tr: "İlanlarını ve başvurularını yönet",
        en: "Manage listings and applications",
        de: "Anzeigen und Bewerbungen verwalten",
    },
];

const desktopOffsets = [
    "md:translate-y-0",
    "md:translate-y-6",
    "md:translate-y-2",
    "md:translate-y-8",
    "md:translate-y-4",
    "md:translate-y-10",
];

export default function GurJobSection() {
    const { locale } = useRouter();
    const currentLocale = (locale || "tr") as LocaleKey;

    const content = {
        tr: {
            badge: "Öne Çıkan Proje",
            headline: "Avrupa'daki Türk işletmelerde iş fırsatlarını keşfet ve doğrudan başvur.",
            description:
                "GurJob, Avrupa'daki Türk işletmeler ile iş arayanları buluşturan modern bir platformdur. Gerçek ilanları keşfet, hızlıca başvur veya dakikalar içinde ilan ver.",
            reviewProject: "Projeyi İncele",
            appStoreSoon: "Yakında App Store'da",
            swipeHint: "Kaydırarak tüm ekranları inceleyebilirsin.",
        },
        en: {
            badge: "Featured Project",
            headline: "Discover job opportunities in Turkish businesses across Europe and apply directly.",
            description:
                "GurJob is a modern platform connecting Turkish businesses in Europe with job seekers. Discover real listings, apply quickly, or publish jobs in minutes.",
            reviewProject: "View Case Study",
            appStoreSoon: "Coming Soon to App Store",
            swipeHint: "Swipe to explore all product screens.",
        },
        de: {
            badge: "Hervorgehobenes Projekt",
            headline: "Entdecke Jobchancen in türkischen Unternehmen in Europa und bewirb dich direkt.",
            description:
                "GurJob ist eine moderne Plattform, die türkische Unternehmen in Europa mit Jobsuchenden verbindet. Entdecke echte Stellenangebote, bewirb dich schnell oder veröffentliche Anzeigen in wenigen Minuten.",
            reviewProject: "Case Study ansehen",
            appStoreSoon: "Bald im App Store",
            swipeHint: "Per Wischen alle Produktansichten entdecken.",
        },
    };
    const t = content[currentLocale] || content.tr;

    return (
        <section id="gurjob" className="bg-slate-950 px-4 py-20 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-[0_24px_70px_-35px_rgba(8,145,178,0.55)] backdrop-blur-sm sm:p-8 lg:p-10">
                    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
                        <div>
                            <p className="mb-5 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-cyan-300 uppercase">
                                {t.badge}
                            </p>

                            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                                {t.headline}
                            </h2>

                            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                                {t.description}
                            </p>

                            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                                {featureItems.map((item, index) => (
                                    <li
                                        key={`${index}-${item.tr}`}
                                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                                        {item[currentLocale]}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="/projects/gurjob"
                                    aria-label={t.reviewProject}
                                    className="inline-flex items-center rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                                >
                                    {t.reviewProject}
                                </Link>
                                <button
                                    type="button"
                                    disabled
                                    aria-label={t.appStoreSoon}
                                    className="inline-flex cursor-not-allowed items-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300"
                                >
                                    {t.appStoreSoon}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="hidden md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
                                {screenshotCards.map((item, index) => (
                                    <div
                                        key={item.src}
                                        className={`${desktopOffsets[index]} rounded-[26px] border border-white/10 bg-slate-950/90 p-2 shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-1`}
                                    >
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={1290}
                                            height={2796}
                                            sizes="(max-width: 1024px) 35vw, 17vw"
                                            className="h-auto w-full rounded-[20px] object-cover"
                                            quality={95}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="md:hidden">
                                <div className="overflow-x-auto pb-2">
                                    <div className="flex w-max snap-x snap-mandatory gap-3">
                                        {screenshotCards.map((item) => (
                                            <div
                                                key={item.src}
                                                className="w-[210px] snap-start rounded-[24px] border border-white/10 bg-slate-950/90 p-2 shadow-md shadow-black/30"
                                            >
                                                <Image
                                                    src={item.src}
                                                    alt={item.alt}
                                                    width={1290}
                                                    height={2796}
                                                    sizes="70vw"
                                                    className="h-auto w-full rounded-[18px] object-cover"
                                                    quality={95}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-xs text-slate-400 md:hidden">
                                {t.swipeHint}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
