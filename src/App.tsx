import React, { Suspense } from "react";
import Hero from "./components/Hero";

const Benefits = React.lazy(() => import("./components/Benefits"));
const Modules = React.lazy(() => import("./components/Modules"));
const About = React.lazy(() => import("./components/About"));
const Offer = React.lazy(() => import("./components/Offer"));
const Footer = React.lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Suspense fallback={<div>Carregando...</div>}>
          <Benefits />
          <Modules />
          <About />
          <Offer />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
