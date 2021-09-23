import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Blogs = () => {
  const { data: blogs, loading, error } = useFetch("/api/all?q=saif");
  return (
    <section className="blog-section feat-stors sec-padding">
      <div className="container">
        <div className="sec-title">
          <h3>Blogs</h3>
        </div>

        {loading && <h2>Loading .....</h2>}
        {error && <h2>Error .....</h2>}
        {blogs && blogs.length === 0 && <h1>Blogs not Found</h1>}
        {/* <!--sec-title end--> */}
        <div className="blog-items">
          <div className="row">
            {blogs &&
              blogs.map((blog) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4"
                  key={blog.id}
                >
                  <div className="blog-item">
                    <div className="blog-img">
                      <img
                        src={
                          process.env.REACT_APP_API_STORAGE_URL +
                          "/" +
                          +blog.featured_image
                        }
                        alt=""
                      />
                    </div>
                    <div className="blog-info">
                      <h3 className="post-title">
                        <Link to={"/blog/" + blog.slug} title={blog.title}>
                          {blog.title}
                        </Link>
                      </h3>
                      <ul className="meta">
                        <li>{blog.created_at}</li>
                        <li>
                          <i className="la la-eye"></i>
                          {blog.views}
                        </li>
                        <li>
                          <a href="/" title="">
                            <i className="la la-comment-o"></i>
                            {blog.comments_count}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
