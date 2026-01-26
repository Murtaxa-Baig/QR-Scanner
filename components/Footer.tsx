import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#131118] text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-800 pb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-brand-pink text-3xl">
                                auto_fix_high
                            </span>
                            <span className="text-xl font-bold">Ai Utilities</span>
                        </div>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Revolutionizing the way you write with high-performance AI tools
                            for every occasion.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <h4 className="font-bold">Product</h4>
                            <ul className="text-gray-400 space-y-2 text-sm">
                                <li>
                                    <Link href="#features" className="hover:text-brand-pink">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-brand-pink">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-brand-pink">
                                        API
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold">Company</h4>
                            <ul className="text-gray-400 space-y-2 text-sm">
                                <li>
                                    <Link href="#about" className="hover:text-brand-pink">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-brand-pink">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-brand-pink">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold">Legal</h4>
                            <ul className="text-gray-400 space-y-2 text-sm">
                                <li>
                                    <Link href="/terms" className="hover:text-brand-pink">
                                        Terms
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy" className="hover:text-brand-pink">
                                        Privacy
                                    </Link>
                                </li>
                                <li>
                                    <button className="hover:text-red-500 text-left">
                                        Delete Account
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2024 Ai Utilities. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="#"
                            className="text-gray-500 hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined">public</span>
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-500 hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined">alternate_email</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
