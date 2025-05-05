import { useRouter } from "next/router";
import FadeInSection from "../companents/FadeInSection";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Projects() {
    const { locale } = useRouter();
    const isEnglish = locale === "en";

    return (
        <>
            {/* SEO Başlangıcı */}
            <Head>
                <title>{isEnglish ? "Projects | Yasir Bilir" : "Projeler | Yasir Bilir"}</title>
                <meta
                    name="description"
                    content={
                        isEnglish
                            ? "Explore projects developed by Muhammed Yasir Bilir, including mobile applications built with React Native and machine learning projects using YOLOv."
                            : "Muhammed Yasir Bilir tarafından geliştirilen projeleri keşfedin. React Native ile mobil uygulamalar ve YOLOv ile makine öğrenmesi projeleri."
                    }
                />
                <meta
                    property="og:title"
                    content={isEnglish ? "Projects | Yasir Bilir" : "Projeler | Yasir Bilir"}
                />
                <meta
                    property="og:description"
                    content={
                        isEnglish
                            ? "Explore projects developed by Muhammed Yasir Bilir, including mobile applications built with React Native and machine learning projects using YOLOv."
                            : "Muhammed Yasir Bilir tarafından geliştirilen projeleri keşfedin. React Native ile mobil uygulamalar ve YOLOv ile makine öğrenmesi projeleri."
                    }
                />
                <meta property="og:type" content="website" />
            </Head>

            {/* Sayfa İçeriği */}
            <main className="bg-white py-20 px-6 min-h-screen">
                <div className="max-w-6xl mx-auto space-y-20">
                    {/* NutriPocket */}
                    <FadeInSection>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* Fotoğraf */}
                            <div className="w-full md:w-1/2">
                                <Image
                                    src="/screen/splashScreen2.png"
                                    alt="NutriPocket Screenshot"
                                    width={300}
                                    height={400}
                                    className="rounded-lg shadow-lg object-cover"
                                />
                            </div>
                            {/* Açıklama */}
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                                    {isEnglish
                                        ? "NutriPocket – Dietitian Application"
                                        : "NutriPocket – Diyetisyen Uygulaması"}
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    {isEnglish
                                        ? "NutriPocket is a mobile application I developed for dietitians and clients. Users can track their daily calorie intake, meals, and water consumption, while dietitians can analyze patient data and create personalized plans."
                                        : "NutriPocket, diyetisyenler ve danışanlar için geliştirdiğim mobil uygulama. Kullanıcılar günlük kalori, öğün ve su tüketimini takip edebiliyor; diyetisyenler ise hastalarının verilerini analiz edip kişiye özel planlar oluşturabiliyor."}
                                </p>
                                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                    <li>{isEnglish ? "Cross-platform development with React Native" : "React Native ile çapraz platform mobil geliştirme"}</li>
                                    <li>{isEnglish ? "Firebase Authentication and Firestore data management" : "Firebase Authentication ve Firestore tabanlı veri yönetimi"}</li>
                                    <li>{isEnglish ? "Real-time notifications and offline support" : "Gerçek zamanlı bildirimler ve offline destek"}</li>
                                    <li>{isEnglish ? "Elegant UI/UX design following Material Design" : "Material Design uyumlu şık UI/UX"}</li>
                                </ul>
                                <Link href="/projects/nutripocket">
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                                        {isEnglish ? "View Details" : "Detayları Gör"}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* Araç Sınıflandırma (YOLOv) */}
                    <FadeInSection>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* Açıklama */}
                            <div className="w-full md:w-1/2 md:order-2">
                                <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                                    {isEnglish
                                        ? "Vehicle Classification – YOLOv Project"
                                        : "Araç Sınıflandırma – YOLOv Projesi"}
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    {isEnglish
                                        ? "This project, developed as our graduation thesis, captures real-time images from cameras and detects and classifies different vehicle types (cars, trucks, motorcycles, etc.) using the YOLOv algorithm. It displays live video streams and reports results in real-time through a web interface."
                                        : "Bitirme projesi olarak geliştirdiğimiz bu uygulama, kameralardan anlık görüntü alıp içinde farklı araç tiplerini (araba, kamyon, motosiklet vb.) YOLOv algoritmasıyla tespit ve sınıflandırma yapıyor. Web arayüzü üzerinden canlı video akışı gösteriliyor ve sonuçlar gerçek zamanlı raporlanıyor."}
                                </p>
                                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                    <li>{isEnglish ? "Image processing with Python & OpenCV" : "Python & OpenCV ile görüntü işleme"}</li>
                                    <li>{isEnglish ? "High-accuracy detection with YOLOv5 model" : "YOLOv5 modeli ile yüksek doğruluklu tespit"}</li>
                                    <li>{isEnglish ? "Flask-based API and real-time WebSocket streaming" : "Flask tabanlı API ve gerçek zamanlı WebSocket akışı"}</li>
                                    <li>{isEnglish ? "Deployment with Docker and AWS EC2 integration" : "Deploy için Docker ve AWS EC2 entegrasyonu"}</li>
                                </ul>
                                <Link href="/projects/yolov-vehicle">
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                                        {isEnglish ? "View Details" : "Detayları Gör"}
                                    </button>
                                </Link>
                            </div>
                            {/* Fotoğraf */}
                            <div className="w-full md:w-1/2 md:order-1">
                                <Image
                                    src="/yolov.jpeg"
                                    alt="YOLOv Vehicle Classification"
                                    width={500}
                                    height={400}
                                    className="rounded-lg shadow-lg object-cover"
                                />
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </main>
        </>
    );
}
