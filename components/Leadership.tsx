const leaders = [
    {
        name: "Alex Rivera",
        role: "CEO & Founder",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsD04SwuVFHI9znFsfJBN1kvbwrfKpG415HV0EGwPHnx1EQk5raI1V7i7cRDhikeGCLH6qRSRqzTB4JYlehlUMcQuDM8Qyi9qGIfvrJpBz3t7x1UoApNT7x_6bYTcBeHgvlncUGo3XGSbGsPsgpn_OLG-aG2PVXAh5mAHgHyoGybUSUByWmYUJeFwP9wxktwlDNGGyv7gzxaPFqg7sM0F6fwtpH_V1ObtphEle7-QBgaHkrDH7Rrekx8y8XvaVmqYoABLzqgp9pj7i",
    },
    {
        name: "Sarah Chen",
        role: "Chief of AI",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB86QxfJFKhCim1Kh_WeVLZ7FWPJA1abHoH9RE3Mv8b0u-lEXf01c8xQ_lA7Nk6wR7F31i0QbGAiVTRu_UIOGrdk3vpzHWdPOdLrYUgypnvE4BABKSJhgrHmdGi-l_8Np91pDxOhOogy6nb4ktJPpBSN42F9Qj8-4tIg1f30uyfgNHJHtYrnGgKF64zDJsUz_5DKqDZ5gJC3fAlHgellbfNrg_HfTk940FR8dZZm2teAWTMPgwP740EbFFMd1B1WsLra63ZvnOptsTW",
    },
    {
        name: "Marcus Thorne",
        role: "Product Design",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsD04SwuVFHI9znFsfJBN1kvbwrfKpG415HV0EGwPHnx1EQk5raI1V7i7cRDhikeGCLH6qRSRqzTB4JYlehlUMcQuDM8Qyi9qGIfvrJpBz3t7x1UoApNT7x_6bYTcBeHgvlncUGo3XGSbGsPsgpn_OLG-aG2PVXAh5mAHgHyoGybUSUByWmYUJeFwP9wxktwlDNGGyv7gzxaPFqg7sM0F6fwtpH_V1ObtphEle7-QBgaHkrDH7Rrekx8y8XvaVmqYoABLzqgp9pj7i",
    },
    {
        name: "Elena Sokolova",
        role: "Head of Content",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB86QxfJFKhCim1Kh_WeVLZ7FWPJA1abHoH9RE3Mv8b0u-lEXf01c8xQ_lA7Nk6wR7F31i0QbGAiVTRu_UIOGrdk3vpzHWdPOdLrYUgypnvE4BABKSJhgrHmdGi-l_8Np91pDxOhOogy6nb4ktJPpBSN42F9Qj8-4tIg1f30uyfgNHJHtYrnGgKF64zDJsUz_5DKqDZ5gJC3fAlHgellbfNrg_HfTk940FR8dZZm2teAWTMPgwP740EbFFMd1B1WsLra63ZvnOptsTW",
    },
];

export default function Leadership() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#131118] dark:text-white mb-4">
                        Meet Our Leadership
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        The visionaries behind the AI Content revolution.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {leaders.map((leader, index) => (
                        <div key={index} className="text-center group">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
                                <div className="absolute inset-0 brand-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>
                                <div
                                    className="relative w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-white dark:border-gray-800 overflow-hidden bg-cover bg-center"
                                    style={{ backgroundImage: `url('${leader.image}')` }}
                                ></div>
                            </div>
                            <h4 className="text-lg font-bold text-[#131118] dark:text-white">
                                {leader.name}
                            </h4>
                            <p className="text-sm text-primary font-semibold mb-2">
                                {leader.role}
                            </p>
                            <div className="flex justify-center gap-3">
                                <span className="material-symbols-outlined text-gray-400 hover:text-primary cursor-pointer text-xl">
                                    alternate_email
                                </span>
                                <span className="material-symbols-outlined text-gray-400 hover:text-primary cursor-pointer text-xl">
                                    public
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
