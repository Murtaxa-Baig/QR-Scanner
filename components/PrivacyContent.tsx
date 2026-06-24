"use client";

import { motion } from "framer-motion";

export default function PrivacyContent() {
    return (
        <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12 border-b border-gray-100 dark:border-gray-800 pb-8 text-center md:text-left"
            >
                <h1 className="text-4xl md:text-5xl mt-8 font-black text-[#131118] dark:text-white mb-4">
                    Privacy Policy
                </h1>
                <p className="text-[#6b608a] dark:text-[#a097bd] text-lg font-normal leading-normal mb-6">
                    We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you use our app.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                        Last Updated: June 24, 2026
                    </span>
                    <span className="hidden sm:inline text-gray-300">|</span>
                    <a
                        className="text-primary font-medium hover:underline flex items-center gap-1"
                        href="mailto:supportappnaya@gmail.com"
                    >
                        <span className="material-symbols-outlined text-sm">mail</span>
                        supportappnaya@gmail.com
                    </a>
                </div>
            </motion.header>

            <div className="space-y-12">
                {[
                    {
                        id: "information-collect",
                        title: "1. Information We Collect",
                        content: (
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-[#131118] dark:text-white mb-3">Account Information</h3>
                                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                        <li className="flex items-start gap-2.5">
                                            <span className="material-symbols-outlined text-primary text-lg mt-0.5">badge</span>
                                            <span>Full name.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="material-symbols-outlined text-primary text-lg mt-0.5">mail</span>
                                            <span>Email address.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <span className="material-symbols-outlined text-primary text-lg mt-0.5">vpn_key</span>
                                            <span>Authentication data managed through secure third-party services.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-t border-gray-100 dark:border-gray-800 pt-6">
                                    <h3 className="text-lg font-bold text-[#131118] dark:text-white mb-3">Permissions</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-white dark:bg-[#1c182b] border border-[#f1f0f5] dark:border-[#2a2636]">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="material-symbols-outlined text-primary">photo_camera</span>
                                                <h4 className="font-semibold text-[#131118] dark:text-white">Camera Access</h4>
                                            </div>
                                            <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                <li>• Scan QR codes and barcodes.</li>
                                                <li>• Enable real-time code detection.</li>
                                            </ul>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                                                Camera data is processed locally on your device. We do not record, store, or transmit camera footage.
                                            </p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white dark:bg-[#1c182b] border border-[#f1f0f5] dark:border-[#2a2636]">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="material-symbols-outlined text-primary">photo_library</span>
                                                <h4 className="font-semibold text-[#131118] dark:text-white">Photo Library Access</h4>
                                            </div>
                                            <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                <li>• Upload a profile picture.</li>
                                                <li>• Scan codes from selected images.</li>
                                            </ul>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                                                Photos are accessed only when you choose to use these features.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 dark:border-gray-800 pt-6">
                                    <h3 className="text-lg font-bold text-[#131118] dark:text-white mb-3">App Data</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-400">
                                        {[
                                            "QR code generation history",
                                            "Scan history",
                                            "Profile image",
                                            "App preferences and settings"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-transparent">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: "use-information",
                        title: "2. How We Use Your Information",
                        content: (
                            <div className="space-y-4">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                                    We use your information to:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { text: "Create and manage accounts.", icon: "manage_accounts" },
                                        { text: "Authenticate users securely.", icon: "security" },
                                        { text: "Provide QR scanning and generation features.", icon: "qr_code_scanner" },
                                        { text: "Sync scan and generation history across devices.", icon: "sync" },
                                        { text: "Store profile pictures.", icon: "account_circle" },
                                        { text: "Maintain security and reliability.", icon: "shield" },
                                        { text: "Provide customer support.", icon: "support_agent" },
                                        { text: "Improve app performance and user experience.", icon: "speed" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-[#1c182b] border border-[#f1f0f5] dark:border-[#2a2636]">
                                            <span className="material-symbols-outlined text-primary mt-0.5">{item.icon}</span>
                                            <p className="text-sm font-medium text-[#131118] dark:text-white leading-snug">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    },
                    {
                        id: "legal-basis",
                        title: "3. Legal Basis for Processing",
                        content: (
                            <div className="space-y-3">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                                    We process data based on:
                                </p>
                                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                    {[
                                        "Your consent.",
                                        "Service requirements.",
                                        "Legitimate interests such as security and service improvement.",
                                        "Compliance with legal obligations."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-3 items-start">
                                            <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    },
                    {
                        id: "third-party",
                        title: "4. Third-Party Services",
                        content: (
                            <div className="space-y-6">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                                    We may use trusted providers, including:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-primary/5 rounded-xl p-5 border border-primary/10 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="material-symbols-outlined text-primary">cloud_done</span>
                                                <h4 className="font-bold text-[#131118] dark:text-white text-base">Firebase</h4>
                                            </div>
                                            <ul className="space-y-1.5 text-sm text-[#6b608a] dark:text-[#a097bd]">
                                                <li>• Authentication.</li>
                                                <li>• Cloud Firestore Database.</li>
                                                <li>• Cloud Storage.</li>
                                                <li>• Analytics and performance monitoring (if enabled).</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bg-primary/5 rounded-xl p-5 border border-primary/10 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="material-symbols-outlined text-primary">dns</span>
                                                <h4 className="font-bold text-[#131118] dark:text-white text-base">Cloud Infrastructure Providers</h4>
                                            </div>
                                            <ul className="space-y-1.5 text-sm text-[#6b608a] dark:text-[#a097bd]">
                                                <li>• Data storage.</li>
                                                <li>• Backups.</li>
                                                <li>• Security and maintenance.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                    These providers process data only as necessary to deliver our services.
                                </p>
                            </div>
                        )
                    },
                    {
                        id: "data-security",
                        title: "5. Data Security",
                        content: (
                            <div className="space-y-4">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    We use industry-standard security measures, including:
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-3 text-gray-600 dark:text-gray-400">
                                    {[
                                        "Encrypted data transmission.",
                                        "Secure authentication.",
                                        "Database access controls.",
                                        "Security monitoring."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-2.5 items-center">
                                            <span className="material-symbols-outlined text-primary text-lg">lock</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-2 border-l-2 border-primary/20 pl-3">
                                    While we take reasonable steps to protect your data, no method of transmission or storage is completely secure.
                                </p>
                            </div>
                        )
                    },
                    {
                        id: "data-retention",
                        title: "6. Data Retention",
                        content: (
                            <div className="space-y-4">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    We retain data only as long as necessary:
                                </p>
                                <ul className="space-y-2.5 text-gray-600 dark:text-gray-400">
                                    <li className="flex gap-2.5 items-start">
                                        <span className="material-symbols-outlined text-primary text-lg mt-0.5">hourglass_empty</span>
                                        <span><strong>Account information:</strong> remains while your account is active.</span>
                                    </li>
                                    <li className="flex gap-2.5 items-start">
                                        <span className="material-symbols-outlined text-primary text-lg mt-0.5">history</span>
                                        <span><strong>Scan and generation history:</strong> remains until deleted by you or upon account deletion.</span>
                                    </li>
                                    <li className="flex gap-2.5 items-start">
                                        <span className="material-symbols-outlined text-primary text-lg mt-0.5">image</span>
                                        <span><strong>Profile images:</strong> remain until removed or replaced.</span>
                                    </li>
                                </ul>
                                <p className="text-sm text-primary font-medium mt-2">
                                    You may request account deletion at any time.
                                </p>
                            </div>
                        )
                    },
                    {
                        id: "international-transfers",
                        title: "7. International Data Transfers",
                        content: (
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Your information may be stored or processed on servers located in other countries. Appropriate safeguards are applied to protect your data.
                            </p>
                        )
                    },
                    {
                        id: "your-rights",
                        title: "8. Your Rights",
                        content: (
                            <div className="space-y-4">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                                    Subject to applicable laws, you may:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Access your personal data.",
                                        "Correct inaccurate information.",
                                        "Delete your personal data.",
                                        "Remove scan and generation history.",
                                        "Withdraw consent where applicable.",
                                        "Request account deletion."
                                    ].map((right, i) => (
                                        <motion.div key={i} whileHover={{ x: 5 }} className="flex items-center justify-between p-3.5 rounded-lg bg-[#f1f0f5] dark:bg-white/5 border border-transparent dark:border-white/5">
                                            <span className="font-medium text-[#131118] dark:text-white text-sm">{right}</span>
                                            <span className="material-symbols-outlined text-[#6b608a] text-sm">chevron_right</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <p className="mt-4 text-[#6b608a] dark:text-[#a097bd] italic text-sm text-center">
                                    Requests can be made via email.
                                </p>
                            </div>
                        )
                    },
                    {
                        id: "local-storage",
                        title: "9. Local Storage",
                        content: (
                            <div className="space-y-4">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    The app may use local storage, cached files, and session tokens for:
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    {[
                                        "Authentication",
                                        "Account persistence",
                                        "Saving preferences",
                                        "Performance optimization",
                                        "Data synchronization"
                                    ].map((item, idx) => (
                                        <div key={idx} className="p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-transparent text-center">
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                    These technologies are used only for essential app functionality.
                                </p>
                            </div>
                        )
                    },
                    {
                        id: "children-privacy",
                        title: "10. Children's Privacy",
                        content: (
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Our app is not intended for children under 13 years of age. We do not knowingly collect personal information from children.
                            </p>
                        )
                    },
                    {
                        id: "policy-updates",
                        title: "11. Policy Updates",
                        content: (
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                We may update this Privacy Policy from time to time. Changes become effective upon publication within the app.
                            </p>
                        )
                    },
                    {
                        id: "contact-us",
                        title: "12. Contact Us",
                        content: (
                            <div className="text-center p-8 rounded-2xl bg-primary/5 border border-primary/10">
                                <h4 className="text-xl font-bold text-[#131118] dark:text-white mb-2">Questions or Privacy Requests?</h4>
                                <p className="text-[#6b608a] dark:text-[#a097bd] mb-6">For privacy-related questions or requests, contact:</p>
                                <a
                                    href="mailto:supportappnaya@gmail.com"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                                >
                                    <span className="material-symbols-outlined">mail</span>
                                    supportappnaya@gmail.com
                                </a>
                            </div>
                        )
                    }
                ].map((section, index) => (
                    <motion.section
                        key={section.id}
                        id={section.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#131118] dark:text-white">
                            <span className="w-1 h-8 bg-primary rounded-full"></span>
                            {section.title}
                        </h2>
                        {section.content}
                    </motion.section>
                ))}
            </div>
        </div>
    );
}
