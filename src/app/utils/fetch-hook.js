import { useEffect, useState } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      let response = await fetch(
        `http://localhost:8080/api/currency/fxrates?currency=AUD&dateFrom=2019-09-03&dateTo=2019-09-11`
      );
      const json = await response.json();
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        setData(json);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data, setData };
};

export { useFetch };
