import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
//import { useCurrency } from "../../context/CurrencyContext";

interface Testimonial {
  id: number;
  company: string;
  comment: string;
  rating: number;
  logo: string;
}

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();
  //const { currency } = useCurrency(); // Si quieres mostrar algún valor monetario
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Array completo de testimonios traducibles
    const allTestimonials: Testimonial[] = [
      {
        id: 1,
        company: t("testimonials.companyA"),
        comment: t("testimonials.commentA"),
        rating: 5,
        logo: "/testimonials/cimsisabors.png",
      },
      {
        id: 2,
        company: t("testimonials.companyB"),
        comment: t("testimonials.commentB"),
        rating: 4,
        logo: "/testimonials/regufiCanillo.png",
      },
      {
        id: 3,
        company: t("testimonials.companyC"),
        comment: t("testimonials.commentC"),
        rating: 5,
        logo: "/testimonials/cazuelaOro.png",
      },
      {
        id: 4,
        company: t("testimonials.companyD"),
        comment: t("testimonials.commentD"),
        rating: 4,
        logo: "/testimonials/mesonencinar.png",
      },
      {
        id: 5,
        company: t("testimonials.companyE"),
        comment: t("testimonials.commentE"),
        rating: 5,
        logo: "/testimonials/barricaSarmiento.png",
      },
      {
        id: 6,
        company: t("testimonials.companyF"),
        comment: t("testimonials.commentF"),
        rating: 5,
        logo: "/testimonials/terreta.png",
      },
      {
        id: 7,
        company: t("testimonials.companyG"),
        comment: t("testimonials.commentG"),
        rating: 4,
        logo: "/testimonials/saborhuerta.png",
      },
    ];

    // Mezclamos aleatoriamente y tomamos 6
    const shuffled = allTestimonials.sort(() => 0.5 - Math.random());
    setTestimonials(shuffled.slice(0, 6));
  }, [t]); // Dependencia t para actualizar al cambiar idioma

  return (
    <section id="testimonials" className="py-14 px-4 text-center">
      <h2 className="text-2xl font-bold mb-8">{t("testimonials.title")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div key={item.id} className="bg-card rounded-lg p-6 shadow-lg fade-in">
            <img src={item.logo} alt={item.company} className="mx-auto mb-4 w-20 h-20 object-contain" />
            <h3 className="font-bold mb-2">{item.company}</h3>
            <p className="mb-2">"{item.comment}"</p>
            <p className="text-yellow-500 font-bold">{"★".repeat(item.rating)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
