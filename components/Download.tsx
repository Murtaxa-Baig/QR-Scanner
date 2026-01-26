export default function Download() {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-[#131118] dark:text-white mb-12">
                    Take AI Power with You
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="brand-gradient p-10 rounded-2xl text-white flex flex-col items-center justify-center gap-6 shadow-xl transform transition-transform hover:scale-[1.02] cursor-pointer">
                        <span className="material-symbols-outlined text-6xl">apple</span>
                        <div className="text-center">
                            <p className="text-sm opacity-90 mb-1">Download on the</p>
                            <h3 className="text-2xl font-black">App Store</h3>
                        </div>
                    </div>
                    <div className="brand-gradient p-10 rounded-2xl text-white flex flex-col items-center justify-center gap-6 shadow-xl transform transition-transform hover:scale-[1.02] cursor-pointer">
                        <span className="material-symbols-outlined text-6xl">
                            play_store_installed
                        </span>
                        <div className="text-center">
                            <p className="text-sm opacity-90 mb-1">Get it on</p>
                            <h3 className="text-2xl font-black">Google Play</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
