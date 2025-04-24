// src/pages/projects.tsx


import FadeInSection from "../companents/FadeInSection";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    return (
        <>


            <main className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto space-y-20">
                    {/* NutriPocket */}
                    <FadeInSection>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* Fotoğraf */}
                            <div className="w-full md:w-1/2">
                                <Image
                                    src="/screen/splashScreen.png"
                                    alt="NutriPocket Ekran Görüntüsü"
                                    width={300}
                                    height={400}
                                    className="rounded-lg shadow-lg object-cover"
                                />
                            </div>
                            {/* Açıklama */}
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                                    NutriPocket – Diyetisyen Uygulaması
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    NutriPocket, diyetisyenler ve danışanlar için geliştirdiğim
                                    mobil uygulama. Kullanıcılar günlük kalori, öğün ve su tüketimini
                                    takip edebiliyor; diyetisyenlerse hastalarının verilerini
                                    analiz edip kişiye özel planlar oluşturabiliyor.
                                </p>
                                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                    <li>React Native ile çapraz platform mobil geliştirme</li>
                                    <li>Firebase Authentication ve Firestore tabanlı veri yönetimi</li>
                                    <li>Gerçek zamanlı bildirimler ve offline destek</li>
                                    <li>Material Design uyumlu şık UI/UX</li>
                                </ul>
                                <Link href="/projects/nutripocket">
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                                        Detayları Gör
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
                                    Araç Sınıflandırma – YOLOv Projesi
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    Bitirme projesi olarak geliştirdiğimiz bu uygulama, kameralardan
                                    anlık görüntü alıp içinde farklı araç tiplerini (araba, kamyon,
                                    motosiklet vs.) YOLOv algoritmasıyla tespit ve sınıflandırma
                                    yapıyor. Web arayüzü üzerinden canlı video akışı gösteriliyor ve
                                    sonuçlar gerçek zamanlı raporlanıyor.
                                </p>
                                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                    <li>Python & OpenCV ile görüntü işleme</li>
                                    <li>YOLOv5 modeli ile <strong>yüksek doğruluk</strong>lı tespit</li>
                                    <li>Flask tabanlı API ve gerçek zamanlı WebSocket akışı</li>
                                    <li>Deploy için Docker ve AWS EC2 entegrasyonu</li>
                                </ul>
                                <Link href="/projects/yolov-vehicle">
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                                        Proje Detayları
                                    </button>
                                </Link>
                            </div>
                            {/* Fotoğraf */}
                            <div className="w-full md:w-1/2 md:order-1">
                                <Image
                                    src="/yolov.jpeg"
                                    alt="YOLOv Araç Sınıflandırma"
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
