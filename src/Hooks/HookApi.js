import axios from "axios";
import { useEffect, useState } from "react";

export const GetData = (url) => {
  const [data, setData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [error, setError] = useState({ Found: false });
  useEffect(() => {
    axios
      .get(url)
      .then((Response) => {
        setData(Response.data);
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

  return [data, isLoad, error, setData];
};
