import { Link } from "react-router-dom";

const Editor = ({ editor }) => {
  return (
    <div className="editor-profile">
      <img
        src={
          process.env.REACT_APP_API_STORAGE_URL +
          "/" +
          editor.profile?.avatar_path
        }
        alt={editor.name}
      />
      <h3 className="editor-name">
        <Link to={"/editor/" + editor.id} className="editor-link">
          {editor.name}
        </Link>
      </h3>
    </div>
  );
};

export default Editor;
