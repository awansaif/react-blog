import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const AbortConst = new AbortController();
    const fetchdata = async () => {
      setLoading(true);
      setError(null);
      await fetch(process.env.REACT_APP_API_URL + url, {
        signal: AbortConst.signal,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setData(data.data);
          } else {
            setMessage(data.message);
          }
          setLoading(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            return;
          } else {
            setError(err);
            setLoading(false);
          }
        });
    };

    fetchdata();
    return () => AbortConst.abort();
  }, [url]);

  return { data, loading, error, message };
};

export default useFetch;
