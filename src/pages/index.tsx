import dynamic from "next/dynamic";
import ExperienceTimeline from "@/companents/ExperienceTimeline";

// HeroSection SSR olmadan import ediliyor
const HeroSection = dynamic(() => import("../companents/HeroSection"), {
    ssr: false,
});

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-gray-800 dark:white dark:text-white">
            <HeroSection />
            <ExperienceTimeline />
        </main>
    );
}
