import useFetch from "../../hooks/useFetch";
import "../../assets/style/Editor.css";
import { Link } from "react-router-dom";

const Editors = () => {
  const { data: editors, loading, error } = useFetch("/api/editors");
  return (
    <section className="blog-section feat-stors sec-padding">
      <div className="container">
        <div className="sec-title">
          <h3>Editors </h3>
        </div>
        <div className="row">
          {loading && <h2 className="ml-2">Loading ...</h2>}
          {error && <h2>Loading ...</h2>}
          <div className="col-lg-8 mgr-50">
            <div className="editors">
              {editors &&
                editors.map((editor) => (
                  <div className="editor-profile" key={editor.id}>
                    <img
                      src={
                        editor.profile
                          ? "http://127.0.0.1:8000/storage/" +
                            editor.profile.avatar_path
                          : ""
                      }
                      alt=""
                    />
                    <h3 className="editor-name">
                      <Link to={"/editor/" + editor.id} className="editor-link">
                        {editor.name}
                      </Link>
                    </h3>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editors;
