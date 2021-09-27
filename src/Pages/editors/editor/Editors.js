import "../../../assets/style/Editor.css";
import useFetch from "../../../hooks/useFetch";
import Editor from "./Editor";

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
              {editors?.map((editor, index) => (
                <Editor editor={editor} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editors;
