import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Screenshots from "./components/Screenshots";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <Features />
      <Screenshots />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
