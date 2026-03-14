"use client";

import { motion } from "framer-motion";

export default function Features() {
    return (
        <section id="features" className="bg-white dark:bg-gray-900 py-20 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-[#131118] dark:text-white mb-4">
                        Powerful Security Features
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Everything you need to manage your passwords and identities securely.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Password Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        className="brand-gradient text-white p-8 rounded-2xl shadow-lg flex flex-col h-full transition-all duration-300"
                    >
                        <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-4xl text-white">
                                password
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Save Password</h3>
                        <p className="opacity-90 mb-6 flex-1">
                            Store your passwords with top-tier security. Keep track of all essential details in one place and generate strong, secure passwords instantly with weak, medium, or strong strength options.
                        </p>
                        <ul className="space-y-3 opacity-90">
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Item Name & Username</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Website URL & Category</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Secure Notes</li>
                        </ul>
                    </motion.div>

                    {/* Identity Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        className="identity-gradient text-white p-8 rounded-2xl shadow-lg flex flex-col h-full transition-all duration-300"
                    >
                        <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-4xl text-white">
                                badge
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Save Identity</h3>
                        <p className="opacity-90 mb-6 flex-1">
                            Keep your personal information safe and easily accessible for quick form filling and secure record-keeping. Organized and always encrypted.
                        </p>
                        <ul className="space-y-3 opacity-90">
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Identity Title & Full Name</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Email & Phone Number</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Address Details</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Secure Notes</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
