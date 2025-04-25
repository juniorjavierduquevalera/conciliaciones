import React, { ChangeEvent } from "react";

interface InputProps {
  type: "text" | "password" | "email";
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string; 
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,   
  id,
  label, 
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default Input;