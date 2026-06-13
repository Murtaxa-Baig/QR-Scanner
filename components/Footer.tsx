import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-[#131118] text-white py-4 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-800 pb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Logo size={36} />
                            <span className="text-xl font-bold">QR Scanner</span>
                        </div>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Easily scan, read, and generate QR codes and barcodes.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        {/* <div className="space-y-4">
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
                        </div> */}
                        <div className="space-y-4">
                            <h4 className="font-bold">Company</h4>
                            <ul className="text-gray-400 space-y-2 text-sm">
                                <li>
                                    <Link href="/contact" className="hover:text-primary">
                                        Contact
                                    </Link>
                                </li>
                                {/*   <li>
                                    <Link href="#" className="hover:text-primary">
                                        Blog
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold">Legal</h4>
                            <ul className="text-gray-400 space-y-2 text-sm">
                                <li>
                                    <Link href="/terms" className="hover:text-primary">
                                        Terms
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy" className="hover:text-primary">
                                        Privacy
                                    </Link>
                                </li>
                                {/*  <li>
                                    <button className="hover:text-red-500 text-left">
                                        Delete Account
                                    </button>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row justify-center items-center pt-4 gap-4">
                    <p className="text-gray-500 text-sm ">
                        Copyright © 2024 <a href="http://www.appnayatech.com/" target="_blank" rel="noopener noreferrer">AppNaya Technologies</a>. All rights reserved.
                    </p>
                    {/* <div className="flex gap-6">
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
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
