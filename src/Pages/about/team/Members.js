import "../../../assets/style/Team.css";
import useFetch from "../../../hooks/useFetch";
import Member from "./Member";

const Team = () => {
  const { data: members } = useFetch("/api/team");
  return (
    <div className="members">
      {members?.map((member, index) => (
        <Member member={member} key={index} />
      ))}
    </div>
  );
};

export default Team;
