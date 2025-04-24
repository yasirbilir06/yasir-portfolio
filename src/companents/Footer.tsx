import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-cyan-100 via-white to-white py-6 px-4 mt-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Telif */}
                <p className="text-sm text-black">
                    © 2025 <span className="font-semibold">Yasir Bilir</span>. Tüm hakları saklıdır.
                </p>

                {/* Sosyal Medya */}
                <div className="flex gap-4">
                    <Link href="https://github.com/yasirbilir06" target="_blank">
                        <Image
                            src="/github.png"
                            alt="GitHub"
                            width={24}
                            height={24}
                            className="opacity-80 hover:opacity-100 transition"
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/yasirbilir/" target="_blank">
                        <Image
                            src="/linkedin.png"
                            alt="LinkedIn"
                            width={24}
                            height={24}
                            className="opacity-80 hover:opacity-100 transition"
                        />
                    </Link>
                    <Link href="mailto:bilirmuhammedyasir@gmail.com">
                        <Image
                            src="/gmail.png"
                            alt="Mail"
                            width={24}
                            height={24}
                            className="opacity-80 hover:opacity-100 transition"
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
