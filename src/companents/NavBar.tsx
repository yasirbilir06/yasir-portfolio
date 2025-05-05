import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    const { pathname, locale } = router;

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
    };

    return (
        <nav className="bg-gradient-to-r from-cyan-700 to-cyan-500 text-white shadow-md p-4 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <Link href={locale === "en" ? "/en" : "/"} className="text-xl font-bold tracking-wide">
                    Yasir Bilir
                </Link>

                {/* Menu Items */}
                <div className="flex items-center gap-4">
                    {items.map((item) => (
                        <Link key={item.path} href={item.path}>
                            <span
                                className={`px-4 py-1 rounded-full transition font-medium ${
                                    pathname.replace("/en", "") === item.path.replace("/en", "")
                                        ? "bg-white text-cyan-700 shadow-sm"
                                        : "hover:bg-white hover:text-cyan-700"
                                }`}
                            >
                                {item.label}
                            </span>
                        </Link>
                    ))}

                    {/* Language Switcher */}
                    <div className="flex items-center gap-2 ml-4">
                        <button
                            onClick={() => switchLanguage("tr")}
                            className={`text-lg ${
                                locale === "tr" ? "font-bold" : "opacity-70"
                            } hover:opacity-100 transition`}
                        >
                            🇹🇷
                        </button>
                        <button
                            onClick={() => switchLanguage("en")}
                            className={`text-lg ${
                                locale === "en" ? "font-bold" : "opacity-70"
                            } hover:opacity-100 transition`}
                        >
                            🇬🇧
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
