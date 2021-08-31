import { useState } from "react";
import usePost from "../hooks/usePost";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const item = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };
  const {
    response: data,
    error,
    sending,
    status,
    saveData,
  } = usePost("/api/contact-us", item);
  const handleSubmit = (e) => {
    e.preventDefault();
    saveData();
    console.log(sending);
    console.log(status);
  };
  return (
    <section className="main-content">
      <div className="container-fluid p-0">
        <div className="contact-sec">
          <div className="cont-img">
            <img
              src="images/resources/contact-bg.jpg"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <div className="cont-form-sec">
            <h3>Contact</h3>
            <form onSubmit={handleSubmit}>
              {data && (
                <div className="alert alert-success">
                  <span>{data}</span>
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
                <input type="submit" name="submit" value="Sending Message" />
              ) : (
                <input type="submit" name="submit" value="Send Message" />
              )}
            </form>
          </div>
          {/* <!--cont-form-sec end--> */}
          <div className="clearfix"></div>
        </div>
        {/* <!--contact-sec end--> */}
      </div>
    </section>
  );
};

export default Contact;
