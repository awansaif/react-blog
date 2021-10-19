import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Blog from "./Blog";

const Blogs = () => {
  const { slug } = useParams();
  const { data: blogs, loading, error } = useFetch("/api/category/" + slug);
  return (
    <section className="blog-section feat-stors sec-padding">
      <div className="container">
        <div className="sec-title">
          <h3>{slug} Related Blogs</h3>
        </div>

        {loading && <div className="loader"></div>}
        {error && <h2>Error .....</h2>}
        {blogs && blogs.length === 0 && <h1>Blogs not Found</h1>}
        <div className="blog-items">
          <div className="row">
            {blogs?.map((blog, index) => (
              <Blog blog={blog} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
