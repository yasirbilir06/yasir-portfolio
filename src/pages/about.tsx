import Link from "next/link";
import FadeInSection from "../companents/FadeInSection";
import Head from "next/head";
import { useRouter } from "next/router";

export default function About() {
    const { locale } = useRouter();
    const isEnglish = locale === "en";

    return (
        <>
            {/* SEO Kısmı */}
            <Head>
                <title>{isEnglish ? "About Me | Yasir Bilir" : "Hakkımda | Yasir Bilir"}</title>
                <meta
                    name="description"
                    content={
                        isEnglish
                            ? "Learn more about Muhammed Yasir Bilir, a passionate mobile app developer specializing in React Native and Swift, with experience in full-stack systems."
                            : "Muhammed Yasir Bilir hakkında detaylı bilgiler. React Native ve Swift üzerine uzmanlaşmış, tam kapsamlı sistemlerde deneyimli mobil uygulama geliştiricisi."
                    }
                />
                <meta property="og:title" content={isEnglish ? "About Me | Yasir Bilir" : "Hakkımda | Yasir Bilir"} />
                <meta
                    property="og:description"
                    content={
                        isEnglish
                            ? "Learn more about Muhammed Yasir Bilir, a passionate mobile app developer specializing in React Native and Swift, with experience in full-stack systems."
                            : "Muhammed Yasir Bilir hakkında detaylı bilgiler. React Native ve Swift üzerine uzmanlaşmış, tam kapsamlı sistemlerde deneyimli mobil uygulama geliştiricisi."
                    }
                />
                <meta property="og:type" content="website" />
            </Head>

            {/* Sayfa İçeriği */}
            <FadeInSection>
                <div className="bg-gradient-to-b from-cyan-400 via-white to-white py-16 px-4 sm:px-6 min-h-screen">
                    {/* Ana Başlık */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-center text-cyan-700 mb-10">
                        {isEnglish ? "About Me" : "Hakkımda"}
                    </h1>

                    {/* Profil Kartı */}
                    <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-2xl text-gray-800 space-y-10">
                        {/* Kimim Ben */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-cyan-700">{isEnglish ? "Who Am I?" : "Kimim Ben?"}</h2>
                            <p className="text-sm sm:text-base">
                                {isEnglish
                                    ? "Hi! I'm Muhammed Yasir Bilir, a Computer Engineering graduate passionate about mobile app development. I completed my bachelor's at Selçuk University. I live in Ankara, but I was born in Worms, Germany, holding dual citizenship."
                                    : "Merhaba! Ben Muhammed Yasir Bilir, mobil uygulama geliştirme tutkusu olan bir Bilgisayar Mühendisi adayıyım. Selçuk Üniversitesi'nden mezun oldum. Ankara'da yaşıyorum ancak Almanya Worms doğumluyum ve çifte vatandaşım."}
                            </p>
                        </div>

                        {/* Yazılımla Tanışmam */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-cyan-700">{isEnglish ? "My Journey into Software" : "Yazılımla Tanışmam"}</h2>
                            <p className="text-sm sm:text-base">
                                {isEnglish
                                    ? "I was first introduced to programming during university through C++. At first, I was simply curious, but soon realized how exciting it was."
                                    : "Yazılımla ilk tanışmam üniversite yıllarında C++ diliyle oldu. Başta sadece merak ediyordum ama kısa sürede bu alanın bana ne kadar heyecan verdiğini fark ettim."}
                            </p>
                        </div>

                        {/* Flutter ve Firebase */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-cyan-700">{isEnglish ? "Starting with Flutter and Firebase" : "Flutter ve Firebase ile Başlangıç"}</h2>
                            <p className="text-sm sm:text-base">
                                {isEnglish
                                    ? "I discovered Flutter during my university years. I worked on UI components, animation systems, and user experience. I actively used Firebase for authentication and data management."
                                    : "Üniversite yıllarımda Flutter ile tanıştım. Bileşen yapıları, animasyon sistemleri ve kullanıcı deneyimi üzerine çalıştım. Firebase teknolojisini hem kimlik doğrulama hem veri yönetimi için kullandım."}
                            </p>
                        </div>

                        {/* React Native */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-cyan-700">{isEnglish ? "Progress with React Native" : "React Native ile Gelişim"}</h2>
                            <p className="text-sm sm:text-base">
                                {isEnglish
                                    ? "Later, I transitioned to React Native. Its flexibility, TypeScript support, and strong community helped me push my projects further."
                                    : "Daha sonra React Native'e geçtim. Esnek yapısı, TypeScript desteği ve güçlü topluluğu sayesinde projelerimi daha ileri taşıdım."}
                            </p>
                        </div>

                        {/* NutriPocket */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-cyan-700">{isEnglish ? "NutriPocket Application" : "NutriPocket Uygulaması"}</h2>
                            <p className="text-sm sm:text-base">
                                {isEnglish
                                    ? "I developed the NutriPocket application, a platform connecting dietitians and clients. I built the entire interface, data management, and security systems from scratch."
                                    : "Diyetisyen ve danışanları bir araya getiren NutriPocket uygulamasını geliştirdim. Kullanıcı arayüzü, veri yönetimi ve güvenlik sistemlerini sıfırdan kodladım."}
                            </p>
                        </div>

                        {/* Eğitim ve Çalışma Deneyimi */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-cyan-700">{isEnglish ? "Education and Work Experience" : "Eğitim ve Çalışma Deneyimi"}</h2>
                            <p className="text-sm sm:text-base">
                                {isEnglish
                                    ? "I completed my education in Computer Engineering at Selçuk University. During my university years, I gained real-world experience, especially working on embedded systems and SPI communication at On Elektronik."
                                    : "Selçuk Üniversitesi'nde Bilgisayar Mühendisliği bölümünü tamamladım. Üniversite yıllarımda On Elektronik firmasında gömülü sistemler ve SPI haberleşmesi alanlarında gerçek iş deneyimi kazandım."}
                            </p>
                        </div>

                        {/* Hedefler ve Hobiler */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-cyan-700">{isEnglish ? "Goals and Hobbies" : "Hedeflerim ve Hobilerim"}</h2>
                            <p className="text-sm sm:text-base">
                                {isEnglish
                                    ? "Outside of coding, I love playing tennis, strategy games, and traveling. My goal is to develop professional iOS apps using Swift/SwiftUI and build robust backend systems with Java."
                                    : "Kodlamanın dışında tenis oynamayı, strateji oyunları oynamayı ve seyahat etmeyi çok seviyorum. Amacım Swift/SwiftUI ile profesyonel iOS uygulamaları geliştirmek ve Java ile sağlam backend sistemleri kurmak."}
                            </p>
                        </div>

                        {/* CV Butonu */}
                        <div className="text-center mt-8">
                            <Link href="/yasir-cv.pdf" target="_blank">
                                <button className="bg-blue-600 text-white text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-blue-700 transition">
                                    {isEnglish ? "Download My Resume" : "Özgeçmişimi İndir"}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </>
    );
}
