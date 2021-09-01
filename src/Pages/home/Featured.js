import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data: blogs, loading } = useFetch("/api/featured");
  return (
    <section className="blog-section feat-stors sec-padding">
      <div className="container">
        <div className="sec-title">
          <h3>Featured Stories </h3>
        </div>
        {loading && <h1>Loading ....</h1>}
        <div className="blog-items">
          <div className="row">
            {blogs &&
              blogs.map((blog) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-12"
                  key={blog.id}
                >
                  <div className="blog-item">
                    <div className="blog-img">
                      <img
                        src={
                          "http://127.0.0.1:8000/storage/" + blog.featured_image
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

export default Featured;
