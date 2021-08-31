import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Latest = () => {
  const { data: blogs, loading, error } = useFetch("/api/latest");
  error && <h2>{error}</h2>;

  return (
    <section className="blog-section">
      <div className="container">
        {loading && <h2>Loading</h2>}
        {blogs && (
          <div className="blog-items main">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-item main-style">
                  <div className="blog-img">
                    <img
                      src={
                        blogs &&
                        process.env.REACT_APP_API_STORAGE_URL +
                          "/" +
                          blogs[0].featured_image
                      }
                      alt=""
                    />
                    <Link
                      to={"/category/" + blogs[0].category.slug}
                      title=""
                      className="post-category"
                    >
                      {blogs[0].category.title}
                    </Link>
                  </div>
                  <div className="blog-info">
                    <h3 className="post-title">
                      <Link to={"/blog/" + blogs[0].slug} title="">
                        {blogs[0].title}
                      </Link>
                    </h3>
                    <div className="met-soc">
                      <ul className="meta">
                        <li>{blogs[0].created_at}</li>
                        <li>
                          <i className="la la-eye"></i>
                          {blogs[0].view.views}
                        </li>
                        <li>
                          <a href="/" title="">
                            <i className="la la-comment-o"></i>4
                          </a>
                        </li>
                      </ul>
                      <ul className="social-links">
                        <li>
                          <a href="/" title="">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/" title="">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/" title="">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/" title="">
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/" title="">
                            <i className="fab fa-facebook-messenger"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-item">
                  <div className="blog-img">
                    <img
                      src={
                        process.env.REACT_APP_API_STORAGE_URL +
                        "/" +
                        blogs[1].featured_image
                      }
                      alt=""
                    />
                  </div>
                  <div className="blog-info">
                    <h3 className="post-title">
                      <Link to={"/blog/" + blogs[1].slug} title="">
                        {blogs[1].title}
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="blog-item">
                  <div className="blog-img">
                    <img
                      src={
                        process.env.REACT_APP_API_STORAGE_URL +
                        "/" +
                        blogs[2].featured_image
                      }
                      alt=""
                    />
                  </div>
                  <div className="blog-info">
                    <h3 className="post-title">
                      {
                        <Link to={"/blog/" + blogs[2].slug} title="">
                          {blogs[2].title}
                        </Link>
                      }
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Latest;