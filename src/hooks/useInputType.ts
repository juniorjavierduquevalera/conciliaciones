"use client";
import { useState, useCallback } from "react";

export const useInputValues = (
  initialValues: { [key: string]: string } = {}
) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = useCallback(
    (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prevValues) => ({
        ...prevValues,
        [id]: e.target.value,
      }));
    },
    [setValues]
  );

  return { values, handleChange };
};
// useInputValues: O nome do Hook foi alterado para useInputValues para melhor refletir o fato de que agora gerencia múltiplos valores.

// initialValues: Agora, o hook aceita um objeto initialValues como argumento, onde as chaves são os ids dos inputs e os valores são os valores iniciais.

// values: O estado agora é um objeto, armazenando os valores de cada input com base em seus ids.

// handleChange:
// Agora, handleChange recebe um id como argumento.
// Ele retorna uma função que lida com o evento onChange do input.
// Utiliza setValues para atualizar o estado, mantendo os outros valores e atualizando apenas o valor do input com o id correspondente.
// useCallback: a função handleChange foi envolvida no useCallback para otimizar o desempenho e evitar renderizações desnecessárias.
