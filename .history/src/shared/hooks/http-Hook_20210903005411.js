import { useState } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState();

  const sendRequest = async (
    url,
    method = "GET",
    body = null,
    headers = {}
  ) => {
    setIsLoading(true);
    try {
      const response = fetch(url, { method, body, headers });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
    } catch (err) {
      setErrorState(err.message);
    }
  };
};
