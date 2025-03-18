const API_URL = "http://localhost:4000/api";

const checkResponse = async (response: Response) => {
  let errorMessage = `HTTP Error: ${response.status}`;

  if (!response.ok) {
    try {
      const error = await response.json();
      errorMessage = error?.message || errorMessage;
    } catch (e) {
      console.error("Error al parsear la respuesta de error:", e);
    }
    throw new Error(errorMessage);
  }
};
/**
 * @param enpoint
 * @param data
 * @param token
 */
export const post = async (enpoint: string, data: any, token?: string) => {
  try {
    const url = `${API_URL}${enpoint}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: token }),
      },
      body: JSON.stringify(data),
    });
    await checkResponse(response);
    return await response.json();
  } catch (error) {
    console.error(`Error en POST ${enpoint}:`, error);
    throw error;
  }
};
/**
 * @param enpoint
 * @param params
 * @param token
 */
export const get = async (
  enpoint: string,
  params: Record<string, any> = {},
  token?: string
) => {
  try {
    const query = new URLSearchParams(params).toString();
    const url = `${API_URL}${enpoint}${query ? `?${query}` : ""}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        ...(token && { Authorization: token }),
      },
    });

    await checkResponse(response);
    return await response.json();
  } catch (error) {
    console.error(`Error en GET ${enpoint}:`, error);
    throw error;
  }
};
/**
 * @param enpoint
 * @param id
 * @param token
 */
export const getById = async (enpoint: string, id: string, token?: string) => {
  try {
    const url = `${API_URL}${enpoint}/${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        ...(token && { Authorization: token }),
      },
      cache: "no-store",
    });
    await checkResponse(response);
    return await response.json();
  } catch (error) {
    console.error(`Error en GET ${enpoint}/${id}:`, error);
    throw error;
  }
};
/**
 * @param enpoint
 * @param id
 * @param data
 * @param token
 */
export const update = async (
  enpoint: string,
  id: string,
  data: any,
  token?: string
) => {
  try {
    const url = `${API_URL}${enpoint}/${id}/`;
    console.log("desde la consulata", token);
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: token }),
      },
      body: JSON.stringify(data),
    });
    await checkResponse(response);
    return await response.json();
  } catch (error) {
    console.error(`Error en PUT ${enpoint}/${id}:`, error);
    throw error;
  }
};
/**
 * @param enpoint
 * @param id
 * @param token
 */
export const remove = async (enpoint: string, id: string, token?: string) => {
  try {
    const url = `${API_URL}${enpoint}/${id}/`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        ...(token && { Authorization: token }),
      },
    });
    await checkResponse(response);
    return { success: true };
  } catch (error) {
    console.error(`Error en DELETE ${enpoint}/${id}:`, error);
    throw error;
  }
};
