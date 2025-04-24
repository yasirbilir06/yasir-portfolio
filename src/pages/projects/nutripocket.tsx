import Image from "next/image";
import FadeInSection from "../../companents/FadeInSection";
import Head from "next/head";

export default function NutritionPocketPage() {
    return (
        <>
            <Head>
                <title>NutritionPocket | Proje Teknik Özeti</title>
            </Head>

            <div className="bg-gradient-to-b from-cyan-50 to-white">
                {/* Giriş */}
                <section className="py-20 px-6 max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-cyan-700 mb-6">
                        NutritionPocket – Diyetisyen Takip Uygulaması
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                        Mobil cihazlar için geliştirilmiş, danışan-diyetisyen etkileşimini destekleyen tam kapsamlı bir sağlık uygulaması.
                        React Native ve Firebase mimarisi ile oluşturuldu. Modern kullanıcı deneyimi ve gelişmiş teknik özellikleri bir araya getiriyor.
                    </p>
                </section>

                {/* 1. Rol Bazlı Giriş */}
                <FadeInSection>
                    <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
                        <div className="md:w-1/2">
                            <Image
                                src="/screen/profil.jpeg"
                                alt="Rol Seçim Ekranı"
                                width={300}
                                height={300}
                                className="rounded-xl shadow-xl"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Rol Seçimi ve Giriş Sistemi</h2>
                            <p className="text-gray-700 text-justify">
                                NutritionPocket, kullanıcılarına rol bazlı bir deneyim sunar. Danışanlar ve diyetisyenler farklı arayüzlerle giriş yapar. Giriş işlemleri Firebase Authentication üzerinden gerçekleştirilir ve e-posta/şifre ya da Google ile güvenli oturum desteği sağlanır.
                            </p>
                        </div>
                    </section>
                </FadeInSection>

                {/* 2. Kilo Takibi ve Veri Grafiği */}
                <FadeInSection>
                    <section className="flex flex-col-reverse md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Kilo Takibi Modülü</h2>
                            <p className="text-gray-700 text-justify">
                                Danışanlar her gün kilo bilgilerini girebilir. Bu veriler Firestore’da kayıt altına alınır ve kullanıcıya özel olarak react-native-chart-kit ile grafiksel şekilde görselleştirilir. İlgili veriler zaman serisi biçiminde analiz edilebilir.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="/screen/kilotakip.jpeg"
                                alt="Kilo Takip Grafiği"
                                width={300}
                                height={300}
                                className="rounded-xl shadow-xl"
                            />
                        </div>
                    </section>
                </FadeInSection>

                {/* 3. Gerçek Zamanlı Chat */}
                <FadeInSection>
                    <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
                        <div className="md:w-1/2">
                            <Image
                                src="/screen/chat.png"
                                alt="Mesajlaşma Özelliği"
                                width={300}
                                height={300}
                                className="rounded-xl shadow-xl"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Gerçek Zamanlı Mesajlaşma</h2>
                            <p className="text-gray-700 text-justify">
                                NutritionPocket, danışan ve diyetisyenler arasında uçtan uca sohbet imkânı sunar. Firestore üzerinde yapılandırılmış `chats/{"combinedId"}/messages/` dizin yapısı sayesinde her konuşma zaman damgalıdır. Kullanıcılar metin ve görsel paylaşabilir. Chat özelliği yalnızca premium üyelikle kullanılabilir.
                            </p>
                        </div>
                    </section>
                </FadeInSection>

                <FadeInSection>
                    <section className="flex flex-col-reverse md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">PDF Yükleme &amp; Takvim Randevuları</h2>
                            <p className="text-gray-700 text-justify">
                                Danışanlar tahlil sonuçlarını PDF olarak yükleyebilir. Bu dosyalar Firebase Storage üzerinde barındırılır ve
                                Firestore ile bağlantılıdır. Diyetisyenler bu PDFleri görüp değerlendirir. Ayrıca randevu sistemi, diyetisyenlerin
                                haftalık programlarına göre saat seçimi yapılmasını sağlar. Seçilen randevular gerçek zamanlı olarak takvime işlenir.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="/screen/takip.jpeg"
                                alt="Takvim Randevu Ekranı"
                                width={300}
                                height={300}
                                className="rounded-xl shadow-xl"
                            />
                        </div>
                    </section>
                </FadeInSection>

                <FadeInSection>
                    <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
                        <div className="md:w-1/2">
                            <Image
                                src="/screen/hesaplama.jpeg"
                                alt="Beslenme Hesaplayıcı Ekranı"
                                width={300}
                                height={300}
                                className="rounded-xl shadow-xl"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">BMH ve Makro Hesaplayıcılar</h2>
                            <p className="text-gray-700 text-justify">
                                NutritionPocket, çocuk ve yetişkin kullanıcılar için WHO, Schofield ve IOM yöntemlerine göre bazal metabolizma hızı
                                hesaplama imkânı sunar. Girdi olarak yaş, cinsiyet, kilo ve boy bilgileri alınır. Sonuçlar enerji (kcal), protein,
                                karbonhidrat, yağ ve sıvı ihtiyaçlarını içerir. Grafikler react-native-chart-kit ile sunulur.
                            </p>
                        </div>
                    </section>
                </FadeInSection>

                <FadeInSection>
                    <section className="flex flex-col-reverse md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Diyetisyen Klinikleri &amp; Harita Entegrasyonu</h2>
                            <p className="text-gray-700 text-justify">
                                Ankara’daki özel klinikleri listeleyen bu bölümde kullanıcılar, diyetisyen ofislerinin adresini ve konumlarını görebilir.
                                Her klinik Google Maps bağlantısı ile harita üzerinde açılabilir. Harita verileri kullanıcı dostu arayüz ile sunulur.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="/screen/konum.png"
                                alt="Diyetisyen Harita Bölümü"
                                width={300}
                                height={300}
                                className="rounded-xl shadow-xl"
                            />
                        </div>
                    </section>
                </FadeInSection>

                <FadeInSection>
                    <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
                        {/* Görsel */}
                        <div className="md:w-1/2">
                            <Image
                                src="/screen/randevu.png"
                                alt="Randevu Sistemi"
                                width={300}
                                height={300}
                                className="rounded-xl shadow-xl"
                            />
                        </div>

                        {/* Açıklama */}
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Randevu Sistemi</h2>
                            <p className="text-gray-700 text-justify">
                                NutritionPocket, diyetisyenlerin haftalık uygunluklarını tanımlamasına ve danışanların bu zaman dilimlerinden
                                randevu almasına imkân tanır. Kullanıcı takvim üzerinden tarih ve saat seçer; sistem bu saatin uygun olup
                                olmadığını otomatik olarak kontrol eder ve Firestore veritabanına kaydeder.
                            </p>

                            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                                <li>Firestore koleksiyonları: <code>weeklySchedule</code> ve <code>appointments</code></li>
                                <li>Her zaman dilimi <code>{`isBooked: true/false`}</code> ile kontrol edilir</li>
                                <li>Gerçek zamanlı dinleme ile randevu doluluğu eş zamanlı güncellenir</li>
                                <li>Diyetisyen takvimi: Haftalık bazda slot tanımı ve iptal özelliği</li>
                                <li>Danışan takvimi: Kendi randevularını listeleme ve iptal</li>
                            </ul>
                        </div>
                    </section>
                </FadeInSection>




            </div>
        </>
    );
}
