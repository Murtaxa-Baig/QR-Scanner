export default function DeleteAccount() {
    return (
        <main className="flex flex-1 justify-center py-12 px-4 shadow-sm">
            <div className="max-w-[640px] w-full flex flex-col gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-[#131118] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                        Delete Your Account
                    </h1>
                    <p className="text-[#6b608a] dark:text-gray-400 text-lg font-normal leading-normal">
                        We&apos;re sorry to see you go. This is a permanent action.
                    </p>
                </div>

                <div className="p-1 rounded-xl shadow-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <div className="flex flex-col items-stretch justify-start md:flex-row md:items-start bg-white dark:bg-gray-900">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover md:rounded-l-lg md:rounded-tr-none md:w-1/3"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #ef4444 0%, #3f0bda 100%)",
                            }}
                        >
                            <div className="w-full h-full flex items-center justify-center bg-black/10">
                                <span className="material-symbols-outlined text-white text-6xl">
                                    warning
                                </span>
                            </div>
                        </div>
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
                            <label className="flex gap-x-3 py-2 flex-row cursor-pointer group">
                                <input
                                    className="h-5 w-5 rounded border-gray-300 dark:border-gray-700 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:outline-none transition-colors"
                                    type="checkbox"
                                />
                                <p className="text-[#131118] dark:text-gray-300 text-sm font-normal leading-normal group-hover:text-primary transition-colors">
                                    I understand my profile and all workspace data will be erased
                                </p>
                            </label>
                            <label className="flex gap-x-3 py-2 flex-row cursor-pointer group">
                                <input
                                    className="h-5 w-5 rounded border-gray-300 dark:border-gray-700 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:outline-none transition-colors"
                                    type="checkbox"
                                />
                                <p className="text-[#131118] dark:text-gray-300 text-sm font-normal leading-normal group-hover:text-primary transition-colors">
                                    I understand my active pro subscriptions will be cancelled
                                    without refund
                                </p>
                            </label>
                        </div>
                    </div>

                    <div className="px-6 pb-8 space-y-4">
                        <div className="flex flex-col gap-4">
                            <label className="flex flex-col w-full">
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
                            </label>
                            <label className="flex flex-col w-full">
                                <p className="text-[#131118] dark:text-white text-sm font-semibold leading-normal pb-2">
                                    Confirm your password
                                </p>
                                <input
                                    className="form-input flex w-full rounded-lg text-[#131118] dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-12 px-4 text-sm font-normal leading-normal placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                    placeholder="Enter your current password"
                                    type="password"
                                />
                            </label>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <button className="flex-1 flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border-2 border-danger text-danger text-sm font-bold leading-normal hover:bg-danger/5 transition-colors">
                                Delete My Account
                            </button>
                        </div>
                    </div>
                </div>

                <p className="text-center text-[#6b608a] dark:text-gray-500 text-sm">
                    Having trouble?{" "}
                    <a className="text-primary hover:underline font-medium" href="#">
                        Contact our support team
                    </a>{" "}
                    for help instead of leaving.
                </p>
            </div>
        </main>
    );
}
