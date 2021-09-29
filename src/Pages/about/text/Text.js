import useFetch from "../../../hooks/useFetch";
import Team from "../team/Members";

const Text = ({ profile }) => {
  const { data: AboutText, loading } = useFetch("/api/about-us");
  return (
    <div className="about-cont">
      <h2>About Us</h2>
      {loading && <div className="loader"></div>}
      <div dangerouslySetInnerHTML={{ __html: AboutText?.about_text }} />
      <Team />
      <div className="more-abt m-auto">
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
  );
};

export default Text;
