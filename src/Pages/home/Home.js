import Blogs from "./Blogs";
import Featured from "./Featured";
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

      <section className="recommend-posts p-75">
        <div className="container">
          <div className="sec-title">
            <h3>Recommended</h3>
          </div>
          {/* <!--sec-title end--> */}
          <div className="blog-items smaller-post">
            <div className="row">
              <div className="col-lg-6">
                <div className="blog-item">
                  <div className="blog-img">
                    <img src="images/resources/rp-img1.jpg" alt="" />
                  </div>
                  {/* <!--blog-img end--> */}
                  <div className="blog-info">
                    <a href="/" title="" className="post-category">
                      Fashion
                    </a>
                    <h3 className="post-title">
                      <a href="standard-post.html" title="">
                        The Best Street Style at Tbilisi Fashion Week Spring
                        2019{" "}
                      </a>
                    </h3>
                    <ul className="meta">
                      <li>Dec 25, 2018</li>
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
                <div className="blog-item">
                  <div className="blog-img">
                    <img src="images/resources/rp-img2.jpg" alt="" />
                  </div>
                  {/* <!--blog-img end--> */}
                  <div className="blog-info">
                    <a href="/" title="" className="post-category">
                      Lifestyle
                    </a>
                    <h3 className="post-title">
                      <a href="standard-post.html" title="">
                        Gabriela Hearst Just Opened the Most Beautiful Store{" "}
                      </a>
                    </h3>
                    <ul className="meta">
                      <li>Dec 20, 2018</li>
                      <li>
                        <i className="la la-eye"></i>325
                      </li>
                      <li>
                        <a href="/" title="">
                          <i className="la la-comment-o"></i>4
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--blog-info end--> */}
                </div>
                {/* <!--blog-item end--> */}
                <div className="blog-item">
                  <div className="blog-img">
                    <img src="images/resources/rp-img3.jpg" alt="" />
                  </div>
                  {/* <!--blog-img end--> */}
                  <div className="blog-info">
                    <a href="/" title="" className="post-category">
                      Travel
                    </a>
                    <h3 className="post-title">
                      <a href="standard-post.html" title="">
                        Dover Street Market’s New Los Angeles Store Is a Game
                        Changer
                      </a>
                    </h3>
                    <ul className="meta">
                      <li>Dec 16, 2018</li>
                      <li>
                        <i className="la la-eye"></i>328
                      </li>
                      <li>
                        <a href="/" title="">
                          <i className="la la-comment-o"></i>7
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--blog-info end--> */}
                </div>
                {/* <!--blog-item end--> */}
              </div>
              <div className="col-lg-6">
                <div className="blog-item">
                  <div className="blog-img">
                    <img src="images/resources/rp-img4.jpg" alt="" />
                  </div>
                  {/* <!--blog-img end--> */}
                  <div className="blog-info">
                    <a href="/" title="" className="post-category">
                      Photograph
                    </a>
                    <h3 className="post-title">
                      <a href="standard-post.html" title="">
                        Elsa Hosk Unveils the Victoria’s Secret Fantasy Bra{" "}
                      </a>
                    </h3>
                    <ul className="meta">
                      <li>Dec 23, 2018</li>
                      <li>
                        <i className="la la-eye"></i>1147
                      </li>
                      <li>
                        <a href="/" title="">
                          <i className="la la-comment-o"></i>2
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--blog-info end--> */}
                </div>
                {/* <!--blog-item end--> */}
                <div className="blog-item">
                  <div className="blog-img">
                    <img src="images/resources/rp-img5.jpg" alt="" />
                  </div>
                  {/* <!--blog-img end--> */}
                  <div className="blog-info">
                    <a href="/" title="" className="post-category">
                      Beauty
                    </a>
                    <h3 className="post-title">
                      <a href="standard-post.html" title="">
                        After 3 Seasons, Serge Ruffieux Leaves Carven{" "}
                      </a>
                    </h3>
                    <ul className="meta">
                      <li>Dec 19, 2018</li>
                      <li>
                        <i className="la la-eye"></i>741
                      </li>
                      <li>
                        <a href="/" title="">
                          <i className="la la-comment-o"></i>1
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--blog-info end--> */}
                </div>
                {/* <!--blog-item end--> */}
                <div className="blog-item">
                  <div className="blog-img">
                    <img src="images/resources/rp-img6.jpg" alt="" />
                  </div>
                  {/* <!--blog-img end--> */}
                  <div className="blog-info">
                    <a href="/" title="" className="post-category">
                      Fashion
                    </a>
                    <h3 className="post-title">
                      <a href="standard-post.html" title="">
                        The Week in Washington: Trump’s Pree lection
                        Frenzy-Fests
                      </a>
                    </h3>
                    <ul className="meta">
                      <li>Dec 14, 2018</li>
                      <li>
                        <i className="la la-eye"></i>6581
                      </li>
                      <li>
                        <a href="/" title="">
                          <i className="la la-comment-o"></i>5
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--blog-info end--> */}
                </div>
                {/* <!--blog-item end--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--recommend-posts end--> */}
    </div>
  );
};

export default Home;
