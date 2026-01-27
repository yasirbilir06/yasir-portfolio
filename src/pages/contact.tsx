"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import FadeInSection from "../companents/FadeInSection";

type LocaleKey = "tr" | "en" | "de";

const translations = {
    tr: {
        pageTitle: "İletişim | Yasir Bilir",
        metaDesc: "Muhammed Yasir Bilir ile iletişime geçin. React Native ve Swift teknolojileri kullanarak profesyonel mobil uygulama geliştirme hizmetleri sunuyorum.",
        title: "İletişime Geçin",
        subtitle: "Bir projeniz mi var? Birlikte çalışalım!",
        
        formTitle: "Mesaj Gönderin",
        name: "Adınız",
        namePlaceholder: "Adınızı girin",
        email: "E-posta",
        emailPlaceholder: "ornek@mail.com",
        subject: "Konu",
        subjectPlaceholder: "Mesajınızın konusu",
        message: "Mesajınız",
        messagePlaceholder: "Projeniz hakkında bilgi verin...",
        send: "Mesaj Gönder",
        sending: "Gönderiliyor...",
        success: "Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.",
        error: "Bir hata oluştu. Lütfen tekrar deneyin.",
        
        contactInfo: "İletişim Bilgileri",
        emailLabel: "E-posta",
        locationLabel: "Konum",
        location: "Worms, Almanya",
        availabilityLabel: "Durum",
        availability: "İş fırsatlarına açık",
        
        socialTitle: "Sosyal Medya",
        responseTime: "Genellikle 24 saat içinde yanıt veriyorum",
    },
    en: {
        pageTitle: "Contact | Yasir Bilir",
        metaDesc: "Contact Muhammed Yasir Bilir for professional mobile app development services using React Native and Swift technologies.",
        title: "Get in Touch",
        subtitle: "Have a project? Let's work together!",
        
        formTitle: "Send a Message",
        name: "Your Name",
        namePlaceholder: "Enter your name",
        email: "Email",
        emailPlaceholder: "example@mail.com",
        subject: "Subject",
        subjectPlaceholder: "Subject of your message",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
        sending: "Sending...",
        success: "Your message has been sent! I'll get back to you soon.",
        error: "An error occurred. Please try again.",
        
        contactInfo: "Contact Info",
        emailLabel: "Email",
        locationLabel: "Location",
        location: "Worms, Germany",
        availabilityLabel: "Status",
        availability: "Open to opportunities",
        
        socialTitle: "Social Media",
        responseTime: "I usually respond within 24 hours",
    },
    de: {
        pageTitle: "Kontakt | Yasir Bilir",
        metaDesc: "Kontaktieren Sie Muhammed Yasir Bilir für professionelle Mobile App Entwicklung mit React Native und Swift Technologien.",
        title: "Kontakt aufnehmen",
        subtitle: "Haben Sie ein Projekt? Lassen Sie uns zusammenarbeiten!",
        
        formTitle: "Nachricht senden",
        name: "Ihr Name",
        namePlaceholder: "Geben Sie Ihren Namen ein",
        email: "E-Mail",
        emailPlaceholder: "beispiel@mail.com",
        subject: "Betreff",
        subjectPlaceholder: "Betreff Ihrer Nachricht",
        message: "Nachricht",
        messagePlaceholder: "Erzählen Sie mir von Ihrem Projekt...",
        send: "Nachricht senden",
        sending: "Wird gesendet...",
        success: "Ihre Nachricht wurde gesendet! Ich melde mich bald.",
        error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        
        contactInfo: "Kontaktdaten",
        emailLabel: "E-Mail",
        locationLabel: "Standort",
        location: "Worms, Deutschland",
        availabilityLabel: "Status",
        availability: "Offen für Möglichkeiten",
        
        socialTitle: "Soziale Medien",
        responseTime: "Ich antworte normalerweise innerhalb von 24 Stunden",
    },
};

