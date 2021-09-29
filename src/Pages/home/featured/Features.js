import useFetch from "../../../hooks/useFetch";
import Feature from "./Feature";

const Featured = () => {
  const { data: blogs, loading } = useFetch("/api/featured");
  return (
    <section className="blog-section feat-stors sec-padding">
      <div className="container">
        <div className="sec-title">
          <h3>Featured Stories </h3>
        </div>
        {loading && <div className="loader"></div>}
        <div className="blog-items">
          <div className="row">
            {blogs?.map((blog, index) => (
              <Feature blog={blog} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
