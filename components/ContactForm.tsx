"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
        >
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-2"
                    >
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                            Your Name
                        </label>
                        <input
                            className="w-full bg-background-light dark:bg-gray-800 border-transparent rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-800 text-[#131118] dark:text-white outline-none transition-all"
                            placeholder="John Doe"
                            required
                            type="text"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-2"
                    >
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                            Email Address
                        </label>
                        <input
                            className="w-full bg-background-light dark:bg-gray-800 border-transparent rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-800 text-[#131118] dark:text-white outline-none transition-all"
                            placeholder="john@example.com"
                            required
                            type="email"
                        />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="space-y-2"
                >
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                        Subject
                    </label>
                    <input
                        className="w-full bg-background-light dark:bg-gray-800 border-transparent rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-800 text-[#131118] dark:text-white outline-none transition-all"
                        placeholder="How can we help?"
                        required
                        type="text"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                >
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                        Message
                    </label>
                    <textarea
                        className="w-full bg-background-light dark:bg-gray-800 border-transparent rounded-xl p-4 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-800 text-[#131118] dark:text-white outline-none transition-all"
                        placeholder="Tell us more about your inquiry..."
                        required
                        rows={6}
                    ></textarea>
                </motion.div>
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full brand-gradient text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/20 text-lg"
                    type="submit"
                >
                    Send Message
                </motion.button>
            </form>
        </motion.div>
    );
}
