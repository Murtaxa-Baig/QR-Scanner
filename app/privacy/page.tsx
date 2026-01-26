import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose dark:prose-invert">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Your privacy is important to us. This policy explains how we handle
                        your data.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4">1. Data Collection</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        We collect information you provide directly to us when you create an
                        account or use our services.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4">2. Data Usage</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        We use your data to provide, maintain, and improve our services.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
