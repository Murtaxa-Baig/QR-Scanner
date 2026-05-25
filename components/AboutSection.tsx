"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden" id="about">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#131118] dark:text-white mb-6">
                        Complete Control Over Your Data
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
                        Manage your digital vault effortlessly with intuitive tools built right into Password Manager. Sort, filter, and recover your credentials whenever you need them.
                    </p>
                    <ul className="space-y-4 max-w-xl mx-auto text-left">
                        {[
                            "Organize with Categories: Filter and search your passwords instantly.",
                            "Trash Recovery: Soft delete moves items to Trash; safely recover or permanently delete.",
                            "Biometric Security: Your vault is secured by advanced biometric verification."
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 * index }}
                                className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
                            >
                                <span className="material-symbols-outlined text-primary mt-0.5">
                                    verified
                                </span>
                                <span className="text-gray-700 dark:text-gray-300 font-medium">
                                    {item}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
