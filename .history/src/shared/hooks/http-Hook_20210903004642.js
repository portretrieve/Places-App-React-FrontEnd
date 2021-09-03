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
    fetch(url, {
      method,
      body,
      headers
    });
  };
};
