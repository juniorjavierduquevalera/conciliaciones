interface InputProps {
  type: "text" | "password" | "email";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}
const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  id,
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  );
};

export default Input;

// id obrigatório: Agora, o id é obrigatório nas InputProps.
// id no input: O id é passado para o elemento <input>.