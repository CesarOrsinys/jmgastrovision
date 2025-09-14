import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PlansSection from "./components/Plans/PlansSection";
import TestimonialsSection from "./components/Testimonials/TestimonialsSection";
import { CurrencyProvider } from "./context/CurrencyContext";
import Loader from "./components/Loader/Loader"; // 👈 Importamos el Loader
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga inicial de la app
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 2 segundos, puedes ajustarlo o reemplazarlo por la lógica real de carga

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // 👈 Mientras carga, mostramos el Loader
  }

  return (
    <div className="font-sans text-text">
      <CurrencyProvider>
        <Header />
        <div className="pt-20">
          <Hero />
          <PlansSection/>
          <TestimonialsSection />
          <ContactForm />
          <Footer />
        </div>
      </CurrencyProvider>
    </div>
  );
};

export default App;
