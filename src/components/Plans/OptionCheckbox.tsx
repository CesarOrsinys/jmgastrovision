import React from "react";

interface Option {
  id: string;
  name: string;
  price: number;
}

interface OptionCheckboxProps {
  option: Option;
  checked: boolean;
  toggle: (id: string) => void;
}

const OptionCheckbox: React.FC<OptionCheckboxProps> = ({ option, checked, toggle }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => toggle(option.id)}
        className="accent-primary"
      />
      <span>{option.name} (+${option.price})</span>
    </label>
  );
};

export default OptionCheckbox;
