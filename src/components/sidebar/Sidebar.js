import Category from "./Category";
import Subscribe from "./Subscribe";
import Trend from "./Trending";

const Sidebar = () => {
  return (
    <div className="col-lg-4">
      <Trend />
      <div className="sidebar">
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
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTharkiUstad%2F&tabs=like&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
            width="340"
            height="130"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            title="dadds"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        {/* <!--widget-fb end--> */}
      </div>
      {/* <!--sidebar end--> */}
    </div>
  );
};

export default Sidebar;
