import Image from "next/image";
import Link from "next/link";

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
    "Apple ve Google ile hızlı giriş",
    "Gerçek iş ilanlarını keşfet",
    "Profilini oluştur, öne çık",
    "Dakikalar içinde ilan ver",
    "İlanlarını ve başvurularını yönet",
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
    return (
        <section id="gurjob" className="bg-slate-950 px-4 py-20 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-[0_24px_70px_-35px_rgba(8,145,178,0.55)] backdrop-blur-sm sm:p-8 lg:p-10">
                    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
                        <div>
                            <p className="mb-5 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-cyan-300 uppercase">
                                Öne Çıkan Proje
                            </p>

                            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                                Avrupa&apos;daki Türk işletmelerde iş fırsatlarını keşfet ve doğrudan başvur.
                            </h2>

                            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                                GurJob, Avrupa&apos;daki Türk işletmeler ile iş arayanları buluşturan modern bir platformdur. Gerçek ilanları keşfet, hızlıca başvur veya dakikalar içinde ilan ver.
                            </p>

                            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                                {featureItems.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="/projects"
                                    aria-label="GurJob projesini incele"
                                    className="inline-flex items-center rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                                >
                                    Projeyi İncele
                                </Link>
                                <button
                                    type="button"
                                    disabled
                                    aria-label="GurJob yakında App Store'da"
                                    className="inline-flex cursor-not-allowed items-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300"
                                >
                                    Yakında App Store&apos;da
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
                                Kaydırarak tüm ekranları inceleyebilirsin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
