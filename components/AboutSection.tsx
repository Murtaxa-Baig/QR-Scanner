"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full"
                    >
                        <div
                            className="w-full aspect-square md:aspect-auto md:h-[400px] bg-gray-100 dark:bg-gray-800 rounded-2xl relative overflow-hidden shadow-xl bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsD04SwuVFHI9znFsfJBN1kvbwrfKpG415HV0EGwPHnx1EQk5raI1V7i7cRDhikeGCLH6qRSRqzTB4JYlehlUMcQuDM8Qyi9qGIfvrJpBz3t7x1UoApNT7x_6bYTcBeHgvlncUGo3XGSbGsPsgpn_OLG-aG2PVXAh5mAHgHyoGybUSUByWmYUJeFwP9wxktwlDNGGyv7gzxaPFqg7sM0F6fwtpH_V1ObtphEle7-QBgaHkrDH7Rrekx8y8XvaVmqYoABLzqgp9pj7i')",
                            }}
                        >
                            <div className="absolute inset-0 bg-primary/10"></div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl font-bold text-[#131118] dark:text-white mb-6">
                            Designed for Human Creativity
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                            We believe AI shouldn&apos;t replace human creativity—it should
                            empower it. Our suite of tools is designed to help you break
                            through writer&apos;s block and cut your writing time by 90%.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Natural sounding outputs that pass AI detection tests.",
                                "Privacy-first approach with secure data handling.",
                                "Instant generation across 8 specialized categories."
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 * index }}
                                    className="flex items-start gap-3"
                                >
                                    <span className="material-symbols-outlined text-primary">
                                        verified
                                    </span>
                                    <span className="text-gray-700 dark:text-gray-300">
                                        {item}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
