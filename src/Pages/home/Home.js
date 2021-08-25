import Blogs from "./Blogs";
import Featured from "./Featured";
import Recommended from "./Recommended";
const Home = () => {
  return (
    <div>
      <section className="blog-section">
        <div className="container">
          <div className="blog-items main">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-item main-style">
                  <div className="blog-img">
                    <img src="images/resources/blog-img1.jpg" alt="" />
                    <a href="/" title="" className="post-category">
                      Lifestyle
                    </a>
                  </div>
                  {/* <!--blog-img end--> */}
                  <div className="blog-info">
                    <h3 className="post-title">
                      <a href="standard-post.html" title="">
                        Claire Foy on Becoming Mother Trading Her Crown for a
                        Dragon Tattoo
                      </a>
                    </h3>
                    <div className="met-soc">
                      <ul className="meta">
                        <li>December 22, 2018 </li>
                        <li>
                          <i className="la la-eye"></i>3258
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
                    {/* <!--met-soc end--> */}
                  </div>
                  {/* <!--blog-info end--> */}
                </div>
                {/* <!--blog-items end--> */}
              </div>
              <div className="col-lg-4">
                <div className="blog-item">
                  <div className="blog-img">
                    <img src="images/resources/blog-img2.jpg" alt="" />
                  </div>
                  {/* <!--blog-img end--> */}
                  <div className="blog-info">
                    <h3 className="post-title">
                      <a href="standard-post.html" title="">
                        Let Emily Ratakowski Explain Single Payer Health{" "}
                      </a>
                    </h3>
                  </div>
                  {/* <!--blog-info end--> */}
                </div>
                {/* <!--blog-items end--> */}
                <div className="blog-item">
                  <div className="blog-img">
                    <img src="images/resources/blog-img3.jpg" alt="" />
                  </div>
                  {/* <!--blog-img end--> */}
                  <div className="blog-info">
                    <h3 className="post-title">
                      <a href="standard-post.html" title="">
                        Now You Know Zazie on Beetz Explains Net Neutrality
                      </a>
                    </h3>
                  </div>
                  {/* <!--blog-info end--> */}
                </div>
                {/* <!--blog-items end--> */}
              </div>
            </div>
          </div>
          {/* <!--blog-items end--> */}
        </div>
      </section>
      {/* <!--blog-section end--> */}

      <Featured />

      <Blogs />

      <Recommended />
    </div>
  );
};

export default Home;
