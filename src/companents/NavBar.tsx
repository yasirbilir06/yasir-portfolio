import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    const currentPath = router.pathname;

    const navItems = [
        { label: "Ana Sayfa", path: "/" },
        { label: "Hakkımda", path: "/about" },
        { label: "Projeler", path: "/projects" },
        { label: "İletişim", path: "/contact" },
    ];

    return (
        <nav className="bg-gradient-to-r from-cyan-700 to-cyan-500 text-white shadow-md p-4 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
                <Link href="/" className="text-xl font-bold tracking-wide">
                    Yasir Bilir
                </Link>

                <div className="flex gap-2">
                    {navItems.map((item) => (
                        <Link key={item.path} href={item.path}>
              <span
                  className={`px-4 py-1 rounded-full transition font-medium ${
                      currentPath === item.path
                          ? "bg-white text-cyan-700 shadow-sm"
                          : "hover:bg-white hover:text-cyan-700"
                  }`}
              >
                {item.label}
              </span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
