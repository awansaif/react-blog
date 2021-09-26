import { useContext } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import useFetch from "../../hooks/useFetch";
import Team from "./Team";

const About = () => {
  const { data: AboutText, loading, error } = useFetch("/api/about-us");
  const { profile } = useContext(ProfileContext);
  return (
    <section className="main-content lg-back">
      <div className="container">
        {error && <li>{error}</li>}
        <div className="about-sec">
          <div className="row">
            <div className="col-lg-5">
              <Team />
            </div>
            <div className="col-lg-7">
              <div className="about-cont">
                <h2>About Us</h2>
                {loading && <li>Loading ....</li>}
                <div dangerouslySetInnerHTML={{ __html: AboutText }} />
                <div className="more-abt">
                  {profile && (
                    <ul className="social-links">
                      <li>
                        <a href={profile.facebook_link} title="">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
