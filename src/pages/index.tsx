import dynamic from "next/dynamic";
import ExperienceTimeline from "@/companents/ExperienceTimeline";
import GurJobSection from "@/companents/GurJobSection";
import Head from "next/head";

// HeroSection SSR olmadan import ediliyor
const HeroSection = dynamic(() => import("../companents/HeroSection"), {
    ssr: false,
});

export default function Home() {
    return (
        <>
            <Head>
                <title>Yasir Bilir | Mobile App Developer</title>
                <meta name="description" content="Yasir Bilir - React Native ve Swift ile modern mobil uygulamalar geliştiren yazılım mühendisi." />
                <meta property="og:title" content="Yasir Bilir | Mobile App Developer" />
                <meta property="og:description" content="React Native ve Swift ile modern mobil uygulamalar geliştiriyorum." />
                <meta property="og:type" content="website" />
            </Head>
            <main className="min-h-screen bg-slate-900">
                <HeroSection />
                <GurJobSection />
                <ExperienceTimeline />
            </main>
        </>
    );
}
