import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../context/ProfileContext";

const Footer = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="ft-logo">
                  <h1>
                    <Link to="/" title="Home">
                      {process.env.REACT_APP_NAME}
                    </Link>
                  </h1>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                {profile && (
                  <ul className="social-links">
                    <li>
                      <a href={profile.facebook_link} title="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href={profile.twitter_link} title="">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={profile.instagram_link} title="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href={profile.pinterest_link} title="">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li>
                      <a href={profile.messenger_link} title="">
                        <i className="fab fa-facebook-messenger"></i>
                      </a>
                    </li>
                  </ul>
                )}
              </div>
              <div className="col-lg-4 col-md-12">
                <ul className="ft-links">
                  <li>
                    <Link to="/about" title="About us ">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" title="contact us">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="bottom-strip">
        <div className="container">
          <p>©2018 Heeney. All Rights Reserved.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
