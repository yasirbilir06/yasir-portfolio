import Image from "next/image";

type TechBadgeVariant = "dark" | "light";

interface TechBadgeProps {
    label: string;
    variant?: TechBadgeVariant;
}

interface TechVisual {
    iconSrc?: string;
    iconAlt?: string;
    iconMode?: "brand" | "mono";
    fallbackType?: "database" | "shield" | "flow" | "device" | "check";
}

function normalizeText(value: string): string {
    return value
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function resolveTechVisual(label: string): TechVisual {
    const text = normalizeText(label);

    if (text.includes("swiftui")) {
        return { iconSrc: "/tech/swiftui.png", iconAlt: "SwiftUI", iconMode: "brand" };
    }
    if (text.includes("swift")) {
        return { iconSrc: "/tech/swiftui.png", iconAlt: "Swift", iconMode: "brand" };
    }
    if (text.includes("supabase")) {
        return { iconSrc: "/tech/supabase.svg", iconAlt: "Supabase", iconMode: "brand" };
    }
    if (text.includes("postgres")) {
        return { iconSrc: "/tech/postgresql.svg", iconAlt: "PostgreSQL", iconMode: "brand" };
    }
    if (text.includes("apple")) {
        return { iconSrc: "/tech/apple.svg", iconAlt: "Apple", iconMode: "mono" };
    }
    if (text.includes("google")) {
        return { iconSrc: "/tech/google.svg", iconAlt: "Google", iconMode: "brand" };
    }
    if (text.includes("stripe")) {
        return { iconSrc: "/tech/stripe.svg", iconAlt: "Stripe", iconMode: "brand" };
    }
    if (text.includes("next")) {
        return { iconSrc: "/tech/nextdotjs.svg", iconAlt: "Next.js", iconMode: "mono" };
    }
    if (text.includes("typescript")) {
        return { iconSrc: "/tech/typescript.svg", iconAlt: "TypeScript", iconMode: "brand" };
    }
    if (text.includes("tailwind")) {
        return { iconSrc: "/tech/tailwindcss.svg", iconAlt: "Tailwind CSS", iconMode: "brand" };
    }
    if (text.includes("vercel")) {
        return { iconSrc: "/tech/vercel.svg", iconAlt: "Vercel", iconMode: "mono" };
    }
    if (text.includes("auth") || text.includes("kimlik") || text.includes("identity") || text.includes("rolle")) {
        return { fallbackType: "shield" };
    }
    if (text.includes("trigger") || text.includes("sync") || text.includes("webhook")) {
        return { fallbackType: "flow" };
    }
    if (text.includes("responsive") || text.includes("mobile ux") || text.includes("ios")) {
        return { fallbackType: "device" };
    }
    if (text.includes("source of truth") || text.includes("source-of-truth") || text.includes("validation")) {
        return { fallbackType: "check" };
    }
    if (text.includes("database") || text.includes("veri")) {
        return { fallbackType: "database" };
    }

    return { fallbackType: "check" };
}

function FallbackIcon({ type }: { type: NonNullable<TechVisual["fallbackType"]> }) {
    if (type === "database") {
        return (
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <ellipse cx="12" cy="5" rx="7" ry="3" />
                <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
                <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
            </svg>
        );
    }
    if (type === "shield") {
        return (
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
            </svg>
        );
    }
    if (type === "flow") {
        return (
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 4h4v4H6zM14 16h4v4h-4zM14 4h4v4h-4zM10 6h4M16 8v8M6 8v8h8" />
            </svg>
        );
    }
    if (type === "device") {
        return (
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="7" y="2.8" width="10" height="18.4" rx="2.3" />
                <path d="M10 5h4M11 18.6h2" />
            </svg>
        );
    }

    return (
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="m5 13 4 4L19 7" />
        </svg>
    );
}

export default function TechBadge({ label, variant = "dark" }: TechBadgeProps) {
    const visual = resolveTechVisual(label);
    const isDark = variant === "dark";

    const wrapperClass = isDark
        ? "rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-100"
        : "rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700";

    const iconBoxClass = isDark
        ? "flex h-5 w-5 items-center justify-center rounded-md bg-slate-800 text-slate-200"
        : "flex h-5 w-5 items-center justify-center rounded-md bg-white text-slate-600 shadow-sm";

    const iconClass =
        visual.iconMode === "mono" ? (isDark ? "h-3.5 w-3.5 invert" : "h-3.5 w-3.5") : "h-3.5 w-3.5";

    return (
        <span className={`${wrapperClass} inline-flex items-center gap-2`}>
            <span className={iconBoxClass}>
                {visual.iconSrc ? (
                    <Image src={visual.iconSrc} alt={visual.iconAlt || label} width={14} height={14} className={iconClass} />
                ) : (
                    <FallbackIcon type={visual.fallbackType || "check"} />
                )}
            </span>
            <span className="leading-none">{label}</span>
        </span>
    );
}
