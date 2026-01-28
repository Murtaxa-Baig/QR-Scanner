"use client";

import { motion } from "framer-motion";

export default function Download() {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-[#131118] dark:text-white mb-12"
                >
                    Take AI Power with You
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[
                        { icon: "apple", label: "Download on the", store: "App Store" },
                        { icon: "play_arrow", label: "Get it on", store: "Google Play" }
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="brand-gradient p-10 rounded-2xl text-white flex flex-col items-center justify-center gap-6 shadow-xl cursor-pointer transition-shadow hover:shadow-primary/20"
                        >
                            <span className="material-symbols-outlined text-6xl">{card.icon === "play_arrow" ? "play_arrow" : card.icon}</span>
                            <div className="text-center">
                                <p className="text-sm opacity-90 mb-1">{card.label}</p>
                                <h3 className="text-2xl font-black">{card.store}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
