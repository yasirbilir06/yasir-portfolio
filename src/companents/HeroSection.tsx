import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import techAnimation from "../../public/animations/tech.json";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
    return (
        <section className="py-20 px-5 bg-gradient-to-b from-cyan-400 via-cyan-100 to-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Sol: Profil Fotoğrafı */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src="/yasir.jpg"
                        alt="Yasir Bilir"
                        width={300}
                        height={500}
                        className="rounded-full border-4 border-cyan-600 shadow-lg"
                    />
                </div>

                {/* Sağ: Yazı + Buton + Animasyon + Terminal */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-cyan-700 mb-4">
                        Merhaba, Ben Muhammed Yasir BİLİR 👋
                    </h1>
                    <p className="text-lg md:text-xl text-gray-800 mb-6">
                        Mobil uygulama geliştiricisiyim. React Native, Firebase ve Swift ile projeler geliştiriyorum.
                        Şu anda <strong>NutriPocket</strong> üzerinde çalışıyorum 🚀
                    </p>
                    <Link href="/projects">
                        <button className="bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-700 transition mb-6">
                            Projelerime Göz At
                        </button>
                    </Link>

                    {/* Animasyon + Terminal birlikte */}
                    <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                        {/* Lottie */}
                        <div className="w-[200px]">
                            <Lottie animationData={techAnimation} loop={true} />
                        </div>

                        {/* Terminal Kutusu */}
                        <div className="bg-black text-green-400 font-mono px-4 py-3 rounded-lg shadow-lg w-[260px] text-sm">
                            <div className="text-xs text-gray-400 mb-1">Terminal</div>
                            <Typewriter
                                words={[
                                    "npm run dev",
                                    "Proje derleniyor...",
                                    "✅ Başarıyla başlatıldı",
                                    "console.log('Yasir Bilir rocks 🚀')",
                                ]}
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
