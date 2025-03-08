import React from "react";
import Input from "../atomos/Input";

interface FormInputProps {
  type: "text" | "password" | "email";
  placeholder: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  placeholder,
  label,
  value,
  onChange,
  id,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
      />
    </div>
  );
};

export default FormInput;
// Adicionadas as props value, onChange e id para receber os valores do hook useInputValues.
// O htmlFor do label agora usa o id do input.
