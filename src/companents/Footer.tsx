import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
    const { locale } = useRouter();

    const copyright =
        locale === "en"
            ? "© 2025 Yasir Bilir. All rights reserved."
            : "© 2025 Yasir Bilir. Tüm hakları saklıdır.";

    return (
        <footer className="bg-gradient-to-t from-cyan-100 via-white to-white py-8 px-4 sm:px-6 mt-20">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
                {/* Copyright */}
                <p className="text-sm text-center sm:text-left text-black">{copyright}</p>

                {/* Social Media */}
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="https://github.com/yasirbilir06" target="_blank">
                        <Image
                            src="/github.png"
                            alt="GitHub"
                            width={28}
                            height={28}
                            className="opacity-80 hover:opacity-100 transition"
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/yasir-bilir-22505b264/" target="_blank">
                        <Image
                            src="/linkedin.png"
                            alt="LinkedIn"
                            width={28}
                            height={28}
                            className="opacity-80 hover:opacity-100 transition"
                        />
                    </Link>
                    <Link href="mailto:bilirmuhammedyasir@gmail.com">
                        <Image
                            src="/gmail.png"
                            alt="Mail"
                            width={28}
                            height={28}
                            className="opacity-80 hover:opacity-100 transition"
                        />
                    </Link>
                    <Link href="https://www.instagram.com/yasiirbilirr/" target="_blank">
                        <Image
                            src="/instagram.png"
                            alt="Instagram"
                            width={28}
                            height={28}
                            className="opacity-80 hover:opacity-100 transition"
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
