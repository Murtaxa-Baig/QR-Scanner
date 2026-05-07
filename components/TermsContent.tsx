"use client";

import { motion } from "framer-motion";

export default function TermsContent() {
    return (
        <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12 border-b border-gray-100 dark:border-gray-800 pb-8 text-center md:text-left"
            >
                <h1 className="text-4xl md:text-5xl mt-8 font-black text-[#131118] dark:text-white mb-4">
                    Terms & Conditions
                </h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                        Last Updated: February 27, 2026
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
                        id: "acceptance",
                        title: "1. Acceptance of Agreement",
                        content: (
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                By accessing or using PassVault (“Service”), you agree to be legally bound by these Terms & Conditions. If you disagree with any provision, you must immediately cease use of the Service.
                            </p>
                        )
                    },
                    {
                        id: "definitions",
                        title: "2. Definitions",
                        content: (
                            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                <li className="flex gap-3">
                                    <span className="font-bold text-[#131118] dark:text-white min-w-[100px]">“Platform”:</span>
                                    <span>Refers to the PassVault website and applications.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-[#131118] dark:text-white min-w-[100px]">“User”:</span>
                                    <span>Refers to any individual accessing or using the Service.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-[#131118] dark:text-white min-w-[100px]">“Vault”:</span>
                                    <span>Refers to the secure, encrypted storage containing User passwords and identities.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-[#131118] dark:text-white min-w-[100px]">“Master Password”:</span>
                                    <span>Refers to the primary key used to encrypt and decrypt the User Vault.</span>
                                </li>
                            </ul>
                        )
                    },
                    {
                        id: "services",
                        title: "3. Description of Services",
                        content: (
                            <>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    PassVault provides secure digital vault services including Password Management, Identity Storage, Password Generation, and Biometric Authentication.
                                </p>
                                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                        PassVault employs zero-knowledge encryption architecture. We cannot retrieve, reset, or access your Master Password under any circumstances.
                                    </p>
                                </div>
                            </>
                        )
                    },
                    {
                        id: "eligibility",
                        title: "4. User Eligibility",
                        content: (
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Users must be at least 13 years of age. By using the Service, you confirm you meet this requirement.
                            </p>
                        )
                    },
                    {
                        id: "account",
                        title: "5. Account Registration & Security",
                        content: (
                            <div className="space-y-4 text-gray-600 dark:text-gray-400">
                                <p className="leading-relaxed">
                                    Registration is completed via Google Authentication using Firebase.
                                </p>
                                <p className="leading-relaxed font-bold">
                                    You are strictly responsible for maintaining the confidentiality of your account credentials, Master Password, and all activities under it. Loss of your Master Password WILL result in permanent loss of your Vault data.
                                </p>
                            </div>
                        )
                    },
                    {
                        id: "subscription",
                        title: "6. Free Access and Subscription Terms",
                        content: (
                            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="flex gap-3">
                                    <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                                    <span>Basic storage capabilities are provided for free to all registered users.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                                    <span>Advanced organizational and syncing features may require an active premium subscription.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="material-symbols-outlined text-primary mt-0.5">warning</span>
                                    <span>PassVault is not liable for data loss due to lapsed subscription backups (if applicable).</span>
                                </li>
                            </ul>
                        )
                    },
                    {
                        id: "refund",
                        title: "7. Refund & Cancellation Policy",
                        content: (
                            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                <li>• Users may cancel premium subscriptions at any time.</li>
                                <li>• Refund eligibility depends on applicable payment provider policies within 14 days of purchase.</li>
                            </ul>
                        )
                    },
                    {
                        id: "usage",
                        title: "8. Acceptable Use Policy",
                        content: (
                            <>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">You agree NOT to:</p>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {[
                                        "Store illegal materials or credentials obtained unlawfully",
                                        "Use the Service to distribute malware or phishing links",
                                        "Violate intellectual property rights",
                                        "Attempt to reverse engineer the encryption algorithms",
                                        "Interfere with the platform's security and stability"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-2 items-center p-3 rounded-lg bg-red-50/50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20">
                                            <span className="material-symbols-outlined text-red-500 text-sm">block</span>
                                            <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )
                    },
                    {
                        id: "intellectual",
                        title: "9. Intellectual Property Rights",
                        content: (
                            <div className="space-y-4 text-gray-600 dark:text-gray-400">
                                <p className="leading-relaxed">
                                    All branding, design, structure, and software remain the exclusive property of PassVault. Your Vault data remains exclusively yours.
                                </p>
                            </div>
                        )
                    },
                    {
                        id: "user-content",
                        title: "10. User Vault Data Responsibility",
                        content: (
                            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                <li>• You retain sole responsibility for any text, passwords, or identities submitted to your Vault.</li>
                                <li>• PassVault cannot moderate or review Vault contents due to zero-knowledge encryption.</li>
                            </ul>
                        )
                    },
                    {
                        id: "liability",
                        title: "11. Limitation of Liability",
                        content: (
                            <>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">To the maximum extent permitted by law, PassVault shall not be liable for:</p>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-400 pl-4">
                                    <li>• Indirect or consequential damages</li>
                                    <li>• Loss of data due to forgotten Master Passwords or local device compromise</li>
                                    <li>• Unauthorized access resulting from User negligence regarding endpoint security</li>
                                </ul>
                            </>
                        )
                    },
                    {
                        id: "indemnification",
                        title: "12. Indemnification",
                        content: (
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                You agree to indemnify and hold harmless PassVault against claims arising from misuse or violation of these Terms.
                            </p>
                        )
                    },
                    {
                        id: "availability",
                        title: "13. Service Availability",
                        content: (
                            <div className="space-y-3 text-gray-600 dark:text-gray-400">
                                <p>We do not guarantee 100% uninterrupted error-free service.</p>
                                <p>We strongly recommend keeping local backups or exporting your encrypted Vault periodically.</p>
                            </div>
                        )
                    },
                    {
                        id: "termination",
                        title: "14. Termination of Access",
                        content: (
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                We reserve the right to suspend or terminate accounts without notice if severe security violations occur.
                            </p>
                        )
                    },
                    {
                        id: "modifications",
                        title: "15. Modifications to Terms",
                        content: (
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                We may revise these Terms at any time. Continued use constitutes acceptance of revised Terms.
                            </p>
                        )
                    },
                    {
                        id: "governing-law",
                        title: "16. Governing Law & Dispute Resolution",
                        content: (
                            <div className="space-y-3 text-gray-600 dark:text-gray-400">
                                <p>These Terms shall be governed by applicable laws.</p>
                                <p>Any disputes shall first be attempted to be resolved amicably before legal action.</p>
                            </div>
                        )
                    },
                    {
                        id: "contact",
                        title: "17. Contact Information",
                        content: (
                            <div className="text-center p-8 rounded-2xl bg-primary/5 border border-primary/10">
                                <h4 className="text-xl font-bold text-[#131118] dark:text-white mb-2">Legal Inquiries</h4>
                                <p className="text-[#6b608a] dark:text-[#a097bd] mb-6">For legal inquiries, please contact us at:</p>
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
                        <h2 className="text-2xl font-bold text-[#131118] dark:text-white mb-4">
                            {section.title}
                        </h2>
                        {section.content}
                    </motion.section>
                ))}
            </div>
        </div>
    );
}
