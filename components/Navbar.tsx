"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-3xl">
                            auto_fix_high
                        </span>
                        <Link
                            href="/"
                            className="text-[#131118] dark:text-white text-xl font-bold tracking-tight"
                        >
                            Ai Utilities
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLinks />
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-gray-700 dark:text-gray-200"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col gap-4 px-6 py-6">
                        <NavLinks mobile onClick={() => setIsOpen(false)} />
                    </div>
                </div>
            )}
        </nav>
    );
}


type NavLinksProps = {
    mobile?: boolean;
    onClick?: () => void;
};

function NavLinks({ mobile = false, onClick }: NavLinksProps) {
    const pathname = usePathname();

    const base = "text-sm font-medium transition-colors";

    const isActive = (path: string) => pathname === path;

    const linkClass = (path: string) =>
        `${base} ${isActive(path)
            ? "text-primary"
            : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
        }`;

    return (
        <>
            <Link href="/" onClick={onClick} className={linkClass("/")}>
                Home
            </Link>

            <Link href="/about" onClick={onClick} className={linkClass("/about")}>
                About
            </Link>

            <Link href="/contact" onClick={onClick} className={linkClass("/contact")}>
                Contact
            </Link>

            <Link href="/terms" onClick={onClick} className={linkClass("/terms")}>
                Terms
            </Link>

            <Link href="/privacy" onClick={onClick} className={linkClass("/privacy")}>
                Privacy
            </Link>

            <Link
                href="/delete-account"
                onClick={onClick}
                className={`${mobile ? "mt-2" : ""
                    } text-sm font-bold px-4 py-2 rounded-lg transition-colors ${isActive("/delete-account")
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-red-50 hover:text-red-600"
                    }`}
            >
                Delete Account
            </Link>
        </>
    );
}
