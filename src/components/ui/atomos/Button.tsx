import React from 'react';

interface ButtonProps {
  onClick: () => Promise<void>;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={onClick}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;