interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
    return (
        <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >

            </a>
        </div>
    );
}
