import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

type LocaleType = "tr" | "en" | "de";

const languages: { code: LocaleType; flag: string; name: string }[] = [
    { code: "tr", flag: "🇹🇷", name: "Türkçe" },
    { code: "en", flag: "🇬🇧", name: "English" },
    { code: "de", flag: "🇩🇪", name: "Deutsch" },
];

export default function NavBar() {
    const router = useRouter();
    const { pathname, locale } = router;
    const [menuOpen, setMenuOpen] = useState(false);
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setLangDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navItems = {
        tr: [
            { label: "Ana Sayfa", path: "/", icon: "🏠" },
            { label: "Hakkımda", path: "/about", icon: "👤" },
            { label: "Projeler", path: "/projects", icon: "💼" },
            { label: "İletişim", path: "/contact", icon: "✉️" },
        ],
        en: [
            { label: "Home", path: "/", icon: "🏠" },
            { label: "About", path: "/about", icon: "👤" },
            { label: "Projects", path: "/projects", icon: "💼" },
            { label: "Contact", path: "/contact", icon: "✉️" },
        ],
        de: [
            { label: "Startseite", path: "/", icon: "🏠" },
            { label: "Über mich", path: "/about", icon: "👤" },
            { label: "Projekte", path: "/projects", icon: "💼" },
            { label: "Kontakt", path: "/contact", icon: "✉️" },
        ],
    };

    const currentLocale = (locale || "tr") as LocaleType;
    const items = navItems[currentLocale] || navItems.tr;
    const currentLang = languages.find(l => l.code === currentLocale) || languages[0];

    const switchLanguage = async (targetLocale: LocaleType) => {
        await router.push(pathname, pathname, { locale: targetLocale });
        setLangDropdownOpen(false);
        setMenuOpen(false);
    };

    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/" || pathname === "/en" || pathname === "/de";
        }
        return pathname.includes(path);
    };

    return (
        <>
            {/* Mobile overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled 
                    ? "bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-black/20 py-3" 
                    : "bg-transparent py-5"
            }`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                                <span className="text-white font-bold text-lg">Y</span>
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity -z-10"></div>
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-white font-bold text-lg tracking-wide">Yasir Bilir</span>
                            <span className="block text-xs text-cyan-400 font-medium -mt-0.5">Mobile Developer</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        {items.map((item) => (
                            <Link key={item.path} href={item.path}>
                                <span className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2
                                    ${isActive(item.path)
                                        ? "text-white bg-white/10 shadow-lg shadow-white/5"
                                        : "text-gray-300 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    {item.label}
                                    {isActive(item.path) && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                                    )}
                                </span>
                            </Link>
                        ))}

                        {/* Language Selector */}
                        <div className="relative ml-4" ref={dropdownRef}>
                            <button
                                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 border
                                    ${langDropdownOpen 
                                        ? "bg-white/10 border-white/20 shadow-lg" 
                                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                                    }`}
                            >
                                <span className="text-lg">{currentLang.flag}</span>
                                <span className="text-sm font-medium text-white">{currentLang.code.toUpperCase()}</span>
                                <svg
                                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${langDropdownOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown */}
                            {langDropdownOpen && (
                                <div className="absolute right-0 mt-3 w-48 bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden z-50 animate-fadeIn">
                                    <div className="p-2">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => switchLanguage(lang.code)}
                                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200
                                                    ${currentLocale === lang.code
                                                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white"
                                                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                                                    }`}
                                            >
                                                <span className="text-xl">{lang.flag}</span>
                                                <span className="text-sm font-medium">{lang.name}</span>
                                                {currentLocale === lang.code && (
                                                    <div className="ml-auto w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                    >
                        <div className="w-5 h-4 flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                            <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
                            <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Sidebar */}
                <div className={`fixed top-0 right-0 h-full w-80 bg-slate-900/98 backdrop-blur-xl z-50 transform transition-transform duration-500 ease-out ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                } md:hidden border-l border-white/10`}>
                    
                    {/* Mobile Header */}
                    <div className="p-6 border-b border-white/10">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">Y</span>
                                </div>
                                <div>
                                    <span className="text-white font-bold">Yasir Bilir</span>
                                    <span className="block text-xs text-cyan-400">Mobile Developer</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Nav Items */}
                    <div className="p-6 space-y-2">
                        {items.map((item, index) => (
                            <Link key={item.path} href={item.path} onClick={() => setMenuOpen(false)}>
                                <span 
                                    className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 ${
                                        isActive(item.path)
                                            ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-500/30"
                                            : "text-gray-300 hover:bg-white/5 hover:text-white"
                                    }`}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="font-medium">{item.label}</span>
                                    {isActive(item.path) && (
                                        <div className="ml-auto w-2 h-2 rounded-full bg-cyan-400"></div>
                                    )}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Language Selector */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-slate-900/50">
                        <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                            {currentLocale === "de" ? "Sprache wählen" : currentLocale === "en" ? "Select Language" : "Dil Seçin"}
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => switchLanguage(lang.code)}
                                    className={`flex flex-col items-center gap-2 py-3 px-2 rounded-xl transition-all duration-200
                                        ${currentLocale === lang.code
                                            ? "bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-500/50"
                                            : "bg-white/5 border border-white/10 hover:bg-white/10"
                                        }`}
                                >
                                    <span className="text-2xl">{lang.flag}</span>
                                    <span className={`text-xs font-medium ${currentLocale === lang.code ? "text-white" : "text-gray-400"}`}>
                                        {lang.code.toUpperCase()}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Spacer for fixed navbar */}
            <div className="h-20"></div>
        </>
    );
}
