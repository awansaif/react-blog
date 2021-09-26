import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

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
            {blogs?.map((blog) => (
              <div className="col-lg-6" key={blog.id}>
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
                      <Link to={"/blog/" + blog.slug} title="">
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

export default Recommended;
