import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import Mission from "@/components/Mission";
import Values from "@/components/Values";
import Journey from "@/components/Journey";
import Leadership from "@/components/Leadership";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <AboutHero />
            <Mission />
            <Values />
            <Journey />
            <Leadership />
            <CTASection />
            <Footer />
        </main>
    );
}
