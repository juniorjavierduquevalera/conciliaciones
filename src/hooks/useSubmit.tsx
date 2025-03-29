"use client";
import { useState } from "react";
import { toast } from "react-toastify";

interface UseSubmitProps<T> {
  values: T;
  endpoint: string;
  method?: "POST";
  onSuccess?: (data: any) => void;
}

export default function useSubmit<T>({
  values,
  endpoint,
  method = "POST",
  onSuccess,
}: UseSubmitProps<T>) {

  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://lv9d0stg-4000.use2.devtunnels.ms/api/users/${endpoint}`,
        {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(
          data.message || "Ocorreu um erro inesperado. Tente novamente."
        );
        return;
      }
      
      toast.success(data.message);
      if (onSuccess) {
          onSuccess(data.token);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Algo deu errado";
      toast.error(
        errorMessage.includes("Unexpected token")
          ? "Problemas técnicos, tente depois"
          : errorMessage
      );
    } finally {
      setLoading(false);
    }
  }

  return { handleSubmit, loading };
}