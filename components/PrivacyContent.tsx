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
                    Transparent information on how we handle your data, permissions, and protect your
                    privacy in our utility ecosystem.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                        Last Updated: June 13, 2026
                    </span>
                    <span className="hidden sm:inline text-gray-300">|</span>
                    <a
                        className="text-primary font-medium hover:underline flex items-center gap-1"
                        href="mailto:Appnayatecnologoes@gmail.com"
                    >
                        <span className="material-symbols-outlined text-sm">mail</span>
                        Appnayatecnologoes@gmail.com
                    </a>
                </div>
            </motion.header>
 
            <div className="space-y-12">
                {[
                    {
                        id: "introduction",
                        title: "1. Introduction",
                        content: (
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                This Privacy Policy outlines how QR Scanner collects, processes, stores, and protects personal data, scan history, camera inputs, and library assets.
                            </p>
                        )
                    },
                    {
                        id: "information-collected",
                        title: "2. Information & Permissions Collected",
                        content: (
                            <>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    We collect and request access to:
                                </p>
                                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                    <li className="flex gap-3">
                                        <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                                        <span>Full Name & Email Address (via secure Authentication)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                                        <span>Camera Access (strictly requested to scan QR codes and barcodes in real-time)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                                        <span>Photo Library Access (strictly requested to let you select and upload a custom profile picture)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                                        <span>Scan & Generation History (saved in the database to sync across your devices)</span>
                                    </li>
                                </ul>
                                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed italic font-bold">
                                    We DO NOT process or stream camera footage to our servers; all frame analysis for code reading is done locally on your device.
                                </p>
                            </>
                        )
                    },
                    {
                        id: "purpose",
                        title: "3. Purpose of Data Processing",
                        content: (
                            <>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    Your data is used to:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Create and manage user accounts",
                                        "Authenticate users via Firebase",
                                        "Sync scan and generation history to the cloud",
                                        "Store and display your selected profile photo",
                                        "Support code detection features on-device",
                                        "Provide secure database backup"
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 rounded-xl bg-white dark:bg-[#1c182b] border border-[#f1f0f5] dark:border-[#2a2636]">
                                            <p className="text-sm font-medium text-[#131118] dark:text-white">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )
                    },
                    {
                        id: "legal-basis",
                        title: "4. Legal Basis for Processing",
                        content: (
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Data is processed based on user consent (such as granting camera/library permissions), service necessity, and our legitimate interests in providing secure scan log storage.
                            </p>
                        )
                    },
                    {
                        id: "third-party",
                        title: "5. Third-Party Data Processors",
                        content: (
                            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">We use:</p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-primary">security</span>
                                        <div>
                                            <h4 className="font-bold text-[#131118] dark:text-white text-base">Firebase</h4>
                                            <p className="text-sm text-[#6b608a] dark:text-[#a097bd]">Authentication, Firestore database, and Cloud Storage for profile files</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-primary">cloud</span>
                                        <div>
                                            <h4 className="font-bold text-[#131118] dark:text-white text-base">Cloud Infrastructure</h4>
                                            <p className="text-sm text-[#6b608a] dark:text-[#a097bd]">Secure database storage and backup configurations</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4 text-xs text-[#6b608a] dark:text-[#a097bd] italic">
                                    Third-party hosts do not use your scan history or profile media for any other purposes, securing access under strict database rules.
                                </p>
                            </div>
                        )
                    },
                    {
                        id: "security",
                        title: "6. Cloud Database & Account Security",
                        content: (
                            <div className="space-y-4">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    QR Scanner secures your scan history and profile data by linking database records directly to your authenticated user account. All data transmissions are encrypted in transit. You are responsible for keeping your login credentials confidential and ensuring the physical and software security of your local device.
                                </p>
                            </div>
                        )
                    },
                    {
                        id: "retention",
                        title: "7. Data Retention Policy",
                        content: (
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Scanned items, profile details, and account metadata are retained in our database while your account is active. You can clear your scanned log history at any time or request account deletion to remove all data permanently.
                            </p>
                        )
                    },
                    {
                        id: "international-transfers",
                        title: "8. International Data Transfers",
                        content: (
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Data may be processed by third-party database servers located in other jurisdictions, governed by secure transmission standards.
                            </p>
                        )
                    },
                    {
                        id: "user-rights",
                        title: "9. User Rights",
                        content: (
                            <>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    Users may request:
                                </p>
                                <div className="space-y-3">
                                    {[
                                        "Access to account profile and scan history data",
                                        "Correction of account details",
                                        "Complete deletion of scan history database records",
                                        "Account termination"
                                    ].map((right, i) => (
                                        <motion.div key={i} whileHover={{ x: 5 }} className="flex items-center justify-between p-4 rounded-lg bg-[#f1f0f5] dark:bg-white/5 cursor-pointer">
                                            <span className="font-medium text-[#131118] dark:text-white">{right}</span>
                                            <span className="material-symbols-outlined text-[#6b608a]">chevron_right</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <p className="mt-6 text-[#6b608a] dark:text-[#a097bd] italic text-sm text-center">
                                    Requests should be sent via email.
                                </p>
                            </>
                        )
                    },
                    {
                        id: "cookies",
                        title: "10. Technical Settings & Storage",
                        content: (
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                The platform may use essential session tokens and local storage necessary for account persistence, session timeout, and database sync.
                            </p>
                        )
                    },
                    {
                        id: "childrens-privacy",
                        title: "11. Children's Privacy",
                        content: (
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                We do not knowingly collect information from children under 13.
                            </p>
                        )
                    },
                    {
                        id: "policy-updates",
                        title: "12. Policy Updates",
                        content: (
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                We reserve the right to update this Privacy Policy. Changes become effective upon publication.
                            </p>
                        )
                    },
                    {
                        id: "contact",
                        title: "13. Contact Information",
                        content: (
                            <div className="text-center p-8 rounded-2xl bg-primary/5 border border-primary/10">
                                <h4 className="text-xl font-bold text-[#131118] dark:text-white mb-2">Questions or Data Requests?</h4>
                                <p className="text-[#6b608a] dark:text-[#a097bd] mb-6">For privacy concerns or data requests, please contact us at:</p>
                                <a
                                    href="mailto:Appnayatecnologoes@gmail.com"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                                >
                                    <span className="material-symbols-outlined">mail</span>
                                    Appnayatecnologoes@gmail.com
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
