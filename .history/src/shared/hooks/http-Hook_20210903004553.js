import { useState } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState();

  const sendRequest = (url, method = "GET", body = null, headers = {}) => {
    fetch(url, {
      method: method,
      body,
      headers
    });
  };
};
