"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "Essay Generator",
        description: "Create structured, academic-grade essays in minutes.",
        icon: "description",
    },
    {
        title: "Story Generator",
        description: "Draft creative fictional worlds and compelling narratives.",
        icon: "auto_stories",
    },
    {
        title: "Poem Generator",
        description: "Compose beautiful, rhythmic poetry with AI assistance.",
        icon: "ink_pen",
    },
    {
        title: "Email Writer",
        description: "Draft professional workplace emails instantly.",
        icon: "mail",
    },
    {
        title: "AI Summarizer",
        description: "Condense long documents into readable summaries.",
        icon: "summarize",
    },
    {
        title: "AI Paraphraser",
        description: "Rewrite content while maintaining the original meaning.",
        icon: "sync_alt",
    },
    {
        title: "AI Humanizer",
        description: "Transform robotic AI text into natural human speech.",
        icon: "face",
    },
    {
        title: "AI Detector",
        description: "Scan and identify AI-generated text patterns.",
        icon: "shield",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Features() {
    return (
        <section className="bg-white dark:bg-gray-900 py-20 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-[#131118] dark:text-white mb-4">
                        Advanced Writing Tools
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Everything you need to create compelling content effortlessly
                    </p>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            className="feature-card border border-gray-100 dark:border-gray-800 bg-background-light dark:bg-background-dark p-6 rounded-xl transition-shadow"
                        >
                            <span className="material-symbols-outlined text-primary text-3xl mb-4">
                                {feature.icon}
                            </span>
                            <h3 className="text-lg font-bold text-[#131118] dark:text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
