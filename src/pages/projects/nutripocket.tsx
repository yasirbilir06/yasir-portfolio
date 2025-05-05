import Image from "next/image";
import FadeInSection from "../../companents/FadeInSection";
import Head from "next/head";
import { useRouter } from "next/router";

export default function NutritionPocketPage() {
    const { locale } = useRouter();
    const isEnglish = locale === "en";

    return (
        <>
            <Head>
                <title>{isEnglish ? "NutritionPocket | Project Overview" : "NutritionPocket | Proje Teknik Özeti"}</title>
            </Head>

            <div className="bg-gradient-to-b from-cyan-50 to-white">
                {/* Giriş */}
                <section className="py-20 px-6 max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-cyan-700 mb-6">
                        {isEnglish
                            ? "NutritionPocket – Dietitian Tracking App"
                            : "NutritionPocket – Diyetisyen Takip Uygulaması"}
                    </h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                        {isEnglish
                            ? "A fully featured health application designed to support client-dietitian interaction for mobile devices. Built with React Native and Firebase architecture, combining a modern user experience with advanced technical features."
                            : "Mobil cihazlar için geliştirilmiş, danışan-diyetisyen etkileşimini destekleyen tam kapsamlı bir sağlık uygulaması. React Native ve Firebase mimarisi ile oluşturuldu. Modern kullanıcı deneyimi ve gelişmiş teknik özellikleri bir araya getiriyor."}
                    </p>
                </section>

                {/* 1. Rol Bazlı Giriş */}
                <FadeInSection>
                    <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
                        <div className="md:w-1/2">
                            <Image src="/screen/profil.jpeg" alt="Role Selection Screen" width={300} height={300} className="rounded-xl shadow-xl" />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                                {isEnglish ? "Role Selection and Login System" : "Rol Seçimi ve Giriş Sistemi"}
                            </h2>
                            <p className="text-gray-700 text-justify">
                                {isEnglish
                                    ? "NutritionPocket offers a role-based experience. Clients and dietitians log in through different interfaces. Authentication is handled via Firebase, supporting secure login with email/password or Google accounts."
                                    : "NutritionPocket, kullanıcılarına rol bazlı bir deneyim sunar. Danışanlar ve diyetisyenler farklı arayüzlerle giriş yapar. Giriş işlemleri Firebase Authentication üzerinden gerçekleştirilir ve e-posta/şifre ya da Google ile güvenli oturum desteği sağlanır."}
                            </p>
                        </div>
                    </section>
                </FadeInSection>

                {/* 2. Kilo Takibi ve Veri Grafiği */}
                <FadeInSection>
                    <section className="flex flex-col-reverse md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                                {isEnglish ? "Weight Tracking Module" : "Kilo Takibi Modülü"}
                            </h2>
                            <p className="text-gray-700 text-justify">
                                {isEnglish
                                    ? "Clients can enter their daily weight data. These records are stored in Firestore and visualized using react-native-chart-kit. Data can be analyzed as a time series."
                                    : "Danışanlar her gün kilo bilgilerini girebilir. Bu veriler Firestore’da kayıt altına alınır ve kullanıcıya özel olarak react-native-chart-kit ile grafiksel şekilde görselleştirilir. İlgili veriler zaman serisi biçiminde analiz edilebilir."}
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image src="/screen/kilotakip.jpeg" alt="Weight Tracking Chart" width={300} height={300} className="rounded-xl shadow-xl" />
                        </div>
                    </section>
                </FadeInSection>

                {/* 3. Gerçek Zamanlı Chat */}
                <FadeInSection>
                    <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
                        <div className="md:w-1/2">
                            <Image src="/screen/chat.png" alt="Chat Feature" width={300} height={300} className="rounded-xl shadow-xl" />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                                {isEnglish ? "Real-Time Messaging" : "Gerçek Zamanlı Mesajlaşma"}
                            </h2>
                            <p className="text-gray-700 text-justify">
                                {isEnglish
                                    ? "NutritionPocket enables end-to-end real-time messaging between clients and dietitians. Messages are timestamped and stored under `chats/{combinedId}/messages/` in Firestore. Users can send text and images. Chat functionality is available only for premium users."
                                    : "NutritionPocket, danışan ve diyetisyenler arasında uçtan uca sohbet imkânı sunar. Firestore üzerinde yapılandırılmış `chats/{combinedId}/messages/` dizin yapısı sayesinde her konuşma zaman damgalıdır. Kullanıcılar metin ve görsel paylaşabilir. Chat özelliği yalnızca premium üyelikle kullanılabilir."}
                            </p>
                        </div>
                    </section>
                </FadeInSection>

                {/* PDF Yükleme ve Takvim */}
                <FadeInSection>
                    <section className="flex flex-col-reverse md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                                {isEnglish ? "PDF Upload & Calendar Appointments" : "PDF Yükleme & Takvim Randevuları"}
                            </h2>
                            <p className="text-gray-700 text-justify">
                                {isEnglish
                                    ? "Clients can upload lab results as PDFs, stored in Firebase Storage and linked to Firestore. Dietitians review these files. Appointment system allows scheduling based on dietitian's weekly availability and stores bookings in real-time."
                                    : "Danışanlar tahlil sonuçlarını PDF olarak yükleyebilir. Bu dosyalar Firebase Storage üzerinde barındırılır ve Firestore ile bağlantılıdır. Diyetisyenler bu PDFleri görüp değerlendirir. Ayrıca randevu sistemi, diyetisyenlerin haftalık programlarına göre saat seçimi yapılmasını sağlar. Seçilen randevular gerçek zamanlı olarak takvime işlenir."}
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image src="/screen/takip.jpeg" alt="Calendar Appointment Screen" width={300} height={300} className="rounded-xl shadow-xl" />
                        </div>
                    </section>
                </FadeInSection>

                {/* BMH ve Makro Hesaplayıcı */}
                <FadeInSection>
                    <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
                        <div className="md:w-1/2">
                            <Image src="/screen/hesaplama.jpeg" alt="Nutrition Calculator Screen" width={300} height={300} className="rounded-xl shadow-xl" />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                                {isEnglish ? "BMR and Macronutrient Calculators" : "BMH ve Makro Hesaplayıcılar"}
                            </h2>
                            <p className="text-gray-700 text-justify">
                                {isEnglish
                                    ? "NutritionPocket offers BMR calculations based on WHO, Schofield, and IOM methods for both children and adults. Inputs include age, gender, weight, and height. Results include energy (kcal), protein, carbohydrate, fat, and fluid requirements."
                                    : "NutritionPocket, çocuk ve yetişkin kullanıcılar için WHO, Schofield ve IOM yöntemlerine göre bazal metabolizma hızı hesaplama imkânı sunar. Girdi olarak yaş, cinsiyet, kilo ve boy bilgileri alınır. Sonuçlar enerji (kcal), protein, karbonhidrat, yağ ve sıvı ihtiyaçlarını içerir."}
                            </p>
                        </div>
                    </section>
                </FadeInSection>

                {/* Diyetisyen Klinik Harita */}
                <FadeInSection>
                    <section className="flex flex-col-reverse md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                                {isEnglish ? "Dietitian Clinics & Map Integration" : "Diyetisyen Klinikleri & Harita Entegrasyonu"}
                            </h2>
                            <p className="text-gray-700 text-justify">
                                {isEnglish
                                    ? "This section lists private dietitian clinics in Ankara. Users can view clinic addresses and open locations directly in Google Maps via links."
                                    : "Ankara’daki özel klinikleri listeleyen bu bölümde kullanıcılar, diyetisyen ofislerinin adresini ve konumlarını görebilir. Her klinik Google Maps bağlantısı ile harita üzerinde açılabilir."}
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image src="/screen/konum.png" alt="Dietitian Map Section" width={300} height={300} className="rounded-xl shadow-xl" />
                        </div>
                    </section>
                </FadeInSection>

                {/* Randevu Sistemi */}
                <FadeInSection>
                    <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
                        <div className="md:w-1/2">
                            <Image src="/screen/randevu.png" alt="Appointment System" width={300} height={300} className="rounded-xl shadow-xl" />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                                {isEnglish ? "Appointment Booking System" : "Randevu Sistemi"}
                            </h2>
                            <p className="text-gray-700 text-justify">
                                {isEnglish
                                    ? "Allows dietitians to define their weekly availability and clients to book available slots. The system checks availability in real-time and updates bookings instantly in Firestore."
                                    : "NutritionPocket, diyetisyenlerin haftalık uygunluklarını tanımlamasına ve danışanların bu zaman dilimlerinden randevu almasına imkân tanır. Sistem, uygunlukları gerçek zamanlı kontrol eder ve verileri Firestore'da kaydeder."}
                            </p>

                            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                                <li>Firestore Collections: <code>weeklySchedule</code> and <code>appointments</code></li>
                                <li>Each slot is managed with <code>isBooked: true/false</code></li>
                                <li>Real-time listener updates availability</li>
                                <li>Dietitian calendar: weekly slot definitions and cancellations</li>
                                <li>Client calendar: list and cancel their appointments</li>
                            </ul>
                        </div>
                    </section>
                </FadeInSection>
            </div>
        </>
    );
}
