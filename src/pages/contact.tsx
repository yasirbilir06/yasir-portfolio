"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Contact() {
    const { locale } = useRouter();
    const isEnglish = locale === "en";

    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(isEnglish ? "Sending..." : "Gönderiliyor...");

        const form = e.currentTarget;
        const data = new FormData(form);

        const response = await fetch("https://formspree.io/f/mqaqkwao", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            setStatus(isEnglish ? "✅ Message sent successfully!" : "✅ Mesajın başarıyla gönderildi!");
            form.reset();
        } else {
            setStatus(isEnglish ? "❌ An error occurred. Please try again." : "❌ Bir hata oluştu, lütfen tekrar deneyin.");
        }
    };

    return (
        <>
            {/* SEO HEAD */}
            <Head>
                <title>{isEnglish ? "Contact | Yasir Bilir" : "İletişim | Yasir Bilir"}</title>
                <meta
                    name="description"
                    content={
                        isEnglish
                            ? "Contact Muhammed Yasir Bilir for professional mobile app development services using React Native, Firebase, and Swift technologies."
                            : "Muhammed Yasir Bilir ile iletişime geçin. React Native, Firebase ve Swift teknolojileri kullanarak profesyonel mobil uygulama geliştirme hizmetleri sunuyorum."
                    }
                />
                <meta
                    property="og:title"
                    content={isEnglish ? "Contact | Yasir Bilir" : "İletişim | Yasir Bilir"}
                />
                <meta
                    property="og:description"
                    content={
                        isEnglish
                            ? "Contact Muhammed Yasir Bilir for professional mobile app development services using React Native, Firebase, and Swift technologies."
                            : "Muhammed Yasir Bilir ile iletişime geçin. React Native, Firebase ve Swift teknolojileri kullanarak profesyonel mobil uygulama geliştirme hizmetleri sunuyorum."
                    }
                />
                <meta property="og:type" content="website" />
            </Head>

            {/* Sayfa İçeriği */}
            <div className="flex justify-center items-center min-h-screen bg-white px-4">
                <div className="max-w-2xl w-full shadow-xl p-8 rounded-xl border border-gray-200">
                    <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">
                        {isEnglish ? "Contact" : "İletişim"}
                    </h2>
                    <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
                        💬 <span className="font-medium">
                            {isEnglish ? "Feel free to contact me!" : "Benimle iletişime geçmekten çekinmeyin!"}
                        </span><br />
                        {isEnglish
                            ? "If you have a mobile app project or want to bring your ideas to life, I'd be happy to assist you. I offer professional solutions using React Native, Firebase, and Swift."
                            : "Eğer bir mobil uygulama projeniz varsa ya da fikirlerinizi hayata geçirmek istiyorsanız size yardımcı olmaktan mutluluk duyarım. React Native, Firebase ve Swift gibi teknolojilerle profesyonel çözümler sunuyorum."}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-black">
                                {isEnglish ? "Your Name" : "Adınız"}
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full mt-1 px-4 py-2 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                                placeholder={isEnglish ? "Your Name" : "Adınız"}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black">
                                {isEnglish ? "Your Email Address" : "E-posta adresiniz"}
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full mt-1 px-4 py-2 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                                placeholder={isEnglish ? "example@mail.com" : "ornek@mail.com"}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black">
                                {isEnglish ? "Your Message" : "Mesajınız"}
                            </label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                className="w-full mt-1 px-4 py-2 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                                placeholder={isEnglish ? "Write your message here..." : "Mesajınızı buraya yazın..."}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-cyan-400 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition"
                        >
                            {isEnglish ? "Send" : "Gönder"}
                        </button>

                        {status && (
                            <p className="text-center text-sm text-gray-700 mt-4">{status}</p>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}
