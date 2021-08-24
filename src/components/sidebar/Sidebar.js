import Category from "./Category";
import Subscribe from "./Subscribe";

const Sidebar = () => {
  return (
    <div className="col-lg-4">
      <div className="sidebar">
        <div className="widget widget-trending-posts">
          <h3 className="widget-title">Trending</h3>
          <div className="wd-posts">
            <div className="wd-post">
              <img src="images/resources/post1.jpg" alt="" />
              <div className="wd-post-info">
                <h3 className="post-title">
                  <a href="standard-post.html" title="">
                    Living Room Makeover Reveal
                  </a>
                </h3>
                <span className="post-date">Dec 25, 2018</span>
              </div>
            </div>
            {/* <!--wd-post end--> */}
            <div className="wd-post">
              <img src="images/resources/post2.jpg" alt="" />
              <div className="wd-post-info">
                <h3 className="post-title">
                  <a href="standard-post.html" title="">
                    Candy Inspired Treat Recipes
                  </a>
                </h3>
                <span className="post-date">Dec 23, 2018</span>
              </div>
            </div>
            {/* <!--wd-post end--> */}
            <div className="wd-post">
              <img src="images/resources/post3.jpg" alt="" />
              <div className="wd-post-info">
                <h3 className="post-title">
                  <a href="standard-post.html" title="">
                    Fun Spooky Halloween Treats
                  </a>
                </h3>
                <span className="post-date">Dec 21, 2018</span>
              </div>
            </div>
            {/* <!--wd-post end--> */}
            <div className="wd-post">
              <img src="images/resources/post4.jpg" alt="" />
              <div className="wd-post-info">
                <h3 className="post-title">
                  <a href="standard-post.html" title="">
                    Soup Recipes Everyone Will Love
                  </a>
                </h3>
                <span className="post-date">Dec 19, 2018</span>
              </div>
            </div>
            {/* <!--wd-post end--> */}
          </div>
          {/* <!--wd-posts end--> */}
        </div>
        {/* <!--widget-trending-posts end--> */}
        <div className="widget widget-social-links">
          <ul>
            <li>
              <a href="/" title="" className="facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <h4>3,553 </h4>
              <span>Followers</span>
            </li>
            <li>
              <a href="/" title="" className="twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <h4>11,211 </h4>
              <span>Followers</span>
            </li>
            <li>
              <a href="/" title="" className="pinterest">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <h4>9,328 </h4>
              <span>Followers</span>
            </li>
          </ul>
        </div>
        {/* <!--widget-social-links end--> */}
        <Subscribe />
        {/* <!--subscribe-wd end--> */}
        <div className="widget widget-recent-post">
          <h3 className="widget-title">Recent Post</h3>
          <div className="recent-post-carousel">
            <div className="post-slide">
              <img src="images/resources/rc-img.jpg" alt="" />
            </div>
            {/* <!--post-slide end--> */}
            <div className="post-slide">
              <img src="images/resources/rc-img.jpg" alt="" />
            </div>
            {/* <!--post-slide end--> */}
            <div className="post-slide">
              <img src="images/resources/rc-img.jpg" alt="" />
            </div>
            {/* <!--post-slide end--> */}
          </div>
          {/* <!--carousel end--> */}
        </div>
        {/* <!--widget-recent-post end--> */}
        {/* <div className="widget widget-adver">
          <a href="/" title="">
            <img src="images/resources/ad-img.jpg" alt="" />
          </a>
        </div> */}

        <Category />
        <div className="widget widget-fb">
          <div className="page-img">
            <img src="images/resources/page-img.jpg" alt="" />
            <div className="page-hd">
              <h3>Heeney</h3>
              <span>321K likes</span>
            </div>
            <ul className="fb-opts">
              <li>
                <a href="/" title="">
                  <i className="fab fa-facebook"></i> Like Page
                </a>
              </li>
              <li>
                <a href="/" title="">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          {/* <!--page-img end--> */}
          <div className="post-mgs">
            <div className="post-imgs">
              <h5>You and 16 other friends like this</h5>
              <ul>
                <li>
                  <a href="/" title="">
                    <img src="images/resources/fb-img1.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="/" title="">
                    <img src="images/resources/fb-img2.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="/" title="">
                    <img src="images/resources/fb-img3.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="/" title="">
                    <img src="images/resources/fb-img4.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="/" title="">
                    <img src="images/resources/fb-img5.jpg" alt="" />{" "}
                  </a>
                </li>
                <li>
                  <a href="/" title="">
                    <img src="images/resources/fb-img6.jpg" alt="" />
                  </a>
                </li>
              </ul>
              <div className="clearfix"></div>
            </div>
            {/* <!--post-imgs end--> */}
          </div>
        </div>
        {/* <!--widget-fb end--> */}
      </div>
      {/* <!--sidebar end--> */}
    </div>
  );
};

export default Sidebar;
