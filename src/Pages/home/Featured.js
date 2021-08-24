import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data: blogs, loading } = useFetch(
    "http://127.0.0.1:8000/api/featured"
  );
  return (
    <section className="blog-section feat-stors sec-padding">
      <div className="container">
        <div className="sec-title">
          <h3>Featured Stories </h3>
        </div>
        {/* <!--sec-title end--> */}
        <div className="blog-items">
          <div className="row">
            {loading && <h1>Loading ....</h1>}
            {blogs &&
              blogs.slice(0, 4).map((blog) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                          <i className="la la-eye"></i>2478
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

export default Featured;
