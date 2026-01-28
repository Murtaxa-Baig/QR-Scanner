"use client";

import { motion } from "framer-motion";

export default function DeleteAccount() {
    return (
        <main className="flex flex-1 justify-center py-12 px-4 shadow-sm">
            <div className="max-w-[640px] w-full flex flex-col gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-2 text-center"
                >
                    <h1 className="text-[#131118] dark:text-white text-4xl mt-8 font-black leading-tight tracking-[-0.033em]">
                        Delete Your Account
                    </h1>
                    <p className="text-[#6b608a] dark:text-gray-400 text-lg font-normal leading-normal">
                        We&apos;re sorry to see you go. This is a permanent action.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="p-1 rounded-xl shadow-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden"
                >
                    <div className="flex flex-col items-stretch justify-start md:flex-row md:items-start bg-white dark:bg-gray-900">
                        <div className="flex w-full grow flex-col items-stretch justify-center gap-3 py-6 px-6">
                            <p className="text-[#131118] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                                This action is irreversible
                            </p>
                            <p className="text-[#6b608a] dark:text-gray-400 text-base font-normal leading-relaxed">
                                By deleting your account, you will lose access to all your
                                project data, historical reports, and active subscriptions
                                immediately.
                            </p>
                        </div>
                    </div>

                    <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#6b608a] dark:text-gray-500 mb-2">
                            Please confirm the following:
                        </p>
                        <div className="space-y-1">
                            {[
                                "I understand my profile and all workspace data will be erased",
                                "I understand my active pro subscriptions will be cancelled without refund"
                            ].map((text, index) => (
                                <motion.label
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    className="flex gap-x-3 py-2 flex-row cursor-pointer group"
                                >
                                    <input
                                        className="h-5 w-5 rounded border-gray-300 dark:border-gray-700 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:outline-none transition-colors"
                                        type="checkbox"
                                    />
                                    <p className="text-[#131118] dark:text-gray-300 text-sm font-normal leading-normal group-hover:text-primary transition-colors">
                                        {text}
                                    </p>
                                </motion.label>
                            ))}
                        </div>
                    </div>

                    <div className="px-6 pb-8 space-y-4">
                        <div className="flex flex-col gap-4">
                            <motion.label
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-col w-full"
                            >
                                <p className="text-[#131118] dark:text-white text-sm font-semibold leading-normal pb-2">
                                    Reason for leaving
                                </p>
                                <select className="form-input flex w-full rounded-lg text-[#131118] dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-12 appearance-none px-4 text-sm font-normal leading-normal">
                                    <option value="">Select a reason</option>
                                    <option value="too-expensive">Pricing is too high</option>
                                    <option value="missing-features">
                                        Missing specific features
                                    </option>
                                    <option value="switching">Switching to a competitor</option>
                                    <option value="no-longer-need">
                                        I no longer need the service
                                    </option>
                                    <option value="hard-to-use">
                                        Platform is too difficult to use
                                    </option>
                                </select>
                            </motion.label>
                            <motion.label
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-col w-full"
                            >
                                <p className="text-[#131118] dark:text-white text-sm font-semibold leading-normal pb-2">
                                    Confirm your password
                                </p>
                                <input
                                    className="form-input flex w-full rounded-lg text-[#131118] dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-12 px-4 text-sm font-normal leading-normal placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                    placeholder="Enter your current password"
                                    type="password"
                                />
                            </motion.label>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col gap-3 pt-6"
                        >
                            <button className="w-full flex items-center justify-center rounded-xl h-14 px-8 bg-red-600 text-white hover:bg-red-700 text-base font-bold leading-normal transition-all shadow-lg shadow-red-600/20 active:scale-[0.98]">
                                Delete My Account
                            </button>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-center text-[#6b608a] dark:text-gray-500 text-sm"
                >
                    Having trouble?{" "}
                    <a className="text-primary hover:underline font-medium" href="#">
                        Contact our support team
                    </a>{" "}
                    for help instead of leaving.
                </motion.p>
            </div>
        </main>
    );
}
