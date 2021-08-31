const Comments = ({ comment }) => {
  return (
    <li>
      <div className="comment">
        <div className="cm-info">
          <div className="cm-hed">
            <h3>{comment.name}</h3>
            <span>{comment.created_at}</span>
          </div>
          <div className="clearfix"></div>
          <p>{comment.text}</p>
        </div>
      </div>
    </li>
  );
};

export default Comments;
