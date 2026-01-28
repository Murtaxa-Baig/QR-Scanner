"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="brand-gradient rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-black mb-6"
                        >
                            Ready to Transform Your Writing?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium"
                        >
                            Join over 1 million creatives and professionals who are already
                            using AI to power their words.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-primary font-bold py-4 px-12 rounded-xl text-lg hover:bg-gray-100 transition-all shadow-xl"
                            >
                                Get Started Free
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-white/40 hover:border-white text-white font-bold py-4 px-12 rounded-xl text-lg transition-all"
                            >
                                View All Tools
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
