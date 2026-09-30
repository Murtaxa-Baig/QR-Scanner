import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#131118] text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-800 pb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size={36} />
              <div className="flex flex-col">
                <span className="text-xl font-bold">QR Code Generator</span>
                <span className="text-xs text-primary font-semibold">QR Code Scanner &middot; Project: project-585179173091</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-xs mb-3">
              Easily scan, read, and generate QR codes and barcodes.
            </p>
            <p className="text-xs text-gray-500">
              Support: <a href="mailto:supportappnaya@gmail.com" className="text-gray-400 hover:text-white transition-colors">supportappnaya@gmail.com</a>
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold">Company</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="mailto:honeyansari917@gmail.com" className="hover:text-primary transition-colors">
                    Developer Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold">Legal</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>
                  <Link href="/terms" className="hover:text-primary transition-colors">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/delete-account" className="hover:text-primary transition-colors">
                    Delete Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-gray-500 text-sm">
            Copyright &copy; 2026{" "}
            <a
              href="http://www.appnayatech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              AppNaya Technologies
            </a>
            . All rights reserved. &middot; Google Cloud Project: <code className="text-xs text-gray-400">project-585179173091</code>
          </p>
        </div>
      </div>
    </footer>
  );
}
