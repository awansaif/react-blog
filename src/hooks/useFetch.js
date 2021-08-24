import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const AbortConst = new AbortController();
    setLoading(true);
    fetch(url, { signal: AbortConst.signal })
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("clear");
        } else {
          setError(err);
        }
      });
    setLoading(false);

    return () => AbortConst.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
