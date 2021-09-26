import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import useFetch from "../../hooks/useFetch";

const Blogs = () => {
  const { data: blogs, loading, error } = useFetch("/api/blogs");
  return (
    <section className="main-content pb-0">
      <div className="container">
        <div className="sec-title">
          <h3>Blogs </h3>
        </div>
        {loading && <h1>Loading ....</h1>}
        {error && <h1>{error}</h1>}
        <div className="row">
          <div className="col-lg-8 mgr-50">
            <div className="blog-section">
              <div className="blog-items style2 sec-padding2">
                <div className="row">
                  {blogs?.map((blog) => (
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-12"
                      key={blog.id}
                    >
                      <div className="blog-item">
                        <div className="blog-img">
                          <img
                            src={
                              process.env.REACT_APP_API_STORAGE_URL +
                              "/" +
                              blog.featured_image
                            }
                            alt=""
                          />
                        </div>
                        <div className="blog-info">
                          <a href="/" title="" className="post-category">
                            {blog.category.title}
                          </a>
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
                              <i className="la la-comment-o"></i>
                              {blog.comments_count}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {blogs?.length >= 10 && (
              <div className="heeney-pagination text-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <Link className="page-link" to="/blogs" tabindex="-1">
                        <i className="fas fa-arrow-right"></i>
                      </Link>
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
