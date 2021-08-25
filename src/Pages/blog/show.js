import { Link, useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import useFetch from "../../hooks/useFetch";
import Footer from "./NextPrev";

const Blog = () => {
  const { slug } = useParams();

  const {
    data: blog,
    loading,
    error,
  } = useFetch("http://127.0.0.1:8000/api/blogs/" + slug);
  return (
    <section className="main-content p-80">
      <div className="container">
        {loading && <h2>Loading ... </h2>}
        {error && <h2>{error.message}</h2>}
        {blog ? (
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
                          {blog.blog.view.views}
                        </li>
                        <li>
                          <a href="/" title="">
                            <i className="la la-comment-o"></i>3
                          </a>
                        </li>
                      </ul>
                      <h3 className="post-title">{blog && blog.blog.title}</h3>
                    </div>
                    <div className="blog-img">
                      <img
                        src={
                          blog &&
                          "http://127.0.0.1:8000/storage/" +
                            blog.blog.featured_image
                        }
                        alt=""
                      />
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blog && blog.blog.body,
                      }}
                    />
                    <div className="post-catgs-links">
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
                      <div className="clearfix"></div>
                    </div>
                    <div className="post-author-info">
                      <div className="author-img">
                        <img src="images/resources/auth-img.png" alt="" />
                      </div>
                      <div className="author-info">
                        <h3>
                          <a href="/" title="">
                            Natali Larkins
                          </a>
                        </h3>
                        <p>
                          Proin gravida nibh vel velit auctor aliquet. Aenean
                          sollicitudin, lorem quisma bibendum auctor nisi elit
                          consequat ipsum, nec sagittis sem amet nibh vulputate
                          cursus itaet mauris.{" "}
                        </p>
                        <ul className="social-links">
                          <li>
                            <a href="/" title="">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/" title="">
                              <i className="fab fa-pinterest-p"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/" title="">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/" title="">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Footer next={blog.next} prev={blog.previous} />
                  </div>
                </div>
                <div className="comment-section">
                  <div className="comment-list-sec">
                    <div className="sec-title">
                      <h3>Comments </h3>
                    </div>
                    <ul className="comment-list">
                      <li>
                        <div className="comment">
                          <div className="cm-img">
                            <img src="images/resources/auth-img.png" alt="" />
                          </div>
                          <div className="cm-info">
                            <div className="cm-hed">
                              <h3>Palmer Warren</h3>
                              <span>December 31, 2018</span>
                            </div>
                            <div className="clearfix"></div>
                            <p>
                              Proin gravida nibh vel velit auctor aliquet.
                              Aenean sollicitudin, lorem quisma bibendum auctor
                              nisi elit consequat ipsum, nec sagittis sem amet
                              nibh.{" "}
                            </p>
                            <a href="/" title="" className="reply">
                              Reply
                            </a>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <div className="comment">
                              <div className="cm-img">
                                <img
                                  src="images/resources/auth-img.png"
                                  alt=""
                                />
                              </div>
                              <div className="cm-info">
                                <div className="cm-hed">
                                  <h3>Natali Larkins</h3>
                                  <span>December 31, 2018</span>
                                </div>
                                <div className="clearfix"></div>
                                <p>
                                  Proin gravida nibh vel velit auctor aliquet.
                                  Aenean sollicitudin, lorem quisma bibendum
                                  auctor nisi elit consequat ipsum.{" "}
                                </p>
                                <a href="/" title="" className="reply">
                                  Reply
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="comment">
                          <div className="cm-img">
                            <img src="images/resources/auth-img.png" alt="" />
                          </div>
                          <div className="cm-info">
                            <div className="cm-hed">
                              <h3>Palmer Warren</h3>
                              <span>December 31, 2018</span>
                            </div>
                            <div className="clearfix"></div>
                            <p>
                              Proin gravida nibh vel velit auctor aliquet.
                              Aenean sollicitudin, lorem quisma bibendum auctor
                              nisi elit consequat ipsum, nec sagittis sem amet
                              nibh.{" "}
                            </p>
                            <a href="/" title="" className="reply">
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="comment-form">
                    <div className="sec-title">
                      <h3>Leave A Reply</h3>
                    </div>
                    <div className="cont-form-sec">
                      <form>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-field">
                              <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-field">
                              <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-field">
                              <textarea
                                name="message"
                                placeholder="Your Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <input
                              type="submit"
                              name="submit"
                              value="Post Comment"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Sidebar />
          </div>
        ) : (
          <h1>No Record found again you query</h1>
        )}
      </div>
    </section>
  );
};

export default Blog;
