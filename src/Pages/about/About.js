import { useContext } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import Team from "./team/Members";
import Text from "./text/Text";

const About = () => {
  const { profile } = useContext(ProfileContext);
  return (
    <section className="main-content lg-back">
      <div className="container">
        <div className="about-sec">
          <div className="row">
            <div className="col-lg-5">
              <Team />
            </div>
            <div className="col-lg-7">
              <Text profile={profile} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
