import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Download from "@/components/Download";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <Download />
      <AboutSection />
      {/* <ContactForm /> */}
      <Footer />
    </main>
  );
}
