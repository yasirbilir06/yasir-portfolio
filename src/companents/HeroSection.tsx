import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import techAnimation from "../../public/animations/tech.json";
import { Typewriter } from "react-simple-typewriter";
import { useRouter } from "next/router";

export default function HeroSection() {
    const { locale } = useRouter();

    const content = {
        tr: {
            greeting: "Merhaba, Ben Muhammed Yasir BİLİR 👋",
            description: "Mobil uygulama geliştiricisiyim. React Native, Firebase ve Swift ile projeler geliştiriyorum. Şu anda Nutri Pocket üzerinde çalışıyorum 🚀",
            button: "Projelerime Göz At",
            terminalWords: [
                "npm run dev",
                "Proje derleniyor...",
                "✅ Başarıyla başlatıldı",
                "console.log('Yasir Bilir rocks 🚀')",
            ],
        },
        en: {
            greeting: "Hi, I'm Muhammed Yasir BİLİR 👋",
            description: "I am a mobile app developer. I build projects with React Native, Firebase, and Swift. Currently working on Nutri Pocket 🚀",
            button: "View My Projects",
            terminalWords: [
                "npm run dev",
                "Project is building...",
                "✅ Successfully started",
                "console.log('Yasir Bilir rocks 🚀')",
            ],
        },
    };

    const t = locale === "en" ? content.en : content.tr;

    return (
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-cyan-400 via-cyan-100 to-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Sol: Fotoğraf */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src="/yasir.jpg"
                        alt="Yasir Bilir"
                        width={300}
                        height={500}
                        className="rounded-full border-4 border-cyan-600 shadow-lg"
                    />
                </div>

                {/* Sağ: Metinler + Buton + Animasyon */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-700 mb-4">
                        {t.greeting}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6">
                        {t.description}
                    </p>
                    <Link href="/projects">
                        <button className="bg-cyan-600 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-cyan-700 transition mb-6">
                            {t.button}
                        </button>
                    </Link>

                    {/* Animasyon + Terminal */}
                    <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                        {/* Lottie */}
                        <div className="w-full max-w-[200px]">
                            <Lottie animationData={techAnimation} loop={true} />
                        </div>

                        {/* Terminal */}
                        <div className="bg-black text-green-400 font-mono px-4 py-3 rounded-lg shadow-lg w-full max-w-xs text-sm">
                            <div className="text-xs text-gray-400 mb-1">Terminal</div>
                            <Typewriter
                                words={t.terminalWords}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={45}
                                deleteSpeed={30}
                                delaySpeed={1500}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
