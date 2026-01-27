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
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 min-w-[320px] max-w-[320px] overflow-hidden hover:-translate-y-1">
        {/* Üst gradient şerit */}
        <div className="h-2 bg-gradient-to-r from-cyan-500 to-cyan-600" />
        
        <div className="p-5">
            {/* Üst kısım: Logo ve Süre */}
            <div className="flex items-start justify-between mb-4">
                {/* Logo */}
                <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center overflow-hidden shadow-sm">
                    {logoSrc ? (
                        <Image
                            src={logoSrc}
                            alt={`${company} logo`}
                            width={56}
                            height={56}
                            className="object-contain p-1"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-600 text-white text-2xl font-bold">
                            {company.charAt(0)}
                        </div>
                    )}
                </div>
                
                {/* Süre Badge */}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-50 text-cyan-700 border border-cyan-200">
                    {duration}
                </span>
            </div>

            {/* İçerik */}
            <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-cyan-600 transition-colors">
                    {position}
                </h3>
                <p className="text-sm font-semibold text-cyan-600">
                    {company}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>

        {/* Hover efekti için alt gölge */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </div>
);

export default ExperienceCard;
