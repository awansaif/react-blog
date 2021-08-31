import { useCallback, useState } from "react";

const usePost = (url, data) => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const saveData = useCallback(() => {
    setSending(true);
    fetch(process.env.REACT_APP_API_URL + url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setStatus(200);
          setResponse(data.message);
          setSending(false);
        } else {
          setStatus(422);
          setError(data.errors);
          setSending(false);
        }
      })
      .catch((err) => setError(err));
  }, [url, data]);
  setTimeout(() => {
    setError(null);
    setResponse(null);
  }, 5000);
  return { response, error, sending, status, saveData };
};

export default usePost;
