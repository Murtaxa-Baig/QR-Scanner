export default function AboutHero() {
    return (
        <section className="relative overflow-hidden hero-mesh py-24 md:py-32 border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-[#131118] dark:text-white leading-[1.05] tracking-tight mb-8">
                        Empowering Human <br />
                        Creativity
                        through AI
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We&apos;re on a mission to bridge the gap between imagination and
                        expression using state-of-the-art artificial intelligence.
                    </p>
                </div>
            </div>
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-pink to-brand-blue blur-[120px] rounded-full"></div>
            </div>
        </section>
    );
}
