import Form from "./Form";

const Contact = () => {
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
            <Form />
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
