import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Hero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mock = true;

const Hero: React.FC = () => {
  const [slides, setSlides] = useState<string[]>([]);

  useEffect(() => {
    const fetchSlides = async () => {
      if (mock) {
        const mockData = [
          `<div class="slide-content" style="background-image: url('/hero/23ce8ec4d5b057c3eec8902e29d8d351.jpg')">
            <div class="text-block right">
              <h2 class="title accent">Descubre el sabor auténtico</h2>
              <p class="description">Café artesanal, ambiente acogedor y experiencias únicas.</p>
              <button class="cta-button">Saber más</button>
            </div>
          </div>`,
          `<div class="slide-content" style="background-image: url('/hero/1682778418768-16081e4470a1.jpeg')">
            <div class="text-block right light">
              <h2 class="title">Tu rincón favorito</h2>
              <p class="description">Relájate, trabaja o comparte un momento especial.</p>
              <button class="cta-button">Saber más</button>
            </div>
          </div>`,
          `<div class="slide-content" style="background-image: url('/hero/23-2151645384.jpg')">
            <div class="text-block right dark">
              <h2 class="title">Explora nuestros blends</h2>
              <p class="description">Sabores intensos, suaves y equilibrados para cada gusto.</p>
              <button class="cta-button">Saber más</button>
            </div>
          </div>`,
          `<div class="slide-content" style="background-image: url('/hero/1446478827-612x612.jpg')">
            <div class="text-block right">
              <h2 class="title accent">Más que café</h2>
              <p class="description">Eventos, música en vivo y comunidad.</p>
              <button class="cta-button">Saber más</button>
            </div>
          </div>`,
          `<div class="slide-content" style="background-image: url('/hero/3153463ertsdfs.jpg')">
            <div class="text-block right light">
              <h2 class="title">Bienvenido a JWD</h2>
              <p class="description">Tu misión favorita para cada momento del día.</p>
              <button class="cta-button">Saber más</button>
            </div>
          </div>`
        ];
        setSlides(mockData);
      } else {
        // Aquí iría la llamada real al servicio
      }
    };

    fetchSlides();
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
        {slides.map((html, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: html }} />
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
