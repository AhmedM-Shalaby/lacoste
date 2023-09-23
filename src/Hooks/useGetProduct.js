import axios from "axios";
import { useEffect, useState } from "react";

export const GetProduct = (url) => {
  const [product, setProduct] = useState({});
  const [isLoad, setIsLoad] = useState(true);
  const [error, setError] = useState({ Found: false });
  useEffect(() => {
    axios
      .get(url)
      .then((Response) => {
        setProduct(Response.data);
        setIsLoad(false);
      })
      .catch((error) => {
        if (error.Response) {
          setError({
            code: error.code,
            Found: true,
            status: error.response.status,
            statusText: error.response.statusText,
          });
        }
      });
  }, [url]);
  return [product, isLoad, error];
};
