import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky-nav bg-white/80 dark:bg-background-dark/80 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-3xl">
                            auto_fix_high
                        </span>
                        <span className="text-[#131118] dark:text-white text-xl font-bold tracking-tight">
                            Ai Utilities
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/terms"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                        >
                            Terms
                        </Link>
                        <Link
                            href="/privacy"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                        >
                            Privacy
                        </Link>
                        <button className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-bold px-4 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors">
                            Delete Account
                        </button>
                    </div>
                    {/* Mobile menu button could be added here */}
                </div>
            </div>
        </nav>
    );
}
