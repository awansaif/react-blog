import "../../assets/style/Team.css";
import useFetch from "../../hooks/useFetch";

const Team = () => {
  const { data: members } = useFetch("/api/team");
  return (
    <div className="members">
      {members
        ? members.map((member) => (
            <div className="member_image" key={member.id}>
              <img
                src={
                  process.env.REACT_APP_API_STORAGE_URL +
                  "/" +
                  member.avatar_path
                }
                alt=""
              />
              <p>{member.name}</p>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Team;
