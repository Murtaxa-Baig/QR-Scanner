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
                        Core Scanner Features
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Everything you need to scan, generate, and manage your QR codes and barcodes.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Scan Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        className="brand-gradient text-white p-8 rounded-2xl shadow-lg flex flex-col h-full transition-all duration-300"
                    >
                        <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-4xl text-white">
                                qr_code_scanner
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Scan QR & Barcodes</h3>
                        <p className="opacity-90 mb-6 flex-1">
                            Point your device camera to instantly scan and decode QR codes and barcodes. Supports real-time detection for URLs, contact cards, Wi-Fi networks, EAN, UPC, and more.
                        </p>
                        <ul className="space-y-3 opacity-90">
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Camera Access Permission</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Real-time Decoding & Detection</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> QR & Barcode Formats Supported</li>
                        </ul>
                    </motion.div>
 
                    {/* Generate Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        className="bg-gradient-to-b from-[#10B981] to-[#059669] text-white p-8 rounded-2xl shadow-lg flex flex-col h-full transition-all duration-300"
                    >
                        <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-4xl text-white">
                                qr_code_2
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Generate Custom Codes</h3>
                        <p className="opacity-90 mb-6 flex-1">
                            Generate customized QR codes and barcodes on the fly. Input text, phone numbers, websites, or choose standard barcode types like Code 128 to create codes ready for sharing or printing.
                        </p>
                        <ul className="space-y-3 opacity-90">
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> QR Codes for Links & Wi-Fi</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Barcode Formats (Code 39, UPC, etc.)</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Share & Export Instantly</li>
                        </ul>
                    </motion.div>

                    {/* Authentication & DB Backup Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        className="bg-gradient-to-b from-[#0EA5E9] to-[#2563EB] text-white p-8 rounded-2xl shadow-lg flex flex-col h-full transition-all duration-300"
                    >
                        <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-4xl text-white">
                                cloud_sync
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Secure Cloud Sync</h3>
                        <p className="opacity-90 mb-6 flex-1">
                            Sign in securely via email or Google authentication to save your scanned history and generated codes in the database. Access your logs safely on any device at any time.
                        </p>
                        <ul className="space-y-3 opacity-90">
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Firebase Authentication</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Encrypted History Database</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Cross-Device Sync</li>
                        </ul>
                    </motion.div>

                    {/* Profile Customization Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        className="identity-gradient text-white p-8 rounded-2xl shadow-lg flex flex-col h-full transition-all duration-300"
                    >
                        <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-4xl text-white">
                                account_circle
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Customized Profiles</h3>
                        <p className="opacity-90 mb-6 flex-1">
                            Personalize your scanner account. Upload your profile photo by granting photo library access, allowing you to update your profile metadata directly in our database.
                        </p>
                        <ul className="space-y-3 opacity-90">
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Photo Library Access Permission</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Profile Metadata Storage</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span> Dynamic Account Customization</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
