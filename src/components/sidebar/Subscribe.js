import { useState } from "react";

const Subscribe = () => {
  const [email, setemail] = useState("");
  const [error, setError] = useState("");
  const [prostatus, setprostatus] = useState(false);
  const [message, setMessage] = useState("");

  // handle subscribe email
  const handleSubmit = (e) => {
    e.preventDefault();
    setprostatus(true);
    fetch(process.env.REACT_APP_API_URL + "/api/subscribe", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setprostatus(false);
          setError(data.message);
        } else {
          setprostatus(false);
          setMessage(data.message);
          setemail("");
          setTimeout(() => {
            setMessage("");
          }, 3000);
          setError("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="widget subscribe-wd">
      <h3 className="widget-title">Get Fresh News</h3>
      {message && (
        <div className="alert alert-success">
          <p>{message}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter your email adress"
          outcomplete="email"
        />
        {!prostatus ? (
          <button type="submit">
            <i className="far fa-paper-plane"></i>
          </button>
        ) : (
          <button type="submit">Wait</button>
        )}
      </form>
      {error && (
        <p className="text-danger" style={{ display: "block" }}>
          {error}
        </p>
      )}
      <img src="images/penc-img.png" alt="" className="penc-img" />
    </div>
  );
};

export default Subscribe;
