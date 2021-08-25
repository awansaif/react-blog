import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import useFetch from "../../hooks/useFetch";

const Blogs = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://127.0.0.1:8000/api/blogs");
  return (
    <section className="main-content pb-0">
      <div className="container">
        {loading && <h1>Loading ....</h1>}
        {error && <h1>{error}</h1>}
        <div className="row">
          <div className="col-lg-8 mgr-50">
            <div className="blog-section">
              <div className="blog-items style2 sec-padding2">
                <div className="row">
                  {blogs &&
                    blogs.map((blog) => {
                      return (
                        <div
                          className="col-lg-6 col-md-6 col-sm-6 col-12"
                          key={blog.id}
                        >
                          <div className="blog-item">
                            <div className="blog-img">
                              <img
                                src={
                                  "http://127.0.0.1:8000/storage/" +
                                  blog.featured_image
                                }
                                alt=""
                              />
                            </div>
                            {/* <!--blog-img end--> */}
                            <div className="blog-info">
                              <a href="/" title="" className="post-category">
                                {blog.category.title}
                              </a>
                              <h3 className="post-title">
                                <Link
                                  to={"/blog/" + blog.slug}
                                  title={blog.title}
                                >
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
                                  <i className="la la-comment-o"></i>4
                                </li>
                              </ul>
                            </div>
                            {/* <!--blog-info end--> */}
                          </div>
                          {/* <!--blog-item end--> */}
                        </div>
                      );
                    })}
                </div>
              </div>
              {/* <!--blog-items end--> */}
            </div>
            {/* <!--blog-section end--> */}

            {blogs && blogs.length > 8 && (
              <div className="heeney-pagination text-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="/" tabindex="-1">
                        <i className="fas fa-arrow-left"></i>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="/">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
