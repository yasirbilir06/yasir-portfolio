import Image from "next/image";
import Link from "next/link";
import FadeInSection from "../companents/FadeInSection";

export default function About() {
    return (
        <FadeInSection>
            <div className="bg-gradient-to-b from-cyan-400 via-white to-white py-16 px-6">
                {/* Başlık */}
                <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Hakkımda</h1>

                {/* Profil Yazısı */}
                <div className="max-w-4xl mx-auto text-center text-gray-800 space-y-5">

                        <p>
                            Merhaba! Ben <strong>Muhammed Yasir Bilir</strong>, mobil uygulama geliştirme tutkusu olan 23 yaşında bir Bilgisayar Mühendisi adayıyım. Ankara da yaşıyorum ancak Almanya doğumluyum ve çifte vatandaşım. Bu hem kültürel hem teknik bakış açımı zenginleştiriyor. Yazılımla tanışmam Üniversite

                            yıllarında C++ diliyle oldu. İlk başta sadece nasıl çalıştığını anlamaya çalışıyordum ama kısa sürede bu alanın bana ne kadar heyecan verdiğini fark ettim.
                        </p>
                    <p>
                        Üniversite yıllarımda ilk kez <strong>Flutter</strong> ile tanıştım ve mobil uygulama geliştirme serüvenim işte o noktada başladı. Başlangıçta tamamen merak ve hobi amaçlı başladığım bu süreç, zamanla büyük bir tutkuya dönüştü. Bileşen yapıları, animasyon sistemleri ve kullanıcı deneyimi üzerine çalışmak bana hem keyif verdi hem de üretmenin ne kadar anlamlı olduğunu gösterdi. Bu süreçte <strong>Firebase</strong> teknolojisini projelerimde hem <em>authentication</em> hem de <em>veri yönetimi</em> tarafında aktif olarak kullandım.
                    </p>
                    <p>
                        Ardından <strong>React Native</strong> ile tanıştım ve Flutter’a kıyasla daha geniş bir ekosistem ve güçlü topluluk desteği olduğunu fark ettim. React Native’in esnekliği, TypeScript desteği ve platformlar arası geliştirilebilirliği beni daha da heyecanlandırdı. Kod yazmak artık benim için sadece ekranlara bir şeyler bastırmak değil; bir fikri sıfırdan alıp ürüne dönüştürmek, hayatlara dokunmak ve teknolojiyi faydaya çevirmek anlamına geliyor. Her yazdığım satırda bu vizyonla hareket ediyorum.
                    </p>
                        <p>
                            Geliştirdiğim <strong>NutriPocket</strong> uygulaması, diyetisyenlerle danışanları buluşturan kapsamlı bir sağlık platformu oldu. Bu projede hem kullanıcı arayüz tasarımı hem veri yönetimi hem de güvenlik alanlarında derinlemesine çalıştım. Kullanıcıların günlük veri girişlerini yönetmesi, PDF raporları paylaşması, gerçek zamanlı mesajlaşması gibi birçok modülü sıfırdan kodladım. Bu süreç bana sadece teknik beceri değil, aynı zamanda sabır, kullanıcı odaklılık ve modüler düşünmeyi de öğretti.
                        </p>
                        <p>
                            Eğitimime Selçuk Üniversitesi Bilgisayar Mühendisliği bölümünde devam ediyorum. Üniversite sürecim boyunca hem teknik becerilerimi geliştirmek hem de sektörel deneyim kazanmak amacıyla çeşitli firmalarda görev aldım. Özellikle <strong>On Elektronik</strong> firmasında bir yıl boyunca part-time çalışarak, gömülü sistemler ve donanım haberleşmesi (özellikle SPI) alanlarında tecrübe edindim. Bu süreçte, metro, otogar ve havalimanları gibi büyük ölçekli sistemlerde kullanılan yolcu bilgilendirme sistemlerinin geliştirilmesine katkıda bulundum. Gerçek dünya projelerinde aktif rol almak, teori ile pratiği nasıl birleştireceğimi öğrenmemi sağladı. Son zamanlarda SwiftUI üzerinde çalışıyor ve iOS ekosistemine geçiş yapmaya hazırlanıyorum. Hedefim globalde geçerliliği olan, sade ama güçlü iOS uygulamaları geliştirmek.
                        </p>
                        <p>
                            Kodlamanın dışında tenis oynamayı çok severim. Strateji kurmayı ve rekabeti seviyorum, bu yönüm hem oyunlara hem yazılıma olan ilgimi perçinliyor. Aynı zamanda seyahat etmeyi, farklı şehirler ve ülkeler keşfetmeyi çok severim. Yeni yerler görmek, kültürleri tanımak bana ilham veriyor. Uzun vadede Almanya’da yüksek lisans yapmayı ve Avrupa’da yazılım sektöründe üretken bir mühendis olmayı hedefliyorum.
                        </p>
                        <p>
                            Bu portfolyo sitesi; benimle ilgili teknik detayları, projelerimi ve vizyonumu yansıtıyor. Her satırda emek var. Eğer detaylı özgeçmişime göz atmak istersen, aşağıdaki bağlantıdan ulaşabilirsin.
                        </p>

                </div>

                {/* Teknoloji Logoları */}
                <div className="overflow-x-auto mt-12 mb-10">
                    <div className="flex gap-8 w-max px-4 mx-auto">
                        {[
                            { src: "/university.png", alt: "Selçuk Üniversitesi" },
                            { src: "/react.png", alt: "React" },
                            { src: "/next.svg", alt: "Next.js" },
                            { src: "/TypeScript.png", alt: "TypeScript" },
                            { src: "/firebase.png", alt: "Firebase" },
                            { src: "/java.png", alt: "Java" },
                            { src: "/swift.png", alt: "Swift" },
                            { src: "/python.png", alt: "Python" },
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className="min-w-[70px] h-[70px] bg-white/30 backdrop-blur-md rounded-xl shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300"
                            >
                                <Image src={tech.src} alt={tech.alt} width={45} height={45} className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CV Butonu */}
                <div className="text-center mt-8">
                    <Link href="/yasir-cv.pdf" target="_blank">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
                            Özgeçmişimi İndir
                        </button>
                    </Link>
                </div>
            </div>
        </FadeInSection>
    );
}
