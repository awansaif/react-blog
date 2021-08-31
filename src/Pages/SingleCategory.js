import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const SingleCategory = () => {
  const { slug } = useParams();
  const { data: blogs, loading, error } = useFetch("/api/category/" + slug);
  return (
    <section className="blog-section feat-stors sec-padding">
      <div className="container">
        <div className="sec-title">
          <h3>{slug} Related Blogs</h3>
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
                    {/* <!--blog-img end--> */}
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
                          {blog.view.views}
                        </li>
                        <li>
                          <a href="/" title="">
                            <i className="la la-comment-o"></i>3
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!--blog-info end--> */}
                  </div>
                  {/* <!--blog-item end--> */}
                </div>
              ))}
          </div>
        </div>
        {/* <!--blog-items end--> */}
      </div>
    </section>
  );
};

export default SingleCategory;