export default function Contact() {
    const { locale } = useRouter();
    const currentLocale = (locale || "tr") as LocaleKey;
    const t = translations[currentLocale] || translations.tr;

    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

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
            setStatus("success");
            form.reset();
        } else {
            setStatus("error");
        }
    };

    const contactMethods = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: t.emailLabel,
            value: "bilirmuhammedyasir@gmail.com",
            href: "mailto:bilirmuhammedyasir@gmail.com",
            color: "from-cyan-500 to-blue-500",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: t.locationLabel,
            value: t.location,
            color: "from-purple-500 to-indigo-500",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            label: t.availabilityLabel,
            value: t.availability,
            color: "from-green-500 to-teal-500",
        },
    ];

    const socialLinks = [
        { name: "GitHub", url: "https://github.com/yasirbilir06", icon: "/github.png" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/yasir-bilir-22505b264/", icon: "/linkedin.png" },
        { name: "Instagram", url: "https://www.instagram.com/yasiirbilirr/", icon: "/instagram.png" },
    ];

    return (
        <>
            <Head>
                <title>{t.pageTitle}</title>
                <meta name="description" content={t.metaDesc} />
                <meta property="og:title" content={t.pageTitle} />
                <meta property="og:description" content={t.metaDesc} />
                <meta property="og:type" content="website" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
                {/* Hero Header */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white py-20 sm:py-28">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                    </div>
                    
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
                        <FadeInSection>
                            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm mb-6">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                {t.availability}
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{t.title}</h1>
                            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
                        </FadeInSection>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16 sm:py-24 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-5 gap-12">
                            
                            {/* Contact Info - Left Side */}
                            <div className="lg:col-span-2 space-y-8">
                                <FadeInSection>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contactInfo}</h2>
                                        <div className="space-y-4">
                                            {contactMethods.map((method, index) => (
                                                <div key={index} className="group">
                                                    {method.href ? (
                                                        <Link href={method.href}>
                                                            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-cyan-200 transition-all">
                                                                <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-white`}>
                                                                    {method.icon}
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm text-gray-500">{method.label}</p>
                                                                    <p className="font-medium text-gray-900 group-hover:text-cyan-600 transition-colors">{method.value}</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ) : (
                                                        <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                                            <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-white`}>
                                                                {method.icon}
                                                            </div>
                                                            <div>
                                                                <p className="text-sm text-gray-500">{method.label}</p>
                                                                <p className="font-medium text-gray-900">{method.value}</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </FadeInSection>

                                {/* Social Links */}
                                <FadeInSection>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">{t.socialTitle}</h3>
                                        <div className="flex gap-3">
                                            {socialLinks.map((social, index) => (
                                                <Link key={index} href={social.url} target="_blank">
                                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md hover:border-cyan-200 transition-all">
                                                        <Image src={social.icon} alt={social.name} width={24} height={24} className="opacity-70 hover:opacity-100 transition-opacity" />
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </FadeInSection>

                                {/* Response Time */}
                                <FadeInSection>
                                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                                                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-700">{t.responseTime}</p>
                                        </div>
                                    </div>
                                </FadeInSection>
                            </div>

                            {/* Contact Form - Right Side */}
                            <div className="lg:col-span-3">
                                <FadeInSection>
                                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.formTitle}</h2>
                                        
                                        {status === "success" ? (
                                            <div className="text-center py-12">
                                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                    {currentLocale === "de" ? "Vielen Dank!" : currentLocale === "en" ? "Thank You!" : "Teşekkürler!"}
                                                </h3>
                                                <p className="text-gray-600 mb-6">{t.success}</p>
                                                <button
                                                    onClick={() => setStatus("idle")}
                                                    className="text-cyan-600 font-medium hover:text-cyan-700"
                                                >
                                                    {currentLocale === "de" ? "Neue Nachricht senden" : currentLocale === "en" ? "Send another message" : "Yeni mesaj gönder"}
                                                </button>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="grid sm:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            {t.name}
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            required
                                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                                                            placeholder={t.namePlaceholder}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            {t.email}
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            required
                                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                                                            placeholder={t.emailPlaceholder}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        {t.subject}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        required
                                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                                                        placeholder={t.subjectPlaceholder}
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        {t.message}
                                                    </label>
                                                    <textarea
                                                        name="message"
                                                        rows={5}
                                                        required
                                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400 resize-none"
                                                        placeholder={t.messagePlaceholder}
                                                    />
                                                </div>

                                                {status === "error" && (
                                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                                                        {t.error}
                                                    </div>
                                                )}

                                                <button
                                                    type="submit"
                                                    disabled={status === "sending"}
                                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                                >
                                                    {status === "sending" ? (
                                                        <>
                                                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                            </svg>
                                                            {t.sending}
                                                        </>
                                                    ) : (
                                                        <>
                                                            {t.send}
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                            </svg>
                                                        </>
                                                    )}
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </FadeInSection>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
