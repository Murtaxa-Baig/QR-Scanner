export default function AboutSection() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <div
                            className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 rounded-2xl relative overflow-hidden shadow-xl bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsD04SwuVFHI9znFsfJBN1kvbwrfKpG415HV0EGwPHnx1EQk5raI1V7i7cRDhikeGCLH6qRSRqzTB4JYlehlUMcQuDM8Qyi9qGIfvrJpBz3t7x1UoApNT7x_6bYTcBeHgvlncUGo3XGSbGsPsgpn_OLG-aG2PVXAh5mAHgHyoGybUSUByWmYUJeFwP9wxktwlDNGGyv7gzxaPFqg7sM0F6fwtpH_V1ObtphEle7-QBgaHkrDH7Rrekx8y8XvaVmqYoABLzqgp9pj7i')",
                            }}
                        >
                            <div className="absolute inset-0 bg-primary/10"></div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#131118] dark:text-white mb-6">
                            Designed for Human Creativity
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                            We believe AI shouldn&apos;t replace human creativity—it should
                            empower it. Our suite of tools is designed to help you break
                            through writer&apos;s block and cut your writing time by 90%.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary">
                                    verified
                                </span>
                                <span className="text-gray-700 dark:text-gray-300">
                                    Natural sounding outputs that pass AI detection tests.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary">
                                    verified
                                </span>
                                <span className="text-gray-700 dark:text-gray-300">
                                    Privacy-first approach with secure data handling.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary">
                                    verified
                                </span>
                                <span className="text-gray-700 dark:text-gray-300">
                                    Instant generation across 8 specialized categories.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
