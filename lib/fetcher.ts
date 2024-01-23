import { BASE_API_URL } from "./constants";

export const fetcher = <T>(endpoint: string, options: RequestInit = {}) => {
  return fetch(`${BASE_API_URL}/${endpoint}`, options)
    .then((data) => {
      return data.json() as T;
    })
    .catch((error) => {
      throw error;
    });
};
