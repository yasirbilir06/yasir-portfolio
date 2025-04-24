"use client";

import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Gönderiliyor...");

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
            setStatus("✅ Mesajın başarıyla gönderildi!");
            form.reset();
        } else {
            setStatus("❌ Bir hata oluştu, lütfen tekrar deneyin.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white px-4">
            <div className="max-w-2xl w-full shadow-xl p-8 rounded-xl border border-gray-200">
                <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">İletişim</h2>
                <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
                    💬 <span className="font-medium">Benimle iletişime geçmekten çekinmeyin!</span><br />
                    Eğer bir mobil uygulama projeniz varsa ya da fikirlerinizi hayata geçirmek istiyorsanız size yardımcı olmaktan mutluluk duyarım.
                    React Native, Firebase ve Swift gibi teknolojilerle profesyonel çözümler sunuyorum.
                </p>


                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-black">Adınız</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full mt-1 px-4 py-2 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            placeholder="Adınız"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black">E-posta adresiniz</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full mt-1 px-4 py-2 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            placeholder="ornek@mail.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black">Mesajınız</label>
                        <textarea
                            name="message"
                            rows={5}
                            required
                            className="w-full mt-1 px-4 py-2 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            placeholder="Mesajınızı buraya yazın..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-cyan-400 text-white py-3 rounded-lg font-semibold hover:bg-blu-700 transition"
                    >
                        Gönder
                    </button>

                    {status && (
                        <p className="text-center text-sm text-gray-700 mt-4">{status}</p>
                    )}
                </form>
            </div>
        </div>
    );
}
