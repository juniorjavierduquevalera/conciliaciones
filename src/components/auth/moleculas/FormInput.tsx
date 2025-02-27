import React from 'react';
import Input from '../atomos/Input';
import { useInputValue } from 'src/hooks/useInputType';

interface FormInputProps {
  type: 'text' | 'password' | 'email';
  placeholder: string;
}

const FormInput: React.FC<FormInputProps> = ({ type, placeholder }) => {
  const { value, onChange } = useInputValue();

  return <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default FormInput;