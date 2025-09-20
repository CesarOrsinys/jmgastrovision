import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Hero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  id: number;
  title: string;
  description: string;
  buttonText?: string; // 🔑 ahora opcional
  textClass?: string;
}

const mock = true;

const Hero: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    if (mock) {
      const mockData: Slide[] = [
        {
          id: 1,
          title: "Descubre el sabor auténtico",
          description: "Café artesanal, ambiente acogedor y experiencias únicas.",
          //buttonText: "Saber más"
        },
        {
          id: 2,
          title: "Tu rincón favorito",
          description: "Relájate, trabaja o comparte un momento especial.",
          //buttonText: "Saber más"
        },
        {
          id: 3,
          title: "Explora nuestros blends",
          description: "Sabores intensos, suaves y equilibrados para cada gusto."
          // 🔑 sin botón
        },
        {
          id: 4,
          title: "Más que café",
          description: "Eventos, música en vivo y comunidad.",
          //buttonText: "Saber más"
        },
        {
          id: 5,
          title: "Bienvenido a JWD",
          description: "Tu misión favorita para cada momento del día."
          // 🔑 sin botón
        }
      ];
      setSlides(mockData);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay" />
      <Slider {...settings} className="hero-slider">
        {slides.map((slide) => (
          <div key={slide.id} className={`slide-content slide-${slide.id}`}>
            <div className={`text-block ${slide.textClass || ""}`}>
              <h2 className="title">{slide.title}</h2>
              <p className="description">{slide.description}</p>
              {slide.buttonText && ( // 🔑 solo aparece si existe
                <button className="cta-button">{slide.buttonText}</button>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
