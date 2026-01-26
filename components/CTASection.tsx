export default function CTASection() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="brand-gradient rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            Ready to Transform Your Writing?
                        </h2>
                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium">
                            Join over 1 million creatives and professionals who are already
                            using AI to power their words.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="bg-white text-primary font-bold py-4 px-12 rounded-xl text-lg hover:bg-gray-100 transition-all shadow-xl">
                                Get Started Free
                            </button>
                            <button className="bg-transparent border-2 border-white/40 hover:border-white text-white font-bold py-4 px-12 rounded-xl text-lg transition-all">
                                View All Tools
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
