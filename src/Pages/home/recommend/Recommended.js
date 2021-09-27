import useFetch from "../../../hooks/useFetch";
import Recommend from "./Recommend";

const Recommended = () => {
  const { data: blogs, loading, error } = useFetch("/api/recommended");
  return (
    <section className="recommend-posts p-75">
      <div className="container">
        <div className="sec-title">
          <h3>Recommended</h3>
        </div>
        <div className="blog-items smaller-post">
          <div className="row">
            {loading && <h2>Loding ....</h2>}
            {error && <h2>Error ....</h2>}
            {blogs?.map((blog, index) => (
              <Recommend blog={blog} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommended;
