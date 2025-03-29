"use client";
import { useState, useCallback } from "react";

export const useInputValues = <T extends { [key: string]: any }>(
  initialValues: T = {} as T
) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = useCallback(
    (id: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prevValues) => ({
        ...prevValues,
        [id]: e.target.value,
      }));
    },
    [setValues]
  );

  return { values, handleChange };
};