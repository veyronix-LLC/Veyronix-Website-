import Hero from "./components/Hero";
import Numbers from "./components/Numbers";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Numbers />
        <Services />
        <Solutions />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
