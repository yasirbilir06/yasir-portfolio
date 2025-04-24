// src/components/FadeInSection.tsx
import { motion } from "framer-motion";
import React from "react";

interface FadeInSectionProps {
    children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
    >
        {children}
    </motion.div>
);

export default FadeInSection;
