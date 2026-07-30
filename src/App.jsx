import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <main className="overflow-x-hidden bg-[#FAF8F5]">

      {/* PART 2 STARTS BELOW */}      <Hero />

      <Services />

      <Portfolio />

      <HowItWorks />

      <WhyChooseUs />

      <Pricing />

      <Testimonials />

      <FAQ />

      <CTA />

      <Contact />

      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
          </main>
  );
}

export default App;