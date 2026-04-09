import Image from "next/image";
import React from "react";

interface ExperienceCardProps {
    logoSrc: string;
    position: string;
    company: string;
    description: string;
    duration: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    logoSrc,
    position,
    company,
    description,
    duration,
}) => (
    <div className="group relative min-w-[320px] max-w-[320px] overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-b from-white to-slate-50 shadow-[0_18px_45px_-28px_rgba(14,116,144,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_55px_-25px_rgba(14,116,144,0.6)]">
        {/* Üst gradient şerit */}
        <div className="h-1.5 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500" />
        
        <div className="p-6">
            {/* Üst kısım: Logo ve Süre */}
            <div className="mb-5 flex items-start justify-between gap-3">
                {/* Logo */}
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-sky-100 shadow-sm">
                    {logoSrc ? (
                        <Image
                            src={logoSrc}
                            alt={`${company} logo`}
                            width={56}
                            height={56}
                            className="object-contain p-1.5"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-600 text-2xl font-bold text-white">
                            {company.charAt(0)}
                        </div>
                    )}
                </div>
                
                {/* Süre Badge */}
                <span className="inline-flex items-center rounded-full border border-cyan-200 bg-white px-3 py-1 text-xs font-semibold text-cyan-700 shadow-sm">
                    {duration}
                </span>
            </div>

            {/* İçerik */}
            <div className="space-y-2.5">
                <h3 className="text-xl font-bold text-slate-800 transition-colors group-hover:text-cyan-700">
                    {position}
                </h3>
                <p className="text-sm font-semibold text-cyan-700">
                    {company}
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                    {description}
                </p>
            </div>
        </div>

        {/* Hover efekti için alt gölge */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-300 to-blue-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" />
    </div>
);

export default ExperienceCard;
