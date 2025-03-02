import React from "react";
import Input from "../atomos/Input";
import { useInputValue } from "src/hooks/useInputType";

interface FormInputProps {
  type: "text" | "password" | "email";
  placeholder: string;
  label: string;
}

const FormInput: React.FC<FormInputProps> = ({ type, placeholder, label }) => {
  const { value, onChange } = useInputValue();
  return (
    <div className="mb-4">
      <label htmlFor={placeholder} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={placeholder}
      />
    </div>
  );
};

export default FormInput;
