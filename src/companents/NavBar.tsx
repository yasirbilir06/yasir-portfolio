import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NavBar() {
    const router = useRouter();
    const { pathname, locale } = router;
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = {
        tr: [
            { label: "Ana Sayfa", path: "/" },
            { label: "Hakkımda", path: "/about" },
            { label: "Projeler", path: "/projects" },
            { label: "İletişim", path: "/contact" },
        ],
        en: [
            { label: "Home", path: "/en" },
            { label: "About", path: "/en/about" },
            { label: "Projects", path: "/en/projects" },
            { label: "Contact", path: "/en/contact" },
        ],
    };

    const items = locale === "en" ? navItems.en : navItems.tr;

    const switchLanguage = async (targetLocale: "tr" | "en") => {
        let newPath = pathname;
        if (targetLocale === "tr" && pathname.startsWith("/en")) {
            newPath = pathname.replace("/en", "") || "/";
        } else if (targetLocale === "en" && !pathname.startsWith("/en")) {
            newPath = pathname === "/" ? "/en" : `/en${pathname}`;
        }
        await router.push(newPath, undefined, { locale: targetLocale });
        setMenuOpen(false);
    };

    return (
        <>
            {/* Arka plan karartma */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            <nav className="bg-gradient-to-r from-cyan-700 to-cyan-500 text-white shadow-md p-4 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
                    {/* Logo */}
                    <Link href={locale === "en" ? "/en" : "/"} className="text-xl font-bold tracking-wide">
                        Yasir Bilir
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        className="md:hidden text-3xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        {items.map((item) => (
                            <Link key={item.path} href={item.path}>
                                <span
                                    className={`
                            relative px-4 py-1 transition font-medium
                                 ${pathname.replace("/en", "") === item.path.replace("/en", "")
                                        ? "text-white after:w-full"
                                        : "text-white hover:text-white hover:after:w-full after:w-0"
                                    }
                    after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1
                after:h-[2px] after:bg-white after:transition-all after:duration-300
                    `}
                                >
  {item.label}
</span>


                            </Link>
                        ))}
                        {/* Dil seçici */}
                        <div className="flex items-center gap-2 ml-4">
                            <button
                                onClick={() => switchLanguage("tr")}
                                className={`text-lg ${locale === "tr" ? "font-bold" : "opacity-70"} hover:opacity-100`}
                            >
                                🇹🇷
                            </button>
                            <button
                                onClick={() => switchLanguage("en")}
                                className={`text-lg ${locale === "en" ? "font-bold" : "opacity-70"} hover:opacity-100`}
                            >
                                🇬🇧
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-cyan-700 z-50 transform transition-transform duration-300 ease-in-out ${
                        menuOpen ? "translate-x-0" : "translate-x-full"
                    } md:hidden p-6`}
                >
                    <div className="flex flex-col gap-4">
                        {items.map((item) => (
                            <Link key={item.path} href={item.path} onClick={() => setMenuOpen(false)}>
                                <span
                                    className={`block px-4 py-2 rounded-full transition font-medium ${
                                        pathname.replace("/en", "") === item.path.replace("/en", "")
                                            ? "bg-white text-cyan-700 shadow-sm"
                                            : "hover:bg-white hover:text-cyan-700"
                                    }`}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                        {/* Dil seçici */}
                        <div className="flex gap-4 pt-4 border-t border-white mt-4">
                            <button
                                onClick={() => switchLanguage("tr")}
                                className={`text-lg ${locale === "tr" ? "font-bold" : "opacity-70"} hover:opacity-100`}
                            >
                                🇹🇷 Türkçe
                            </button>
                            <button
                                onClick={() => switchLanguage("en")}
                                className={`text-lg ${locale === "en" ? "font-bold" : "opacity-70"} hover:opacity-100`}
                            >
                                🇬🇧 English
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
