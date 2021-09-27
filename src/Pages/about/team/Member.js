const Member = ({ member }) => {
  return (
    <div className="member_image">
      <img
        src={process.env.REACT_APP_API_STORAGE_URL + "/" + member.avatar_path}
        alt={member.name}
      />
      <p>{member.name}</p>
    </div>
  );
};

export default Member;
