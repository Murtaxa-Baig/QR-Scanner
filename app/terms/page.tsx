import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                <div className="prose dark:prose-invert">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Welcome to Ai Utilities. By using our service, you agree to these terms.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4">1. Use of Service</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        You agree to use the service for lawful purposes only and in a way that
                        does not infringe the rights of others.
                    </p>
                    <h2 className="text-2xl font-bold mt-8 mb-4">2. Account Responsibility</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        You are responsible for maintaining the confidentiality of your account
                        and password.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
