import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCurrency } from "../../context/CurrencyContext";

interface PlanOption {
  key: string;
  label: string;
  price: number;
}

interface Plan {
  id: number;
  name: string;
  basePrice: number;
  description: string;
  options: PlanOption[];
}

interface PlanCardProps {
  plan: Plan;
  onlyOne?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onlyOne = false }) => {
  const { t } = useTranslation();
  const { currency } = useCurrency();

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (key: string) => {
    if (onlyOne) {
      // Si solo se permite una opción
      setSelectedOptions(selectedOptions.includes(key) ? [] : [key]);
    } else {
      // Selección múltiple normal
      if (selectedOptions.includes(key)) {
        setSelectedOptions(selectedOptions.filter((o) => o !== key));
      } else {
        setSelectedOptions([...selectedOptions, key]);
      }
    }
  };

  const total =
    plan.basePrice +
    selectedOptions.reduce((sum, key) => {
      const option = plan.options.find((o) => o.key === key);
      return sum + (option ? option.price : 0);
    }, 0);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-80 flex-shrink-0 flex flex-col items-center">
      <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
      <p className="text-lg mb-4">
        {t("plans.basePrice")}: {plan.basePrice} {currency}
      </p>

      <div className="flex flex-col items-start mb-4">
        {plan.options.map((option) => (
          <label key={option.key} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedOptions.includes(option.key)}
              onChange={() => toggleOption(option.key)}
              className="accent-primary"
            />
            {option.label} (+{option.price} {currency})
          </label>
        ))}
      </div>

      <p className="font-bold mb-4">
        {t("plans.total")}: {total} {currency}
      </p>

      <button className="bg-primary text-bg px-4 py-2 rounded-button hover:bg-secondary">
        {t("plans.subscribe")}
      </button>
    </div>
  );
};

export default PlanCard;
