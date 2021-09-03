import { useState, useCallback } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState();

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      try {
        const response = fetch(url, { method, body, headers });
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        return responseData;
      } catch (err) {
        setErrorState(err.message);
      }
      setIsLoading(false);
    },
    []
  );

  return { isLoading, errorState, sendRequest };
};
