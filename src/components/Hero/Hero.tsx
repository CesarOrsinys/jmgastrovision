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
          title: "De la cocina al corazón de tu cliente",
          description: "Transformamos tu pasión gastronómica en una marca irresistible.",
          //buttonText: "Saber más"
        },
        {
          id: 2,
          title: "Llevamos tu cocina al mundo digital",
          description: " Estrategias creativas para posicionar tu marca gastronómica.",
          //buttonText: "Saber más"
        },
        {
          id: 3,
          title: "Haz que tu negocio conquiste online",
          description: "Marketing pensado para crear experiencias que enamoran a tus clientes."
          // 🔑 sin botón
        },
        {
          id: 4,
          title: "Unimos sabores y estrategias",
          description: "Crecemos contigo, conectando tu marca con tu comunidad digital.",
          //buttonText: "Saber más"
        },
        {
          id: 5,
          title: "Tus ventas en la mesa del éxito",
          description: "Impulsamos tu negocio gastronómico con resultados medibles."
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
