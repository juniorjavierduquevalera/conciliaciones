import { useState, Dispatch, SetStateAction } from "react";

interface UseLabel {
  text: string;
  updateText: Dispatch<SetStateAction<string>>;
}

function useLabel(initialText: string = ""): UseLabel {
  const [text, setText] = useState<string>(initialText);

  const updateText = (newText: string | ((prevText: string) => string)) => {
    setText(newText);
  };

  return {
    text,
    updateText,
  };
}

export default useLabel;
