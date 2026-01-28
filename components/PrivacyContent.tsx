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
                <h1 className="text-4xl md:text-5xl font-black text-[#131118] dark:text-white mb-4">
                    Privacy Policy
                </h1>
                <p className="text-[#6b608a] dark:text-[#a097bd] text-lg font-normal leading-normal mb-6">
                    Transparent information on how we handle your data and protect your
                    privacy in our AI ecosystem.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                        Last Updated: October 24, 2023
                    </span>
                    <span className="hidden sm:inline text-gray-300">|</span>
                    <a
                        className="text-primary font-medium hover:underline flex items-center gap-1"
                        href="mailto:privacy@aiutilities.com"
                    >
                        <span className="material-symbols-outlined text-sm">mail</span>
                        privacy@aiutilities.com
                    </a>
                </div>
            </motion.header>

            <div className="space-y-12">
                {[
                    {
                        id: "intro",
                        title: "Introduction",
                        content: (
                            <>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    At Ai Utilities, we respect your privacy and are committed to
                                    protecting it. This Privacy Policy explains how we collect, use, and
                                    safeguard your information when you use our AI-powered generation
                                    tools and platform.
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    By using our services, you agree to the collection and use of
                                    information in accordance with this policy. We ensure that your data
                                    is handled with the highest level of security and compliance with
                                    international data protection standards.
                                </p>
                            </>
                        )
                    },
                    {
                        id: "data-collection",
                        title: "1. Data Collection",
                        content: (
                            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="flex gap-3">
                                    <span className="material-symbols-outlined text-primary mt-0.5">
                                        check_circle
                                    </span>
                                    <span>
                                        <strong>Personal Information:</strong> Name, email address, and
                                        billing information when you register for an account.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="material-symbols-outlined text-primary mt-0.5">
                                        check_circle
                                    </span>
                                    <span>
                                        <strong>Usage Data:</strong> Information on how you interact with
                                        our AI, including the prompts you provide and the settings you
                                        choose.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="material-symbols-outlined text-primary mt-0.5">
                                        check_circle
                                    </span>
                                    <span>
                                        <strong>Device Information:</strong> IP address, browser type,
                                        and operating system used to access our site.
                                    </span>
                                </li>
                            </ul>
                        )
                    },
                    {
                        id: "data-usage",
                        title: "2. How We Use Data",
                        content: (
                            <>
                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 rounded-xl bg-white dark:bg-[#1c182b] border border-[#f1f0f5] dark:border-[#2a2636]">
                                        <h4 className="font-bold mb-2 text-[#131118] dark:text-white">Service Improvement</h4>
                                        <p className="text-sm text-[#6b608a] dark:text-[#a097bd]">
                                            We use anonymized prompts to fine-tune our algorithms and
                                            improve output quality.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white dark:bg-[#1c182b] border border-[#f1f0f5] dark:border-[#2a2636]">
                                        <h4 className="font-bold mb-2 text-[#131118] dark:text-white">Personalization</h4>
                                        <p className="text-sm text-[#6b608a] dark:text-[#a097bd]">
                                            Remembering your preferences to provide a more tailored user
                                            experience.
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Your data is never sold to third parties. We only use it to
                                    maintain, support, and improve the specific services you have
                                    requested from Ai Utilities.
                                </p>
                            </>
                        )
                    },
                    {
                        id: "third-party",
                        title: "3. Third-Party Services",
                        content: (
                            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-primary">
                                            cloud
                                        </span>
                                        <div>
                                            <h4 className="font-bold text-[#131118] dark:text-white text-base">AI Model Infrastructure</h4>
                                            <p className="text-sm text-[#6b608a] dark:text-[#a097bd]">
                                                Prompts are processed via API through providers like OpenAI
                                                and Anthropic. Your data is not used by these providers to
                                                train their public models based on our enterprise agreement.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-primary">
                                            payments
                                        </span>
                                        <div>
                                            <h4 className="font-bold text-[#131118] dark:text-white text-base">Payment Processing</h4>
                                            <p className="text-sm text-[#6b608a] dark:text-[#a097bd]">
                                                We use Stripe for secure billing. We never store your full
                                                credit card details on our own servers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: "user-rights",
                        title: "4. User Rights",
                        content: (
                            <>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    Depending on your location, you may have the following rights
                                    regarding your personal data:
                                </p>
                                <div className="space-y-3">
                                    <motion.div whileHover={{ x: 5 }} className="flex items-center justify-between p-4 rounded-lg bg-[#f1f0f5] dark:bg-white/5 cursor-pointer">
                                        <span className="font-medium text-[#131118] dark:text-white">Right to Access and Portability</span>
                                        <span className="material-symbols-outlined text-[#6b608a]">
                                            chevron_right
                                        </span>
                                    </motion.div>
                                    <motion.div whileHover={{ x: 5 }} className="flex items-center justify-between p-4 rounded-lg bg-[#f1f0f5] dark:bg-white/5 cursor-pointer">
                                        <span className="font-medium text-[#131118] dark:text-white">
                                            Right to Rectification or Erasure (&quot;Right to be
                                            Forgotten&quot;)
                                        </span>
                                        <span className="material-symbols-outlined text-[#6b608a]">
                                            chevron_right
                                        </span>
                                    </motion.div>
                                    <motion.div whileHover={{ x: 5 }} className="flex items-center justify-between p-4 rounded-lg bg-[#f1f0f5] dark:bg-white/5 cursor-pointer">
                                        <span className="font-medium text-[#131118] dark:text-white">Right to Restrict Processing</span>
                                        <span className="material-symbols-outlined text-[#6b608a]">
                                            chevron_right
                                        </span>
                                    </motion.div>
                                </div>
                                <p className="mt-6 text-[#6b608a] dark:text-[#a097bd] italic text-sm text-center">
                                    To exercise these rights, please contact our Data Protection Officer
                                    at privacy@aiutilities.com
                                </p>
                            </>
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
