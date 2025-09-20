import React, { useState } from "react";
import PlanCard from "./PlanCard";
import { useTranslation } from "react-i18next";

const PlansSection: React.FC = () => {
  const { t } = useTranslation();

  const plansData = [
    {
      id: 0,
      name: t("plans.basic"),
      basePrice: 0,
      description: t("plans.basicDesc"),
      onlyOne: true,
      options: [
        { key: "basicOption1", label: t("plans.options.basicOption1"), price: 45 },
        { key: "basicOption2", label: t("plans.options.basicOption2"), price: 30 },
        { key: "basicOption3", label: t("plans.options.basicOption3"), price: 60 },
        { key: "basicOption4", label: t("plans.options.basicOption4"), price: 25 }
      ]
    },
    {
      id: 1,
      name: t("plans.medium"),
      basePrice: 150,
      description: t("plans.mediumDesc"),
      onlyOne: false,
      options: [
        { key: "mediumOption1", label: t("plans.options.mediumOption1"), price: 80 },
        { key: "mediumOption2", label: t("plans.options.mediumOption2"), price: 55 },
        { key: "mediumOption3", label: t("plans.options.mediumOption3"), price: 40 },
        { key: "mediumOption4", label: t("plans.options.mediumOption4"), price: 70 }
      ]
    },
    {
      id: 2,
      name: t("plans.premium"),
      basePrice: 900,
      description: t("plans.premiumDesc"),
      onlyOne: false,
      options: [
        { key: "premiumOption1", label: t("plans.options.premiumOption1"), price: 120 },
        { key: "premiumOption2", label: t("plans.options.premiumOption2"), price: 95 },
        { key: "premiumOption3", label: t("plans.options.premiumOption3"), price: 110 },
        { key: "premiumOption4", label: t("plans.options.premiumOption4"), price: 85 },
        { key: "premiumOption5", label: t("plans.options.premiumOption5"), price: 60 },
        { key: "premiumOption6", label: t("plans.options.premiumOption6"), price: 75 }
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  // 👉 Swipe handling
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (distance > 50) {
      // swipe izquierda → siguiente plan
      setActiveIndex((prev) => Math.min(prev + 1, plansData.length - 1));
    }

    if (distance < -50) {
      // swipe derecha → plan anterior
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section
      id="plans"
      className="py-14 px-4 flex flex-col items-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h2 className="text-2xl font-bold mb-8">{t("plans.title")}</h2>

      <div className="relative w-full flex justify-center items-center overflow-hidden h-120 text-xs">
        {plansData.map((plan, index) => {
          const offset = index - activeIndex;
          const zIndex = 10 - Math.abs(offset);
          const scale = offset === 0 ? 1 : 0.7;
          const translateX = offset * 72;

          return (
            <div
              key={plan.id}
              className="absolute transition-transform duration-500 min-h-[440px] cursor-pointer"
              style={{
                transform: `translateX(${translateX}%) scale(${scale})`,
                zIndex: zIndex,
              }}
              onClick={() => setActiveIndex(index)}
            >
              <PlanCard plan={plan} onlyOne={plan.onlyOne} />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center mt-8 gap-4">
        {plansData.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              activeIndex === index ? "bg-primary" : "bg-gray-400"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
