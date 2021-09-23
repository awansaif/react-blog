import { Link, useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import useFetch from "../../hooks/useFetch";
import CommentArea from "./CommentArea";
import Footer from "./NextPrev";

const Blog = () => {
  const { slug } = useParams();

  const {
    data: blog,
    loading,
    error,
    message,
  } = useFetch("/api/blogs/" + slug);
  return (
    <section className="main-content p-80">
      <div className="container">
        {loading && <h2>Loading ... </h2>}
        {error && <h2>{error.message}</h2>}
        {message && <h2>{message}</h2>}
        {blog && (
          <div className="row">
            <div className="col-lg-8 mr-50">
              <div className="single-page-content">
                <div className="standard-post">
                  <div className="blog-item">
                    <div className="blog-info">
                      <ul className="meta">
                        <li>
                          <Link
                            to={"/category/" + blog.blog.category.slug}
                            title={slug}
                            className="post-category"
                          >
                            {blog.blog.category.title}
                          </Link>
                        </li>
                        <li>{blog && blog.blog.created_at}</li>
                        <li>
                          <i className="la la-eye"></i>
                          {blog.blog.views}
                        </li>
                        <li>
                          <a href="/" title="">
                            <i className="la la-comment-o"></i>
                            {blog.blog.comments_count}
                          </a>
                        </li>
                      </ul>
                      <h3 className="post-title">{blog.blog.title}</h3>
                    </div>
                    <div className="blog-img">
                      <img
                        src={
                          process.env.REACT_APP_API_STORAGE_URL +
                          "/" +
                          blog.blog.featured_image
                        }
                        alt=""
                      />
                    </div>
                    <div
                      className="ck-content"
                      style={{
                        wordWrap: "break-word",
                        display: "inline-block",
                      }}
                    >
                      <div
                        className="editor"
                        dangerouslySetInnerHTML={{
                          __html: blog.blog.body,
                        }}
                      />
                    </div>
                    <div className="post-catgs-links mt-5">
                      <div className="sharethis-inline-share-buttons"></div>
                      {/* <ul className="social-links">
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
                      </ul> */}
                      <div className="clearfix"></div>
                    </div>
                    <div className="post-author-info">
                      <div
                        className="author-img"
                        style={{ borderRadius: "50%" }}
                      >
                        <img
                          src={
                            blog.blog.profile
                              ? process.env.REACT_APP_API_STORAGE_URL +
                                "/" +
                                blog.blog.profile.avatar_path
                              : "saif.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="author-info">
                        <h3>
                          <a href="/" title="">
                            {blog.blog.editor.name}
                          </a>
                        </h3>
                        <p>{blog.blog.profile.about_me}</p>
                        <ul className="social-links">
                          <li>
                            <a href={blog.blog.profile.website_link} title="">
                              <i className="fas fa-website"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Footer next={blog.next} prev={blog.previous} />
                  </div>
                </div>
                <CommentArea slug={blog.blog.slug} />
              </div>
            </div>

            <Sidebar />
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
