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
    <div className="flex items-start space-x-4 bg-cyan-100 shadow-lg p-4 rounded-lg min-w-[300px]">
        {/* Logo */}
        <div className="w-14 h-14 flex-shrink-0">
            <Image
                src={logoSrc}
                alt={`${company} logo`}
                width={56}
                height={56}
                className="object-contain"
            />
        </div>

        {/* İçerik */}
        <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{position}</h3>
            <p className="text-sm text-gray-600">{company}</p>
            <p className="text-xs text-gray-500 mb-2">{duration}</p>
            <p className="text-sm text-gray-700">{description}</p>
        </div>
    </div>
);

export default ExperienceCard;
