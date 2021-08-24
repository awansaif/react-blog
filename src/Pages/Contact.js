import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name);
  };
  return (
    <section className="main-content">
      <div className="container-fluid p-0">
        <div className="contact-sec">
          <div className="cont-img">
            <img src="images/resources/contact-bg.jpg" alt="" />
          </div>
          <div className="cont-form-sec">
            <h3>Contact</h3>
            <p>
              Cras lobortis vehicula ugue, sagitts oe sapien lacinia non. Fusce
              semper lobortis massa in fringilla. Quisque vitae sapien
              pelletesque, mollis nte sit amet, aliquet tortor. Integer
              tincidunt molestie semper. Nam turpis nibh, accumsan et.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
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
              </div>
              <input type="submit" name="submit" value="Send Message" />
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
