import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [response, setResponse] = useState(null);
  const data = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    fetch(process.env.REACT_APP_API_URL + "/api/contact-us", {
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
          setResponse(data.message);
          setSending(false);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          setError(data.errors);
          setSending(false);
        }
      })
      .catch((err) => setError(err));

    setTimeout(() => {
      setError(null);
      setResponse(null);
    }, 4000);
  };
  return (
    <form onSubmit={handleSubmit}>
      {response && (
        <div className="alert alert-success">
          <span>{response}</span>
        </div>
      )}
      <div className="form-field">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p className="text-danger">{error.name}</p>}
      </div>

      <div className="form-field">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-danger">{error.email}</p>}
      </div>
      <div className="form-field">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        {error && <p className="text-danger">{error.subject}</p>}
      </div>
      <div className="form-field">
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >
          {message}
        </textarea>
        {error && <p className="text-danger">{error.message}</p>}
      </div>
      {sending ? (
        <input type="submit" name="submit" disabled value="Sending Message" />
      ) : (
        <input type="submit" name="submit" value="Send Message" />
      )}
    </form>
  );
};

export default Form;
