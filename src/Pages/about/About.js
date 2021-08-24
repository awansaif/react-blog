import useFetch from "../../hooks/useFetch";
import Team from "./Team";

const About = () => {
  const {
    data: AboutText,
    loading,
    error,
  } = useFetch("http://127.0.0.1:8000/api/about-us");
  return (
    <section className="main-content lg-back">
      <div className="container">
        {loading && <li>Loading ....</li>}
        {error && <li>{error}</li>}
        <div className="about-sec">
          <div className="row">
            <div className="col-lg-5">
              <Team />
            </div>
            <div className="col-lg-7">
              <div className="about-cont">
                <h2>About Us</h2>
                <div dangerouslySetInnerHTML={{ __html: AboutText }} />
                <div className="more-abt">
                  <ul className="social-links">
                    <li>
                      <a href="/" title="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" title="">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" title="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" title="">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" title="">
                        <i className="fab fa-facebook-messenger"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!--about-cont end--> */}
            </div>
          </div>
        </div>
        {/* <!--about-sec end--> */}
      </div>
    </section>
  );
};

export default About;
