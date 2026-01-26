const values = [
    {
        title: "Productivity",
        description: "Reducing the friction between thought and draft, helping you achieve more in less time.",
        icon: "bolt",
    },
    {
        title: "Accuracy",
        description: "Ensuring every output meets high linguistic standards and contextual relevance.",
        icon: "verified_user",
    },
    {
        title: "Human-Centric",
        description: "Designing tools that enhance human intent rather than obscuring it with robotic outputs.",
        icon: "face",
    },
    {
        title: "Innovation",
        description: "Constantly evolving our models to stay at the cutting edge of AI technology.",
        icon: "psychology_alt",
    },
];

export default function Values() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#131118] dark:text-white">
                        Our Core Values
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 group"
                        >
                            <div className="w-14 h-14 rounded-xl brand-gradient flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-white text-3xl">
                                    {value.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-[#131118] dark:text-white mb-4">
                                {value.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
