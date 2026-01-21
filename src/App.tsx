import About from "./components/About";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Modules from "./components/Modules";
import Offer from "./components/Offer";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Benefits />
        <Modules />
        <About />
        <Offer />
      </main>
      <Footer />
    </>
  );
}
