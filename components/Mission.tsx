"use client";

import { motion } from "framer-motion";

export default function Mission() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold text-[#131118] dark:text-white mb-8">
                        Our Mission
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed italic">
                        &quot;To empower every creative, professional, and student with AI
                        tools that feel like a natural extension of their own
                        intelligence, fostering a world where technology removes barriers
                        to human expression.&quot;
                    </p>
                    <div className="mt-12 flex justify-center gap-8">
                        {[
                            { label: "Founded", value: "2024" },
                            { label: "Community", value: "1M+" },
                            { label: "Tools", value: "8+" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (index * 0.1) }}
                            >
                                <p className="text-2xl font-black brand-text-gradient">{stat.value}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
